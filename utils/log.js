let log=[];

export const addLog=(ok, msg)=>{
  if(log.length==50){
    log.shift();
  }
  log.push({
    "ok": ok,
    "msg": msg,
    "time": Date.now()
  })
}

export const getLog=()=>{
  return log;
}