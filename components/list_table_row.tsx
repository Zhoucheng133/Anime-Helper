import { ListItemInterface } from "@/hooks/interface";
import { listStore, useAddEp, useMinusEp } from "@/hooks/list";
import { faMinus, faPlus, faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Progress, Chip, Button, ButtonGroup} from "@nextui-org/react";
import React from "react";
interface props{
  item: ListItemInterface,
  key: any,
  minusEp: any,
  addEp: any,
  edit: any,
  del: any,
  addDownloader: any,
}

// 判定是否实际上显示多少集
export function analyseEpisode(item: ListItemInterface){
  if(item.time==0){
    return item.episode;
  }
  return calculateEpisodesReleased(item.time)>item.episode?item.episode:calculateEpisodesReleased(item.time);
}

// 计算截至到今天的已更新集数
export function calculateEpisodesReleased(firstEpisodeTimestamp: number): number {
  const tmp = new Date();
  const currentDate = new Date(tmp.getFullYear(), tmp.getMonth(), tmp.getDate());
  const difference = currentDate.getTime() - firstEpisodeTimestamp;
  const daysPassed=Math.floor(difference / (1000 * 60 * 60 * 24));
  const weeksPassed = Math.floor(daysPassed / 7);
  return Math.max(weeksPassed, 0) + 1;
}

// 计算周几
function WeekdayChip(timestamp: number){
  if(timestamp==0){
    return <Chip variant="bordered" size="sm">/</Chip>
  }else{
    const date: Date = new Date(timestamp);
    const weekDay: string = date.toLocaleString('zh-CN', { weekday: 'long' });
    return <Chip variant="bordered" size="sm">{weekDay}</Chip>
  }
}

export default function ListTableRow({item, key, minusEp, addEp, edit, addDownloader, del}: props){

  if(key=='title'){
    return <div className="table_title">{item.title}</div>
  }else if(key=='status'){
    return <div style={{userSelect: 'none'}}>{calculateEpisodesReleased(item.time)<item.episode ? <Chip color="success" variant="flat"  size="sm">更新中</Chip> : <Chip size="sm" variant="flat">已完结</Chip>}</div>
  }else if(key=='weekday'){
    return <div style={{userSelect: 'none'}}>{WeekdayChip(item.time)}</div>
  }else if(key=='progress'){
    let value=item.now/analyseEpisode(item as ListItemInterface)*100;
    return <div style={{width: 220, userSelect: 'none', display: 'flex', alignItems: 'center'}}>
      <div style={{width: 130}}><Progress value={Number(value!)} aria-label={`${value}%`} color={ value==100 ? 'success' : "primary" } size='sm' /></div>
      <div style={{marginLeft: 'auto'}}>{item.now} / { analyseEpisode(item) }</div>
    </div>
  }
  return <div>
    <ButtonGroup size="sm" color="primary" variant="flat">
      <Button onClick={()=>edit(item)}>编辑</Button>
      <Button isIconOnly onClick={()=>minusEp(item)}>
        <FontAwesomeIcon style={{width: 10}} icon={faMinus} />
      </Button>
      <Button isIconOnly  onClick={()=>addEp(item)}>
        <FontAwesomeIcon style={{width: 10}} icon={faPlus} />
      </Button>
      <Button onClick={()=>addDownloader(item)}>添加到</Button>
      <Button isIconOnly onClick={()=>del(item)}>
        <FontAwesomeIcon style={{width: 10}} icon={faTrash} />
      </Button>
    </ButtonGroup>
  </div>
}