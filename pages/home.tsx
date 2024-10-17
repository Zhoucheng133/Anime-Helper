import { initPage } from "@/hooks/init";
import Head from "next/head";

export default function Home(){
  return <div>
    <Head>
      <title>AnimeHelper | 主页</title>
    </Head>
    Home
  </div>
}

export async function getServerSideProps(context: any){
  return initPage(context);
}