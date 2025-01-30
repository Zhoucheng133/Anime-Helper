import { atom } from "recoil";

export const calendarStore=atom<any[]>({
  key: 'calendar',
  default: [],
})