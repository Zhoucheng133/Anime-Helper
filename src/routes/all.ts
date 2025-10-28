import axios from "axios";
import { ResponseType, ToResponse } from "./types";
import xml2js  from "xml2js";
import Database from "bun:sqlite";
import dayjs from "dayjs";
import { DownloaderConfigType, downloadItem } from "./downloader";

interface AllItem{
  time: number,
  title: string,
  url: string,
  length: number,
  magnet: string
}

export class All{
  async download(body: any, db: Database): Promise<ResponseType>{
    if (!body || !body.link) {
      return ToResponse(false, "参数不正确");
    }
    const url=body.link;
    const config=db.prepare(`SELECT link, secret, client, username FROM downloader_config`).get() as DownloaderConfigType;
    if(!config || !config.link || !config.secret || !config.client){
      console.log(config);
      
      return ToResponse(false, "没有配置下载器");
    }
    const link=config.link;
    const secret=config.secret;
    const client=config.client;
    const username=config.username;

    if(await downloadItem(client, link, username, secret, url)){
      return ToResponse(true, "");
    }else{
      return ToResponse(false, "下载失败");
    }
  }

  async get(): Promise<ResponseType>{
    try {
      const response=(await axios.get("https://mikanime.tv/RSS/Classic")).data;
      const parser = new xml2js.Parser();
      const result = await new Promise<any>((resolve, reject) => {
        parser.parseString(response, (err, result) => {
          if (err) {
            reject({
              ok: false,
              msg: '解析rss失败'
            });
          } else {
            resolve(result);
          }
        });
      });
  
      const list = [] as AllItem[];
      const items = result.rss.channel[0].item;
      for (let item of items) {
        list.push({
          title: item['title'][0].trim(),
          url: item['enclosure'][0]['$']["url"],
          time: dayjs(item['torrent'][0]['pubDate'][0]).valueOf(),
          length: item['torrent'][0]['contentLength'][0],
          magnet: `magnet:?xt=urn:btih:${item['torrent'][0]['link'][0].split('/').pop()}`,
        });
      }
      return ToResponse(true, list);
    } catch (error) {
      return ToResponse(true, "解析rss失败");
    }
  }
}