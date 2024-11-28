import { atom } from "recoil";

export const allStore=atom<any[]>({
  key: 'all',
  default: [],
})

export const allColumn=[
  {
    key: 'title',
    label: '标题',
  },
  {
    key: 'op',
    label: '操作',
  },
]

export interface AllItem{
  title: string,
  url: string
}

export const download=(item: AllItem)=>{
    
}