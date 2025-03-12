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
}