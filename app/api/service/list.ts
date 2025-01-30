import { JSONFilePreset } from "lowdb/node";
import { response } from "./_interface";
import { Account } from "./account"
import { Database } from 'better-sqlite3';

interface item{
  id: string,
  title: string,
  episode: number,
  now: number,
  time: number,
}

export class List{
  account=new Account();

  // 【GET】获取列表
  async getList(jwt: any, headers: any, db: Database): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(check.ok){
      const tableExists = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name = 'list'").get();
      if (!tableExists) {
        db.prepare(`
          CREATE TABLE list (
            id TEXT KEY,
            title TEXT,
            episode INTEGER,
            now INTEGER,
            time INTEGER
          )
        `).run();
        return {
          ok: true,
          msg: [],  
        };
      }else{
        const data = db.prepare('SELECT * FROM list').all();
        return {
          ok: true,
          msg: data,
        };
      }
    }else{
      return check;
    }
  }

  isLegal(obj: any): obj is item {
    return typeof obj.id === 'string' && typeof obj.title === 'string' && typeof obj.episode === 'number'  && typeof obj.now === 'number' && typeof obj.time === 'number' && obj.now<=obj.episode;
  }

  // 【POST】添加
  async add(jwt: any, headers: any, body: any, db: Database): Promise<response>{
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
    try {
      const data:item=body.data as item;
      if(this.isLegal(data)){
        const stmt = db.prepare("INSERT INTO list (id, title, episode, now, time) VALUES (?, ?, ?, ?, ?)");
        stmt.run(data.id, data.title, data.episode, data.now, data.time);
        return {
          ok: true,
          msg: "",
        }
      }else{
        return {
          ok: false,
          msg: "参数不合法"
        }
      }
    } catch (_) {
      return {
        ok: false,
        msg: "参数不合法",
      };
    }
  }

  // 【POST】编辑
  async edit(jwt: any, headers: any, body: any, db: Database): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check){
      return check;
    }
    if (!body || !body.data) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    const data=body.data as item;
    const checkStmt = db.prepare("SELECT id FROM list WHERE id = ?");
    const row = checkStmt.get(data.id);
    if(row){
      const updateStmt = db.prepare("UPDATE list SET title = ?, episode = ?, now = ?, time = ? WHERE id = ?");
      updateStmt.run(data.title, data.episode, data.now, data.time, data.id);
      return {
        ok: true,
        msg: ""
      }
    }else{
      return {
        ok: false,
        msg: '没有该数据'
      }
    }
  }

  // 【POST】删除
  async del(jwt: any, headers: any, body: any, db: Database): Promise<response>{
    const check=await this.account.auth(jwt, headers);
    if(!check.ok){
      return check;
    }
    if (!body || !body.id) {
      return {
        ok: false,
        msg: "参数不正确",
      };
    }
    const id=body.id;
    const checkStmt = db.prepare("SELECT id FROM list WHERE id = ?");
    const row = checkStmt.get(id);
    if (row) {
      const deleteStmt = db.prepare("DELETE FROM list WHERE id = ?");
      deleteStmt.run(id);
      return {
        ok: true,
        msg: "",
      }
    } else {
      return {
        ok: false,
        msg: "数据不存在",
      }
    }
  }
}