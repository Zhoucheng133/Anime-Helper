import Database from "bun:sqlite";
import auth from "./auth";
import { ResponseType, ToResponse } from "./types";
import xml2js  from "xml2js";
import axios from "axios";

interface DownloaderListType{
  id: string,
  title: string,
  ass: string
}

interface DownloaderExcludeType{
  id: string,
  key: string,
}

interface DownloaderConfigType{
  link: string,
  secret: string,
  freq: number,
  type: string,
}

interface DownloaderDataType{
  link: string,
  secret: string,
  freq: number,
  type: string,
  running: boolean,
  list: DownloaderListType[],
  exclude: DownloaderExcludeType[]
}

interface Log{
  ok: boolean,
  msg: string,
  time: number
}

export class Downloader{

  interval: any;

  form: DownloaderDataType={
    link: "",
    secret: "",
    freq: 15,
    type: "mikan",
    running: false,
    list: [],
    exclude: []
  }

  updateForm(db: Database): ResponseType{
    try {
      const sqlConfig = db.prepare(`SELECT * FROM downloader_config`).get() as DownloaderConfigType || null;
      if(sqlConfig!=null){
        this.form={
          ...this.form,
          ...sqlConfig,
          running: this.interval==undefined ? false : true,
          list: [],
          exclude: []
        }
      }

      const sqlList=db.prepare(`SELECT * FROM downloader_list`).all() as DownloaderListType[];
      const sqlExclude=db.prepare(`SELECT * FROM downloader_exclude`).all() as DownloaderExcludeType[];

      this.form={
        ...this.form,
        list: sqlList,
        exclude: sqlExclude,
      }
    } catch (error) {
      return ToResponse(false, error);
    }
    return ToResponse(true, this.form);
  }

  log: Log[]=[];

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
          this.form.link,
          {
            "jsonrpc": "2.0",
            "method": "aria2.addUri",
            "id": 1,
            "params": [
              `token:${this.form.secret}`,
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
    const exclusions=this.form.exclude;
    const bangumi=this.form.list;
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

  prels: any[]=[];
  ls: any[]=[];

  async mainloop(){
    let url="";
    // 注意这里改成官方链接
    if(this.form.type=='mikan'){
      url='https://mikanime.tv/RSS/Classic';
      // url='http://127.0.0.1:8080'
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

  async getLog(headers: any, jwt: any){
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }
    return ToResponse(true, this.log);
  }

  async run(headers: any, jwt: any, db: Database): Promise<ResponseType>{
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }
    if(this.interval!=undefined){
      return ToResponse(false, "在运行中");
    }
    this.updateForm(db);
    this.addLog(true, "开始运行");
    this.mainloop()
      let intervalTime=this.form.freq*1000*60;
      this.interval=setInterval(()=>{
        this.mainloop()
      }, intervalTime);

    return ToResponse(true, "");
  }

  async stop(headers: any, jwt: any): Promise<ResponseType>{
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }
    if(this.interval==undefined){
      return ToResponse(false, "不在运行中");
    }
    clearInterval(this.interval);
    this.interval=undefined;
    this.addLog(true, "停止运行");
    return ToResponse(true, "");
  }

  async get(headers: any, jwt: any, db: Database): Promise<ResponseType> {
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }
  
    return this.updateForm(db)
  }

  validListItem(data: any): boolean{
    return (
      data &&
      typeof data.id === "string" &&
      typeof data.title === "string" &&
      typeof data.ass === "string"
    );
  }

  validExcludeItem(data: any): boolean{
    return (
      data &&
      typeof data.id === "string" &&
      typeof data.key === "string"
    );
  }

  async addToList(headers: any, jwt: any, body: any, db: Database): Promise<ResponseType>{
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }

    if (!body || !body.data || !this.validListItem(body.data)) {
      return ToResponse(false, "参数不正确");
    }

    try {
      const data=body.data as DownloaderListType;
      db.prepare(`INSERT INTO downloader_list VALUES (?, ?, ?)`).run(data.id, data.title, data.ass);
    } catch (error) {
      return ToResponse(false, error);
    }
    this.updateForm(db);
    return ToResponse(true, "");

  }

  async delFromList(headers: any, jwt: any, id: string, db: Database): Promise<ResponseType>{
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }

    try {
      db.prepare(`DELETE FROM downloader_list WHERE id = ?`).run(id);
    } catch (error) {
      return ToResponse(false, error);
    }
    this.updateForm(db);
    return ToResponse(true, "");
  }

  async addToExclude(headers: any, jwt: any, body: any, db: Database): Promise<ResponseType>{
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }
    

    if (!body || !body.data || !this.validExcludeItem(body.data)) {
      return ToResponse(false, "参数不正确");
    }

    try {
      const data=body.data as DownloaderExcludeType;
      db.prepare(`INSERT INTO downloader_exclude VALUES (?, ?)`).run(data.id, data.key);
    } catch (error) {
      return ToResponse(false, error);
    }
    this.updateForm(db);
    return ToResponse(true, "");
  }

  async delFromExclude(headers: any, jwt: any, id: string, db: Database): Promise<ResponseType>{
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }

    try {
      db.prepare(`DELETE FROM downloader_exclude WHERE id = ?`).run(id);
    } catch (error) {
      return ToResponse(false, error);
    }
    this.updateForm(db);
    return ToResponse(true, "");
  }

  validConfigItem(data: any): boolean{
    return (
      data &&
      typeof data.link === "string" &&
      typeof data.secret === "string" &&
      typeof data.freq === "number" &&
      typeof data.type === "string"
    );
  }

  async save(headers: any, jwt: any, body: any, db: Database): Promise<ResponseType>{
    const authCheck = await auth(headers, jwt);
    if (!authCheck.ok) {
      return authCheck;
    }

    if (!body || !body.data || !this.validConfigItem(body.data)) {
      return ToResponse(false, "参数不正确");
    }
    
    try {
      const data=body.data as DownloaderConfigType;
      db.prepare(`INSERT OR REPLACE INTO downloader_config (id, link, secret, freq, type) VALUES (?, ?, ?, ?, ?)`)
      .run("0", data.link, data.secret, data.freq, data.type);
    } catch (error) {
      return ToResponse(false, error);
    }
    this.updateForm(db);
    return ToResponse(true, "");
  }
}