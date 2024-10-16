import { host } from "@/hooks/env";
import axios from "axios";
import Head from "next/head";

export default function Login(){
  return <div>
    <Head>
      <title>AnimeHelper | 登录</title>
    </Head>
    Login
  </div>
}

export async function getServerSideProps(){
  const {data: init}=await axios.get(`${host}/api/init`);
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