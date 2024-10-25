import { atom } from "recoil";

interface bangumi {
  title: string,
  ass: string,
}

export interface dlFormInterface{
  type: string,
  exclusions: string[],
  bangumi: bangumi[],
  freq: number,
  ariaLink: string,
  ariaSecret: string
}

export const dlFormStore=atom<dlFormInterface[]>({
  key: 'dlForm',
  default: [],
})

export const dlStatusStore=atom<boolean>({
  key: 'dlStatus',
  default: false,
})