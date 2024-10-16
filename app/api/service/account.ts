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
      return db.data;
    }
    return db.data;
  }
}