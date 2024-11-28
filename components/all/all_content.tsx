import { allColumn, AllItem, allStore, download } from "@/hooks/all";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { useRecoilValue } from "recoil"
import AllAdd from "./all_add";

export default function AllContent(){

  const list=useRecoilValue(allStore);
  
  const [thisItem, setThisItem]=useState<AllItem>({title: '', url: ''});
  const {isOpen: openAdd, onOpen: onOpenAdd, onClose: onCloseAdd} = useDisclosure();

  const add=(data: AllItem)=>{
    setThisItem(data);
    onOpenAdd();
  }

  return <div className="page">
    <Table aria-label="content">
      <TableHeader columns={allColumn}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={list as AllItem[]}>
        {
          list.map((item, index)=><TableRow key={index}>
            <TableCell>
              <Tooltip content={item.title}>
                <div className="title_cell">
                  {item.title}
                </div>
              </Tooltip>
            </TableCell>
            <TableCell>
              <div className="op_cell">
              <ButtonGroup size="sm" color="primary" variant="flat">
                <Button onClick={()=>download(item)}>
                  <FontAwesomeIcon style={{width: 10}} icon={faDownload} />
                </Button>
                <Button onClick={()=>add(item)}>
                  添加至
                </Button>
              </ButtonGroup>
              </div>
            </TableCell>
          </TableRow>)
        }
      </TableBody>
    </Table>
    <AllAdd item={thisItem} isOpen={openAdd} onClose={onCloseAdd}></AllAdd>
  </div>
}