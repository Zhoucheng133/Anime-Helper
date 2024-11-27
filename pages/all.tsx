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
import { listStore } from "@/hooks/list";
import AllContent from "@/components/all/all_content";
import { useEffect } from "react";

export default function Calendar({list, calendar}: any){
  
  // const [_, setCalendar]=useRecoilState(allStore);
  // const [__, setList]=useRecoilState(listStore);

  // useEffect(()=>{
  //   setList(list);
  //   setCalendar(calendar);
  // }, []);

  return <div>
    <Head>
      <title>AnimeHelper | 每日放送</title>
    </Head>
    <Header login={true} page="calendar" />
    <AllContent />
  </div>
}

export async function getServerSideProps(context: any){
  const init=await initPage(context);
  if(init==true){
    // let ls=[];
    // let calendar=[];
    // const { req } = context;
    // const cookies = parse(req.headers.cookie || '');
    // const token=cookies.token;
    // const {data: resCl}=await axios.get(`${host}/api/calendar/get`, {
    //   headers: {
    //     token: token,
    //   }
    // })
    // if(resCl.ok){
    //   calendar=resCl.msg;
    // }
    // const {data: resLs}=await axios.get(`${host}/api/list/get`, {
    //   headers: {
    //     token: token,
    //   }
    // })
    // if(resLs.ok){
    //   ls=resLs.msg;
    // }
    // return {
    //   props: {
    //     list: ls,
    //     calendar: calendar
    //   }
    // }
  }else{
    return init;
  }
}