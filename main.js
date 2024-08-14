import express from "express";
import path from "path";
import service from './utils/service.js';

const app = express();
var _interval=null;

app.use(express.static(path.join('web/dist')))
app.use(express.json());
app.post("/api/run", (req, res) => {
  if(_interval!=null){
    res.send({
      'ok': false,
      'msg': "在运行中",
    })
    return;
  }
  _interval=setInterval(()=>{
    service()
  }, 1000)
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
