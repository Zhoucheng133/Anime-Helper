import { host } from "@/hooks/env";
import axios from "axios";
import Head from "next/head";

export default function Register(){

  return <div>
    <Head>
      <title>AnimeHelper | 注册</title>
    </Head>

    

  </div>
}

export async function getServerSideProps(){
  const {data: init}=await axios.get(`${host}/api/init`);
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