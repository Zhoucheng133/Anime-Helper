import { atom } from "recoil";

export const allStore=atom<any[]>({
  key: 'all',
  default: [],
})