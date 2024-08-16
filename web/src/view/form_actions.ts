import form from "../states/form"

export const addBangumiController=(ass:string, title:string)=>{
  form().data.bangumi.push({
    "ass": ass,
    "title": title,
  })
}

export const delBangumiController=(ass:string, title:string)=>{
  form().data.bangumi=form().data.bangumi.filter((item)=>{
    if(item.ass==ass && item.title==title){
      return false
    }
    return true;
  })
}