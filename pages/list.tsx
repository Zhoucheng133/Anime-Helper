import Header from "@/components/header";
import { initPage } from "@/hooks/init";
import Head from "next/head";
import "@/styles/global.css"

export default function Home(){
  return <div>
    <Head>
      <title>AnimeHelper | 列表</title>
    </Head>
    <Header login={true} />
  </div>
}

export async function getServerSideProps(context: any){
  return initPage(context);
}