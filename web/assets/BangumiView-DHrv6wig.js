import{c as j,r as b,o as D,a as F,b as I,m as L,e as o,f as u,g as l,u as d,w as t,i as _,F as v,j as r,p as w,h as p,k as s,n as A,v as H,t as x}from"./index-8dv08548.js";import{t as E,H as M,_ as R}from"./token-B0fT7N9Y.js";import{b as n}from"./adder-MAPBoOvF.js";import{_ as q}from"./_plugin-vue_export-helper-BsQhiAd-.js";const z={key:0,class:"body"},G={class:"modalContent"},J={style:{"margin-top":"10px",display:"grid","align-items":"center","grid-template-columns":"70px auto"}},P={style:{"margin-top":"10px",display:"grid","align-items":"center","grid-template-columns":"70px auto"}},Q={style:{"margin-top":"10px",display:"grid","align-items":"center","grid-template-columns":"70px auto"}},W={style:{"margin-top":"10px",display:"grid","align-items":"center","grid-template-columns":"70px auto"}},X=j({__name:"BangumiView",setup(Y){document.title="AnimeHelper | 每日更新";let m=b([]);const B=b([0,1,2,3,4,5,6]);let V=b(!0);const f=(U,e)=>{n().showAdd=!0,n().add_title=U,n().add_weekday=e,n().add_onUpdate=!0};return D(async()=>{E().getToken();const U=(await F.get(`${I}/api/calendar`,{headers:{token:localStorage.getItem("token")}})).data;U.ok?m.value=U.msg:L.error("请求失败"),V.value=!1}),(U,e)=>{const g=r("a-tag"),k=r("a-flex"),y=r("a-collapse-panel"),K=r("a-collapse"),T=r("a-input"),N=r("a-checkbox"),$=r("a-input-number"),c=r("a-select-option"),O=r("a-select"),S=r("a-modal");return o(),u(v,null,[l(M),d(V)?(o(),_(R,{key:1})):(o(),u("div",z,[l(K,{activeKey:B.value,"onUpdate:activeKey":e[0]||(e[0]=a=>B.value=a)},{default:t(()=>[l(y,{key:"0",header:"星期日"},{default:t(()=>[l(k,{wrap:"wrap",gap:"middle"},{default:t(()=>[(o(!0),u(v,null,w(d(m)[0],(a,i)=>(o(),_(g,{class:"item",key:i,onClick:C=>f(a,0)},{default:t(()=>[s(x(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),l(y,{key:"1",header:"星期一"},{default:t(()=>[l(k,{wrap:"wrap",gap:"middle"},{default:t(()=>[(o(!0),u(v,null,w(d(m)[1],(a,i)=>(o(),_(g,{class:"item",key:i,onClick:C=>f(a,1)},{default:t(()=>[s(x(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),l(y,{key:"2",header:"星期二"},{default:t(()=>[l(k,{wrap:"wrap",gap:"middle"},{default:t(()=>[(o(!0),u(v,null,w(d(m)[2],(a,i)=>(o(),_(g,{class:"item",key:i,onClick:C=>f(a,2)},{default:t(()=>[s(x(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),l(y,{key:"3",header:"星期三"},{default:t(()=>[l(k,{wrap:"wrap",gap:"middle"},{default:t(()=>[(o(!0),u(v,null,w(d(m)[3],(a,i)=>(o(),_(g,{class:"item",key:i,onClick:C=>f(a,3)},{default:t(()=>[s(x(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),l(y,{key:"4",header:"星期四"},{default:t(()=>[l(k,{wrap:"wrap",gap:"middle"},{default:t(()=>[(o(!0),u(v,null,w(d(m)[4],(a,i)=>(o(),_(g,{class:"item",key:i,onClick:C=>f(a,4)},{default:t(()=>[s(x(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),l(y,{key:"5",header:"星期五"},{default:t(()=>[l(k,{wrap:"wrap",gap:"middle"},{default:t(()=>[(o(!0),u(v,null,w(d(m)[5],(a,i)=>(o(),_(g,{class:"item",key:i,onClick:C=>f(a,5)},{default:t(()=>[s(x(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),l(y,{key:"6",header:"星期六"},{default:t(()=>[l(k,{wrap:"wrap",gap:"middle"},{default:t(()=>[(o(!0),u(v,null,w(d(m)[6],(a,i)=>(o(),_(g,{class:"item",key:i,onClick:C=>f(a,6)},{default:t(()=>[s(x(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1},8,["activeKey"])])),l(S,{open:d(n)().showAdd,"onUpdate:open":e[7]||(e[7]=a=>d(n)().showAdd=a),title:"添加一个新的番剧",onOk:d(n)().handleOk,centered:""},{default:t(()=>[p("div",G,[l(T,{placeholder:"番剧标题",value:d(n)().add_title,"onUpdate:value":e[1]||(e[1]=a=>d(n)().add_title=a)},null,8,["value"]),l(N,{style:{"margin-top":"10px"},checked:d(n)().add_onUpdate,"onUpdate:checked":e[2]||(e[2]=a=>d(n)().add_onUpdate=a),onChange:d(n)().changeUpdate},{default:t(()=>e[8]||(e[8]=[s("当前在更新")])),_:1},8,["checked","onChange"]),p("div",J,[e[9]||(e[9]=p("div",{style:{"margin-right":"10px"}},"集数",-1)),l($,{value:d(n)().add_episodes,"onUpdate:value":e[3]||(e[3]=a=>d(n)().add_episodes=a),min:1},null,8,["value"])]),p("div",P,[e[10]||(e[10]=p("div",{style:{"margin-right":"10px"}},"观看至",-1)),l($,{value:d(n)().add_now,"onUpdate:value":e[4]||(e[4]=a=>d(n)().add_now=a),min:0,max:d(n)().judge()},null,8,["value","max"])]),A(p("div",Q,[e[11]||(e[11]=p("div",{style:{"margin-right":"10px"}},"更新至",-1)),l($,{value:d(n)().add_updateTo,"onUpdate:value":e[5]||(e[5]=a=>d(n)().add_updateTo=a),min:1,max:d(n)().add_episodes},null,8,["value","max"])],512),[[H,d(n)().add_onUpdate]]),A(p("div",W,[e[19]||(e[19]=p("div",{style:{"margin-right":"10px"}},"更新日期",-1)),l(O,{value:d(n)().add_weekday,"onUpdate:value":e[6]||(e[6]=a=>d(n)().add_weekday=a)},{default:t(()=>[l(c,{value:0},{default:t(()=>e[12]||(e[12]=[s("星期日")])),_:1}),l(c,{value:1},{default:t(()=>e[13]||(e[13]=[s("星期一")])),_:1}),l(c,{value:2},{default:t(()=>e[14]||(e[14]=[s("星期二")])),_:1}),l(c,{value:3},{default:t(()=>e[15]||(e[15]=[s("星期三")])),_:1}),l(c,{value:4},{default:t(()=>e[16]||(e[16]=[s("星期四")])),_:1}),l(c,{value:5},{default:t(()=>e[17]||(e[17]=[s("星期五")])),_:1}),l(c,{value:6},{default:t(()=>e[18]||(e[18]=[s("星期六")])),_:1})]),_:1},8,["value"])],512),[[H,d(n)().add_onUpdate]])])]),_:1},8,["open","onOk"])],64)}}}),te=q(X,[["__scopeId","data-v-ec64afff"]]);export{te as default};