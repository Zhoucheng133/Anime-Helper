import { isEqual } from "lodash";
import { JSONFilePreset } from "lowdb/node";
import { response } from "./_interface";
import CryptoJS from "crypto-js";

export class Account{

  // 【FUNC】检查Token有效性
  async checkAuth(jwt: any, headers: any): Promise<response>{
    if (!headers || !headers.token) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    const profile = await jwt.verify(headers.token);
    if (profile.username) {
      return {
        ok: true,
        msg: ""
      };
    } else {
      // 如果验证失败，但没有抛出错误
      return {
        ok: false,
        msg: "无效的令牌"
      };
    }
  }

  // 【GET】自动登录
  async auth(jwt: any, headers: any): Promise<response>{
    return this.checkAuth(jwt, headers);
  }


  // 【GET】是否需要初始化
  async checkInit(): Promise<boolean>{
    const db = await JSONFilePreset('db/account.json', {
      username: "",
      password: ""
    });
    db.read();
    if(isEqual(db.data, {
      username: "",
      password: ""
    })){
      return true;
    }
    return false;
  }

  // 【POST】注册
  async register(body: any): Promise<response>{
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
    if(isEqual(db.data, {
      username: "",
      password: ""
    })){
      db.data = {
        username: username,
        password: CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex)
      }
      db.write();
      return {
        ok: true,
        msg: "",
      };
    }else{
      return {
        ok: false,
        msg: '不合法的操作'
      }
    }
  }

  // 【POST】登录
  async login(body: any, jwt: any): Promise<response>{
    if (!body || !body.username || !body.password) {
      return {
        ok: false,
        msg: "参数不正确",
      }
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
}