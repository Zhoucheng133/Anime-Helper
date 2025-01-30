import Header from "@/components/header";
import { initPage } from "@/hooks/init";
import Head from "next/head";
import "@/styles/global.css";
import "@/styles/list.css";
import ListContent from "@/components/list/list_content";
import axios from "axios";
import { host } from "@/hooks/env";
import { parse } from "cookie";
import { useRecoilState } from "recoil";
import { listStore } from "@/hooks/list";
import { useEffect } from "react";

interface listInterface{
  data: any[]
}

export default function List({data}: listInterface){

  const [_, setList]=useRecoilState(listStore);
  useEffect(()=>{
    if(data.length>0){
      setList(data);
    }
  }, [])

  return <div>
    <Head>
      <title>AnimeHelper | 列表</title>
    </Head>
    <Header login={true} page="list" />
    <ListContent/>
  </div>
}

export async function getServerSideProps(context: any){
  const init=await initPage(context);
  if(init==true){
    const { req } = context;
    const cookies = parse(req.headers.cookie || '');
    const token=cookies.token;
    const {data: res}=await axios.get(`${host}/api/list/get`, {
      headers: {
        token: token,
      }
    })
    if(res.ok){
      return {
        props: {data: res.msg.reverse()}
      }
    }else{
      return {
        props: {data: []}
      }
    }
  }else{
    return init;
  }
}