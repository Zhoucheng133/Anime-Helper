import { Button, Input } from "@mui/joy";

export default function RegisterContent(){
  return <div className="panel">
    <div className="title">注册</div>
    <div className="sub">Hi, 从这里开始吧👋</div>
    <div className="item">
      <div className="label">用户名</div>
      <Input style={{'marginBottom': 20}} />
    </div>
    <div className="item">
      <div className="label">密码</div>
      <Input type="password" style={{'marginBottom': 20}}/>
    </div>
    <div className="item">
      <div className="label">重复密码</div>
      <Input type="password"/>
    </div>
    <Button className="button">注册</Button>
  </div>
}