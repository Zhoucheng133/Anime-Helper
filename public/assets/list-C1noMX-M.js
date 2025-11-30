import{l as s}from"./list-BYyQtDqg.js";import{s as B,a as R,b as T}from"./index.browser-CRTWgEnj.js";import{s as h}from"./index-Ct2rUClv.js";import{B as N,s as j,c as x,o as g,a as C,m as _,r as F,b as A,t as z,d as L,e as f,u as H,f as I,w as c,g as e,h as a,i as t,j as $,n as P,k as D,_ as K}from"./index-Dlzrg73N.js";import{d as q,s as G,a as J,b as U,c as M}from"./downloader-CSVtc_MQ.js";var O=({dt:i})=>`
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
`,Q={root:function(V){var b=V.instance;return["p-progressbar p-component",{"p-progressbar-determinate":b.determinate,"p-progressbar-indeterminate":b.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},X=N.extend({name:"progressbar",style:O,classes:Q}),Y={name:"BaseProgressBar",extends:j,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:X,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},E={name:"ProgressBar",extends:Y,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},Z=["aria-valuenow"];function ee(i,V,b,y,p,r){return g(),x("div",_({role:"progressbar",class:i.cx("root"),"aria-valuemin":"0","aria-valuenow":i.value,"aria-valuemax":"100"},i.ptmi("root")),[r.determinate?(g(),x("div",_({key:0,class:i.cx("value"),style:r.progressStyle},i.ptm("value")),[i.value!=null&&i.value!==0&&i.showValue?(g(),x("div",_({key:0,class:i.cx("label")},i.ptm("label")),[F(i.$slots,"default",{},function(){return[A(z(i.value+"%"),1)]})],16)):C("",!0)],16)):r.indeterminate?(g(),x("div",_({key:1,class:i.cx("value")},i.ptm("value")),null,16)):C("",!0)],16,Z)}E.render=ee;const le={class:"flex items-center gap-2 mb-4"},te={class:"flex items-center gap-2 mb-4"},ae={class:"flex items-center gap-2 mb-4"},se={class:"flex items-center gap-2 mb-4"},ne={key:0,class:"flex items-center gap-2 mb-4"},ie={key:1,class:"flex items-center gap-2 mb-4"},oe={class:"flex justify-end gap-2"},re=L({__name:"add",setup(i,{expose:V}){const b=f(!1),y=H(),p=f(""),r=f(!1),v=f(""),n=f("0"),l=f(""),u=f(s().weekdays[0]),w=async()=>{if(p.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(v.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"集数不能为空",life:3e3});return}else if(n.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(l.value.length==0&&r.value){y.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(r.value&&parseInt(l.value)==0){y.add({severity:"error",summary:"添加失败",detail:"更新集数不能为0",life:3e3});return}await s().addItem(p.value,r.value,parseInt(v.value),parseInt(n.value),parseInt(l.value),u.value.code),b.value=!1,p.value="",r.value=!1,v.value="",n.value="",l.value="",u.value=s().weekdays[0]};return V({showAddHandler:()=>{b.value=!0}}),(W,d)=>(g(),I(e(B),{visible:b.value,"onUpdate:visible":d[7]||(d[7]=m=>b.value=m),modal:"",header:"添加到列表...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:c(()=>[a("div",le,[t(e(R),{modelValue:r.value,"onUpdate:modelValue":d[0]||(d[0]=m=>r.value=m),inputId:"update",binary:""},null,8,["modelValue"]),d[8]||(d[8]=a("label",{for:"update"}," 当前在更新 ",-1))]),a("div",te,[d[9]||(d[9]=a("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),t(e(h),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":d[1]||(d[1]=m=>p.value=m)},null,8,["modelValue"])]),a("div",ae,[d[10]||(d[10]=a("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),t(e(h),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:v.value,"onUpdate:modelValue":d[2]||(d[2]=m=>v.value=m),min:"1"},null,8,["modelValue"])]),a("div",se,[d[11]||(d[11]=a("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),t(e(h),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:n.value,"onUpdate:modelValue":d[3]||(d[3]=m=>n.value=m),min:"0",max:r.value?l.value:v.value},null,8,["modelValue","max"])]),r.value?(g(),x("div",ne,[d[12]||(d[12]=a("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),t(e(h),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:l.value,"onUpdate:modelValue":d[4]||(d[4]=m=>l.value=m),min:"1",max:v.value},null,8,["modelValue","max"])])):C("",!0),r.value?(g(),x("div",ie,[d[13]||(d[13]=a("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),t(e(T),{size:"small",id:"updateWeek",modelValue:u.value,"onUpdate:modelValue":d[5]||(d[5]=m=>u.value=m),options:e(s)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):C("",!0),a("div",oe,[t(e($),{type:"button",label:"取消",severity:"secondary",onClick:d[6]||(d[6]=m=>b.value=!1),size:"small"}),t(e($),{type:"button",label:"添加",onClick:w,size:"small"})])]),_:1},8,["visible"]))}}),de={class:"flex items-center gap-2 mb-4"},ue={class:"flex items-center gap-2 mb-4"},me={class:"flex items-center gap-2 mb-4"},pe={class:"flex items-center gap-2 mb-4"},ve={key:0,class:"flex items-center gap-2 mb-4"},fe={key:1,class:"flex items-center gap-2 mb-4"},be={class:"flex justify-end gap-2"},ye=L({__name:"edit",setup(i,{expose:V}){const b=H(),y=f(""),p=f(""),r=f(!1),v=f(""),n=f(""),l=f(""),u=f(s().weekdays[0]),w=f(!1),S=m=>{if(m==0)return s().weekdays[0];const o=new Date(m).getDay();return s().weekdays[o==0?6:o-1]},W=m=>{y.value=m.id,w.value=!0,p.value=m.title,n.value=m.now.toString(),r.value=s().calculateEpisodesReleased(m.time)<m.episode,l.value=s().analyseEpisode(m).toString(),v.value=m.episode.toString(),u.value=S(m.time)},d=async()=>{if(p.value.length==0){b.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(v.value.length==0){b.add({severity:"error",summary:"添加失败",detail:"集数不能为空",life:3e3});return}else if(n.value.length==0){b.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(l.value.length==0&&r.value){b.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}await s().editItem(y.value,p.value,r.value,parseInt(v.value),parseInt(n.value),parseInt(l.value),u.value.code),w.value=!1};return V({showEditHandler:W}),(m,o)=>(g(),I(e(B),{visible:w.value,"onUpdate:visible":o[7]||(o[7]=k=>w.value=k),modal:"",header:"编辑列表项...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:c(()=>[a("div",de,[t(e(R),{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=k=>r.value=k),inputId:"update",binary:""},null,8,["modelValue"]),o[8]||(o[8]=a("label",{for:"update"}," 当前在更新 ",-1))]),a("div",ue,[o[9]||(o[9]=a("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),t(e(h),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=k=>p.value=k)},null,8,["modelValue"])]),a("div",me,[o[10]||(o[10]=a("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),t(e(h),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:v.value,"onUpdate:modelValue":o[2]||(o[2]=k=>v.value=k),min:"1"},null,8,["modelValue"])]),a("div",pe,[o[11]||(o[11]=a("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),t(e(h),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=k=>n.value=k),min:"0",max:r.value?l.value:v.value},null,8,["modelValue","max"])]),r.value?(g(),x("div",ve,[o[12]||(o[12]=a("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),t(e(h),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:l.value,"onUpdate:modelValue":o[4]||(o[4]=k=>l.value=k),min:"1",max:v.value},null,8,["modelValue","max"])])):C("",!0),r.value?(g(),x("div",fe,[o[13]||(o[13]=a("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),t(e(T),{size:"small",id:"updateWeek",modelValue:u.value,"onUpdate:modelValue":o[5]||(o[5]=k=>u.value=k),options:e(s)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):C("",!0),a("div",be,[t(e($),{type:"button",label:"取消",severity:"secondary",onClick:o[6]||(o[6]=k=>w.value=!1),size:"small"}),t(e($),{type:"button",label:"完成",onClick:d,size:"small"})])]),_:1},8,["visible"]))}}),ge={class:"flex items-center gap-2 mb-4"},ce={class:"flex items-center gap-2 mb-4"},we={class:"flex justify-end gap-2"},ke=L({__name:"add_downloader",setup(i,{expose:V}){const b=H(),y=f(!1),p=f(""),r=f(""),v=async()=>{if(p.value.length==0){b.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(r.value.length==0){b.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await q().addToList(p.value,r.value),y.value=!1,p.value="",r.value=""};return V({showAddHandler:l=>{y.value=!0,p.value=l}}),(l,u)=>(g(),I(e(B),{visible:y.value,"onUpdate:visible":u[3]||(u[3]=w=>y.value=w),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:c(()=>[a("div",ge,[u[4]||(u[4]=a("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),t(e(h),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=w=>p.value=w)},null,8,["modelValue"])]),a("div",ce,[u[5]||(u[5]=a("label",{for:"ass",class:"font-semibold w-20"},"字幕组",-1)),t(e(h),{size:"small",id:"ass",class:"flex-auto",autocomplete:"off",modelValue:r.value,"onUpdate:modelValue":u[1]||(u[1]=w=>r.value=w)},null,8,["modelValue"])]),a("div",we,[t(e($),{type:"button",label:"取消",severity:"secondary",onClick:u[2]||(u[2]=w=>y.value=!1),size:"small"}),t(e($),{type:"button",label:"添加",onClick:v,size:"small"})])]),_:1},8,["visible"]))}}),xe={class:"page"},Ve={class:"tool_bar"},$e={key:1},he={key:2},ze={class:"item_title"},Ce={key:0,class:"update_tag tag"},Ue={key:1,class:"done_tag tag"},_e={class:"ep"},Te={class:"weekday_tag tag"},Le={class:"progress_area"},Ie={class:"progress_label"},Be=L({__name:"list",setup(i){document.title="AnimeHelper | 列表";const V=v=>s().calProgress(v.data);s().getList();const b=f(),y=f(),p=f();function r(v){s().offset=v,s().getList()}return(v,n)=>(g(),x("div",xe,[a("div",Ve,[t(e($),{label:"添加",size:"small",onClick:n[0]||(n[0]=l=>b.value.showAddHandler())}),t(e(T),{size:"small",modelValue:e(s)().selectedFilter,"onUpdate:modelValue":n[1]||(n[1]=l=>e(s)().selectedFilter=l),options:e(s)().filters,"scroll-height":"20rem",optionLabel:"name",onChange:n[2]||(n[2]=l=>e(s)().getList())},null,8,["modelValue","options"]),e(s)().selectedFilter.name=="搜索"?(g(),I(e(h),{key:0,size:"small",style:{width:"100%"},modelValue:e(s)().searchKeyWord,"onUpdate:modelValue":n[3]||(n[3]=l=>e(s)().searchKeyWord=l),onChange:n[4]||(n[4]=l=>e(s)().getList())},null,8,["modelValue"])):C("",!0),e(s)().selectedFilter.name=="更新周"?(g(),x("div",$e,[t(e(T),{size:"small",modelValue:e(s)().selectedWeekday,"onUpdate:modelValue":n[5]||(n[5]=l=>e(s)().selectedWeekday=l),options:e(s)().weekdays,"scroll-height":"20rem",style:{width:"120px"},optionLabel:"name",onChange:n[6]||(n[6]=l=>e(s)().getList())},null,8,["modelValue","options"])])):(g(),x("div",he))]),t(e(G),{value:e(s)().list},{default:c(()=>[t(e(U),{field:"title",header:"标题",style:{"min-width":"270px"}},{body:c(l=>[a("div",ze,z(l.data.title),1)]),_:1}),t(e(U),{header:"状态",style:{"min-width":"90px"}},{body:c(l=>[e(s)().onUpudate(l.data)?(g(),x("div",Ce,"更新中")):(g(),x("div",Ue,"已完结"))]),_:1}),t(e(U),{header:"集数",style:{"min-width":"60px"}},{body:c(l=>[a("div",_e,z(l.data.episode),1)]),_:1}),t(e(U),{header:"更新周",style:{"min-width":"90px"}},{body:c(l=>[a("div",Te,z(e(s)().getWeekday(l.data.time)),1)]),_:1}),t(e(U),{header:"进度",style:{"min-width":"200px"}},{body:c(l=>[a("div",Le,[t(e(E),{class:P(V(l)==100?"finished":"progress"),value:e(s)().calProgress(l.data),style:{height:"18px"},showValue:!1},null,8,["class","value"]),a("div",Ie,[a("div",null,z(l.data.now)+" / "+z(e(s)().analyseEpisode(l.data)),1)]),a("div",{class:"progress_label white_label",style:D({"clip-path":`polygon(0 0, ${V(l)}% 0, ${V(l)}% 100%, 0% 100%)`})},[a("div",null,z(l.data.now)+" / "+z(e(s)().analyseEpisode(l.data)),1)],4)])]),_:1}),t(e(U),{header:"操作",style:{"min-width":"230px"}},{body:c(l=>[t(e(M),null,{default:c(()=>[t(e($),{severity:"secondary",size:"small",onClick:u=>y.value.showEditHandler(l.data)},{default:c(()=>n[7]||(n[7]=[a("i",{class:"pi pi-pen-to-square",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),t(e($),{severity:"secondary",size:"small",onClick:u=>e(s)().minus(l.data)},{default:c(()=>n[8]||(n[8]=[a("i",{class:"pi pi-minus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),t(e($),{severity:"secondary",size:"small",onClick:u=>e(s)().add(l.data)},{default:c(()=>n[9]||(n[9]=[a("i",{class:"pi pi-plus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),t(e($),{severity:"secondary",size:"small",style:{"font-size":"12px"},onClick:u=>p.value.showAddHandler(l.data.title)},{default:c(()=>n[10]||(n[10]=[A("添加到")])),_:2},1032,["onClick"]),t(e($),{severity:"secondary",size:"small",onClick:u=>e(s)().deleteItem(u,l.data)},{default:c(()=>n[11]||(n[11]=[a("i",{class:"pi pi-trash",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["value"]),t(e(J),{rows:20,totalRecords:e(s)().length,"onUpdate:first":r,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"第 {currentPage} 页 | 共 {totalPages} 页"},null,8,["totalRecords"]),t(re,{ref_key:"addRef",ref:b},null,512),t(ye,{ref_key:"editRef",ref:y},null,512),t(ke,{ref_key:"downloaderRef",ref:p},null,512)]))}}),Ee=K(Be,[["__scopeId","data-v-3cbaa401"]]);export{Ee as default};
