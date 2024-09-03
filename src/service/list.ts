import axios from "axios";
import * as cheerio from 'cheerio';

export class List{
  async getList(): Promise<string[][]>{
    let ls=[] as string[][];
    try {
      const response=await axios.get("https://bgm.tv/calendar");
      const $ = cheerio.load(response.data);
      $('li.week').each((index, weekElement) => {
        let perLs=[] as string[];
        $(weekElement).find('li').each((_, subLi) => {
          const firstNav = $(subLi).find('.nav').first();
          if (firstNav.length > 0) {
            if(firstNav.html()?.length!=0){
              perLs.push(firstNav.html()!)
            }else{
              const originalTitle = $(subLi).find('em').first();
              if(originalTitle.html()?.length!=0){
                perLs.push(originalTitle.html()!)
              }
            }
          }
        });
        ls.push(perLs);
      });
    } catch (_) {
      ls=[];
    }
    return ls;
  }
}