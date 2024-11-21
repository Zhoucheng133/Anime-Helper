import { listStore, tableColumn, useAddEp, useMinusEp } from "@/hooks/list";
import {Button, Input, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure} from "@nextui-org/react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import ListTableRow, { calculateEpisodesReleased } from "./list_table_row";
import { ListItemInterface } from "@/hooks/interface";
import { ListAdd } from "./list_add";
import { ListDel } from "./list_del";
import ListEdit from "./list_edit";
import ListAddTo from "./list_addto";

export default function ListContent(){

  const [type, setType]=useState('进行中');
  const [weekday, setWeekday]=useState('星期一');
  const [searchKey, setSearchKey]=useState('');

  const list=useRecoilValue(listStore);
  const {isOpen: openAdd, onOpen: onOpenAdd, onClose: onCloseAdd} = useDisclosure();
  const {isOpen: openDel, onOpen: onOpenDel, onClose: onCloseDel} = useDisclosure();
  const {isOpen: openEdit, onOpen: onOpenEdit, onClose: onCloseEdit} = useDisclosure();
  const {isOpen: openAddTo, onOpen: onOpenAddTo, onClose: onCloseAddTo} = useDisclosure();

  const [item, setItem]=useState<ListItemInterface>()
  

  const addEp=useAddEp();
  const minusEp=useMinusEp();

  const edit=(item: ListItemInterface)=>{
    setItem(item);
    onOpenEdit();
  }

  const addDownloader=(item: ListItemInterface)=>{
    setItem(item);
    onOpenAddTo();
  }

  const del=(item: ListItemInterface)=>{
    setItem(item);
    onOpenDel();
  }

  const handleTypeChange=(e: any)=>{
    setType(e.target.value);
  }

  const add=()=>{
    onOpenAdd();
  }

  const show=(item: ListItemInterface): boolean=>{
    if(type=='所有'){
      return true;
    }else if(type=='进行中'){
      return !(calculateEpisodesReleased(item.time)>=item.episode && item.now==item.episode);
    }else if(type=='更新中'){
      return calculateEpisodesReleased(item.time)<item.episode;
    }else if(type=='已完结'){
      return calculateEpisodesReleased(item.time)>=item.episode;
    }else if(type=='已看完'){
      return calculateEpisodesReleased(item.time)>=item.episode && item.now==item.episode;
    }else if(type=='搜索'){
      return item.title.includes(searchKey);
    }else{
      if(item.time==0){
        return false;
      }
      const date: Date = new Date(item.time);
      const weekDay: string = date.toLocaleString('zh-CN', { weekday: 'long' });
      return weekDay==weekday;
    }
  }

  return <div className="page">
    <div className="tool_bar">
      <Button color='primary' onClick={()=>add()}>添加</Button>
      <Select className='selector' aria-label='筛选' label={null} onChange={handleTypeChange} selectedKeys={[type]} defaultSelectedKeys={['进行中']}>
        <SelectItem key="所有">所有</SelectItem>
        <SelectItem key="进行中">进行中</SelectItem>
        <SelectItem key="更新中">更新中</SelectItem>
        <SelectItem key="已完结">已完结</SelectItem>
        <SelectItem key="已看完">已看完</SelectItem>
        <SelectItem key="搜索">搜索</SelectItem>
        <SelectItem key="更新周">更新周</SelectItem>
      </Select>
      { type=='搜索' && <Input placeholder='输入关键词搜索' className="search_box" disabled={type!='搜索'} value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}></Input> }
      { type=='更新周' && <Select className='selector' aria-label='更新周' label={null} selectedKeys={[weekday]} onChange={(e)=>setWeekday(e.target.value)}>
          <SelectItem key="星期一">星期一</SelectItem>
          <SelectItem key="星期二">星期二</SelectItem>
          <SelectItem key="星期三">星期三</SelectItem>
          <SelectItem key="星期四">星期四</SelectItem>
          <SelectItem key="星期五">星期五</SelectItem>
          <SelectItem key="星期六">星期六</SelectItem>
          <SelectItem key="星期日">星期日</SelectItem>
        </Select>}
    </div>
    <Table aria-label="content">
      <TableHeader columns={tableColumn}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={list.filter((item)=>show(item))}>
        {(item)=>(
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>
                {ListTableRow({item, key: columnKey, minusEp, addEp, edit, addDownloader, del})}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <ListAdd onClose={onCloseAdd} isOpen={openAdd} />
    <ListDel isOpen={openDel} onClose={onCloseDel} data={item}/>
    {
      item!=undefined && <ListEdit isOpen={openEdit} onClose={onCloseEdit} data={item} />
    }
    {
      item!=undefined && <ListAddTo onClose={onCloseAddTo} isOpen={openAddTo} titleProp={item?.title} />
    }
  </div>
}