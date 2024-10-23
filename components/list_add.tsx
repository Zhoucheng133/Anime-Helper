import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import Dialog from "./dialog";
import { ListItemInterface } from "@/hooks/interface";
import { nanoid } from "nanoid";
import { useAdd } from "@/hooks/list";

function resetToMidnight(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// 获取某一周的指定星期几的时间戳
export function getTimestampOfFirstEpisode(todayTimestamp: number, releaseDay: number, episodesReleased: number): number {
  const today = resetToMidnight(new Date(todayTimestamp));
  const daysPassed = (episodesReleased - 1) * 7;
  const currentDay = today.getDay();
  const offset = (currentDay - releaseDay + 7) % 7;
  const daysSinceFirstEpisode = daysPassed + offset;
  const firstEpisodeDate = new Date(today.getTime() - daysSinceFirstEpisode * 24 * 60 * 60 * 1000);
  return firstEpisodeDate.getTime();
}

export function ListAdd({isOpen, onClose}: any){

  const [title, setTitle]=useState('');
  const [onUpdate, setUpdate]=useState(false);
  const [ep, setEp]=useState(1);
  const [now, setNow]=useState(0);
  const [updateTo, setUpdateTo]=useState(1);
  const [weekday, setWeekday]=useState('星期一');

  const add=useAdd();

  const [msg, setMsg]=useState('');
  const [openDialog, setOpenDialog]=useState(false);

  const onCloseDialog=()=>{
    setOpenDialog(false);
  }

  function convertWeekday(): number {
    switch (weekday) {
      case '星期日':
        return 0;
      case '星期一':
        return 1;
      case '星期二':
        return 2;
      case '星期三':
        return 3;
      case '星期四':
        return 4;
      case '星期五':
        return 5;
      case '星期六':
        return 6;
      default:
        return 1;
    }
  }
  
  async function onAdd(){
    if(title.length==0){
      setOpenDialog(true);
      setMsg("标题不能为空");
      return;
    }
    const todayTimestamp = Date.now();
    const wd=convertWeekday();
    const jsonItem: ListItemInterface={
      id: nanoid(),
      title: title,
      episode: ep,
      now: now,
      time: onUpdate ? getTimestampOfFirstEpisode(todayTimestamp, wd, updateTo) : 0
    }
    const res=await add(jsonItem);
    if(!res.ok){
      setOpenDialog(true);
      setMsg(res.msg);
      return;
    }else{
      beforeClose();
    }
  }

  function beforeClose(){
    setTitle('');
    setUpdate(false);
    setEp(1);
    setNow(0);
    setUpdateTo(1);
    setWeekday('星期一');
    onClose();
  }

  const handleWeekday=(e: any)=>{
    setWeekday(e.target.value);
  }

  return <>
    <Modal size="md" isOpen={isOpen} onClose={()=>beforeClose()} >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">添加一个番剧</ModalHeader>
          <ModalBody>
            <Input label={'标题'} value={title} onChange={(e)=>setTitle(e.target.value)} />
            <Checkbox isSelected={onUpdate} onValueChange={setUpdate}>当前在更新</Checkbox>
            <Input label={'集数'} type="number" value={ep.toString()} onChange={(e)=>{
              if(e.target.value && parseInt(e.target.value)>0){
                setEp(parseInt(e.target.value))
              }
            }} />
            <Input label={'观看至'} type="number" value={now.toString()} onChange={(e)=>{
              if(e.target.value && parseInt(e.target.value)>=0){
                setNow(parseInt(e.target.value))
              }
            }} />
            {
              onUpdate && <Input label={'更新至'} type="number" value={updateTo.toString()} onChange={(e)=>{
                if(e.target.value && parseInt(e.target.value)>=0){
                  setUpdateTo(parseInt(e.target.value))
                }
              }} />
            }
            {
              onUpdate && <Select label={'更新周'} defaultSelectedKeys={['星期一']} onChange={handleWeekday}>
                <SelectItem key={'星期一'}>星期一</SelectItem>
                <SelectItem key={'星期二'}>星期二</SelectItem>
                <SelectItem key={'星期三'}>星期三</SelectItem>
                <SelectItem key={'星期四'}>星期四</SelectItem>
                <SelectItem key={'星期五'}>星期五</SelectItem>
                <SelectItem key={'星期六'}>星期六</SelectItem>
                <SelectItem key={'星期日'}>星期日</SelectItem>
              </Select>
            }
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={()=>beforeClose()}>
              取消
            </Button>
            <Button color="primary" onPress={()=>onAdd()}>
              添加
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
    <Dialog title={"添加失败"} msg={msg} isOpen={openDialog} onClose={()=>onCloseDialog()}/>
  </>
}