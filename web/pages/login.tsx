import { ssrhost } from "@/hooks/env";
import axios from "axios";
import Head from "next/head";
import "@/styles/global.css"
import "@/styles/login.css";
import Header from "@/components/header";
import { LoginContent } from "@/components/login/login_content";
import { useEffect } from "react";
import Cookies from 'js-cookie';

export default function Login(){

  useEffect(()=>{
    Cookies.remove('token')
  }, [])

  return <div className="page">
    <Head>
      <title>AnimeHelper | 登录</title>
    </Head>

    <Header/>

    <div className="page_content">
      <LoginContent/>
    </div>

    <></>

  </div>
}

export async function getServerSideProps(){
  const {data: init}=await axios.get(`${ssrhost}/api/init`);
  if(init){
    return {
      redirect: {
        destination: '/register',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  };
}