// import { Button, Input } from "@mui/joy";
import {Input, Button} from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useSnack } from "./snack";
import { useRouter } from "next/router";

export default function RegisterContent(){

  const [name, setName]=useState('');
  const [password, setPassword]=useState('');
  const [repassword, setRepassword]=useState('');

  const showSnack=useSnack();
  const router=useRouter();

  async function hanlder(){
    if(name.length==0){
      showSnack(false, '用户名不能为空')
      return;
    }else if(password.length==0){
      showSnack(false, '密码不能为空')
      return;
    }else if(repassword.length==0){
      showSnack(false, '重复密码不能为空')
      return;
    }else if(password!==repassword){
      showSnack(false, '两次密码不相符')
      return;
    }
    const {data: res}=await axios.post("/api/register", {
      username: name,
      password: password,
    })
    if(res.ok){
      window.location.href='/login';
    }else{
      showSnack(false, `注册失败: ${res.msg}`)
    }
  }

  return <div className="panel">
    <div className="title">注册</div>
    <div className="sub">Hi, 从这里开始吧👋</div>
    <div className="item">
      <div className="label">用户名</div>
      <Input value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className="item">
      <div className="label">密码</div>
      <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    <div className="item">
      <div className="label">重复密码</div>
      <Input value={repassword} onChange={(e)=>setRepassword(e.target.value)} type="password"/>
    </div>
    <Button color="primary" style={{marginTop: 30, width: '100%'}} onClick={()=>hanlder()}>注册</Button>
  </div>
}