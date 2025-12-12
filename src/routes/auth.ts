import { getJwtSecret } from "../config";
import { ResponseType, ToResponse } from "./types";
import jwt from 'jsonwebtoken';

export default async function auth(headers: any): Promise<ResponseType> {
  const token = headers.token;

  if (!token) {
      return ToResponse(false, "未提供令牌");
  }

  try {
    const profile = jwt.verify(token, getJwtSecret()) as any;
    
    if (profile?.username) {
      return ToResponse(true, "");
    } else {
      return ToResponse(false, "无效令牌");
    }

  } catch (error: any) {

    if(error.name === "TokenExpiredError"){
      return ToResponse(false, "令牌已过期");
    }
    
    return ToResponse(false, "无效令牌");
  }
}

export function refresh(cookie: any): ResponseType {  
  const refresh_token = cookie.refresh_token;
  if (!refresh_token.value) {
    return ToResponse(false, "没有登录");
  }
  try {
    const profile = jwt.verify(refresh_token.value, getJwtSecret()) as any;
    
    if(profile?.username){
      const newAccessToken = jwt.sign(
        {
          username: profile.username,
        },
        getJwtSecret(),
        {
          expiresIn: "1m",
        }
      );

      return ToResponse(true, newAccessToken);
    }else{
      return ToResponse(false, "refresh_token 无效，请重新登录");
    }

  } catch (err: any) {
    return ToResponse(false, err.message);
  }
}