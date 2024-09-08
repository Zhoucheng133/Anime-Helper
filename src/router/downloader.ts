import { response } from "../interface/interface";
import { DownloadService } from "../service/downloader_service";
import { Token } from "../service/token";

export class Downloader{
  token=new Token();
  dl=new DownloadService();

  async getlist(jwt: any, headers: any): Promise<response>{
    const check=await this.token.verify(jwt, headers);
    if(!check.ok){
      return check;
    }
    return this.dl.getList();
  }

  async run(jwt: any, headers: any): Promise<response>{
    const check=await this.token.verify(jwt, headers);
    if(!check.ok){
      return check;
    }
    return this.dl.run();
  }

  async stop(jwt: any, headers: any): Promise<response>{
    const check=await this.token.verify(jwt, headers);
    if(!check.ok){
      return check;
    }
    return this.dl.stop();
  }

  async load(jwt: any, headers: any, body: any): Promise<response>{
    const check=await this.token.verify(jwt, headers);
    if(!check.ok){
      return check;
    }else if (!body || !body.data) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    return this.dl.load(body.data);
  }
}