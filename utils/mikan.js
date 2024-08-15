import axios from "axios";
import xml2js  from "xml2js"

export default async function mikan(){
  try {
    const xml=(await axios.get('http://127.0.0.1:3000')).data;
    const parser = new xml2js.Parser();
    parser.parseString(xml, (err, result) => {
      if (err) {
        // 解析错误
        return;
      }
      var items=result.rss.channel[0].item;
      for(let item of items){
        console.log(item['title'][0].trim());
        console.log(item['enclosure'][0]['$']["url"])
      }
    });
  } catch (error) {
    // 请求出现错误
  }
}

mikan();