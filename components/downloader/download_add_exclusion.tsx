import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import Dialog from "../dialog";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { dlFormStore } from "@/hooks/downloader";

export default function({isOpen, onClose}: any){

  const [msg, setMsg]=useState('');
  const [openDialog, setOpenDialog]=useState(false);
  const [form, setForm]=useRecoilState(dlFormStore);
  const [key, setKey]=useState('');

  const add=()=>{
    if(key.length==0){
      setMsg('关键字不能为空');
      return;
    }
    setForm({
      ...form,
      exclusions: [
        ...form.exclusions,
        key,
      ]
    })
    onClose();
  }

  return  <>
    <Modal size="md" isOpen={isOpen} onClose={onClose} >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">添加一个排除关键字</ModalHeader>
        <ModalBody>
          <Input label='关键字' value={key} onValueChange={setKey}></Input>
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