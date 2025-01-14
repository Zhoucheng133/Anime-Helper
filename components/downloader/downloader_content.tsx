import { bangumi, dlFormStore, dlStatusStore, exclusionTableColumn, saveForm, toggleRun, useLog } from "@/hooks/downloader"
import { Accordion, AccordionItem, Button, Chip, Input, Select, SelectItem, Switch, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import { useRecoilState } from "recoil";
import { bangumiTableColumn } from "@/hooks/downloader";
import DownloaderAddBangumi from "./downloader_add_bangumi";
import DownloaderDelBangumi from "./downloader_del_bangumi";
import DownloaderAddExclusion from "./downloader_add_exclusion";
import DownloaderDelExclusion from "./downloader_del_exclusion";
import DownloaderLog from "./downloader_log";
import { useState } from "react";
import Dialog from "../dialog";

export default function DownloaderContent(){

  const [status, setStatus]=useRecoilState(dlStatusStore);
  const [form, setForm]=useRecoilState(dlFormStore);

  const {isOpen: openAddBangumi, onOpen: onOpenAddBangumi, onClose: onCloseAddBangumi} = useDisclosure();
  const {isOpen: openAddExclusion, onOpen: onOpenAddExclusion, onClose: onCloseAddExclusion} = useDisclosure();
  const {isOpen: openDelBangumi, onOpen: onOpenDelBangumi, onClose: onCloseDelBangumi} = useDisclosure();
  const {isOpen: openDelExclusion, onOpen: onOpenDelExclusion, onClose: onCloseDelExclusion} = useDisclosure();
  const {isOpen: openLog, onOpen: onOpenLog, onClose: onCloseLog} = useDisclosure();

  const [bangumiItem, setBangumiItem]=useState<bangumi>({title: '', ass: ''});
  const [exclusionItem, setExclusionItem]=useState<string>('');
  const [msg, setMsg]=useState('');
  const [title, setTitle]=useState('');
  const [openDialog, setOpenDialog]=useState(false);

  const save=async ()=>{
    const res=await saveForm(form);
    if(res.ok){
      setTitle('保存表单成功');
      setMsg('已将此表单保存至服务器');
      setOpenDialog(true);
    }else{
      setTitle('保存表单失败')
      setMsg(res.msg);
      setOpenDialog(true);
    }
    
  }
  const getlog=useLog();

  const showLog=async ()=>{
    await getlog();
    onOpenLog();
  }

  const typeChange=(key: string)=>{
    const type=key;
    setForm({
      ...form,
      type
    })
  }

  const freqChange=(val: string)=>{
    const freq=parseInt(val);
    if(freq<15){
      return;
    }
    setForm({
      ...form,
      freq
    })
  }

  const ariaChange=(val: string)=>{
    setForm({
      ...form,
      ariaLink: val
    })
  }

  const secretChange=(val: string)=>{
    setForm({
      ...form,
      ariaSecret: val
    })
  }

  const toggle=async (val: boolean)=>{

    if(form.ariaLink.length==0){
      setTitle('启动失败');
      setMsg('Aria地址不能为空');
      setOpenDialog(true);
      return;
    }else if(form.ariaSecret.length==0){
      setTitle('启动失败');
      setMsg('Aria密钥不能为空');
      setOpenDialog(true);
      return;
    }else if(form.bangumi.length==0){
      setTitle('启动失败');
      setMsg('至少需要添加一个番剧');
      setOpenDialog(true);
      return;
    }
    setStatus(val)
    if(val){
      const res=await saveForm(form);
      if(!res.ok){
        setTitle('保存表单失败')
        setMsg(res.msg);
        setOpenDialog(true);
        return;
      }
    }
    await toggleRun(val);
  }

  const delBangumi=(item: bangumi)=>{
    setBangumiItem(item);
    onOpenDelBangumi();
  }

  const delExclusion=(item: string)=>{
    setExclusionItem(item);
    onOpenDelExclusion()
  }

  return <div className="page">
    <div className="item">
      <div className="label">运行状态</div>
      <div className="content">
        <Chip variant="flat" size="sm" color={ status ? 'success' : 'warning' }>{ status ? '运行中' : '等待中' }</Chip>
        <Switch aria-label="switcher" size="sm" style={{marginLeft: 20}} isSelected={status} onValueChange={(value)=>toggle(value)}/>
      </div>
    </div>
    <div className="item">
      <div className="label">系统操作</div>
      <div className="content">
        <Button size="sm" variant="flat" onClick={()=>showLog()}>显示日志</Button>
        <Button size="sm" variant="flat" style={{marginLeft: 20}} onClick={()=>save()}>保存表单</Button>
      </div>
    </div>
    <div className="item">
      <div className="label">RSS来源</div>
      <div className="content">
        <Select aria-label='筛选' size="sm" label={null} defaultSelectedKeys={[form.type]} className="selector" onSelectionChange={(key)=>typeChange(key as string)} isDisabled={status}>
          <SelectItem key={'mikan'}>Mikan</SelectItem>
          <SelectItem key={'acgrip'}>Acgrip</SelectItem>
        </Select>
      </div>
    </div>
    <div className="item">
      <div className="label">更新频率</div>
      <div className="content">
        <Input isDisabled={status} size="sm" type="number" className="freq_input" value={form.freq.toString()} onValueChange={(value)=>freqChange(value)}></Input>
        <div style={{marginLeft: 5}}>分钟</div>
      </div>
    </div>
    <div className="item">
      <div className="label">Aria2 地址</div>
      <div className="content">
        <Input isDisabled={status} size="sm" placeholder="http(s)://" value={form.ariaLink} onValueChange={(value)=>ariaChange(value)}></Input>
      </div>
    </div>
    <div className="item">
      <div className="label">Aria2 密钥</div>
      <div className="content">
      <Input isDisabled={status} size="sm" type="password" value={form.ariaSecret} onValueChange={(value)=>secretChange(value)}></Input>
      </div>
    </div>
    <Accordion selectionMode="multiple" defaultExpandedKeys={['1', '2']}>
      <AccordionItem key="1" aria-label="list" title="番剧表">
        <Button size="sm" color="primary" style={{marginBottom: 10}} onClick={()=>onOpenAddBangumi()}>添加</Button>
        <Table aria-label='bangumi list'>
          <TableHeader columns={bangumiTableColumn}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={form.bangumi}>
            {
              form.bangumi.map((item, index)=>(
                <TableRow key={index}>
                  {(columnKey)=>{
                    if(columnKey=='ass'){
                      return <TableCell>{item.ass}</TableCell>
                    }else if(columnKey=='title'){
                      return <TableCell>{item.title}</TableCell>
                    }
                    return <TableCell style={{userSelect: 'none', width: 90}}>
                      <Button size="sm" variant="flat" color="danger" onClick={()=>delBangumi(item)}>删除</Button>
                    </TableCell>
                  }}
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </AccordionItem>
      <AccordionItem key="2" aria-label="exclude" title="排除关键字">
        <Button size="sm" color="primary" style={{marginBottom: 10}} onPress={()=>onOpenAddExclusion()}>添加</Button>
        <Table aria-label='exclusion list'>
          <TableHeader columns={exclusionTableColumn}>
            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={form.exclusions}>
            {
              form.exclusions.map((item, index)=>(
                <TableRow key={index}>
                  {(columnKey)=>{
                    if(columnKey=='value'){
                      return <TableCell>{item}</TableCell>
                    }
                    return <TableCell style={{userSelect: 'none', width: 90}}>
                      <Button size="sm" variant="flat" color="danger" onPress={()=>delExclusion(item)}>删除</Button>
                    </TableCell>
                  }}
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </AccordionItem>
    </Accordion>
    <DownloaderAddBangumi isOpen={openAddBangumi} onClose={onCloseAddBangumi} />
    <DownloaderAddExclusion isOpen={openAddExclusion} onClose={onCloseAddExclusion}/>
    <DownloaderDelBangumi isOpen={openDelBangumi} onClose={onCloseDelBangumi} data={bangumiItem} />
    <DownloaderDelExclusion isOpen={openDelExclusion} onClose={onCloseDelExclusion} data={exclusionItem} />
    <Dialog title={title} msg={msg} isOpen={openDialog} onClose={()=>setOpenDialog(false)}/>
    <DownloaderLog isOpen={openLog} onClose={onCloseLog} />
  </div>
}