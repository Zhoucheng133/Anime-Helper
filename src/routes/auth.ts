import { ResponseType, ToResponse } from "./types";

export default async function auth(headers: any, jwt: any): Promise<ResponseType>{
  if (!headers || !headers.token) {
    return ToResponse(false, "参数不正确");
  }
  try {
    const profile = await jwt.verify(headers.token);
    if (profile.username) {
      return ToResponse(true, "")
    } else {
      return ToResponse(false, "无效令牌")
    }
  } catch (error: any) {
    return ToResponse(false, "无效令牌");
  }
}