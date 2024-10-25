import { dlFormStore, dlStatusStore } from "@/hooks/downloader"
import { Button, Chip, Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { useRecoilState } from "recoil"

export default function DownloaderContent(){

  const [status, setStatus]=useRecoilState(dlStatusStore);
  const [form, setForm]=useRecoilState(dlFormStore);

  return <div className="page">
    <div className="item">
      <div className="label">运行状态</div>
      <div className="content">
        <Chip variant="flat" size="sm" color={ status ? 'success' : 'warning' }>{ status ? '运行中' : '等待中' }</Chip>
        <Switch aria-label="switcher" size="sm" style={{marginLeft: 20}}/>
      </div>
    </div>
    <div className="item">
      <div className="label">系统操作</div>
      <div className="content">
        <Button size="sm" color="primary" variant="flat">显示日志</Button>
        <Button size="sm" color="primary" variant="flat" style={{marginLeft: 20}}>保存表单</Button>
      </div>
    </div>
    <div className="item">
      <div className="label">RSS来源</div>
      <div className="content">
        <Select aria-label='筛选' size="sm" label={null} defaultSelectedKeys={[form.type]} className="selector">
          <SelectItem key={'mikan'}>Mikan</SelectItem>
          <SelectItem key={'acgrip'}>Acgrip</SelectItem>
        </Select>
      </div>
    </div>
    <div className="item">
      <div className="label">更新频率</div>
      <div className="content">
        <Input size="sm" type="number" className="freq_input" value={form.freq.toString()}></Input>
      </div>
    </div>
    <div className="item">
      <div className="label">Aria2 地址</div>
      <div className="content">
        <Input size="sm" placeholder="http(s)://" value={form.ariaLink}></Input>
      </div>
    </div>
    <div className="item">
      <div className="label">Aria2 密钥</div>
      <div className="content">
      <Input size="sm" type="password" value={form.ariaSecret}></Input>
      </div>
    </div>
  </div>
}