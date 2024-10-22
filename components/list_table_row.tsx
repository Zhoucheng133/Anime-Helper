import { ListItemInterface } from "@/hooks/interface";
import { useAddEp, useMinusEp } from "@/hooks/list";
import { faMinus, faPlus, faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Progress, Chip, Button, ButtonGroup} from "@nextui-org/react";
import React from "react";
interface props{
  item: ListItemInterface,
  key: any,
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

export default function ListTableRow({item, key}: props){
  if(key=='title'){
    return <div className="table_title">{item.title}</div>
  }else if(key=='status'){
    return <div>{calculateEpisodesReleased(item.time)<item.episode ? <Chip color="success" variant="flat"  size="sm">更新中</Chip> : <Chip size="sm" variant="flat">已完结</Chip>}</div>
  }else if(key=='weekday'){
    return <div>{WeekdayChip(item.time)}</div>
  }else if(key=='progress'){
    let value=item.now/analyseEpisode(item as ListItemInterface)*100;
    return <div style={{width: 220}}>
      <Progress value={Number(value!)} aria-label={`${value}%`} color={ value==100 ? 'success' : "primary" } size='sm' />
    </div>
  }
  return <div></div>
}

// export default function ListTableRow({data}: props){

//   let value=data.now/analyseEpisode(data as ListItemInterface)*100;
//   const addEp=useAddEp();
//   const minusEp=useMinusEp();

//   return <React.Fragment>
//     <tr>
//       <td>{data.title}</td>
//       <td className="no_select">{calculateEpisodesReleased(data.time)<data.episode ? <Chip color="success" variant="flat"  size="sm">更新中</Chip> : <Chip size="sm" variant="flat">已完结</Chip>}</td>
//       <td className="no_select">{WeekdayChip(data.time)}</td>
//       <td className="no_select">
//         <div className="progress_slot">
//           <Progress value={Number(value!)} color={ value==100 ? 'success' : "primary" } size='sm' />
//           <div className="progress_label">{data.now} / {analyseEpisode(data as ListItemInterface)}</div>
//         </div>
//       </td>
//       <td>
//       {/* <ButtonGroup size="sm">
//         <Button>编辑</Button>
//         <IconButton onClick={()=>minusEp(data)}>
//           <FontAwesomeIcon icon={faMinus} />
//         </IconButton>
//         <IconButton onClick={()=>addEp(data)}>
//           <FontAwesomeIcon icon={faPlus} />
//         </IconButton>
//         <Button>添加到</Button>
//         <IconButton>
//           <FontAwesomeIcon icon={faTrash} />
//         </IconButton>
//       </ButtonGroup> */}
//       <ButtonGroup size="sm">
//         <Button>编辑</Button>
//         <Button isIconOnly>
//           <FontAwesomeIcon icon={faMinus} />
//         </Button>
//         <Button isIconOnly>
//         <FontAwesomeIcon icon={faPlus} />
//         </Button>
//       </ButtonGroup>
//       </td>
//     </tr>
//   </React.Fragment>
// }