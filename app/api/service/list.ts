import { JSONFilePreset } from "lowdb/node";
import { response } from "./_interface";
import { Account } from "./account"

export interface item{
  id: string,
  title: string,
  episode: number,
  now: number,
  time: number,
}

export class List{
  account=new Account();

  // 【GET】获取列表
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

  isLegal(obj: any): obj is item {
    return typeof obj.id === 'string' && typeof obj.title === 'string' && typeof obj.episode === 'number'  && typeof obj.now === 'number' && typeof obj.time === 'number' && obj.now<=obj.episode;
  }

  // 【POST】添加
  async add(jwt: any, headers: any, body: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
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
      if(this.isLegal(data)){
        const db = await JSONFilePreset<item[]>('db/list.json', []);
        await db.read();
        let dbData: item[]=db.data;
        dbData.push(data);
        db.data=dbData;
        db.write();
  
        return {
          ok: true,
          msg: ""
        }
      }else{
        return {
          ok: false,
          msg: "参数不合法"
        }
      }
    } catch (_) {
      return {
        ok: false,
        msg: "参数不合法",
      };
    }
  }

  // 【POST】编辑
  async edit(jwt: any, headers: any, body: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check){
      return check;
    }
    if (!body || !body.data) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    const data=body.data as item;
    const db = await JSONFilePreset<item[]>('db/list.json', []);
    db.read();
    if(db.data.length==0){
      return {
        ok: false,
        msg: '没有该数据'
      }
    }
    let dbData: item[]=db.data;
    const index=dbData.findIndex((item)=>item.id==data.id);
    if(index==-1){
      return {
        ok: false,
        msg: "没有找到对应项"
      }
    }else{
      dbData[index]=data;
    }
    db.data=dbData;
    await db.write();

    return {
      ok: true,
      msg: ""
    }
  }
}