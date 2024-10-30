import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import Dialog from "../dialog";
import { useEffect, useState } from "react";
import { addTo } from "@/hooks/list";

interface props{
  isOpen: any,
  onClose: any,
  titleProp: string,
}

export default function({isOpen, onClose, titleProp}: props){
  const [msg, setMsg]=useState('');
  const [openDialog, setOpenDialog]=useState(false);

  const [title, setTitle]=useState('');
  const [ass, setAss]=useState('');

  useEffect(()=>{
    setTitle(titleProp);
  }, [titleProp])
  
  const add=()=>{
    if(title.length==0){
      setMsg('标题不能为空')
      setOpenDialog(true);
      return;
    }else if(ass.length==0){
      setMsg('字幕组不能为空')
      setOpenDialog(true);
      return;
    }

    addTo({title, ass})
    
    setTitle('');
    setAss('');
    onClose();
  }

  return <>
    <Modal size="md" isOpen={isOpen} onClose={onClose} >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">添加一个番剧</ModalHeader>
        <ModalBody>
        <Input label='标题' value={title} onValueChange={setTitle}></Input>
          <Input label='字幕组' value={ass} onValueChange={setAss}></Input>
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose}>
            取消
          </Button>
          <Button color="primary" onPress={()=>add()}>
            添加
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    <Dialog title={"添加失败"} msg={msg} isOpen={openDialog} onClose={()=>setOpenDialog(false)}/>
  </>
}