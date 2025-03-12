import axios from "axios";
import auth from "./auth";
import { ResponseType, ToResponse } from "./types";
import Database from "bun:sqlite";
// import { calendar_get } from "./test";

interface CalendarItem{
  id: number,
  title: string,
  added: boolean,
}

interface CalendarSub{
  eps: number,
  updates: number,
}


export class Calendar{

  isDatePassed(dateString: string): boolean {
    const inputDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate <= today;
  }

  async get(headers: any, jwt: any, db: Database): Promise<ResponseType>{
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }

    // return calendar_get;

    let ls: CalendarItem[][] = [];
    try {
      const response = (await axios.get("https://api.bgm.tv/calendar")).data;
      const allTitles = response.flatMap((day: any) => day.items.map((item: any) =>
        item.name_cn.length === 0 ? item.name : item.name_cn
      ));
      const placeholders = allTitles.map(() => "?").join(", ");
      const existingTitlesSet = new Set(db.prepare(
        `SELECT title FROM list WHERE title IN (${placeholders})`
      ).all(...allTitles).map((row: any) => row.title));
      ls = response.map((day: any) => day.items.map((item: any) => ({
        id: item.id,
        title: item.name_cn.length === 0 ? item.name : item.name_cn,
        added: existingTitlesSet.has(item.name_cn.length === 0 ? item.name : item.name_cn),
      })));
      const lastDay = ls.pop();
      if (lastDay) {
        ls.unshift(lastDay);
      }
    } catch (error) {
      return ToResponse(false, error);
    }

    return ToResponse(true, ls);
  }

  async info(headers: any, jwt: any, id: string){
    const authCheck=await auth(headers, jwt);
    if(!authCheck.ok){
      return authCheck;
    }

    let data: CalendarSub={
      updates: 0,
      eps: 0,
    }
    try {
      const response=(await axios.get(`https://api.bgm.tv/v0/episodes?subject_id=${id}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      })).data;
      const ls=response['data'];
      for(let item of ls){
        if(item.type==0){
          data.eps+=1;
        }
        if(this.isDatePassed(item['airdate'])){
          data.updates+=1;
        }
      }
    }catch(error){
      return ToResponse(false, error);
    }
    return ToResponse(true, data);
  }
}