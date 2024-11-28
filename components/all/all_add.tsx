import { AllItem } from "@/hooks/all";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";

interface props{
  item: AllItem,
  isOpen: any,
  onClose: any
}

export default function AllAdd({item, isOpen, onClose}: props){

  const add=()=>{

  }

  return <Modal size="md" isOpen={isOpen} onClose={onClose}>
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">添加到</ModalHeader>
      <ModalBody>
        {item.title}
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