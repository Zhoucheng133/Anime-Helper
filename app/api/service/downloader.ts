import { JSONFilePreset } from "lowdb/node";
import { response } from "./_interface";
import { Account } from "./account";
import axios from "axios";
import xml2js  from "xml2js";

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
  interval: any;

  form: dl={
    type: "mikan",
    exclusions: [],
    bangumi: [],
    freq: 15,
    ariaLink: "",
    ariaSecret: ""
  }

  log:lg[]=[];

  prels: any[]=[];
  ls: any[]=[];

  addLog(status: boolean, msg: string){
    if(this.log.length>=50){
      this.log.shift();
    }
    this.log.push({
      ok: status,
      msg: msg,
      time: Date.now()
    })
  }

  downloadHandler=async (list: any[])=>{
    for(let item of list){
      try {
        await axios.post(
          this.form.ariaLink,
          {
            "jsonrpc": "2.0",
            "method": "aria2.addUri",
            "id": 1,
            "params": [
              `token:${this.form.ariaSecret}`,
              [item.url],
              {}
            ],
          }
        );
      } catch (error) {
        this.addLog(false, `下载: ${item.title} 失败`);
        continue;
      }
      this.addLog(true, `下载: ${item.title}`);
    }
  }

  judge(){
    const newItems=this.ls.filter(lsItem => !this.prels.some(prelsItem => lsItem.title == prelsItem.title));
    const exclusions=this.form.exclusions;
    const bangumi=this.form.bangumi;
    let filteredList=[];
    for(let item of newItems){
      let matchesBangumi = bangumi.some(b => 
        item.title.includes(b.title) && item.title.includes(b.ass)
      );
      let matchesExclusions = exclusions.some(e => 
        item.title.includes(e)
      );
      if (matchesBangumi && !matchesExclusions) {
        filteredList.push(item);
      }
    }
    this.downloadHandler(filteredList);
  }

  async mainloop(){
    let url="";
    // 注意这里改成官方链接
    if(this.form.type=='mikan'){
      url='https://mikanime.tv/RSS/Classic';
    }else if(this.form.type=='acgrip'){
      url='https://acgrip.art/.xml';
    }
    try {
      const xml=(await axios.get(url)).data;
      const parser = new xml2js.Parser();
      parser.parseString(xml, (err, result) => {
        if (err) {
          this.addLog(false, "解析rss失败");
          return;
        }
        var list=[];
        var items=result.rss.channel[0].item;
        for(let item of items){
          list.push({
            'title': item['title'][0].trim(),
            'url': item['enclosure'][0]['$']["url"],
          })
        }
        // if(getPrels().length==0){
        if(this.prels.length==0){
          // setPrels(list);
          this.prels=list;
          // setLs(list);
          this.ls=list;
          this.addLog(true, "请求rss成功");
          return;
        }else{
          // setPrels(getLs());
          this.prels=this.ls;
          // setLs(list);
          this.ls=list;
          this.addLog(true, "请求rss成功");
          this.judge();
        }
      });
    } catch (error) {
      this.addLog(false, "解析rss失败");
    }
  }


  // 【POST】运行
  async run(jwt: any, headers: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check.ok){
      return check;
    }
    if(this.interval==undefined){
      this.mainloop()
      this.interval=setInterval(()=>{
        this.mainloop()
      }, this.form.freq*1000*60)
      return {
        ok: true,
        msg: "",
      }
    }else{
      return {
        ok: false,
        msg: "在运行中"
      }
    }
  }

  // 【GET】获取日志
  async getlog(jwt: any, headers: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check.ok){
      return check;
    }
    return {
      ok: true,
      msg: this.log,
    }
  }

  // 【POST】添加番剧
  async add(jwt: any, headers: any, body: any){
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
    if(!(data.title && data.title)){
      return {
        ok: false,
        msg: "参数不正确"
      }
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
    db.data.bangumi.push(data);
    db.write();
    return {
      ok: true,
      msg: ""
    }
  }

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

  // 【POST】停止
  async stop(jwt: any, headers: any): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check.ok){
      return check;
    }
    if(this.interval!=null){
      // console.log("结束");
      clearInterval(this.interval);
      this.interval=null;
      return {
        ok: true,
        msg: "",
      }
    }else{
      return {
        ok: false,
        msg: "没有在运行"
      }
    }
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
    this.form=data;
    db.write();
    return {
      ok: true,
      msg: ""
    }
  }
}