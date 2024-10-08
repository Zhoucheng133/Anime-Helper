import { response } from "../interface/interface";
import { JSONFilePreset } from 'lowdb/node';
import CryptoJS from 'crypto-js';
import { Token } from "../service/token";

export class Account {

  token=new Token()

  //【POST】验证token
  async auth(jwt: any, headers: any): Promise<response> {
    return this.token.verify(jwt, headers);
  }


  // 【GET】是否需要初始化
  async checkInit() {
    const db = await JSONFilePreset('db/account.json', {
      username: "",
      password: ""
    });

    db.read();

    if (JSON.stringify(db.data) == JSON.stringify({
      username: "",
      password: ""
    })) {
      return true;
    }
    return false;
  }

  // 【POST】登录
  async login(jwt: any, body: any): Promise<response> {
    if (!body || !body.username || !body.password) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }

    const { username, password } = body;

    const db = await JSONFilePreset('db/account.json', {
      username: "",
      password: ""
    });

    db.read();

    if (JSON.stringify(db.data) == JSON.stringify({
      username: "",
      password: ""
    })) {
      return {
        ok: false,
        msg: "没有注册任何账户",
      };
    }

    const account = db.data;
    if (username == account.username && CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex) == account.password) {
      const token = await jwt.sign({ username });
      return {
        ok: true,
        msg: token,
      };
    } else {
      return {
        ok: false,
        msg: "用户名或者密码不正确"
      }
    }
  }

  // 【POST】注册
  async register(body: any): Promise<response> {
    if (!body || !body.username || !body.password) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }

    const { username, password } = body;

    const db = await JSONFilePreset('db/account.json', {
      username: "",
      password: ""
    });

    db.read();

    if (JSON.stringify(db.data) == JSON.stringify({
      username: "",
      password: ""
    })) {
      db.data = {
        username: username,
        password: CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex)
      }
      db.write();
      return {
        ok: true,
        msg: "",
      };
    } else {
      return {
        ok: false,
        msg: "不合法的操作",
      };
    }
  }
}