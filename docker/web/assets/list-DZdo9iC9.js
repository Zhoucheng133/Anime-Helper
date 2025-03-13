import{l as s}from"./list-BJkBAFis.js";import{s as P,a as _,b as L}from"./index.browser-C3Hd0ZRB.js";import{s as x}from"./index-BvykPrIl.js";import{B as A,s as N,c as y,o as p,a as z,m as T,r as F,b as R,t as U,d as I,e as m,u as H,f as B,w as g,g as e,h as i,i as a,j as w,n as j,_ as D}from"./index-462V7mWl.js";import{s as K,a as q,b as C,c as G}from"./index-BnK1-1sO.js";var J=({dt:o})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${o("progressbar.height")};
    background: ${o("progressbar.background")};
    border-radius: ${o("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${o("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${o("progressbar.label.color")};
    font-size: ${o("progressbar.label.font.size")};
    font-weight: ${o("progressbar.label.font.weight")};
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
`,M={root:function(V){var u=V.instance;return["p-progressbar p-component",{"p-progressbar-determinate":u.determinate,"p-progressbar-indeterminate":u.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},O=A.extend({name:"progressbar",style:J,classes:M}),Q={name:"BaseProgressBar",extends:N,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:O,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},E={name:"ProgressBar",extends:Q,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},X=["aria-valuenow"];function Y(o,V,u,k,f,t){return p(),y("div",T({role:"progressbar",class:o.cx("root"),"aria-valuemin":"0","aria-valuenow":o.value,"aria-valuemax":"100"},o.ptmi("root")),[t.determinate?(p(),y("div",T({key:0,class:o.cx("value"),style:t.progressStyle},o.ptm("value")),[o.value!=null&&o.value!==0&&o.showValue?(p(),y("div",T({key:0,class:o.cx("label")},o.ptm("label")),[F(o.$slots,"default",{},function(){return[R(U(o.value+"%"),1)]})],16)):z("",!0)],16)):t.indeterminate?(p(),y("div",T({key:1,class:o.cx("value")},o.ptm("value")),null,16)):z("",!0)],16,X)}E.render=Y;const Z={class:"flex items-center gap-2 mb-4"},ee={class:"flex items-center gap-2 mb-4"},te={class:"flex items-center gap-2 mb-4"},le={class:"flex items-center gap-2 mb-4"},se={key:0,class:"flex items-center gap-2 mb-4"},ae={key:1,class:"flex items-center gap-2 mb-4"},ne={class:"flex justify-end gap-2"},ie=I({__name:"add",setup(o,{expose:V}){const u=m(!1),k=H(),f=m(""),t=m(!1),l=m(""),v=m("0"),c=m(""),$=m(s().weekdays[0]),h=async()=>{if(f.value.length==0){k.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(l.value.length==0){k.add({severity:"error",summary:"添加失败",detail:"集数不能为空",life:3e3});return}else if(v.value.length==0){k.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(c.value.length==0&&t.value){k.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}await s().addItem(f.value,t.value,parseInt(l.value),parseInt(v.value),parseInt(c.value),$.value.code),u.value=!1};return V({showAddHandler:()=>{u.value=!0}}),(S,r)=>(p(),B(e(P),{visible:u.value,"onUpdate:visible":r[7]||(r[7]=d=>u.value=d),modal:"",header:"添加到列表...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:g(()=>[i("div",Z,[a(e(_),{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=d=>t.value=d),inputId:"update",binary:""},null,8,["modelValue"]),r[8]||(r[8]=i("label",{for:"update"}," 当前在更新 ",-1))]),i("div",ee,[r[9]||(r[9]=i("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),a(e(x),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:f.value,"onUpdate:modelValue":r[1]||(r[1]=d=>f.value=d)},null,8,["modelValue"])]),i("div",te,[r[10]||(r[10]=i("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),a(e(x),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:l.value,"onUpdate:modelValue":r[2]||(r[2]=d=>l.value=d),min:"1"},null,8,["modelValue"])]),i("div",le,[r[11]||(r[11]=i("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),a(e(x),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:v.value,"onUpdate:modelValue":r[3]||(r[3]=d=>v.value=d),min:"0",max:t.value?c.value:l.value},null,8,["modelValue","max"])]),t.value?(p(),y("div",se,[r[12]||(r[12]=i("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),a(e(x),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:c.value,"onUpdate:modelValue":r[4]||(r[4]=d=>c.value=d),min:"1",max:l.value},null,8,["modelValue","max"])])):z("",!0),t.value?(p(),y("div",ae,[r[13]||(r[13]=i("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),a(e(L),{size:"small",id:"updateWeek",modelValue:$.value,"onUpdate:modelValue":r[5]||(r[5]=d=>$.value=d),options:e(s)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):z("",!0),i("div",ne,[a(e(w),{type:"button",label:"取消",severity:"secondary",onClick:r[6]||(r[6]=d=>u.value=!1),size:"small"}),a(e(w),{type:"button",label:"添加",onClick:h,size:"small"})])]),_:1},8,["visible"]))}}),oe={class:"flex items-center gap-2 mb-4"},re={class:"flex items-center gap-2 mb-4"},de={class:"flex items-center gap-2 mb-4"},ue={class:"flex items-center gap-2 mb-4"},me={key:0,class:"flex items-center gap-2 mb-4"},pe={key:1,class:"flex items-center gap-2 mb-4"},ve={class:"flex justify-end gap-2"},fe=I({__name:"edit",setup(o,{expose:V}){const u=H(),k=m(""),f=m(""),t=m(!1),l=m(""),v=m(""),c=m(""),$=m(s().weekdays[0]),h=m(!1),W=d=>{if(d==0)return s().weekdays[0];const n=new Date(d).getDay();return s().weekdays[n==0?6:n-1]},S=d=>{k.value=d.id,h.value=!0,f.value=d.title,v.value=d.now.toString(),t.value=s().calculateEpisodesReleased(d.time)<d.episode,c.value=s().analyseEpisode(d).toString(),l.value=d.episode.toString(),$.value=W(d.time)},r=async()=>{if(f.value.length==0){u.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(l.value.length==0){u.add({severity:"error",summary:"添加失败",detail:"集数不能为空",life:3e3});return}else if(v.value.length==0){u.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(c.value.length==0&&t.value){u.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}await s().editItem(k.value,f.value,t.value,parseInt(l.value),parseInt(v.value),parseInt(c.value),$.value.code),h.value=!1};return V({showEditHandler:S}),(d,n)=>(p(),B(e(P),{visible:h.value,"onUpdate:visible":n[7]||(n[7]=b=>h.value=b),modal:"",header:"编辑列表项...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:g(()=>[i("div",oe,[a(e(_),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=b=>t.value=b),inputId:"update",binary:""},null,8,["modelValue"]),n[8]||(n[8]=i("label",{for:"update"}," 当前在更新 ",-1))]),i("div",re,[n[9]||(n[9]=i("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),a(e(x),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:f.value,"onUpdate:modelValue":n[1]||(n[1]=b=>f.value=b)},null,8,["modelValue"])]),i("div",de,[n[10]||(n[10]=i("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),a(e(x),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=b=>l.value=b),min:"1"},null,8,["modelValue"])]),i("div",ue,[n[11]||(n[11]=i("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),a(e(x),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:v.value,"onUpdate:modelValue":n[3]||(n[3]=b=>v.value=b),min:"0",max:t.value?c.value:l.value},null,8,["modelValue","max"])]),t.value?(p(),y("div",me,[n[12]||(n[12]=i("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),a(e(x),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:c.value,"onUpdate:modelValue":n[4]||(n[4]=b=>c.value=b),min:"1",max:l.value},null,8,["modelValue","max"])])):z("",!0),t.value?(p(),y("div",pe,[n[13]||(n[13]=i("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),a(e(L),{size:"small",id:"updateWeek",modelValue:$.value,"onUpdate:modelValue":n[5]||(n[5]=b=>$.value=b),options:e(s)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):z("",!0),i("div",ve,[a(e(w),{type:"button",label:"取消",severity:"secondary",onClick:n[6]||(n[6]=b=>h.value=!1),size:"small"}),a(e(w),{type:"button",label:"完成",onClick:r,size:"small"})])]),_:1},8,["visible"]))}}),be={class:"page"},ge={class:"tool_bar"},ye={key:1},ce={key:2},ke={class:"item_title"},we={key:0,class:"update_tag tag"},Ve={key:1,class:"done_tag tag"},xe={class:"weekday_tag tag"},$e={class:"progress_area"},he={class:"progress_label"},ze=I({__name:"list",setup(o){document.title="AnimeHelper | 列表",s().getList();const V=m(),u=m();function k(f){s().offset=f,s().getList()}return(f,t)=>(p(),y("div",be,[i("div",ge,[a(e(w),{label:"添加",size:"small",onClick:t[0]||(t[0]=l=>V.value.showAddHandler())}),a(e(L),{size:"small",modelValue:e(s)().selectedFilter,"onUpdate:modelValue":t[1]||(t[1]=l=>e(s)().selectedFilter=l),options:e(s)().filters,"scroll-height":"20rem",optionLabel:"name",onChange:t[2]||(t[2]=l=>e(s)().getList())},null,8,["modelValue","options"]),e(s)().selectedFilter.name=="搜索"?(p(),B(e(x),{key:0,size:"small",style:{width:"100%"},modelValue:e(s)().searchKeyWord,"onUpdate:modelValue":t[3]||(t[3]=l=>e(s)().searchKeyWord=l),onChange:t[4]||(t[4]=l=>e(s)().getList())},null,8,["modelValue"])):z("",!0),e(s)().selectedFilter.name=="更新周"?(p(),y("div",ye,[a(e(L),{size:"small",modelValue:e(s)().selectedWeekday,"onUpdate:modelValue":t[5]||(t[5]=l=>e(s)().selectedWeekday=l),options:e(s)().weekdays,"scroll-height":"20rem",style:{width:"120px"},optionLabel:"name",onChange:t[6]||(t[6]=l=>e(s)().getList())},null,8,["modelValue","options"])])):(p(),y("div",ce))]),a(e(K),{value:e(s)().list},{default:g(()=>[a(e(C),{field:"title",header:"标题",style:{"min-width":"270px"}},{body:g(l=>[i("div",ke,U(l.data.title),1)]),_:1}),a(e(C),{header:"状态",style:{"min-width":"90px"}},{body:g(l=>[e(s)().onUpudate(l.data)?(p(),y("div",we,"更新中")):(p(),y("div",Ve,"已完结"))]),_:1}),a(e(C),{header:"更新周",style:{"min-width":"90px"}},{body:g(l=>[i("div",xe,U(e(s)().getWeekday(l.data.time)),1)]),_:1}),a(e(C),{header:"进度",style:{"min-width":"230px"}},{body:g(l=>[i("div",$e,[a(e(E),{class:j(e(s)().calProgress(l.data)==100?"finished":""),value:e(s)().calProgress(l.data),style:{height:"5px"},"show-value":!1},null,8,["class","value"]),i("div",he,U(l.data.now)+" / "+U(e(s)().analyseEpisode(l.data)),1)])]),_:1}),a(e(C),{header:"操作",style:{"min-width":"230px"}},{body:g(l=>[a(e(G),null,{default:g(()=>[a(e(w),{severity:"secondary",size:"small",onClick:v=>u.value.showEditHandler(l.data)},{default:g(()=>t[7]||(t[7]=[i("i",{class:"pi pi-pen-to-square",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),a(e(w),{severity:"secondary",size:"small",onClick:v=>e(s)().minus(l.data)},{default:g(()=>t[8]||(t[8]=[i("i",{class:"pi pi-minus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),a(e(w),{severity:"secondary",size:"small",onClick:v=>e(s)().add(l.data)},{default:g(()=>t[9]||(t[9]=[i("i",{class:"pi pi-plus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),a(e(w),{severity:"secondary",size:"small",style:{"font-size":"12px"}},{default:g(()=>t[10]||(t[10]=[R("添加到")])),_:1}),a(e(w),{severity:"secondary",size:"small",onClick:v=>e(s)().deleteItem(v,l.data)},{default:g(()=>t[11]||(t[11]=[i("i",{class:"pi pi-trash",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["value"]),a(e(q),{rows:20,totalRecords:e(s)().length,"onUpdate:first":k,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"第 {currentPage} 页 | 共 {totalPages} 页"},null,8,["totalRecords"]),a(ie,{ref_key:"addRef",ref:V},null,512),a(fe,{ref_key:"editRef",ref:u},null,512)]))}}),Be=D(ze,[["__scopeId","data-v-3845b627"]]);export{Be as default};
