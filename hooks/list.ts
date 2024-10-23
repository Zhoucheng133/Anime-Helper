import { atom, useRecoilState, useRecoilValue } from "recoil";
import { ListItemInterface } from "./interface";
import { analyseEpisode } from "@/components/list_table_row";
import Cookies from 'js-cookie';
import axios from "axios";

export const listStore=atom<any[]>({
  key: 'list',
  default: [],
})

interface Response{
  ok: boolean,
  msg: any,
}

export const tableColumn=[
  {
    key: 'title',
    label: '标题',
  },
  {
    key: 'status',
    label: '状态',
  },
  {
    key: 'weekday',
    label: '更新周',
  },
  {
    key: 'progress',
    label: '进度',
  },
  {
    key: 'op',
    label: '操作'
  }
];

const useGet=()=>{
  const [_, setList]=useRecoilState(listStore);
  const get=async ()=>{
    const token=Cookies.get('token')
    if(!token){
      return;
    }
    const {data: res}=await axios.get(`/api/list/get`, {
      headers: {
        token: token,
      }
    });
    if(res.ok){
      setList(res.msg.reverse());
    }
  }
  return get;
}

export const changeItem=async (item: ListItemInterface): Promise<boolean>=>{
  const token=Cookies.get('token')
  if(!token){
    return false;
  }
  const response=(await axios.post(`/api/list/edit`, {
    data: item,
  }, {
    headers: {
      token: token
    }
  })).data;
  if(response.ok){
    return true;
  }else{
    return false;
  }
}

export const useAddEp=()=>{
  const list=useRecoilValue(listStore);
  const get=useGet();
  const addEp=async (item: ListItemInterface)=>{
    if(item.now>=analyseEpisode(item)){
      return;
    }
    const index=list.findIndex((i)=>item.id==i.id);  
    if(index==-1){
      return;
    }else{
      const newList = list.map((i, idx) => 
        idx === index ? { ...i, now: i.now + 1 } : i
      );
      if(await changeItem(newList[index])){
        get();
      }
    }
  }
  return addEp;
}

export const useMinusEp=()=>{
  const list=useRecoilValue(listStore);
  const get=useGet();
  const minusEp=async (item: ListItemInterface)=>{
    if(item.now<=0){
      return;
    }
    const index=list.findIndex((i)=>item.id==i.id);  
    if(index==-1){
      return;
    }else{
      const newList = list.map((i, idx) => 
        idx === index ? { ...i, now: i.now - 1 } : i
      );
      if(await changeItem(newList[index])){
        get();
      }
    }
  }
  return minusEp;
}

export const useAdd=()=>{
  const get=useGet();
  const add=async (item: ListItemInterface): Promise<Response>=>{
    const token=Cookies.get('token')
    if(!token){
      return {
        ok: false,
        msg: "获取token失败"
      };
    }
    const response=(await axios.post(`/api/list/add`, {
      data: item,
    }, {
      headers: {
        "token": token
      }
    })).data;
    if(!response.ok){
      return {
        ok: false,
        msg: response.msg
      }
    }else{
      get();
      return {
        ok: true,
        msg: '',
      };
    }
  }
  return add
}