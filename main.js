import express from "express";
import path from "path";
import service from './utils/service.js';
import state from "./utils/data.js";
import { JSONFilePreset } from 'lowdb/node';
import { getLog } from "./utils/log.js";

const app = express();
var _interval=null;

// 临时代码，允许跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

const dbSet=async (val)=>{
  const db = await JSONFilePreset('db.json', { data: {} });
  db.read();
  db.data = val;
  db.write();
}

const dbGet=async ()=>{
  const db = await JSONFilePreset('db.json', {data: {}});
  db.read();
  state.set(db.data);
}

app.use(express.static(path.join('web/dist')))
app.use(express.json());
app.get("/api/status", (req, res)=>{
  res.send(_interval==null?false:true);
})
app.get("/api/log", (req, res)=>{
  res.send(getLog());
})
app.get("/api/data", (_, res)=>{
  res.send(state.get());
})
app.post("/api/run", (req, res) => {
  if(!req.body.data){
    res.send({
      "ok": false,
      "msg": '参数不正确'
    })
    return;
  }else{
    const data=req.body.data;
    if(!(data.type && data.exclusions && data.bangumi && data.freq && data.ariaLink && data.ariaSecret)){
      res.send({
        "ok": false,
        "msg": '参数不正确'
      })
      return;
    }
    state.set(req.body.data)
  }

  if(_interval!=null){
    res.send({
      'ok': false,
      'msg': "在运行中",
    })
    return;
  }
  dbSet(req.body.data)
  service()
  _interval=setInterval(()=>{
    service()
  }, state.get().freq)
  // 注意这里修改成分钟，即*1000*60
  res.send({
    'ok': true,
    'msg': "",
  })
})

app.post("/api/stop", (req, res)=>{
  if(_interval==null){
    res.send({
      'ok': false,
      'msg': "没有在运行",
    })
    return;
  }
  clearInterval(_interval)
  _interval=null;
  res.send({
    'ok': true,
    'msg': "",
  })
})

// 从这里开始
dbGet();
const PORT=8811;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
