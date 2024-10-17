import { Button, Input } from "@mui/joy";
import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';
import { Snacker } from "./snack";

export function LoginContent(){

  const [name, setName]=useState('');
  const [password, setPassword]=useState('');
  const [open, setOpen]=useState(false);
  const [message, setMessage]=useState('');

  async function hanlder(){
    if(name.length==0){
      setMessage('用户名不能为空');
      setOpen(true);
      return;
    }else if(password.length==0){
      setMessage('密码不能为空');
      setOpen(true);
      return;
    }
    const {data: res}=await axios.post('/api/login', {
      username: name,
      password: password,
    })
    if(res.ok){
      Cookies.set('token', res.msg, { expires: 365 });
      window.location.href='/home';
    }else{
      setMessage(`登录失败: ${res.msg}`);
      setOpen(true);
    }
  }

  return <div className="panel">
    <div className="title">登录</div>
    <div className="sub">Hi, 欢迎回来👋</div>
    <div className="item">
      <div className="label">用户名</div>
      <Input value={name} onChange={(e)=>setName(e.target.value)}  style={{'marginBottom': 20}} />
    </div>
    <div className="item">
      <div className="label">密码</div>
      <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{'marginBottom': 20}}/>
    </div>
    <Button style={{marginTop: 30, width: '100%'}} onClick={()=>hanlder()}>登录</Button>
    <Snacker open={open} message={message} setOpen={setOpen} />
  </div>
}