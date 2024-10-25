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

export const bangumiTableColumn=[
  {
    key: 'ass',
    label: '字幕组'
  },
  {
    key: 'title',
    label: '标题'
  },
  {
    key: 'op',
    label: '操作'
  }
]

export const exclusionTableColumn=[
  {
    key: 'value',
    label: '值',
  },
  {
    key: 'op',
    label: '操作'
  }
]