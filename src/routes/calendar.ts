import axios from "axios";
import auth from "./auth";
import { ResponseType } from "./types";

interface CalendarItem{
  id: number,
  title: string,
}

export class Calendar{
  async get(headers: any, jwt: any): Promise<ResponseType>{
    const authCheck=await auth(headers, jwt);
    if(!authCheck.ok){
      return authCheck;
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