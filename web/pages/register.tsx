import Header from "@/components/header";
import { ssrhost } from "@/hooks/env";
import axios from "axios";
import Head from "next/head";
import "@/styles/global.css"
import "@/styles/register.css";
import RegisterContent from "@/components/register/register_content";

export default function Register(){

  return <div className="page">
    <Head>
      <title>AnimeHelper | 注册</title>
    </Head>

    <Header/>
    
    <div className="page_content">
      <RegisterContent/>
    </div>

    <></>

  </div>
}

export async function getServerSideProps(context: any){
  // const { req } = context;
  // const cookies = parse(req.headers.cookie || '');
  
  const {data: init}=await axios.get(`${ssrhost}/api/init`);
  if(!init){
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  };
}