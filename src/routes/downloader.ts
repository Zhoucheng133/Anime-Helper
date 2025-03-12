import Database from "bun:sqlite";
import auth from "./auth";
import { ResponseType, ToResponse } from "./types";

interface DownloaderListType{
  id: string,
  title: string,
  ass: string
}

interface DownloaderExcludeType{
  id: string,
  key: string,
}

interface DownloaderConfigType{
  link: string,
  secret: string,
  freq: number,
  type: string,
}

interface DownloaderDataType{
  link: string,
  secret: string,
  freq: number,
  type: string,
  list: DownloaderListType[],
  exclude: DownloaderExcludeType[]
}

export class Downloader{
  async get(headers: any, jwt: any, db: Database): Promise<ResponseType> {
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }
    
    let data: DownloaderDataType={
      link: "",
      secret: "",
      freq: 15,
      type: "",
      list: [],
      exclude: []
    }

    try {
      const sqlConfig = db.prepare(`SELECT * FROM downloader_config`).get() as DownloaderConfigType || null;
      if(sqlConfig!=null){
        data={
          ...sqlConfig,
          list: [],
          exclude: []
        }
      }

      const sqlList=db.prepare(`SELECT * FROM downloader_list`).all() as DownloaderListType[];
      const sqlExclude=db.prepare(`SELECT * FROM downloader_exclude`).all() as DownloaderExcludeType[];

      data={
        ...data,
        list: sqlList,
        exclude: sqlExclude,
      }

    } catch (error) {
      return ToResponse(false, error);
    }

    return ToResponse(true, data);
  }

  validListItem(data: any): boolean{
    return (
      data &&
      typeof data.id === "string" &&
      typeof data.title === "string" &&
      typeof data.ass === "string"
    );
  }

  validExcludeItem(data: any): boolean{
    return (
      data &&
      typeof data.id === "string" &&
      typeof data.key === "string"
    );
  }

  async addToList(headers: any, jwt: any, body: any, db: Database){
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }

    if (!body || !body.data || !this.validListItem(body.data)) {
      return ToResponse(false, "参数不正确");
    }

    try {
      const data=body.data as DownloaderListType;
      db.prepare(`INSERT INTO downloader_list VALUES (?, ?, ?)`).run(data.id, data.title, data.ass);
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");

  }

  async delFromList(headers: any, jwt: any, id: string, db: Database){
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }

    try {
      db.prepare(`DELETE FROM downloader_list WHERE id = ?`).run(id);
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");
  }

  async addToExclude(headers: any, jwt: any, body: any, db: Database){
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }
    

    if (!body || !body.data || !this.validExcludeItem(body.data)) {
      return ToResponse(false, "参数不正确");
    }

    try {
      const data=body.data as DownloaderExcludeType;
      db.prepare(`INSERT INTO downloader_exclude VALUES (?, ?)`).run(data.id, data.key);
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, "");
  }
}