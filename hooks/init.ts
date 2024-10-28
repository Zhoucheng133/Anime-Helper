import axios from "axios";
import { parse } from "cookie";
import { host } from "./env";

export async function initPage(context: any){
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
      const {data: res}=await axios.get(`${host}/api/auth`, {
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