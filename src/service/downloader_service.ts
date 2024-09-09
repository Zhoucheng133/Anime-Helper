import { JSONFilePreset } from "lowdb/node";
import { response } from "../interface/interface";

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

export class DownloadService{

  interval: null | Timer=null;

  mainloop(){

  }

  async getList(): Promise<response>{
    const db = await JSONFilePreset<dl>('dl.json', {
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
      msg: db.data,
    };
  }

  async run(): Promise<response>{
    if(this.interval==null){
      const db = await JSONFilePreset<dl>('dl.json', {
        type: "mikan",
        exclusions: [],
        bangumi: [],
        freq: 15,
        ariaLink: "",
        ariaSecret: ""
      });
      db.read();

      console.log("开始");
      this.mainloop()
      this.interval=setInterval(()=>{
        this.mainloop()
      }, db.data.freq*100)
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

  stop(): response{
    if(this.interval!=null){
      console.log("结束");
      clearInterval(this.interval);
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

  async load(data: dl): Promise<response>{
    const db = await JSONFilePreset<dl>('dl.json', {
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