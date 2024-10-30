import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react"
import { useEffect, useState } from "react";
import Dialog from "../dialog";
import { ListItemInterface } from "@/hooks/interface";
import { analyseEpisode, calculateEpisodesReleased } from "./list_table_row";
import { getTimestampOfFirstEpisode } from "./list_add";
import { useEdit } from "@/hooks/list";

interface props {
  isOpen: any,
  onClose: any,
  data: ListItemInterface
}

export default function ListEdit({ isOpen, onClose, data }: props) {

  const [title, setTitle] = useState('');
  const [onUpdate, setUpdate] = useState(false);
  const [ep, setEp] = useState(1);
  const [now, setNow] = useState(0);
  const [updateTo, setUpdateTo] = useState(1);
  const [weekday, setWeekday] = useState('星期一');

  const toWeekday = (): string => {
    const wd = new Date(data.time).getDay()
    switch (wd) {
      case 0:
        return '星期日';
      case 1:
        return '星期一';
      case 2:
        return '星期二';
      case 3:
        return '星期三';
      case 4:
        return '星期四';
      case 5:
        return '星期五';
      case 6:
        return '星期六';
      default:
        return '星期一';
    }
  }

  useEffect(() => {
    setWeekday(toWeekday())
    setTitle(data.title);
    setEp(data.episode);
    setNow(data.now);
    setUpdate(calculateEpisodesReleased(data.time) < data.episode);
    setUpdateTo(analyseEpisode(data));
  }, [data])

  useEffect(()=>{
    if(onUpdate){
      setNow(0);
    }
  }, [onUpdate])

  const [msg, setMsg] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleWeekday = (e: any) => {
    setWeekday(e.target.value);
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

  const onCloseDialog = () => {
    setOpenDialog(false);
  }

  const edit=useEdit();

  async function onEdit() {
    if(title.length==0){
      setOpenDialog(true);
      setMsg("标题不能为空");
      return;
    }
    const todayTimestamp = Date.now();
    const wd=convertWeekday();
    const jsonItem: ListItemInterface={
      id: data.id,
      title: title,
      episode: ep,
      now: now,
      time: onUpdate ? getTimestampOfFirstEpisode(todayTimestamp, wd, updateTo) : 0
    }
    const res=await edit(jsonItem);
    if(!res.ok){
      setOpenDialog(true);
      setMsg(res.msg);
      return;
    }else{
      onClose();
    }
  }

  return <>
    <Modal size="md" isOpen={isOpen} onClose={() => onClose()} >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">编辑</ModalHeader>
          <ModalBody>
            <Input label={'标题'} value={title} onChange={(e) => setTitle(e.target.value)} />
            <Checkbox isSelected={onUpdate} onValueChange={setUpdate}>当前在更新</Checkbox>
            <Input label={'集数'} type="number" value={ep.toString()} onChange={(e) => {
              if (e.target.value && parseInt(e.target.value) > 0) {
                setEp(parseInt(e.target.value))
              }
            }} />
            <Input label={'观看至'} type="number" value={now.toString()} onChange={(e) => {
              if (e.target.value && parseInt(e.target.value) >= 0 && ((!onUpdate && parseInt(e.target.value)<=ep) || (onUpdate && parseInt(e.target.value)<=updateTo))) {
                setNow(parseInt(e.target.value))
              }
            }} />
            {
              onUpdate && <Input label={'更新至'} type="number" value={updateTo.toString()} onChange={(e) => {
                if (e.target.value && parseInt(e.target.value) >= 0 && parseInt(e.target.value)<=ep) {
                  setUpdateTo(parseInt(e.target.value))
                }
              }} />
            }
            {
              onUpdate && <Select label={'更新周'} selectedKeys={[weekday]} onChange={handleWeekday} selectionMode="single">
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
            <Button variant="light" onPress={() => onClose()}>
              取消
            </Button>
            <Button color="primary" onPress={() => onEdit()}>
              完成
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
    <Dialog title={"添加失败"} msg={msg} isOpen={openDialog} onClose={() => onCloseDialog()} />
  </>
}