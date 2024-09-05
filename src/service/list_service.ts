import { JSONFilePreset } from "lowdb/node";
import { response } from "../interface/interface";

export interface item{
  id: string,
  title: string,
  episode: number,
  now: number,
  onUpdate: boolean,
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
    return typeof obj.id === 'string' && typeof obj.title === 'string' && typeof obj.episode === 'number'  && typeof obj.now === 'number' && typeof obj.onUpdate === 'boolean' && typeof obj.time === 'number' && obj.now<=obj.episode;
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
}