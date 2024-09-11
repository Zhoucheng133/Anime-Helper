import { response } from "../interface/interface";
import { item, ListService } from "../service/list_service";
import { Token } from "../service/token";

export class List{
  token=new Token();
  list=new ListService();
  
  
  // 【GET】获取数据
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

  // 【POST】添加数据
  async addlist(jwt: any, headers: any, body: any): Promise<response>{
    const check=await this.token.verify(jwt, headers);
    if(!check.ok){
      return check;
    }
    if (!body || !body.data) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    try {
      const data:item=body.data as item;
      return await this.list.addList(data);
    } catch (_) {
      return {
        ok: false,
        msg: "参数不合法",
      };
    }
  }

  // 【POST】修改数据
  async changelist(jwt: any, headers: any, body: any): Promise<response>{
    const check=await this.token.verify(jwt, headers);
    if(!check.ok){
      return check;
    }
    if (!body || !body.data) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    return await this.list.changeList(body.data);
  }

  // 【POST】删除数据
  async dellist(jwt: any, headers: any, body: any): Promise<response>{
    const check=await this.token.verify(jwt, headers);
    if(!check.ok){
      return check;
    }
    if (!body || !body.id) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    return this.list.delList(body.id);
  }
}