import Database from "bun:sqlite";
import { ResponseType, ToResponse } from "./types";
import { calCount, toSql } from "./list_filter";
import axios from "axios";
import dayjs from "dayjs";

export interface ListQuery{
  offset: string | undefined,
  limit: string | undefined,
  filter: string| undefined,
  param: string | undefined
}

interface ListItem{
  id: string,
  title: string,
  episode: number,
  now: number,
  time: number,
}

interface BangumiItem{
  id: number,
  title: string,
  episode: number,
}

export class List{

  isDatePassed(dateString: string): boolean {
    const inputDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate <= today;
  }

  validFilter(filter: string): boolean{
    if(filter=="none" || filter=="progress" || filter=="onUpdate" || filter=="updateDone" || filter=="watchDone" || filter=="search" || filter=="weekday"){
      return true;
    }
    return false;
  }

  validItem(data: any): boolean{
    return (
      data &&
      typeof data.id === "string" &&
      typeof data.title === "string" &&
      typeof data.episode === "number" &&
      typeof data.now === "number" &&
      typeof data.time === "number"
    );
  }

  // 添加项
  async add(body: any, db: Database): Promise<ResponseType>{
    if (!body || !body.data || !this.validItem(body.data)) {
      return ToResponse(false, "参数不正确");
    }

    try {
      const data=body.data as ListItem;
      db.prepare(`INSERT INTO list VALUES (?, ?, ?, ?, ?)`).run(data.id, data.title, data.episode, data.now, data.time);
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");

  }

  // 删除项
  async del(id: string, db: Database): Promise<ResponseType>{
    try {
      db.prepare(`DELETE FROM list WHERE id = ?`).run(id);
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");
  }

  // 编辑列表
  async edit(body: any, db: Database): Promise<ResponseType>{
    if (!body || !body.data || !this.validItem(body.data)) {
      return ToResponse(false, "参数不正确");
    }
    
    try {
      const data=body.data as ListItem;
      db.prepare(`UPDATE list SET title = ?, episode = ?, now = ?, time = ? WHERE id = ?`).run(data.title, data.episode, data.now, data.time, data.id);
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");
  }

  // 获取列表
  async get(db: Database, query: ListQuery): Promise<ResponseType>{
    if(query.filter && query.offset && query.limit){
      if(!this.validFilter(query.filter)){
        return ToResponse(false, "筛选方式不合法");
      }else if((query.filter=="search" || query.filter=="updateWeek") && query.param==undefined){
        return ToResponse(false, "缺少参数");
      }else if(query.filter=="weekday"){
        if(!["0", "1", "2", "3", "4", "5", "6"].includes(query.param as string)){
          return ToResponse(false, "参数不正确");
        }
      }
      try {
        const countResult = db.prepare(calCount(query.filter, query.param)).get() as any;
        const totalCount = countResult ? countResult.count : 0;

        const listData=db.prepare(toSql(query.filter, query.param)).all(query.limit, query.offset)
        return ToResponse(true, {
          length: totalCount,
          data: listData,
        });
      } catch (error) {
        return ToResponse(false, error);
      }
    }else{
      return ToResponse(false, "缺少参数")
    }
  }

  // 从BangumiAPI搜索
  async getFromBangumi(keyword: any): Promise<ResponseType>{

    if(!keyword){
      return ToResponse(false, "缺少参数");
    }

    let list: BangumiItem[]=[];

    try {
      const {data: result}=await axios.post("https://api.bgm.tv/v0/search/subjects", {
        keyword: keyword,
        filter: {
          type: [2],
        },
      }, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });

      list=result.data.map((item: any)=>{
        return {
          id: item['id'],
          title: item['name_cn'].length==0 ? item['name'] : item['name_cn'],
          episode: item['eps'],
        }
      })
    } catch (error) {
      return ToResponse(false, error);
    }

    return ToResponse(true, list);
  }

  async getBangumiItem(id: string): Promise<ResponseType>{
    try {
      const {data: result}=await axios.get(`https://api.bgm.tv/v0/episodes?subject_id=${id}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      const ls=result['data'];
      let updates=0;
      const airdate=ls[0]['airdate'];
      const day=dayjs(airdate).day()
      for(let item of ls){
        if(this.isDatePassed(item['airdate'])){
          updates+=1;
        }
      }
      return ToResponse(true, {
        day: day,
        updates: updates,
      });
    } catch (error) {
      return ToResponse(false, error);
    }
  }
}