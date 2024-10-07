import axios from "axios";

export interface Calendar{
  id: number,
  title: string,
}

export interface CalendarItem{
  eps: number,
  updates: number,
}

export class BangumiService{

  isDatePassed(dateString: string): boolean {
    const inputDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate <= today;
  }

  async getItem(id: string): Promise<CalendarItem>{
    let data: CalendarItem={
      updates: 0,
      eps: 0,
    }
    try {
      const response=(await axios.get(`https://api.bgm.tv/v0/episodes?subject_id=${id}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      })).data;
      const ls=response['data'];
      // data.eps=response.total;
      for(let item of ls){
        if(item.type==0){
          data.eps+=1;
        }
        if(this.isDatePassed(item['airdate'])){
          data.updates+=1;
        }
      }
    }catch(_){}
    return data;
  }

  async getList(): Promise<Calendar[][]>{
    let ls=[] as Calendar[][];
    try {
      const response=(await axios.get("https://api.bgm.tv/calendar")).data;
      for(var i=0; i<response.length; i++){
        let innerls=[] as Calendar[];
        for(var j=0; j<response[i].items.length; j++){
          innerls.push({
            id: response[i].items[j].id,
            title: response[i].items[j].name_cn.length==0?response[i].items[j].name:response[i].items[j].name_cn
          });
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