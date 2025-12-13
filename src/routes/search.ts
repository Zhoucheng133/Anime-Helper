import { Converter } from "opencc-js";
import { ToResponse, ResponseType } from "./types";
import xml2js from "xml2js";
import axios from "axios";
import { DownloadItem } from "./recent";
import dayjs from "dayjs";

export class Search{
  async get(keyword: string): Promise<ResponseType>{
    if(keyword.length==0){
      return ToResponse(false, "搜索关键字不能为空");
    }else if(keyword.length>20){
      return ToResponse(false, "搜索关键字过长");
    }else if(keyword.length<3){
      return ToResponse(false, "搜索关键字过短");
    }else{
      const t2s = Converter({ from: 'tw', to: 'cn' });
      try {
        const response=(await axios.get(`https://kisssub.org/rss-{${keyword}}.xml`)).data;
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

        const list = [] as DownloadItem[];
        const items = result.rss.channel[0].item;
        
        for (let item of items) {
          list.push({
            title: t2s(item['title'][0].trim()),
            url: item['enclosure'][0]['$']['url'],
            time: dayjs(item['pubDate'][0]).valueOf(),
            length: 0,
            magnet: `magnet:?xt=urn:btih:${item['enclosure'][0]['$']['url'].split('hash=')[1]}`,
          });
        }
        return ToResponse(true, list);
      } catch (error) {
        return ToResponse(false, "没有搜索到任何结果");
      }
    }
  }
}