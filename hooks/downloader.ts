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

export const dlFormStore=atom<dlFormInterface>({
  key: 'dlForm',
  default: {
    type: "mikan",
    exclusions: [],
    bangumi: [],
    freq: 15,
    ariaLink: "",
    ariaSecret: ""
  },
})

export const dlStatusStore=atom<boolean>({
  key: 'dlStatus',
  default: false,
})