import { host } from '@/hooks/env';
import axios from 'axios';
import { parse } from 'cookie';

export default function Index({param}: any){

  return <div>

  </div>
}

export async function getServerSideProps(context: any){
  // 测试内容: 获取cookie
  // const { req } = context;
  // const cookies = parse(req.headers.cookie || '');
  
  const {data: init}=await axios.get(`${host}/api/init`);

  if(init){
    return {
      redirect: {
        destination: '/register',
        permanent: false,
      }
    }
  }else{
    const { req } = context;
    const cookies = parse(req.headers.cookie || '');
    const token=cookies.token;
    if(token){
      
    }else{
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        }
      }
    }
  }
  
}