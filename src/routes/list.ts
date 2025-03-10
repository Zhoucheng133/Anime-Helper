import Database from "bun:sqlite";
import auth from "./auth";
import { ResponseType, ToResponse } from "./types";
import { calCount, toSql } from "./list_filter";

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

export class List{

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
  async add(headers: any, jwt: any, body: any, db: Database){
    const authCheck=await auth(headers, jwt);
    if(!authCheck.ok){
      return authCheck;
    }

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

  // 编辑列表
  async edit(headers: any, jwt: any, body: any, db: Database){
    const authCheck=await auth(headers, jwt);
    if(!authCheck.ok){
      return authCheck;
    }

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
  async get(headers: any, jwt: any, db: Database, query: ListQuery): Promise<ResponseType>{
    const authCheck=await auth(headers, jwt);
    if(!authCheck.ok){
      return authCheck;
    }

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
}