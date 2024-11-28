import axios from "axios";
import { response } from "./_interface";
import { Account } from "./account";
import xml2js  from "xml2js";

export class All{
  account=new Account();
  async get(jwt: any, headers: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check.ok){
      return check;
    }
    const response=(await axios.get("http://127.0.0.1:5000")).data;
    // const response=(await axios.get("https://mikanime.tv/RSS/Classic")).data;
    const parser = new xml2js.Parser();
    try {
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