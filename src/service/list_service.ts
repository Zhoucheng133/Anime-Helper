import { JSONFilePreset } from "lowdb/node";
import { response } from "../interface/interface";

export interface item{
  id: string,
  title: string,
  episode: number,
  now: number,
  time: number,
}

export class ListService{
  async getList(){
    const db = await JSONFilePreset('list.json', []);
    db.read();
    if(db.data.length==0){
      return [];
    }else{
      return db.data;
    }
  }

  isLegal(obj: any): obj is item {
    return typeof obj.id === 'string' && typeof obj.title === 'string' && typeof obj.episode === 'number'  && typeof obj.now === 'number' && typeof obj.time === 'number' && obj.now<=obj.episode;
  }

  async addList(data: item): Promise<response>{
    if(this.isLegal(data)){
      const db = await JSONFilePreset<item[]>('list.json', []);
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
  }

  async changeList(data: item): Promise<response>{
    if(this.isLegal(data)){
      const db = await JSONFilePreset<item[]>('list.json', []);
      await db.read();
      let dbData: item[]=db.data;
      // dbData.push(data);
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
    }else{
      return {
        ok: false,
        msg: "参数不合法"
      }
    }
  }
}