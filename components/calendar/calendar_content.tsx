import { calendarStore } from "@/hooks/calendar";
import { ListItemInterface } from "@/hooks/interface";
import { listStore } from "@/hooks/list";
import { Accordion, AccordionItem, Chip, useDisclosure } from "@nextui-org/react";
import { useRecoilValue } from "recoil";
import { CalendarAdd } from "./calendar_add";

interface CalendarItemInterface{
  id: number,
  title: string,
}

export default function CalendarContent(){

  const {isOpen, onOpen, onClose} = useDisclosure();

  const add=(item: CalendarItemInterface)=>{
    onOpen();
  }

  const isFollow=(data: CalendarItemInterface): boolean=>{
    const index=list.find((item)=>item.title==data.title)
    if(index){
      return true;
    }
    return false;
  }

  const toWeekday = (wd: number): string => {
    switch (wd) {
      case 0:
        return '星期日';
      case 1:
        return '星期一';
      case 2:
        return '星期二';
      case 3:
        return '星期三';
      case 4:
        return '星期四';
      case 5:
        return '星期五';
      case 6:
        return '星期六';
      default:
        return '星期一';
    }
  }

  const calendar: CalendarItemInterface[][]=useRecoilValue(calendarStore);
  const list: ListItemInterface[]=useRecoilValue(listStore);

  return <div className="page">
    <Accordion selectionMode="multiple" defaultExpandedKeys={Array.from({ length: 7 }, (_, i) => i.toString())}>
      {
        calendar.map((citem, cindex)=>(
          <AccordionItem key={cindex} aria-label={toWeekday(cindex)} title={toWeekday(cindex)}>
            { citem.map((item)=>{
              if(isFollow(item)){
                return <Chip variant="solid" color="primary" className="item_follow" key={item.id} onClick={()=>add(item)}>
                  {item.title}
                </Chip>
              }else{
                return <Chip variant="bordered" className="item_default" key={item.id} onClick={()=>add(item)}>
                  {item.title}
                </Chip>
              }
            })}
          </AccordionItem>
        ))
      }
    </Accordion>
    <CalendarAdd isOpen={isOpen} onClose={onClose} />
  </div>
}