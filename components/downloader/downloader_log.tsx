import { dlLogStore } from "@/hooks/downloader";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useRecoilValue } from "recoil";

export interface LogInterface{
  ok: boolean,
  msg: string,
  time: number
}

export default function({isOpen, onClose}: any){

  const data=useRecoilValue(dlLogStore);

  return <Modal size="xl" isOpen={isOpen} onClose={onClose}>
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">日志</ModalHeader>
      <ModalBody>
        {data.map((item, index)=><div key={index}>
          { item.msg }
        </div>)}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onPress={onClose}>
          完成
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}