import { response } from "../interface/interface";
import { ListService } from "../service/list_service";
import { Token } from "../service/token";

export class List{
  token=new Token();
  list=new ListService();

  async getlist(jwt: any, headers: any): Promise<response>{
    const check=await this.token.verify(jwt, headers);
    if(!check.ok){
      return check;
    }
    const list=await this.list.getList();
    return {
      ok: true,
      msg: list,
    }
  }
}