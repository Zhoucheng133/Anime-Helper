import { isEqual } from "lodash";
import { JSONFilePreset } from "lowdb/node";

export class Account{
  // 【GET】是否需要初始化
  async checkInit(){
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
  register(){

  }

  // 【POST】登录
  login(){

  }
}