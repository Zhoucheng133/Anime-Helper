import { atom } from "recoil";

export const listStore=atom<any[]>({
  key: 'list',
  default: [],
})