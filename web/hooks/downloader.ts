import axios from "axios";
import { atom, useRecoilState } from "recoil";
import Cookies from 'js-cookie';
import { LogInterface } from "@/components/downloader/downloader_log";
import { webHost } from "./env";

export interface bangumi {
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

export const dlLogStore=atom<LogInterface[]>({
  key: 'dlLog',
  default: [],
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

interface feedback{
  ok: boolean,
  msg: string
}

export const saveForm=async (form: dlFormInterface): Promise<feedback>=>{
  const token=Cookies.get('token')
  const {data: response}=await axios.post(`${webHost}/api/dl/save'`, {
    data: form,
  }, {
    headers: {
      token
    }
  })
  if(response.ok){
    return {
      ok: true,
      msg: ''
    };
  }
  return {
    ok: false,
    msg: response.msg
  };
}

export const useLog=()=>{
  const token=Cookies.get('token');
  const [_, setLog]=useRecoilState(dlLogStore);
  const get=async ()=>{
    const {data: response}=await axios.get(`${webHost}/api/dl/log`, {
      headers: {
        token
      }
    })
    if(response.ok){
      setLog(response.msg.reverse());
    }
  }
  return get;
}

export const toggleRun=async (val: boolean)=>{
  const token=Cookies.get('token');
  if(val){
    const {data: response}=await axios.post(`${webHost}/api/dl/run`, {}, {
      headers: {
        token
      }
    })
    if(response.ok){
      return true;
    }else{
      return false;
    }
  }else{
    const {data: response}=await axios.post(`${webHost}/api/dl/stop`, {}, {
      headers: {
        token
      }
    })
    if(response.ok){
      return true;
    }else{
      return false;
    }
  }
}