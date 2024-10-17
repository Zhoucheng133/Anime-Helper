import { initPage } from "@/hooks/init";

export default function Home(){
  return <div>
    Home
  </div>
}

export async function getServerSideProps(context: any){
  return initPage(context);
}