import Header from "@/components/header";
import { initPage } from "@/hooks/init";
import Head from "next/head";
import "@/styles/global.css"
import { parse } from "cookie";
import axios from "axios";
import { host } from "@/hooks/env";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dlFormStore, dlStatusStore } from "@/hooks/downloader";

export default function Home({data}: any){

  const [_, setForm]=useRecoilState(dlFormStore);
  const [__, setStatus]=useRecoilState(dlStatusStore);

  useEffect(()=>{
    setForm(data.form);
    setStatus(data.running);
  }, [])

  return <div>
    <Head>
      <title>AnimeHelper | 下载器</title>
    </Head>
    <Header login={true} page="downloader" />
  </div>
}

export async function getServerSideProps(context: any){
  const init=await initPage(context);
  if(init==true){
    const { req } = context;
    const cookies = parse(req.headers.cookie || '');
    const token=cookies.token;
    const {data: res}=await axios.get(`${host}/api/dl/get`, {
      headers: {
        token: token,
      }
    })
    if(res.ok){
      return {
        props: {data: res.msg}
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