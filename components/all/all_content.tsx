import { allColumn, allStore } from "@/hooks/all";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useRecoilValue } from "recoil"

export default function AllContent(){

  const list=useRecoilValue(allStore);

  return <div className="page">
    <Table aria-label="content">
      <TableHeader columns={allColumn}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={list}>
        {
          list.map((item, index)=><TableRow key={index}>
            <TableCell>
              <div className="title_cell">{item.title}</div>
            </TableCell>
            <TableCell>
              <div className="op_cell">
              <ButtonGroup size="sm" color="primary" variant="flat">
                <Button>
                  <FontAwesomeIcon style={{width: 10}} icon={faDownload} />
                </Button>
                <Button>
                  添加至
                </Button>
              </ButtonGroup>
              </div>
            </TableCell>
          </TableRow>)
        }
      </TableBody>
    </Table>
  </div>
}