import Header from "@/components/header";
import { initPage } from "@/hooks/init";
import Head from "next/head";
import "@/styles/global.css";
import "@/styles/list.css";
import ListContent from "@/components/list_content";

export default function Home({val}: any){
  return <div>
    <Head>
      <title>AnimeHelper | 列表</title>
    </Head>
    <Header login={true} page="list" />
    <ListContent/>
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