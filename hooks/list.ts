import { atom, useRecoilState, useRecoilValue } from "recoil";
import { ListItemInterface } from "./interface";
import { analyseEpisode } from "@/components/list_table_row";
import Cookies from 'js-cookie';
import axios from "axios";
import { useSnack } from "@/components/snack";

export const listStore=atom<any[]>({
  key: 'list',
  default: [],
})

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
    const showSnack=useSnack();
    showSnack(false, `修改失败: ${response.msg}`)
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