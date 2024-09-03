import { response } from "../interface/interface";

export class Token{
  // 【FUNC】检查token是否合法
  async verify(jwt: any, headers: any): Promise<response>{
    if (!headers || !headers.token) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    const profile = await jwt.verify(headers.token);
    if (profile.username) {
      return {
        ok: true,
        msg: ""
      };
    } else {
      // 如果验证失败，但没有抛出错误
      return {
        ok: false,
        msg: "无效的令牌"
      };
    }
  }
}