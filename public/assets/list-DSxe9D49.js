import{l as n}from"./list-BM_rTy3X.js";import{s as H,a as E,b as L}from"./index.browser-pToC0Rvn.js";import{s as z}from"./index-CAYSxIQR.js";import{B as j,s as F,c as k,o as y,a as C,m as _,r as P,b as T,t as h,d as I,e as p,u as S,f as B,w as c,g as e,h as s,i as a,j as $,k as D,n as K,l as q,_ as M}from"./index-YslYnHGW.js";import{d as G,s as J,a as O,b as U,c as Q}from"./downloader-YOs-v6U9.js";import{s as A}from"./index-5VA2hjD3.js";var X=({dt:i})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${i("progressbar.height")};
    background: ${i("progressbar.background")};
    border-radius: ${i("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${i("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${i("progressbar.label.color")};
    font-size: ${i("progressbar.label.font.size")};
    font-weight: ${i("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,Y={root:function(V){var v=V.instance;return["p-progressbar p-component",{"p-progressbar-determinate":v.determinate,"p-progressbar-indeterminate":v.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},Z=j.extend({name:"progressbar",style:X,classes:Y}),ee={name:"BaseProgressBar",extends:F,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:Z,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},N={name:"ProgressBar",extends:ee,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},le=["aria-valuenow"];function te(i,V,v,g,m,o){return y(),k("div",_({role:"progressbar",class:i.cx("root"),"aria-valuemin":"0","aria-valuenow":i.value,"aria-valuemax":"100"},i.ptmi("root")),[o.determinate?(y(),k("div",_({key:0,class:i.cx("value"),style:o.progressStyle},i.ptm("value")),[i.value!=null&&i.value!==0&&i.showValue?(y(),k("div",_({key:0,class:i.cx("label")},i.ptm("label")),[P(i.$slots,"default",{},function(){return[T(h(i.value+"%"),1)]})],16)):C("",!0)],16)):o.indeterminate?(y(),k("div",_({key:1,class:i.cx("value")},i.ptm("value")),null,16)):C("",!0)],16,le)}N.render=te;const se={class:"flex items-center gap-2 mb-4"},ae={class:"flex items-center gap-2 mb-4"},ne={class:"flex items-center gap-2 mb-4"},ie={class:"flex items-center gap-2 mb-4"},oe={key:0,class:"flex items-center gap-2 mb-4"},re={key:1,class:"flex items-center gap-2 mb-4"},de={class:"flex justify-end gap-2"},ue=I({__name:"add",setup(i,{expose:V}){const v=p(!1),g=S(),m=p(""),o=p(!1),b=p(""),w=p("0"),t=p(""),l=p(n().weekdays[0]),f=async()=>{if(m.value.length==0){g.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(b.value.length==0){g.add({severity:"error",summary:"添加失败",detail:"集数不能为空",life:3e3});return}else if(w.value.length==0){g.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(t.value.length==0&&o.value){g.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(o.value&&parseInt(t.value)==0){g.add({severity:"error",summary:"添加失败",detail:"更新集数不能为0",life:3e3});return}await n().addItem(m.value,o.value,parseInt(b.value),parseInt(w.value),parseInt(t.value),l.value.code),v.value=!1,m.value="",o.value=!1,b.value="",w.value="",t.value="",l.value=n().weekdays[0]};return V({showAddHandler:()=>{v.value=!0}}),(R,d)=>(y(),B(e(H),{visible:v.value,"onUpdate:visible":d[7]||(d[7]=u=>v.value=u),modal:"",header:"添加到列表...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:c(()=>[s("div",se,[a(e(E),{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=u=>o.value=u),inputId:"update",binary:""},null,8,["modelValue"]),d[8]||(d[8]=s("label",{for:"update"}," 当前在更新 ",-1))]),s("div",ae,[d[9]||(d[9]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),a(e(z),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":d[1]||(d[1]=u=>m.value=u)},null,8,["modelValue"])]),s("div",ne,[d[10]||(d[10]=s("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),a(e(z),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:b.value,"onUpdate:modelValue":d[2]||(d[2]=u=>b.value=u),min:"1"},null,8,["modelValue"])]),s("div",ie,[d[11]||(d[11]=s("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),a(e(z),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:w.value,"onUpdate:modelValue":d[3]||(d[3]=u=>w.value=u),min:"0",max:o.value?t.value:b.value},null,8,["modelValue","max"])]),o.value?(y(),k("div",oe,[d[12]||(d[12]=s("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),a(e(z),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:t.value,"onUpdate:modelValue":d[4]||(d[4]=u=>t.value=u),min:"1",max:b.value},null,8,["modelValue","max"])])):C("",!0),o.value?(y(),k("div",re,[d[13]||(d[13]=s("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),a(e(L),{size:"small",id:"updateWeek",modelValue:l.value,"onUpdate:modelValue":d[5]||(d[5]=u=>l.value=u),options:e(n)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):C("",!0),s("div",de,[a(e($),{type:"button",label:"取消",severity:"secondary",onClick:d[6]||(d[6]=u=>v.value=!1),size:"small"}),a(e($),{type:"button",label:"添加",onClick:f,size:"small"})])]),_:1},8,["visible"]))}}),me={class:"flex items-center gap-2 mb-4"},pe={class:"flex items-center gap-2 mb-4"},ve={class:"flex items-center gap-2 mb-4"},fe={class:"flex items-center gap-2 mb-4"},be={key:0,class:"flex items-center gap-2 mb-4"},ye={key:1,class:"flex items-center gap-2 mb-4"},ge={class:"flex justify-end gap-2"},ce=I({__name:"edit",setup(i,{expose:V}){const v=S(),g=p(""),m=p(""),o=p(!1),b=p(""),w=p(""),t=p(""),l=p(n().weekdays[0]),f=p(!1),W=u=>{if(u==0)return n().weekdays[0];const r=new Date(u).getDay();return n().weekdays[r==0?6:r-1]},R=u=>{g.value=u.id,f.value=!0,m.value=u.title,w.value=u.now.toString(),o.value=n().calculateEpisodesReleased(u.time)<u.episode,t.value=n().analyseEpisode(u).toString(),b.value=u.episode.toString(),l.value=W(u.time)},d=async()=>{if(m.value.length==0){v.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(b.value.length==0){v.add({severity:"error",summary:"添加失败",detail:"集数不能为空",life:3e3});return}else if(w.value.length==0){v.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(t.value.length==0&&o.value){v.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}await n().editItem(g.value,m.value,o.value,parseInt(b.value),parseInt(w.value),parseInt(t.value),l.value.code),f.value=!1};return V({showEditHandler:R}),(u,r)=>(y(),B(e(H),{visible:f.value,"onUpdate:visible":r[7]||(r[7]=x=>f.value=x),modal:"",header:"编辑列表项...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:c(()=>[s("div",me,[a(e(E),{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=x=>o.value=x),inputId:"update",binary:""},null,8,["modelValue"]),r[8]||(r[8]=s("label",{for:"update"}," 当前在更新 ",-1))]),s("div",pe,[r[9]||(r[9]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),a(e(z),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":r[1]||(r[1]=x=>m.value=x)},null,8,["modelValue"])]),s("div",ve,[r[10]||(r[10]=s("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),a(e(z),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:b.value,"onUpdate:modelValue":r[2]||(r[2]=x=>b.value=x),min:"1"},null,8,["modelValue"])]),s("div",fe,[r[11]||(r[11]=s("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),a(e(z),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:w.value,"onUpdate:modelValue":r[3]||(r[3]=x=>w.value=x),min:"0",max:o.value?t.value:b.value},null,8,["modelValue","max"])]),o.value?(y(),k("div",be,[r[12]||(r[12]=s("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),a(e(z),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:t.value,"onUpdate:modelValue":r[4]||(r[4]=x=>t.value=x),min:"1",max:b.value},null,8,["modelValue","max"])])):C("",!0),o.value?(y(),k("div",ye,[r[13]||(r[13]=s("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),a(e(L),{size:"small",id:"updateWeek",modelValue:l.value,"onUpdate:modelValue":r[5]||(r[5]=x=>l.value=x),options:e(n)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):C("",!0),s("div",ge,[a(e($),{type:"button",label:"取消",severity:"secondary",onClick:r[6]||(r[6]=x=>f.value=!1),size:"small"}),a(e($),{type:"button",label:"完成",onClick:d,size:"small"})])]),_:1},8,["visible"]))}}),we={class:"flex items-center gap-2 mb-4"},ke={class:"flex items-center gap-2 mb-4"},xe={class:"flex justify-end gap-2"},Ve=I({__name:"add_downloader",setup(i,{expose:V}){const v=S(),g=p(!1),m=p(""),o=p(""),b=async()=>{if(m.value.length==0){v.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(o.value.length==0){v.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await G().addToList(m.value,o.value),g.value=!1,m.value="",o.value=""};return V({showAddHandler:t=>{g.value=!0,m.value=t}}),(t,l)=>(y(),B(e(H),{visible:g.value,"onUpdate:visible":l[3]||(l[3]=f=>g.value=f),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:c(()=>[s("div",we,[l[4]||(l[4]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),a(e(z),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=f=>m.value=f)},null,8,["modelValue"])]),s("div",ke,[l[5]||(l[5]=s("label",{for:"ass",class:"font-semibold w-20"},"字幕组",-1)),a(e(z),{size:"small",id:"ass",class:"flex-auto",autocomplete:"off",modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=f=>o.value=f)},null,8,["modelValue"])]),s("div",xe,[a(e($),{type:"button",label:"取消",severity:"secondary",onClick:l[2]||(l[2]=f=>g.value=!1),size:"small"}),a(e($),{type:"button",label:"添加",onClick:b,size:"small"})])]),_:1},8,["visible"]))}}),$e={class:"page"},ze={class:"tool_bar"},he={key:1},Ce={key:2},Ue={key:0,class:"table"},_e={class:"item_title"},Te={key:0,class:"update_tag tag"},Le={key:1,class:"done_tag tag"},Ie={class:"ep"},Be={class:"weekday_tag tag"},He={class:"progress_area"},Se={class:"progress_label"},We={key:1,class:"empty"},Re={class:"add_tip"},Ae=I({__name:"list",setup(i){document.title="AnimeHelper | 列表";const V=p(!0),v=w=>n().calProgress(w.data);D(async()=>{await n().getList(),V.value=!1});const g=p(),m=p(),o=p();function b(w){n().offset=w,n().getList()}return(w,t)=>(y(),k("div",$e,[s("div",ze,[a(e($),{label:"添加",size:"small",onClick:t[0]||(t[0]=l=>g.value.showAddHandler())}),a(e(L),{size:"small",modelValue:e(n)().selectedFilter,"onUpdate:modelValue":t[1]||(t[1]=l=>e(n)().selectedFilter=l),options:e(n)().filters,"scroll-height":"20rem",optionLabel:"name",onChange:t[2]||(t[2]=l=>e(n)().getList())},null,8,["modelValue","options"]),e(n)().selectedFilter.name=="搜索"?(y(),B(e(z),{key:0,size:"small",style:{width:"100%"},modelValue:e(n)().searchKeyWord,"onUpdate:modelValue":t[3]||(t[3]=l=>e(n)().searchKeyWord=l),onChange:t[4]||(t[4]=l=>e(n)().getList())},null,8,["modelValue"])):C("",!0),e(n)().selectedFilter.name=="更新周"?(y(),k("div",he,[a(e(L),{size:"small",modelValue:e(n)().selectedWeekday,"onUpdate:modelValue":t[5]||(t[5]=l=>e(n)().selectedWeekday=l),options:e(n)().weekdays,"scroll-height":"20rem",style:{width:"120px"},optionLabel:"name",onChange:t[6]||(t[6]=l=>e(n)().getList())},null,8,["modelValue","options"])])):(y(),k("div",Ce))]),e(n)().list.length!=0&&V.value==!1?(y(),k("div",Ue,[a(e(J),{value:e(n)().list},{default:c(()=>[a(e(U),{field:"title",header:"标题",style:{"min-width":"270px"}},{body:c(l=>[s("div",_e,h(l.data.title),1)]),_:1}),a(e(U),{header:"状态",style:{"min-width":"90px"}},{body:c(l=>[e(n)().onUpudate(l.data)?(y(),k("div",Te,"更新中")):(y(),k("div",Le,"已完结"))]),_:1}),a(e(U),{header:"集数",style:{"min-width":"60px"}},{body:c(l=>[s("div",Ie,h(l.data.episode),1)]),_:1}),a(e(U),{header:"更新周",style:{"min-width":"90px"}},{body:c(l=>[s("div",Be,h(e(n)().getWeekday(l.data.time)),1)]),_:1}),a(e(U),{header:"进度",style:{"min-width":"200px"}},{body:c(l=>[s("div",He,[a(e(N),{class:K(v(l)==100?"finished":"progress"),value:e(n)().calProgress(l.data),style:{height:"18px"},showValue:!1},null,8,["class","value"]),s("div",Se,[s("div",null,h(l.data.now)+" / "+h(e(n)().analyseEpisode(l.data)),1)]),s("div",{class:"progress_label white_label",style:q({"clip-path":`polygon(0 0, ${v(l)}% 0, ${v(l)}% 100%, 0% 100%)`})},[s("div",null,h(l.data.now)+" / "+h(e(n)().analyseEpisode(l.data)),1)],4)])]),_:1}),a(e(U),{header:"操作",style:{"min-width":"230px"}},{body:c(l=>[a(e(Q),null,{default:c(()=>[a(e($),{severity:"secondary",size:"small",onClick:f=>m.value.showEditHandler(l.data)},{default:c(()=>t[7]||(t[7]=[s("i",{class:"pi pi-pen-to-square",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),a(e($),{severity:"secondary",size:"small",onClick:f=>e(n)().minus(l.data)},{default:c(()=>t[8]||(t[8]=[s("i",{class:"pi pi-minus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),a(e($),{severity:"secondary",size:"small",onClick:f=>e(n)().add(l.data)},{default:c(()=>t[9]||(t[9]=[s("i",{class:"pi pi-plus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),a(e($),{severity:"secondary",size:"small",style:{"font-size":"12px"},onClick:f=>o.value.showAddHandler(l.data.title)},{default:c(()=>t[10]||(t[10]=[T("添加到")])),_:2},1032,["onClick"]),a(e($),{severity:"secondary",size:"small",onClick:f=>e(n)().deleteItem(f,l.data)},{default:c(()=>t[11]||(t[11]=[s("i",{class:"pi pi-trash",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["value"]),a(e(O),{rows:20,totalRecords:e(n)().length,"onUpdate:first":b,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"第 {currentPage} 页 | 共 {totalPages} 页"},null,8,["totalRecords"])])):e(n)().list.length==0&&V.value==!1?(y(),k("div",We,[t[17]||(t[17]=s("div",{class:"empty_list"},[s("i",{class:"pi pi-ban",style:{"margin-right":"5px"}}),s("div",null,"列表为空")],-1)),s("div",Re,[t[14]||(t[14]=s("div",null,"在此页面点击",-1)),a(e(A),null,{default:c(()=>t[12]||(t[12]=[T("添加")])),_:1}),t[15]||(t[15]=s("div",null,"或者在",-1)),a(e(A),null,{default:c(()=>t[13]||(t[13]=[T("每日放送")])),_:1}),t[16]||(t[16]=s("div",null,"页面中添加正在连载的动画",-1))])])):C("",!0),a(ue,{ref_key:"addRef",ref:g},null,512),a(ce,{ref_key:"editRef",ref:m},null,512),a(Ve,{ref_key:"downloaderRef",ref:o},null,512)]))}}),Ke=M(Ae,[["__scopeId","data-v-00912608"]]);export{Ke as default};
