import{d as j,r as m,M as Y,m as d,a as L,b as B,c as K,o as z,e as r,f,g as o,u as t,h as s,w as l,q as W,i as V,F as T,j as p,k as c,t as U,l as F,p as G,s as J,x as P}from"./index-8dv08548.js";import{t as C,H as Q,_ as X}from"./token-B0fT7N9Y.js";import{_ as Z}from"./_plugin-vue_export-helper-BsQhiAd-.js";const n=j("dl",()=>{let A=m(!0),g=m(!1),u=m({type:"mikan",exclusions:[],bangumi:[],freq:15,ariaLink:"",ariaSecret:""});const y=[{name:"字幕组",key:"ass",dataIndex:"ass"},{name:"标题",key:"title",dataIndex:"title"},{title:"操作",key:"action",width:"70px"}],H=(i,_)=>{Y.confirm({title:"你确定要删除这个番剧吗",centered:!0,onOk(){u.value.bangumi=u.value.bangumi.filter(q=>!(q.ass==i&&q.title==_)),d.success("删除成功")},onCancel(){}})},e=()=>{D.value=!0},S=[{name:"值",key:"value"},{title:"操作",key:"action",width:"70px"}],M=i=>{Y.confirm({title:"你确定要删除这个关键字吗",centered:!0,onOk(){u.value.exclusions=u.value.exclusions.filter(_=>_!=i),d.success("删除成功")},onCancel(){}})};let v=m(!1);const E=()=>{if(k.value.length==0){d.error("字幕组不能为空");return}else if(x.value.length==0){d.error("标题不能为空");return}if(u.value.bangumi.some(_=>_.ass===k.value&&_.title===x.value)){d.error("番剧表已有该数据");return}u.value.bangumi.push({ass:k.value,title:x.value}),I(),d.success("添加成功"),v.value=!1},R=()=>{v.value=!0},I=()=>{k.value="",x.value="",w.value=""};let k=m(""),x=m(""),D=m(!1);const $=()=>{if(w.value.length==0){d.error("关键字不能为空");return}if(u.value.exclusions.includes(w.value)){d.error("该关键字已存在");return}u.value.exclusions.push(w.value),I(),d.success("添加成功"),D.value=!1};let w=m("");const h=async i=>{const _=(await L.post(`${B}/api/dl/load`,{data:u.value},{headers:{token:C().token}})).data;_.ok&&!i?d.success("保存成功"):_.ok||d.error("保存表单失败: "+_.msg)};return{getStatus:async()=>{const i=(await L.get(`${B}/api/dl/status`,{headers:{token:C().token}})).data;i.ok?g.value=i.msg:d.error("获取状态失败: "+i.msg)},toggleRun:async()=>{if(g.value){if(u.value.ariaLink.length==0){d.error("Aria 地址不能为空"),g.value=!1;return}else if(u.value.bangumi.length==0){d.error("番剧表不能为空"),g.value=!1;return}await h(!0);const i=(await L.post(`${B}/api/dl/run`,{},{headers:{token:C().token}})).data;i.ok?d.success("启动服务成功"):d.error("启动服务失败: "+i.msg)}else{const i=(await L.post(`${B}/api/dl/stop`,{},{headers:{token:C().token}})).data;i.ok?d.success("停止服务成功"):d.error("停止服务失败: "+i.msg)}},loading:A,getForm:async()=>{const i=(await L.get(`${B}/api/dl`,{headers:{token:C().token}})).data;i.ok?u.value=i.msg:d.error("获取下载器表单失败: "+i.msg),A.value=!1},saveForm:h,exclusionAddValue:w,addExclusionOk:$,showAddExclusionDialog:D,bangumiAddTitle:x,bangumiAddAss:k,onDialogCancel:I,addBangumiOk:E,showAddBangumiDialog:v,running:g,data:u,addBangumi:R,bangumiColumn:y,delBangumi:H,addExclusion:e,exclusionsColumn:S,delExclusions:M}}),O=j("log",()=>{let A=m(!1),g=m([]);return{showLog:async()=>{const y=(await L.get(`${B}/api/dl/log`,{headers:{token:C().token}})).data;y.ok?g.value=y.msg.reverse():d.error("获取日志失败: "+y.msg),A.value=!0},logContent:g,showLogDialog:A}}),ee={key:0,class:"body"},te={class:"item"},ne={class:"item_content"},ae={class:"item"},se={class:"item_content"},oe={class:"item"},le={class:"item_content"},ie={class:"item"},de={class:"item_content"},ue={class:"item"},re={class:"item_content"},ge={class:"item"},pe={class:"item_content"},me={key:0},ce={key:1},ve={key:2},ke={key:0},_e={key:1},fe={class:"bangumiItem",style:{"margin-top":"10px"}},be={class:"bangumiItem_content"},ye={class:"bangumiItem",style:{"margin-top":"10px"}},xe={class:"bangumiItem_content"},we={class:"exclutionItem",style:{"margin-top":"10px"}},Ce={class:"exclutionItem_content"},Ae={class:"logContent"},De={class:"log_label"},he={class:"log_time"},Le=K({__name:"DownloaderView",setup(A){document.title="AnimeHelper | 下载器";let g=m(800),u=m(["1","2"]);z(()=>{C().getToken(),n().getStatus(),n().getForm(),g.value=window.innerWidth});const y=()=>{n().data.type=="mikan"?window.open("https://mikanime.tv/"):n().data.type=="acgrip"&&window.open("https://acgrip.art/")};return(H,e)=>{const S=p("a-tag"),M=p("a-switch"),v=p("a-button"),E=p("a-radio-button"),R=p("a-radio-group"),I=p("a-input-number"),k=p("a-input"),x=p("a-input-password"),D=p("a-table"),$=p("a-collapse-panel"),w=p("a-collapse"),h=p("a-modal");return r(),f(T,null,[o(Q),t(n)().loading?(r(),V(X,{key:1})):(r(),f("div",ee,[s("div",te,[e[14]||(e[14]=s("div",{class:"label"},"运行状态",-1)),s("div",ne,[o(S,{color:t(n)().running?"success":"warning",style:{"margin-right":"20px"}},{default:l(()=>[c(U(t(n)().running?"运行中":"等待中"),1)]),_:1},8,["color"]),o(M,{checked:t(n)().running,"onUpdate:checked":e[0]||(e[0]=a=>t(n)().running=a),onChange:t(n)().toggleRun},null,8,["checked","onChange"])])]),s("div",ae,[e[17]||(e[17]=s("div",{class:"label"},"系统操作",-1)),s("div",se,[o(v,{type:"link",onClick:t(O)().showLog},{default:l(()=>e[15]||(e[15]=[c("查看日志")])),_:1},8,["onClick"]),o(v,{type:"link",onClick:e[1]||(e[1]=a=>t(n)().saveForm(!1))},{default:l(()=>e[16]||(e[16]=[c("保存表单")])),_:1})])]),s("div",oe,[e[20]||(e[20]=s("div",{class:"label"},"RSS来源",-1)),s("div",le,[o(R,{value:t(n)().data.type,"onUpdate:value":e[2]||(e[2]=a=>t(n)().data.type=a),"button-style":"solid",disabled:t(n)().running},{default:l(()=>[o(E,{value:"mikan"},{default:l(()=>e[18]||(e[18]=[c("Mikan")])),_:1}),o(E,{value:"acgrip"},{default:l(()=>e[19]||(e[19]=[c("Acgrip")])),_:1})]),_:1},8,["value","disabled"]),s("i",{class:"bi bi-box-arrow-up-right",onClick:y})])]),s("div",ie,[e[22]||(e[22]=s("div",{class:"label"},"更新频率",-1)),s("div",de,[o(I,{id:"inputNumber",value:t(n)().data.freq,"onUpdate:value":e[3]||(e[3]=a=>t(n)().data.freq=a),min:10,max:1440,disabled:t(n)().running},null,8,["value","disabled"]),e[21]||(e[21]=s("div",{style:{"margin-left":"10px"}},"分钟",-1))])]),s("div",ue,[e[23]||(e[23]=s("div",{class:"label"},"Aria 地址",-1)),s("div",re,[o(k,{value:t(n)().data.ariaLink,"onUpdate:value":e[4]||(e[4]=a=>t(n)().data.ariaLink=a),placeholder:"http(s)://<ip>:16800/jsonrpc",disabled:t(n)().running},null,8,["value","disabled"])])]),s("div",ge,[e[24]||(e[24]=s("div",{class:"label"},"Aria 密钥",-1)),s("div",pe,[o(x,{value:t(n)().data.ariaSecret,"onUpdate:value":e[5]||(e[5]=a=>t(n)().data.ariaSecret=a),placeholder:"",disabled:t(n)().running},null,8,["value","disabled"])])]),o(w,{style:{"margin-top":"20px"},activeKey:t(u),"onUpdate:activeKey":e[6]||(e[6]=a=>W(u)?u.value=a:u=a)},{default:l(()=>[o($,{key:"1",header:"番剧表"},{default:l(()=>[o(v,{type:"link",onClick:t(n)().addBangumi,disabled:t(n)().running},{default:l(()=>e[25]||(e[25]=[c("添加")])),_:1},8,["onClick","disabled"]),o(D,{columns:t(n)().bangumiColumn,"data-source":t(n)().data.bangumi,pagination:!1},{headerCell:l(({column:a})=>[a.key==="ass"?(r(),f("span",me," 字幕组 ")):a.key==="title"?(r(),f("span",ce," 标题 ")):a.key==="action"?(r(),f("span",ve," 操作 ")):F("",!0)]),bodyCell:l(({column:a,record:b})=>[a.key==="ass"?(r(),V(S,{key:0},{default:l(()=>[c(U(b.ass),1)]),_:2},1024)):a.key==="action"?(r(),V(v,{key:1,type:"link",danger:"",onClick:N=>t(n)().delBangumi(b.ass,b.title),disabled:t(n)().running},{default:l(()=>e[26]||(e[26]=[c("删除")])),_:2},1032,["onClick","disabled"])):F("",!0)]),_:1},8,["columns","data-source"])]),_:1}),o($,{key:"2",header:"排除关键字"},{default:l(()=>[o(v,{type:"link",onClick:t(n)().addExclusion,disabled:t(n)().running},{default:l(()=>e[27]||(e[27]=[c("添加")])),_:1},8,["onClick","disabled"]),o(D,{columns:t(n)().exclusionsColumn,"data-source":t(n)().data.exclusions,pagination:!1},{headerCell:l(({column:a})=>[a.key==="value"?(r(),f("span",ke," 值 ")):a.key==="action"?(r(),f("span",_e," 操作 ")):F("",!0)]),bodyCell:l(({column:a,record:b})=>[a.key==="value"?(r(),f(T,{key:0},[c(U(b),1)],64)):a.key==="action"?(r(),V(v,{key:1,type:"link",danger:"",onClick:N=>t(n)().delExclusions(b),disabled:t(n)().running},{default:l(()=>e[28]||(e[28]=[c("删除")])),_:2},1032,["onClick","disabled"])):F("",!0)]),_:1},8,["columns","data-source"])]),_:1})]),_:1},8,["activeKey"])])),o(h,{open:t(n)().showAddBangumiDialog,"onUpdate:open":e[9]||(e[9]=a=>t(n)().showAddBangumiDialog=a),title:"添加一个番剧",onOk:t(n)().addBangumiOk,onCancel:t(n)().onDialogCancel,centered:""},{default:l(()=>[s("div",fe,[e[29]||(e[29]=s("div",{class:"bangumiItem_title"},"字幕组",-1)),s("div",be,[o(k,{value:t(n)().bangumiAddAss,"onUpdate:value":e[7]||(e[7]=a=>t(n)().bangumiAddAss=a)},null,8,["value"])])]),s("div",ye,[e[30]||(e[30]=s("div",{class:"bangumiItem_title"},"标题",-1)),s("div",xe,[o(k,{value:t(n)().bangumiAddTitle,"onUpdate:value":e[8]||(e[8]=a=>t(n)().bangumiAddTitle=a)},null,8,["value"])])])]),_:1},8,["open","onOk","onCancel"]),o(h,{open:t(n)().showAddExclusionDialog,"onUpdate:open":e[11]||(e[11]=a=>t(n)().showAddExclusionDialog=a),title:"添加一个排除关键字",onOk:t(n)().addExclusionOk,onCancel:t(n)().onDialogCancel,centered:""},{default:l(()=>[s("div",we,[e[31]||(e[31]=s("div",{class:"exclutionItem_title"},"关键字",-1)),s("div",Ce,[o(k,{value:t(n)().exclusionAddValue,"onUpdate:value":e[10]||(e[10]=a=>t(n)().exclusionAddValue=a)},null,8,["value"])])])]),_:1},8,["open","onOk","onCancel"]),o(h,{open:t(O)().showLogDialog,"onUpdate:open":e[12]||(e[12]=a=>t(O)().showLogDialog=a),title:"日志","cancel-button-props":{style:{display:"none"}},okText:"完成",onOk:e[13]||(e[13]=a=>t(O)().showLogDialog=!1),width:t(g)<720?t(g)-20:700,centered:""},{default:l(()=>[s("div",Ae,[(r(!0),f(T,null,G(t(O)().logContent,(a,b)=>(r(),f("div",{key:b,style:J(a.ok?{color:"green"}:{color:"red"}),class:"logItem"},[s("div",De,U(a.msg),1),s("div",he,U(t(P)(a.time).format("YYYY-MM-DD HH:mm")),1)],4))),128))])]),_:1},8,["open","width"])],64)}}}),Oe=Z(Le,[["__scopeId","data-v-8b0b2a6e"]]);export{Oe as default};
