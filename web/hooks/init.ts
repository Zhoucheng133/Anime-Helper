import axios from "axios";
import { parse } from "cookie";
import { ssrhost } from "./env";

// SSR部分的请求
export async function initPage(context: any){
  const {data: init}=await axios.get(`${ssrhost}/api/init`);
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
      const {data: res}=await axios.get(`${ssrhost}/api/auth`, {
        headers: {
          token: token,
        }
      });
      if(res.ok){
        return true;
      }else{
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          }
        }
      }
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