import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Snackbar } from "@mui/joy";
import { useState } from "react";

export default function RegisterContent(){

  const [name, setName]=useState('');
  const [password, setPassword]=useState('');
  const [repassword, setRepassword]=useState('');
  const [open, setOpen]=useState(false);
  const [message, setMessage]=useState('');

  function hanlder(){
    if(name.length==0){
      setMessage('用户名不能为空');
      setOpen(true);
      return;
    }else if(password.length==0){
      setMessage('密码不能为空');
      setOpen(true);
      return;
    }else if(repassword.length==0){
      setMessage('重复密码不能为空')
      setOpen(true);
      return;
    }else if(password!==repassword){
      setMessage('两次密码不相符')
      setOpen(true);
      return;
    }
    
  }

  return <div className="panel">
    <div className="title">注册</div>
    <div className="sub">Hi, 从这里开始吧👋</div>
    <div className="item">
      <div className="label">用户名</div>
      <Input value={name} onChange={(e)=>setName(e.target.value)}  style={{'marginBottom': 20}} />
    </div>
    <div className="item">
      <div className="label">密码</div>
      <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{'marginBottom': 20}}/>
    </div>
    <div className="item">
      <div className="label">重复密码</div>
      <Input value={repassword} onChange={(e)=>setRepassword(e.target.value)} type="password"/>
    </div>
    <Button className="button" onClick={()=>hanlder()}>注册</Button>
    <Snackbar 
      open={open} 
      onClose={(_, __) => {setOpen(false); }} 
      autoHideDuration={1500}
      color={'danger'}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      style={{display: 'flex'}}
    >
      <FontAwesomeIcon icon={faXmark} />
      <div>{message}</div>
    </Snackbar>
  </div>
}