import axios from "axios";

export class BangumiService{
  async getList(): Promise<string[][]>{
    let ls=[] as string[][];
    try {
      const response=(await axios.get("https://api.bgm.tv/calendar")).data;
      for(var i=0; i<response.length; i++){
        let innerls=[];
        for(var j=0; j<response[i].items.length; j++){
          innerls.push(response[i].items[j].name_cn.length==0?response[i].items[j].name:response[i].items[j].name_cn);
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
    return ls;
  }
}