import Database from "bun:sqlite";
import { ResponseType, ToResponse } from "./types";
import { calCount, toSql } from "./list_filter";
import pinyin from "pinyin";

export interface ListQuery{
  offset: string | undefined,
  limit: string | undefined,
  filter: string| undefined,
  keyword: string | undefined,
  weekday: string | undefined,
  sort: string | undefined,
}

interface ListItem{
  id: string,
  title: string,
  episode: number,
  now: number,
  time: number,
  bgmId: string,
}

export class List{
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  isDatePassed(dateString: string): boolean {
    const inputDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate <= today;
  }

  validFilter(filter: string): boolean{
    if(filter=="none" || filter=="progress" || filter=="onUpdate" || filter=="updateDone" || filter=="watchDone" || filter=="unwatched"){
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
      typeof data.time === "number" &&
      typeof data.bgmId === "string"
    );
  }

  // 添加项
  async add(body: any): Promise<ResponseType>{
    if (!body || !body.data || !this.validItem(body.data)) {
      return ToResponse(false, "参数不正确");
    }

    try {
      const data=body.data as ListItem;
      const pinyinArray = pinyin(
        data.title,
        {
          style: "normal",
          segment: "Intl.Segmenter"
        }
      );
      const pinyinResult = pinyinArray.flat().join("").toLowerCase().trim();
      this.db.prepare(`INSERT INTO list (id, title, episode, now, time, bgmId, pinyin) VALUES (?, ?, ?, ?, ?, ?, ?)`).run(data.id, data.title, data.episode, data.now, data.time, data.bgmId, pinyinResult);
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");

  }

  // 删除项
  async del(id: string): Promise<ResponseType>{
    try {
      this.db.prepare(`DELETE FROM list WHERE id = ?`).run(id);
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");
  }

  // 编辑列表
  async edit(body: any): Promise<ResponseType>{
    if (!body || !body.data || !this.validItem(body.data)) {
      return ToResponse(false, "参数不正确");
    }
    
    try {
      const data=body.data as ListItem;
      const pinyinArray = pinyin(
        data.title,
        {
          style: "normal",
          segment: "Intl.Segmenter"
        }
      );
      const pinyinResult = pinyinArray.flat().join("").toLowerCase().trim();
      this.db.prepare(`UPDATE list SET title = ?, episode = ?, now = ?, time = ?, bgmId = ?, pinyin = ? WHERE id = ?`).run(data.title, data.episode, data.now, data.time, data.bgmId, pinyinResult, data.id);
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");
  }

  // 获取列表
  async get(query: ListQuery): Promise<ResponseType>{
    if(query.filter && query.offset && query.limit){
      if(!this.validFilter(query.filter)){
        return ToResponse(false, "筛选方式不合法");
      }
      if(query.weekday !== undefined && query.weekday !== "" && !["-1", "0", "1", "2", "3", "4", "5", "6"].includes(query.weekday)){
        return ToResponse(false, "参数不正确");
      }
      if(query.sort){
        if(!["az", "za", "add_new_old", "add_old_new", "update_first", "update_end"].includes(query.sort as string)){
          return ToResponse(false, "参数不正确");
        }
      }
      try {
        const countQuery = calCount(query.filter, query.keyword, query.weekday);
        const countResult = this.db.prepare(countQuery.sql).get(...countQuery.params) as any;
        const totalCount = countResult ? countResult.count : 0;

        const listQuery = toSql(query.filter, query.keyword, query.weekday, query.sort);
        const listData = this.db.prepare(listQuery.sql).all(...listQuery.params, query.limit, query.offset)
        
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

  async bind(body: any): Promise<ResponseType>{
    if (!body || !body.data || !body.data.listId || !body.data.bgmId) {
      return ToResponse(false, "参数不正确");
    }

    const {listId, bgmId} = body.data;
    try {
      const info = this.db.prepare(`UPDATE list SET bgmId = ? WHERE id = ?`).run(bgmId, listId);
      if (info.changes === 0) {
        return ToResponse(false, "找不到对应的列表记录");
      }
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");
  }

  async unbind(body: any): Promise<ResponseType>{
    if (!body || !body.data || !body.data.listId) {
      return ToResponse(false, "参数不正确");
    }

    const { listId } = body.data;
    try {
      const info=this.db.prepare(`UPDATE list SET bgmId = "" WHERE id = ?`).run(listId);
      if (info.changes === 0) {
        return ToResponse(false, "未找到目标记录或无需解绑");
      }
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");
  }
}