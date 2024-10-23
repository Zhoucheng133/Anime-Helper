import {Input, Button} from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';
import Dialog from "./dialog";

export function LoginContent(){

  const [name, setName]=useState('');
  const [password, setPassword]=useState('');
  const [openMsg, setOpenMsg]=useState(false);
  const [msg, setMsg]=useState('');

  const closeMsg=()=>{
    setOpenMsg(false);
  }


  async function hanlder(){
    if(name.length==0){
      setOpenMsg(true);
      setMsg('用户名不能为空')
      return;
    }else if(password.length==0){
      setOpenMsg(true);
      setMsg('密码不能为空')
      return;
    }
    const {data: res}=await axios.post('/api/login', {
      username: name,
      password: password,
    })
    if(res.ok){
      Cookies.set('token', res.msg, { expires: 365 });
      window.location.href='/list';
    }else{
      setOpenMsg(true);
      setMsg(`登录失败: ${res.msg}`)
    }
  }

  return <div className="panel">
    <div className="title">登录</div>
    <div className="sub">Hi, 欢迎回来👋</div>
    <div className="item">
      <div className="label">用户名</div>
      <Input value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className="item">
      <div className="label">密码</div>
      <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <Button color="primary" style={{marginTop: 30, width: '100%'}} onClick={()=>hanlder()}>登录</Button>
    <Dialog title="登录失败" isOpen={openMsg} msg={msg} onClose={()=>closeMsg()}/>
  </div>
}