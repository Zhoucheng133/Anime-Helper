import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";

interface props{
  title: string,
  msg: string,
  isOpen: any,
  onClose: any,
}

export default function Dialog({title, msg, isOpen, onClose}: props){
  return <Modal size="sm" isOpen={isOpen} onClose={onClose}>
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">{ title }</ModalHeader>
      <ModalBody>{ msg }</ModalBody>
      <ModalFooter>
        <Button color="primary" onPress={onClose}>
          好的
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}