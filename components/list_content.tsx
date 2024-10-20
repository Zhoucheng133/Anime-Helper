import { listStore } from "@/hooks/list";
import { Button, Select, Option, Input, Table, Sheet } from "@mui/joy";
import { useState } from "react";
import { useRecoilState } from "recoil";
import ListTableRow, { calculateEpisodesReleased } from "./list_table_row";
import { ListItemInterface } from "@/hooks/interface";

export default function ListContent(){

  const [type, setType]=useState('进行中');
  const [searchKey, setSearchKey]=useState('');

  const [list, setList]=useRecoilState(listStore);

  const handleTypeChange=(_: any, option: any)=>{
    setType(option);
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
      <Button>添加</Button>
      <Select className='selector' defaultValue="进行中" onChange={handleTypeChange}>
        <Option value="所有">所有</Option>
        <Option value="进行中">进行中</Option>
        <Option value="更新中">更新中</Option>
        <Option value="已完结">已完结</Option>
        <Option value="已看完">已看完</Option>
        <Option value="搜索">搜索</Option>
      </Select>
      <Input className="search_box" disabled={type!='搜索'} value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}></Input>
    </div>
    <Sheet sx={(_) => ({
      overflow: 'auto',
      backgroundColor: 'transparent'
    })}>
      <Table className="table">
        <thead>
          <tr>
            <th style={{ width: 250 }}>标题</th>
            <th style={{ width: 60 }}>状态</th>
            <th style={{ width: 60 }}>更新周</th>
            <th style={{ width: 200 }}>进度</th>
            <th style={{ width: 210 }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item)=>{
            if(show(item)){
              return <ListTableRow key={item.id} data={item} />
            }
          })}
        </tbody>
      </Table>
    </Sheet>
  </div>
}