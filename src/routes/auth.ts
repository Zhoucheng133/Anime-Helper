import { ResponseType, ToResponse } from "./types";

export default async function auth(headers: any, jwt: any): Promise<ResponseType> {
  const access_token = headers.access_token;

  if (!access_token) {
      return ToResponse(false, "未提供令牌");
  }

  try {
    const profile = await jwt.verify(access_token);
    
    if (profile?.username) {
        return ToResponse(true, "");
    } else {
        return ToResponse(false, "无效令牌");
    }

  } catch (error: any) {
    if (error?.code === "ERR_JWT_EXPIRED" || error?.name === "JWTExpired") {
        return ToResponse(false, "令牌已过期");
    }
    return ToResponse(false, "无效令牌");
  }
}

export async function refresh(cookie: any, jwt: any): Promise<ResponseType> {  
  const refresh_token = cookie.refresh_token;
  if (!refresh_token.value) {
    return ToResponse(false, "没有登录");
  }
  try {
    const profile = await jwt.verify(refresh_token.value);

    const newAccessToken = await jwt.sign({
      username: profile.username,
      exp: "10m"
    });

    return ToResponse(true, newAccessToken);

  } catch (err: any) {
    return ToResponse(false, "refresh_token 无效，请重新登录");
  }
}