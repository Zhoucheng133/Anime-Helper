import { listStore, tableColumn, useAddEp, useMinusEp } from "@/hooks/list";
import {Button, Input, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure} from "@nextui-org/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import ListTableRow, { calculateEpisodesReleased } from "./list_table_row";
import { ListItemInterface } from "@/hooks/interface";
import { ListAdd } from "./list_add";

export default function ListContent(){

  const [type, setType]=useState('进行中');
  const [searchKey, setSearchKey]=useState('');

  const [list, setList]=useRecoilState(listStore);
  const {isOpen: openAdd, onOpen: onOpenAdd, onClose: onCloseAdd} = useDisclosure();

  const addEp=useAddEp();
  const minusEp=useMinusEp();

  const edit=(item: ListItemInterface)=>{
    console.log(item);
  }

  const addDownloader=(item: ListItemInterface)=>{
    console.log(item);
  }

  const del=(item: ListItemInterface)=>{
    console.log(item);
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
    }else{
      return item.title.includes(searchKey);
    }
  }

  return <div className="page">
    <div className="tool_bar">
      <Button color='primary' onClick={()=>add()}>添加</Button>
      <Select className='selector' aria-label='筛选' label={null} onChange={handleTypeChange} defaultSelectedKeys={['进行中']}>
        <SelectItem key="所有">所有</SelectItem>
        <SelectItem key="进行中">进行中</SelectItem>
        <SelectItem key="更新中">更新中</SelectItem>
        <SelectItem key="已完结">已完结</SelectItem>
        <SelectItem key="已看完">已看完</SelectItem>
        <SelectItem key="搜索">搜索</SelectItem>
      </Select>
      <Input placeholder={ type=='搜索' ? '输入关键词搜索' : '需要在左侧选择搜索'} className="search_box" disabled={type!='搜索'} value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}></Input>
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
  </div>
}