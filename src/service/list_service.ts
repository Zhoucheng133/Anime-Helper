import { JSONFilePreset } from "lowdb/node";

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
}