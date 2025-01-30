import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";

export default function({isOpen, onClose}: any){
  return <Modal size="sm" isOpen={isOpen} onClose={onClose}>
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">加载中</ModalHeader>
      <ModalBody>正在获取所选番剧信息</ModalBody>
      <ModalFooter/>
    </ModalContent>
  </Modal>
}