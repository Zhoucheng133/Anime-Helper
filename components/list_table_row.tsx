import { ListItem } from "@/hooks/interface";
import { Box, Chip, LinearProgress, Typography } from "@mui/joy";
import React, { useState } from "react";
interface props{
  data: ListItem,
}

// 判定是否实际上显示多少集
export function analyseEpisode(item: ListItem){
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

export default function ListTableRow({data}: props){

  let value=data.now/analyseEpisode(data as ListItem)*100;

  return <React.Fragment>
    <tr>
      <td>{data.title}</td>
      <td className="no_select">{calculateEpisodesReleased(data.time)<data.episode ? <Chip color="success" variant="solid" style={{fontSize: 13}}>更新中</Chip> : <Chip style={{fontSize: 13}}>已完结</Chip>}</td>
      <td className="no_select">{analyseEpisode(data as ListItem)}</td>
      <td className="no_select">{data.now}</td>
      <td className="no_select">
        <LinearProgress
          determinate
          variant="soft"
          color={ value==100 ? 'success' : "primary"}
          size="sm"
          value={Number(value!)}
          sx={{
            "--LinearProgress-thickness": "8px"
          }}
        >
        </LinearProgress>
      </td>
      <td></td>
    </tr>
  </React.Fragment>
}