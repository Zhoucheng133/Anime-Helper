import { ListItemInterface } from "@/hooks/interface";
import { useDel } from "@/hooks/list";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import Dialog from "../dialog";
import { useState } from "react";

interface props{
  isOpen: any,
  onClose: any,
  data: ListItemInterface | undefined
}

export function ListDel({isOpen, onClose, data}: props){
  const [msg, setMsg]=useState('');
    const [openDialog, setOpenDialog]=useState(false);

    const onCloseDialog=()=>{
      setOpenDialog(false);
    }
    
    const del=useDel();
    const delHandler=async ()=>{
      if(data){
        const res=await del(data.id);
        if(res.ok){
          onClose();
        }else{
          setOpenDialog(true);
          setMsg(res.msg);
        }
      }
    }
  if(data){
    return <>
      <Modal size="md" isOpen={isOpen} onClose={onClose} >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">删除《{data.title}》</ModalHeader>
          <ModalBody>
            你确定要删除它吗？
          </ModalBody>
          <ModalFooter>
            <Button variant="light" onPress={onClose}>
              取消
            </Button>
            <Button color="danger" onPress={()=>delHandler()}>
              删除
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Dialog title={"删除失败"} msg={msg} isOpen={openDialog} onClose={()=>onCloseDialog()}/>
    </>
  }else{
    return <></>
  }
}