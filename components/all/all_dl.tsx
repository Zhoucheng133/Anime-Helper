import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useState } from "react";
import Dialog from "../dialog";
import axios from "axios";
import { AllItem } from "@/hooks/all";
import Cookies from 'js-cookie';

interface prop{
  isOpen: any,
  onClose: any,
  item: AllItem
}

export default function AllDl({isOpen, onClose, item}: prop){

  const [openDialog, setOpenDialog]=useState(false);
  const [msg, setMsg]=useState('');

  const dlHandler=async ()=>{
    const token=Cookies.get('token')
    if(!token){
      setOpenDialog(true);
      setMsg('token不合法')
      return;
    }
    const {data: res}=await axios.post('/api/all/download', {
      'link': item.url
    }, {
      headers: {
        token,
      }
    })
    if(!res.ok){
      setOpenDialog(true);
      setMsg(res.msg);
    }

    onClose();
  }

  return <>
    <Modal size="sm" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">下载</ModalHeader>
        <ModalBody>
          <div>
            下载这个任务:
          </div>
          <div className="add_dl">
            {item.title}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onPress={onClose}>
            取消
          </Button>
          <Button color="primary" onPress={()=>dlHandler()}>
            下载
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    <Dialog title="下载失败" msg={msg} isOpen={openDialog} onClose={()=>setOpenDialog(false)}></Dialog>
  </>
}