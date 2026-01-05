import Database from "bun:sqlite";
import { ResponseType, ToResponse } from "./types";
import { nanoid } from "nanoid";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getJwtSecret } from "../config";

export class User{

  // 检查是否需要注册(true/false)
  checkInit(db: Database): ResponseType {
    const rowCount = db
      .prepare("SELECT COUNT(*) AS count FROM user")
      .get() as { count: number };
    return ToResponse(true, rowCount.count === 0);
  }

  // 注册
  register(body: any, db: Database): ResponseType{
    const rowCount = db
      .prepare("SELECT COUNT(*) AS count FROM user")
      .get() as { count: number };
    if(rowCount.count != 0){
      return ToResponse(false, "用户已存在")
    }
    
    if (!body || !body.username || !body.password) {
      return ToResponse(false, "参数不正确");
    }
    const { username, password } = body;
    try {
      const existingUser = db.prepare("SELECT * FROM user WHERE username = ?").get(username);
      if (existingUser) {
        return ToResponse(false, "用户名已存在");
      }
      const id=nanoid();
      db.prepare("INSERT INTO user (id, username, password) VALUES (?, ?, ?)")
        .run(id, username, bcrypt.hashSync(password, 10));
      return ToResponse(true, "");
    } catch (error) {
      return ToResponse(false, error)
    }
  }

  // 登录
  async login(body: any, db: Database, cookie: any): Promise<ResponseType>{
    if (!body || !body.username || !body.password) {
      return ToResponse(false, "参数不正确");
    }

    const { username, password } = body;

    const user = db.prepare("SELECT password FROM user WHERE username = ?").get(username) as any;
    if (!user) {
      return ToResponse(false, "用户名或密码不正确");
    }
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
      return ToResponse(false, "用户名或密码不正确");
    }

    const accessToken=jwt.sign(
      {
        username,
      }, 
      getJwtSecret(),
      {
        expiresIn: "10m",
      }
    );

    const refreshToken = jwt.sign(
      {
        username,
      }, 
      getJwtSecret(),
      {
        expiresIn: "30d",
      }
    );

    cookie.refresh_token.set({
      value: refreshToken,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      path: "/api/refresh",
    })

    return ToResponse(true, accessToken);
  }
}