import Header from "@/components/header";
import { initPage } from "@/hooks/init";
import Head from "next/head";
import "@/styles/global.css";
import "@/styles/all.css";
import axios from "axios";
import { parse } from "cookie";
import { host } from "@/hooks/env";
import { useRecoilState } from "recoil";
import { allStore } from "@/hooks/all";
import AllContent from "@/components/all/all_content";
import { useEffect } from "react";

export default function All({list}: any){
  
  const [ls, setList]=useRecoilState(allStore);

  useEffect(()=>{
    setList(list);
  }, []);

  return <div>
    <Head>
      <title>AnimeHelper | 每日放送</title>
    </Head>
    <Header login={true} page="all" />
    <AllContent />
  </div>
}

export async function getServerSideProps(context: any){
  const init=await initPage(context);
  if(init==true){
    let ls=[];
    const { req } = context;
    const cookies = parse(req.headers.cookie || '');
    const token=cookies.token;
    const {data: res}=await axios.get(`${host}/api/all/get`, {
      headers: {
        token: token,
      }
    })
    
    if(res.ok){
      ls=res.msg;
    }
    return {
      props: {
        list: ls,
      }
    }
  }else{
    return init;
  }
}