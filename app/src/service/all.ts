import axios from "axios";
import { response } from "./_interface";
import { Account } from "./account";
import xml2js  from "xml2js";
import { JSONFilePreset } from "lowdb/node";
import { bangumi } from "@/hooks/downloader";

interface dl{
  type: string,
  exclusions: string[],
  bangumi: bangumi[],
  freq: number,
  ariaLink: string,
  ariaSecret: string
}

export class All{
  account=new Account();

  async download(jwt: any, headers: any, body: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check.ok){
      return check;
    }
    if (!body || !body.link) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    const url=body.link;
    const db = await JSONFilePreset<dl>('db/dl.json', {
      type: "mikan",
      exclusions: [],
      bangumi: [],
      freq: 15,
      ariaLink: "",
      ariaSecret: ""
    });
    db.read();

    if(db.data.ariaLink.length==0 || db.data.ariaSecret.length==0){
      return {
        ok: false,
        msg: '下载器的Aria信息为空'
      }
    }
    try {
      await axios.post(
        db.data.ariaLink,
        {
          "jsonrpc": "2.0",
          "method": "aria2.addUri",
          "id": 1,
          "params": [
            `token:${db.data.ariaSecret}`,
            [url],
            {}
          ],
        }
      );
    } catch (error) {
      return {
        ok: false,
        msg: '下载失败',
      }
    }
    return {
      ok: true,
      msg: '',
    }
  }

  async get(jwt: any, headers: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check.ok){
      return check;
    }
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
  
      return {
        ok: true,
        msg: list,
      };  
    } catch (error) {
      return {
        ok: false,
        msg: '解析rss失败'
      }
    }
  }
}