import axios from "axios";
import Database from "bun:sqlite";
import { ResponseType, ToResponse } from "./types";
import dayjs from "dayjs";

interface CalendarItem{
  id: number,
  title: string,
  added: boolean,
}

interface BgmSearchItem{
  title: string,
  id: string,
  eps: number,
  image: string,
}

interface BgmItem{
  title: string,
  id: string,
  score: number,
  updates: number,
  eps: number,
  image: string,
  weekday: number,
}

interface BgmEpisode{
  updates: number,
  eps: number,
  weekday: number,
}

export class Bgm{
  isDatePassed(dateString: string): boolean {
    const inputDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate <= today;
  }

  async calendar(db: Database): Promise<ResponseType>{
    let ls: CalendarItem[][] = [];
    try {
      const response = (await axios.get("https://api.bgm.tv/calendar", {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      })).data;
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

  async search(keyword: any): Promise<ResponseType>{

    if(!keyword){
      return ToResponse(false, "缺少参数");
    }

    let list: BgmSearchItem[]=[];

    try {
      const {data: result}=await axios.post("https://api.bgm.tv/v0/search/subjects", {
        keyword: keyword,
        filter: {
          type: [2],
        },
      }, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });

      list=result.data.map((item: any)=>{
        return <BgmSearchItem>{
          title: item['name_cn'].length==0 ? item['name'] : item['name_cn'],
          id: item['id'].toString(),
          eps: item['eps'],
          image: item['images']['large'],
        }
      })
    } catch (error) {
      return ToResponse(false, error);
    }

    return ToResponse(true, list);
  }

  async getEps(id: string): Promise<BgmEpisode>{
    let eps=0;
    let updates=0;
    let day=0;
    try {
      const response=(await axios.get(`https://api.bgm.tv/v0/episodes?subject_id=${id}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      })).data;
      const ls=response['data'];
      const airdate=ls[0]['airdate'];
      day=dayjs(airdate).day()
      for(let item of ls){
        if(item.type==0){
          eps+=1;
        }
        if(this.isDatePassed(item['airdate'])){
          updates+=1;
        }
      }
    }catch(_){}
    return {
      weekday: day,
      updates: updates,
      eps: eps,
    }
  }

  async info(id: string): Promise<ResponseType>{

    try {
      const response=(await axios.get(`https://api.bgm.tv/v0/subjects/${id}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      })).data;

      const epData=await this.getEps(id);

      return {
        ok: true,
        msg: <BgmItem>{
          title: response['name_cn'].length==0 ? response['name'] : response['name_cn'],
          id: response['id'].toString(),
          score: response['rating']['score'],
          updates: epData.updates,
          eps: epData.eps,
          image: response['images']['large'],
          weekday: epData.weekday,
        }
      }
    } catch (error) {
      return ToResponse(false, error);
    }
  }
}