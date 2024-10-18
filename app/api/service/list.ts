import { JSONFilePreset } from "lowdb/node";
import { response } from "./_interface";
import { Account } from "./account"

export class List{
  account=new Account();

  async getList(jwt: any, headers: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(check.ok){
      const db = await JSONFilePreset('db/list.json', []);
      db.read();
      if(db.data.length==0){
        return {
          ok: true,
          msg: []
        }
      }else{
        return {
          ok: true,
          msg: db.data,
        }
      }
    }else{
      return check;
    }
  }
}