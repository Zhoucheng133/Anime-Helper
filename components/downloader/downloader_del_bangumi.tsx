import { bangumi, dlFormStore } from "@/hooks/downloader";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useRecoilState } from "recoil";

interface props{
  isOpen: any,
  onClose: any,
  data: bangumi
}

export default function({isOpen, onClose, data}: props){

  const [form, setForm]=useRecoilState(dlFormStore);

  const del=()=>{
    setForm({
      ...form,
      bangumi: [...form.bangumi].filter((item)=>{
        return !(item.ass==data.ass && item.title==data.title)
      })
    })
    onClose();
  }

  return <Modal size="sm" isOpen={isOpen} onClose={onClose}>
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">删除《{data.title}》</ModalHeader>
      <ModalBody>你确定要删除它吗？</ModalBody>
      <ModalFooter>
        <Button onPress={onClose}>
          取消
        </Button>
        <Button color="danger" onPress={()=>del()}>
          继续
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}