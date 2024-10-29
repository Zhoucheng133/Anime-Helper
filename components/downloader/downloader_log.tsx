import { dlLogStore } from "@/hooks/downloader";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tooltip } from "@nextui-org/react";
import { useRecoilValue } from "recoil";
import dayjs from 'dayjs';

export interface LogInterface{
  ok: boolean,
  msg: string,
  time: number
}

export default function({isOpen, onClose}: any){

  const data=useRecoilValue(dlLogStore);

  return <Modal size="xl" isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">日志</ModalHeader>
      <ModalBody className="gap-0">
        {data.map((item, index)=><div key={index}>
          <Tooltip content={item.msg}>
            <div className="logItem" style={{'color': item.ok ? 'green' : 'red' }}>
              <div className="log_label">{ item.msg }</div>
              <div className="log_time">{ dayjs(item.time).format("YYYY-MM-DD HH:mm") }</div>
            </div>
          </Tooltip>
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