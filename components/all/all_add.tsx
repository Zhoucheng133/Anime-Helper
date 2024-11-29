import { AllItem } from "@/hooks/all";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface props{
  item: AllItem,
  isOpen: any,
  onClose: any
}

export default function AllAdd({item, isOpen, onClose}: props){



  useEffect(()=>{
    const index1=item.title.indexOf('[');
    const index2=item.title.indexOf(']');
    if(index1!=-1 && index2!=-1){
      setAss(item.title.slice(index1+1, index2));
    }else{
      setAss('');
    }

  }, [item])

  const add=()=>{

  }

  const [title, setTitle]=useState('');
  const [ass, setAss]=useState('');

  return <Modal size="md" isOpen={isOpen} onClose={onClose}>
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">添加到下载器</ModalHeader>
      <ModalBody>
        <div className="add_title">
          {item.title}
        </div>
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
}