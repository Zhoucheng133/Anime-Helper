import { response } from "../interface/interface";
import { BangumiService, CalendarItem } from "../service/bangumi_service";
import { Token } from "../service/token";

export class Bangumi{
  token=new Token();
  list=new BangumiService();

  async getsub(jwt: any, headers: any, id: string): Promise<response>{
    const check=await this.token.verify(jwt, headers);
    if(!check.ok){
      return check;
    }
    const data: CalendarItem=await this.list.getItem(id);
    return {
      ok: true,
      msg: data,
    }
  }

  async getlist(jwt: any, headers: any): Promise<response>{
    const check=await this.token.verify(jwt, headers);
    if(!check.ok){
      return check;
    }
    const list=await this.list.getList();
    if(list.length!=0){
      return {
        ok: true,
        msg: list,
      };
    }else{
      return {
        ok: false,
        msg: "请求失败",
      };
    }
  }
}