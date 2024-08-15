import express from "express";
import path from "path";
import service from './utils/service.js';
import state from "./utils/variables.js"

const app = express();
var _interval=null;

app.use(express.static(path.join('web/dist')))
app.use(express.json());
app.post("/api/run", (req, res) => {
  if(!req.body.data){
    res.send({
      "ok": false,
      "msg": '参数不正确'
    })
    return;
  }else{
    const data=req.body.data;
    if(!(data.type && data.exclusions && data.bangumi && data.freq)){
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
  service()
  _interval=setInterval(()=>{
    service()
  }, state.get().freq)
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

const PORT=8811;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
