import Header from "@/components/header";
import { initPage } from "@/hooks/init";
import Head from "next/head";
import "@/styles/global.css"

export default function Home({val}: any){
  return <div>
    <Head>
      <title>AnimeHelper | 列表</title>
    </Head>
    <Header login={true} page="list" />
  </div>
}

export async function getServerSideProps(context: any){
  const init=await initPage(context);
  if(init==true){
    return {
      props: {}
    }
  }else{
    return init;
  }
}