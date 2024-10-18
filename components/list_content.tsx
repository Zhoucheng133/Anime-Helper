import { Button, Select, Option, Input } from "@mui/joy";
import { useState } from "react";

export default function ListContent(){

  const [type, setType]=useState('进行中');
  const [searchKey, setSearchKey]=useState('');

  const handleTypeChange=(_: any, option: any)=>{
    setType(option);
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
  </div>
}