import { allStore } from "@/hooks/all";
import { useRecoilValue } from "recoil"

export default function AllContent(){

  const list=useRecoilValue(allStore);

  return <div className="page">
    {list.map((item, index)=><div key={index}>
      {item.title}
    </div>)}
  </div>
}