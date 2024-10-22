import {Input, Button} from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';
import { useSnack } from "./snack";

export function LoginContent(){

  const [name, setName]=useState('');
  const [password, setPassword]=useState('');

  const showSnack=useSnack();

  async function hanlder(){
    if(name.length==0){
      showSnack(false, '用户名不能为空')
      return;
    }else if(password.length==0){
      showSnack(false, '密码不能为空')
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
      showSnack(false, `登录失败: ${res.msg}`)
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
  </div>
}