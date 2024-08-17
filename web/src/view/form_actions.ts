import { message } from "ant-design-vue";
import form from "../states/form";
import { run, stop } from "../hooks/requests";

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

export const delExclusionController=(value: string)=>{
  form().data.exclusions=form().data.exclusions.filter((item)=>{
    if(item==value){
      return false
    }
    return true;
  })
}

export const addExclusionController=(value: string)=>{
  form().data.exclusions.push(value);
}

export const toggleRun=async ()=>{
  if(form().running){
    // 运行
    if(form().data.ariaLink.length==0){
      message.error("Aria 地址不能为空");
      form().running=false;
      return;
    }else if(form().data.ariaSecret.length==0){
      message.error("Aria 密钥不能为空");
      form().running=false;
      return;
    }
    const response=await run();
    if(response.ok){
      message.success("运行成功");
    }else{
      message.error("操作无效: "+response.msg);
    }
  }else{
    // 停止
    const response=await stop();
    if(response.ok){
      message.success("停止成功");
    }else{
      message.error("操作无效: "+response.msg);
    }
  }
}