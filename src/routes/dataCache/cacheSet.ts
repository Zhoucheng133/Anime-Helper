import axios from "axios";
import { CalendarItem } from "../calendar";
import Database from "bun:sqlite";

export let calendarList: CalendarItem[][] = [];

export async function getCalendarList(db: Database){
  try {
    const response = (await axios.get("https://api.bgm.tv/calendar")).data;
    const allTitles = response.flatMap((day: any) => day.items.map((item: any) =>
      item.name_cn.length === 0 ? item.name : item.name_cn
    ));
    const placeholders = allTitles.map(() => "?").join(", ");
    const existingTitlesSet = new Set(db.prepare(
      `SELECT title FROM list WHERE title IN (${placeholders})`
    ).all(...allTitles).map((row: any) => row.title));
    calendarList = response.map((day: any) => day.items.map((item: any) => ({
      id: item.id,
      title: item.name_cn.length === 0 ? item.name : item.name_cn,
      added: existingTitlesSet.has(item.name_cn.length === 0 ? item.name : item.name_cn),
    })));
    const lastDay = calendarList.pop();
    if (lastDay) {
      calendarList.unshift(lastDay);
    }
  } catch (error) {}
}