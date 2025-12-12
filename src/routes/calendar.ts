import axios from "axios";
import auth from "./auth";
import { ResponseType, ToResponse } from "./types";
import Database from "bun:sqlite";
import { calendarList } from "./dataCache/cacheSet";
// import { calendar_get } from "./test";

export interface CalendarItem{
  id: number,
  title: string,
  added: boolean,
}

export interface CalendarSub{
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

  async get(): Promise<ResponseType>{
    return ToResponse(true, calendarList);
  }

  async info(id: string): Promise<ResponseType>{
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