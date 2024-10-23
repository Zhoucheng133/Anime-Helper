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

export const changeItem=async (item: ListItemInterface, token: string): Promise<Response>=>{
  const response=(await axios.post(`/api/list/edit`, {
    data: item,
  }, {
    headers: {
      token: token
    }
  })).data;
  
  if(response.ok){
    return {
      ok: true,
      msg: ''
    };
  }else{
    return {
      ok: false,
      msg: response.msg,
    };
  }
}

export const useEdit=()=>{
  const get=useGet();
  const edit=async (item: ListItemInterface): Promise<Response>=>{
    const token=Cookies.get('token')
    if(!token){
      return {
        ok: false,
        msg: "获取token失败"
      };
    }
    const res=await changeItem(item, token);
    if(res.ok){
      get();
      return {
        ok: true,
        msg: ''
      }
    }else{
      return {
        ok: false,
        msg: res.msg
      }
    }
  }
  return edit;
}

export const useAddEp=()=>{
  const list=useRecoilValue(listStore);
  const get=useGet();
  const addEp=async (item: ListItemInterface)=>{
    const token=Cookies.get('token')
    if(!token){
      return {
        ok: false,
        msg: "获取token失败"
      };
    }
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
      const res=await changeItem(newList[index], token);
      if(res.ok){
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
    const token=Cookies.get('token')
    if(!token){
      return {
        ok: false,
        msg: "获取token失败"
      };
    }
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
      const res=await changeItem(newList[index], token);
      if(res.ok){
        get();
      }
    }
  }
  return minusEp;
}

export const useDel=()=>{
  const get=useGet();
  const del=async (id: string): Promise<Response>=>{
    const token=Cookies.get('token')
    if(!token){
      return {
        ok: false,
        msg: "获取token失败"
      };
    }
    const response=(await axios.post(`/api/list/del`, {
      id: id
    }, {
      headers: {
        token: token,
      }
    })).data;
    if(response.ok){
      get();
      return {
        ok: true,
        msg: '',
      };
    }else{
      return {
        ok: false,
        msg: response.msg
      }
    }
  }
  return del;
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