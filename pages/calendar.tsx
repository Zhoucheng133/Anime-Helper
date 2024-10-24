import Header from "@/components/header";
import { initPage } from "@/hooks/init";
import Head from "next/head";
import "@/styles/global.css"
import axios from "axios";
import { parse } from "cookie";
import { host } from "@/hooks/env";

export default function Home({data}: any){

  return <div>
    <Head>
      <title>AnimeHelper | 每日放送</title>
    </Head>
    <Header login={true} page="calendar" />
  </div>
}

export async function getServerSideProps(context: any){
  const init=await initPage(context);
  if(init==true){
    const { req } = context;
    const cookies = parse(req.headers.cookie || '');
    const token=cookies.token;
    const {data: res}=await axios.get(`${host}/api/calendar/get`, {
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