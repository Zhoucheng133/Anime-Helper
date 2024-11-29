import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";

export default function AllDl({isOpen, onClose, item}: any){
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
          <Button color="primary" onPress={onClose}>
            下载
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
}