import { allColumn, AllItem, allStore } from "@/hooks/all";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { useRecoilValue } from "recoil"
import AllAdd from "./all_add";
import AllDl from "./all_dl";

export default function AllContent(){

  const list=useRecoilValue(allStore);
  
  const [thisItem, setThisItem]=useState<AllItem>({title: '', url: ''});
  const {isOpen: openAdd, onOpen: onOpenAdd, onClose: onCloseAdd} = useDisclosure();
  const [openDl, setOpenDl]=useState(false);

  const [page, setPage]=useState(1);
  const items=useMemo(()=>{
    const start = (page - 1) * 20;
    const end = start + 20;
    return list.slice(start, end);
  }, [page, list]);
  
  const add=(data: AllItem)=>{
    setThisItem(data);
    onOpenAdd();
  }

  const download=(data: AllItem)=>{
    setThisItem(data);
    setOpenDl(true);
  }

  return <div className="page">
    <Table aria-label="content" bottomContent={
      <div className="flex w-full justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={5}
          onChange={(page) => setPage(page)}
        />
      </div>
    }>
      <TableHeader columns={allColumn}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={items as AllItem[]}>
        {
          items.map((item, index)=><TableRow key={index}>
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
    <AllDl isOpen={openDl} onClose={()=>setOpenDl(false) } item={thisItem}></AllDl>
  </div>
}