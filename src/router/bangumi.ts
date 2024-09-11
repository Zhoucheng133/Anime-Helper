import { response } from "../interface/interface";
import { BangumiService } from "../service/bangumi_service";
import { Token } from "../service/token";

export class Bangumi{
  token=new Token();
  list=new BangumiService();

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