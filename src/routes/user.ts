import Database from "bun:sqlite";
import { ResponseType, ToResponse } from "./types";
import { nanoid } from "nanoid";
import CryptoJS from "crypto-js";
import auth from "./auth";

export class User{

  // 检查是否需要注册(true/false)
  checkInit(db: Database): ResponseType {
    const rowCount = db
      .prepare("SELECT COUNT(*) AS count FROM user")
      .get() as { count: number };
    return ToResponse(true, rowCount.count === 0);
  }

  // 身份验证
  checkAuth(headers: any, jwt: any){
    return auth(headers, jwt)
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
        .run(id, username, CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex));
      return ToResponse(true, "");
    } catch (error) {
      return ToResponse(false, error)
    }
  }

  // 登录
  async login(body: any, jwt: any, db: Database): Promise<ResponseType>{
    if (!body || !body.username || !body.password) {
      return ToResponse(false, "参数不正确");
    }
    const { username, password } = body;
    const data = db.prepare("SELECT password FROM user WHERE username = ?").get(username) as any;
    if(!data){
      return ToResponse(false, "用户名或密码不正确");
    }else if(data.password == CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex)){
      const token=await jwt.sign({ username });
      return ToResponse(true, token)
    }
    return ToResponse(false, "用户名或密码不正确");
  }
}