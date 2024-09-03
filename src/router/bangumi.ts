import { response } from "../interface/interface";
import { List } from "../service/list";
import { Token } from "../service/token";

export class Bangumi{
  token=new Token();
  list=new List();

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