import { Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export function ListAdd({isOpen, onClose}: any){

  const [title, setTitle]=useState('');
  const [onUpdate, setUpdate]=useState(false);
  const [ep, setEp]=useState(1);
  const [now, setNow]=useState(0);
  const [updateTo, setUpdateTo]=useState(1);
  const [weekday, setWeekday]=useState('星期一');

  function onAdd(){
    if(title.length==0){
      
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

  return <Modal size="md" isOpen={isOpen} onClose={()=>beforeClose()} >
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
          <Button color="danger" variant="light" onPress={()=>beforeClose()}>
            取消
          </Button>
          <Button color="primary" onPress={()=>onAdd()}>
            添加
          </Button>
        </ModalFooter>
      </>
    </ModalContent>
  </Modal>
}