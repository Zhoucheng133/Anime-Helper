import {Input, Button} from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import Dialog from "../dialog";

export default function RegisterContent(){

  const [name, setName]=useState('');
  const [password, setPassword]=useState('');
  const [repassword, setRepassword]=useState('');

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
    }else if(repassword.length==0){
      setOpenMsg(true);
      setMsg('重复密码不能为空')
      return;
    }else if(password!==repassword){
      setOpenMsg(true);
      setMsg('两次密码不相符')
      return;
    }
    const {data: res}=await axios.post("/api/register", {
      username: name,
      password: password,
    })
    if(res.ok){
      window.location.href='/login';
    }else{
      setOpenMsg(true);
      setMsg(`注册失败: ${res.msg}`)
    }
  }

  function onKeyDown(event: any){
    if(event.key=='Enter'){
      hanlder();
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
      <Input value={repassword} onChange={(e)=>setRepassword(e.target.value)} type="password" onKeyDown={onKeyDown}/>
    </div>
    <Button color="primary" style={{marginTop: 30, width: '100%'}} onClick={()=>hanlder()}>注册</Button>
    <Dialog title="登录失败" isOpen={openMsg} msg={msg} onClose={()=>closeMsg()}/>
  </div>
}