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

export class List{

  validFilter(filter: string): boolean{
    if(filter=="none" || filter=="progress" || filter=="onUpdate" || filter=="updateDone" || filter=="watchDone" || filter=="search" || filter=="weekday"){
      return true;
    }
    return false;
  }

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