import axios from "axios";
import auth from "./auth";
import { ResponseType, ToResponse } from "./types";
import xml2js  from "xml2js";
import Database from "bun:sqlite";
// import { all_get } from "./test";

export class All{
  async download(headers: any, jwt: any, body: any, db: Database): Promise<ResponseType>{
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }
    if (!body || !body.link) {
      return ToResponse(false, "参数不正确");
    }
    const url=body.link;
    const config=db.prepare(`SELECT link, secret FROM downloader_config`).get() as any;
    if(!config || !config.link || !config.secret){
      return ToResponse(false, "没有配置Aria地址");
    }
    const aria=config.link;
    const secret=config.secret;

    try {
      await axios.post(
        aria,
        {
          "jsonrpc": "2.0",
          "method": "aria2.addUri",
          "id": 1,
          "params": [
            `token:${secret}`,
            [url],
            {}
          ],
        }
      );
    } catch (error) {
      return ToResponse(false, error);
    }

    return ToResponse(true, "");
  }

  async get(headers: any, jwt: any): Promise<ResponseType>{
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }

    // return ToResponse(true, all_get)

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
  
      const list = [];
      const items = result.rss.channel[0].item;
      for (let item of items) {
        list.push({
          'title': item['title'][0].trim(),
          'url': item['enclosure'][0]['$']["url"],
        });
      }
      return ToResponse(true, list);
    } catch (error) {
      return ToResponse(true, "解析rss失败");
    }
  }
}