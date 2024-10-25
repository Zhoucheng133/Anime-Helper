import { JSONFilePreset } from "lowdb/node";
import { response } from "./_interface";
import { Account } from "./account";

interface bangumi {
  title: string,
  ass: string,
}

interface dl{
  type: string,
  exclusions: string[],
  bangumi: bangumi[],
  freq: number,
  ariaLink: string,
  ariaSecret: string
}

interface lg{
  ok: boolean,
  msg: string,
  time: number
}

export class Downloader{
  account=new Account();
  interval: undefined;

  // 【GET】获取表单数据
  async get(jwt: any, headers: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check.ok){
      return check;
    }
    const db = await JSONFilePreset<dl>('db/dl.json', {
      type: "mikan",
      exclusions: [],
      bangumi: [],
      freq: 15,
      ariaLink: "",
      ariaSecret: ""
    });
    db.read();
    return {
      ok: true,
      msg: {
        form: db.data,
        running: this.interval==undefined ? false : true,
      },
    };
  }

  // 【POST】保存表单
  async save(jwt: any, headers: any, body: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check.ok){
      return check;
    }
    if (!body || !body.data) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    const data=body.data;
    const db = await JSONFilePreset<dl>('db/dl.json', {
      type: "mikan",
      exclusions: [],
      bangumi: [],
      freq: 15,
      ariaLink: "",
      ariaSecret: ""
    });
    db.read();
    db.data=data;
    db.write();
    return {
      ok: true,
      msg: ""
    }
  }
}