import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";

export function ListDel({isOpen, onClose}: any){
  return <Modal size="md" isOpen={isOpen} onClose={onClose} >
    <ModalContent>
      {(onClose)=>(
        <>
          <ModalHeader className="flex flex-col gap-1">添加番剧</ModalHeader>
          <ModalBody>
            hello
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              取消
            </Button>
            <Button color="primary" onPress={onClose}>
              添加
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
}