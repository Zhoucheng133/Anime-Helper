import axios from "axios";
import xml2js  from "xml2js";
import {setLs, setPrels, getLs, getPrels} from "./ls.js";
import {addLog} from "./log.js";
import state from "./data.js";

const downloadHandler=async (list)=>{
  for(let item of list){
    try {
      await axios.post(
        state.get().ariaLink,
        {
          "jsonrpc": "2.0",
          "method": "aria2.addUri",
          "id": 1,
          "params": [
            `token:${state.get().ariaSecret}`,
            [item.url],
            {
              "split": "5",
              "max-connection-per-server": "5",
              "seed-ratio": "0"
            }
          ],
        }
      );
    } catch (error) {
      addLog(false, `下载: ${item.title} 失败`);
      continue;
    }
    addLog(true, `下载: ${item.title}`);
  }
}

const judge=()=>{
  const newItems=getLs().filter(lsItem => !getPrels().some(prelsItem => lsItem.title == prelsItem.title ) )
  const exclusions=state.get().exclusions;
  const bangumi=state.get().bangumi;
  let filteredList=[];
  for(let item of newItems){
    let matchesBangumi = bangumi.some(b => 
      item.title.includes(b.title) && item.title.includes(b.ass)
    );
    let matchesExclusions = exclusions.some(e => 
      item.title.includes(e)
    );
    if (matchesBangumi && !matchesExclusions) {
      filteredList.push(item);
    }
  }
  downloadHandler(filteredList);
}

export default async function service(){
  let url="";
  // 注意这里改成官方链接
  if(state.get().type=='mikan'){
    url='';
  }else if(state.get().type=='acgrip'){
    url='http://127.0.0.1:3000';
  }
  try {
    const xml=(await axios.get(url)).data;
    const parser = new xml2js.Parser();
    parser.parseString(xml, (err, result) => {
      if (err) {
        // 解析错误
        return;
      }
      var list=[];
      var items=result.rss.channel[0].item;
      for(let item of items){
        list.push({
          'title': item['title'][0].trim(),
          'url': item['enclosure'][0]['$']["url"],
        })
      }
      if(getPrels().length==0){
        setPrels(list);
        addLog(true, "请求rss成功");
        return;
      }else{
        setPrels(getLs());
        setLs(list);
        addLog(true, "请求rss成功");
        judge();
      }
    });
  } catch (error) {
    addLog(false, "解析rss失败");
  }
}

judge();