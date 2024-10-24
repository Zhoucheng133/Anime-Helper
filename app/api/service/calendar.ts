import axios from "axios";
import { Account } from "./account";
import { response } from "./_interface";
export interface CalendarItem{
  id: number,
  title: string,
}

export class Calendar{
  account=new Account();
  
  // 【GET】获取更新表
  async get(jwt: any, headers: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check.ok){
      return check;
    }
    let ls=[] as CalendarItem[][];
    try {
      const response=(await axios.get("https://api.bgm.tv/calendar")).data;
      for(var i=0; i<response.length; i++){
        let innerls=[] as CalendarItem[];
        for(var j=0; j<response[i].items.length; j++){
          innerls.push({
            id: response[i].items[j].id,
            title: response[i].items[j].name_cn.length==0?response[i].items[j].name:response[i].items[j].name_cn
          });
        }
        ls.push(innerls);
      }
      const ls6=ls.pop();
      if(ls6!=undefined){
        ls.unshift(ls6);
      }
    } catch (_) {
      ls=[];
    }
    return {
      ok: true,
      msg: ls,
    }
  }
}