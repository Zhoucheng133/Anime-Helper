import axios from "axios"
import form from "../states/form"
import { message } from "ant-design-vue";

const BaseURL="http://127.0.0.1:8811"

export const init=async ()=>{
  form().running=(await axios.get(BaseURL+"/api/status")).data;
  form().data=(await axios.get(BaseURL+"/api/data")).data;
}

export const saveTable=async ()=>{
  const response=await axios.post(BaseURL+"/api/save", {
    "data": form().data
  });
  if(response.data.ok){
    message.success("保存成功");
  }else{
    message.error("保存失败");
  }
}

export const getLog=async ()=>{
  const response=await axios.get(BaseURL+"/api/log");
  return response.data;
}