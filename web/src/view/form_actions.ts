import form from "../states/form"

export const addBangumiController=(ass:string, title:string)=>{
  form().data.bangumi.push({
    "ass": ass,
    "title": title,
  })
}