import{l as n}from"./list-B1aDQ2i7.js";import{B as M,s as q,c as x,o as k,a as T,m as S,r as G,b as B,t as C,d as I,e as u,u as W,f as H,w as g,g as e,h as A,i as s,j as t,k as z,l as J,n as E,p as D,q as L,_ as j,v as O,x as Q,y as X,z as Y}from"./index-huuLWPsQ.js";import{s as F,a as R}from"./index.browser-BLxXn9n5.js";import{s as _}from"./index-s6Obz7OL.js";import{d as Z,s as K,a as U,b as ee,c as le}from"./downloader-C3yhpqEz.js";import{s as N}from"./index-Drc5fyT3.js";var ae=({dt:d})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${d("progressbar.height")};
    background: ${d("progressbar.background")};
    border-radius: ${d("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${d("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${d("progressbar.label.color")};
    font-size: ${d("progressbar.label.font.size")};
    font-weight: ${d("progressbar.label.font.weight")};
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
`,te={root:function(V){var y=V.instance;return["p-progressbar p-component",{"p-progressbar-determinate":y.determinate,"p-progressbar-indeterminate":y.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},se=M.extend({name:"progressbar",style:ae,classes:te}),ne={name:"BaseProgressBar",extends:q,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:se,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},P={name:"ProgressBar",extends:ne,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},ie=["aria-valuenow"];function oe(d,V,y,w,p,i){return k(),x("div",S({role:"progressbar",class:d.cx("root"),"aria-valuemin":"0","aria-valuenow":d.value,"aria-valuemax":"100"},d.ptmi("root")),[i.determinate?(k(),x("div",S({key:0,class:d.cx("value"),style:i.progressStyle},d.ptm("value")),[d.value!=null&&d.value!==0&&d.showValue?(k(),x("div",S({key:0,class:d.cx("label")},d.ptm("label")),[G(d.$slots,"default",{},function(){return[B(C(d.value+"%"),1)]})],16)):T("",!0)],16)):i.indeterminate?(k(),x("div",S({key:1,class:d.cx("value")},d.ptm("value")),null,16)):T("",!0)],16,ie)}P.render=oe;const de={class:"flex items-center gap-2 mb-4"},re={class:"flex items-center gap-2 mb-4"},ue={class:"flex items-center gap-2 mb-4"},me={class:"flex items-center gap-2 mb-4"},pe={key:0,class:"flex items-center gap-2 mb-4"},ve={key:1,class:"flex items-center gap-2 mb-4"},fe={class:"flex justify-end gap-2"},be=I({__name:"add",setup(d,{expose:V}){const y=u(!1),w=W(),p=u(""),i=u(!1),m=u(""),$=u("0"),c=u(""),v=u(n().weekdays[0]),f=async()=>{if(p.value.length==0){w.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(m.value.length==0){w.add({severity:"error",summary:"添加失败",detail:"集数不能为空",life:3e3});return}else if($.value.length==0){w.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(c.value.length==0&&i.value){w.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(i.value&&parseInt(c.value)==0){w.add({severity:"error",summary:"添加失败",detail:"更新集数不能为0",life:3e3});return}await n().addItem(p.value,i.value,parseInt(m.value),parseInt($.value),parseInt(c.value),v.value.code),y.value=!1,p.value="",i.value=!1,m.value="",$.value="",c.value="",v.value=n().weekdays[0]};return V({showAddHandler:()=>{y.value=!0}}),(a,l)=>(k(),H(e(A),{visible:y.value,"onUpdate:visible":l[7]||(l[7]=o=>y.value=o),modal:"",header:"添加到列表...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:g(()=>[s("div",de,[t(e(F),{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=o=>i.value=o),inputId:"update",binary:""},null,8,["modelValue"]),l[8]||(l[8]=s("label",{for:"update"}," 当前在更新 ",-1))]),s("div",re,[l[9]||(l[9]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),t(e(_),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=o=>p.value=o)},null,8,["modelValue"])]),s("div",ue,[l[10]||(l[10]=s("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),t(e(_),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=o=>m.value=o),min:"1"},null,8,["modelValue"])]),s("div",me,[l[11]||(l[11]=s("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),t(e(_),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:$.value,"onUpdate:modelValue":l[3]||(l[3]=o=>$.value=o),min:"0",max:i.value?c.value:m.value},null,8,["modelValue","max"])]),i.value?(k(),x("div",pe,[l[12]||(l[12]=s("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),t(e(_),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:c.value,"onUpdate:modelValue":l[4]||(l[4]=o=>c.value=o),min:"1",max:m.value},null,8,["modelValue","max"])])):T("",!0),i.value?(k(),x("div",ve,[l[13]||(l[13]=s("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),t(e(R),{size:"small",id:"updateWeek",modelValue:v.value,"onUpdate:modelValue":l[5]||(l[5]=o=>v.value=o),options:e(n)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):T("",!0),s("div",fe,[t(e(z),{type:"button",label:"取消",severity:"secondary",onClick:l[6]||(l[6]=o=>y.value=!1),size:"small"}),t(e(z),{type:"button",label:"添加",onClick:f,size:"small"})])]),_:1},8,["visible"]))}}),ge={class:"flex items-center gap-2 mb-4"},ye={class:"flex items-center gap-2 mb-4"},ce={class:"flex items-center gap-2 mb-4"},we={class:"flex items-center gap-2 mb-4"},ke={key:0,class:"flex items-center gap-2 mb-4"},$e={key:1,class:"flex items-center gap-2 mb-4"},xe={class:"flex justify-end gap-2"},Ve=I({__name:"edit",setup(d,{expose:V}){const y=W(),w=u(""),p=u(""),i=u(!1),m=u(""),$=u(""),c=u(""),v=u(n().weekdays[0]),f=u(!1),b=o=>{if(o==0)return n().weekdays[0];const r=new Date(o).getDay();return n().weekdays[r==0?6:r-1]},a=o=>{w.value=o.id,f.value=!0,p.value=o.title,$.value=o.now.toString(),i.value=n().calculateEpisodesReleased(o.time)<o.episode,c.value=n().analyseEpisode(o).toString(),m.value=o.episode.toString(),v.value=b(o.time)},l=async()=>{if(p.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(m.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"集数不能为空",life:3e3});return}else if($.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(c.value.length==0&&i.value){y.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}await n().editItem(w.value,p.value,i.value,parseInt(m.value),parseInt($.value),parseInt(c.value),v.value.code),f.value=!1};return V({showEditHandler:a}),(o,r)=>(k(),H(e(A),{visible:f.value,"onUpdate:visible":r[7]||(r[7]=h=>f.value=h),modal:"",header:"编辑列表项...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:g(()=>[s("div",ge,[t(e(F),{modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=h=>i.value=h),inputId:"update",binary:""},null,8,["modelValue"]),r[8]||(r[8]=s("label",{for:"update"}," 当前在更新 ",-1))]),s("div",ye,[r[9]||(r[9]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),t(e(_),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":r[1]||(r[1]=h=>p.value=h)},null,8,["modelValue"])]),s("div",ce,[r[10]||(r[10]=s("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),t(e(_),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":r[2]||(r[2]=h=>m.value=h),min:"1"},null,8,["modelValue"])]),s("div",we,[r[11]||(r[11]=s("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),t(e(_),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:$.value,"onUpdate:modelValue":r[3]||(r[3]=h=>$.value=h),min:"0",max:i.value?c.value:m.value},null,8,["modelValue","max"])]),i.value?(k(),x("div",ke,[r[12]||(r[12]=s("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),t(e(_),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:c.value,"onUpdate:modelValue":r[4]||(r[4]=h=>c.value=h),min:"1",max:m.value},null,8,["modelValue","max"])])):T("",!0),i.value?(k(),x("div",$e,[r[13]||(r[13]=s("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),t(e(R),{size:"small",id:"updateWeek",modelValue:v.value,"onUpdate:modelValue":r[5]||(r[5]=h=>v.value=h),options:e(n)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):T("",!0),s("div",xe,[t(e(z),{type:"button",label:"取消",severity:"secondary",onClick:r[6]||(r[6]=h=>f.value=!1),size:"small"}),t(e(z),{type:"button",label:"完成",onClick:l,size:"small"})])]),_:1},8,["visible"]))}}),he={class:"flex items-center gap-2 mb-4"},ze={class:"flex items-center gap-2 mb-4"},_e={class:"flex justify-end gap-2"},Ce=I({__name:"add_downloader",setup(d,{expose:V}){const y=W(),w=u(!1),p=u(""),i=u(""),m=async()=>{if(p.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(i.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await Z().addToList(p.value,i.value),w.value=!1,p.value="",i.value=""};return V({showAddHandler:c=>{w.value=!0,p.value=c}}),(c,v)=>(k(),H(e(A),{visible:w.value,"onUpdate:visible":v[3]||(v[3]=f=>w.value=f),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:g(()=>[s("div",he,[v[4]||(v[4]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),t(e(_),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":v[0]||(v[0]=f=>p.value=f)},null,8,["modelValue"])]),s("div",ze,[v[5]||(v[5]=s("label",{for:"ass",class:"font-semibold w-20"},"字幕组",-1)),t(e(_),{size:"small",id:"ass",class:"flex-auto",autocomplete:"off",modelValue:i.value,"onUpdate:modelValue":v[1]||(v[1]=f=>i.value=f)},null,8,["modelValue"])]),s("div",_e,[t(e(z),{type:"button",label:"取消",severity:"secondary",onClick:v[2]||(v[2]=f=>w.value=!1),size:"small"}),t(e(z),{type:"button",label:"添加",onClick:m,size:"small"})])]),_:1},8,["visible"]))}}),Ue={class:"flex items-center gap-2 mb-4"},Te={class:"item_title"},Be={class:"ep"},He=I({__name:"bgm_search",setup(d,{expose:V}){const y=W(),w=u(!1),p=u([]),i=u(!1),m=u("");async function $(f,b=!1){let a=await E.get(`${D}/api/list/bgm/search/${f}`,{headers:{token:L().token}});if(a.data.ok)p.value=a.data.msg;else if(a.data.msg=="令牌已过期"){if(!b&&await L().refreshToken())return $(f,!0)}else y.add({severity:"error",summary:"搜索失败",detail:a.data.msg,life:3e3})}const c=async(f,b=!1)=>{let a=await E.get(`${D}/api/list/bgm/updates/${f.id.toString()}`,{headers:{token:L().token}});if(a.data.ok)await n().addItem(f.title,f.episode>a.data.msg.updates,f.episode,0,a.data.msg.updates,a.data.msg.day),i.value=!1;else if(a.data.msg=="令牌已过期"){if(!b&&await L().refreshToken())return c(f,!0)}else y.add({severity:"error",summary:"搜索失败",detail:a.data.msg,life:3e3})};return V({showDialogHandler:()=>{p.value=[],m.value="",i.value=!0}}),(f,b)=>(k(),H(e(A),{visible:i.value,"onUpdate:visible":b[3]||(b[3]=a=>i.value=a),modal:"",header:"从Bangumi中添加...",draggable:!1,class:"select-none bgm_search_dialog_content",closable:!0},{default:g(()=>[s("div",Ue,[t(e(_),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":b[0]||(b[0]=a=>m.value=a),placeholder:"搜索标题",onKeyup:b[1]||(b[1]=J(a=>$(m.value),["enter"]))},null,8,["modelValue"]),t(e(z),{size:"small",onClick:b[2]||(b[2]=a=>$(m.value)),disabled:w.value},{default:g(()=>b[4]||(b[4]=[B("搜索")])),_:1},8,["disabled"])]),s("div",null,[p.value.length!=0?(k(),H(e(K),{key:0,value:p.value,class:"mb-5"},{default:g(()=>[t(e(U),{field:"title",header:"标题",style:{"min-width":"280px"}},{body:g(a=>[s("div",Te,C(a.data.title),1)]),_:1}),t(e(U),{header:"集数",style:{"min-width":"60px"}},{body:g(a=>[s("div",Be,C(a.data.episode),1)]),_:1}),t(e(U),{header:"操作",style:{"min-width":"70px"}},{body:g(a=>[t(e(z),{severity:"secondary",size:"small",onClick:l=>c(a.data),disabled:w.value||a.data.episode==0},{default:g(()=>b[5]||(b[5]=[B("添加")])),_:2},1032,["onClick","disabled"])]),_:1})]),_:1},8,["value"])):T("",!0)])]),_:1},8,["visible"]))}}),Ie=j(He,[["__scopeId","data-v-0f1d214f"]]),Se={class:"page"},Le={class:"tool_bar"},Re={key:1},We={key:2},Ae={key:0,class:"card"},Ee={class:"item_title"},De={key:0,class:"update_tag tag"},Ne={key:1,class:"done_tag tag"},je={class:"ep"},Fe={class:"weekday_tag tag"},Ke={class:"progress_area"},Pe={class:"progress_label"},Me={key:1,class:"empty"},qe={class:"add_tip"},Ge=I({__name:"list",setup(d){document.title="AnimeHelper | 列表";const V=u(!0),y=u(),w=u(),p=b=>{y.value.toggle(b)},i=u([{label:"添加",items:[{label:"手动添加",icon:"pi pi-plus",command:()=>{$.value.showAddHandler()}},{label:"从Bangumi添加",icon:"pi pi-globe",command:()=>{w.value.showDialogHandler()}}]}]),m=b=>n().calProgress(b.data);O(async()=>{await n().getList(),V.value=!1});const $=u(),c=u(),v=u();function f(b){n().offset=b,n().getList()}return(b,a)=>(k(),x("div",Se,[s("div",Le,[t(e(z),{label:"添加",size:"small",onClick:p}),t(e(Q),{ref_key:"addmenuRef",ref:y,id:"overlay_menu",model:i.value,popup:!0},null,8,["model"]),t(e(R),{size:"small",modelValue:e(n)().selectedFilter,"onUpdate:modelValue":a[0]||(a[0]=l=>e(n)().selectedFilter=l),options:e(n)().filters,"scroll-height":"20rem",optionLabel:"name",onChange:a[1]||(a[1]=l=>e(n)().getList())},null,8,["modelValue","options"]),e(n)().selectedFilter.name=="搜索"?(k(),H(e(_),{key:0,size:"small",style:{width:"100%"},modelValue:e(n)().searchKeyWord,"onUpdate:modelValue":a[2]||(a[2]=l=>e(n)().searchKeyWord=l),onChange:a[3]||(a[3]=l=>e(n)().getList())},null,8,["modelValue"])):T("",!0),e(n)().selectedFilter.name=="更新周"?(k(),x("div",Re,[t(e(R),{size:"small",modelValue:e(n)().selectedWeekday,"onUpdate:modelValue":a[4]||(a[4]=l=>e(n)().selectedWeekday=l),options:e(n)().weekdays,"scroll-height":"20rem",style:{width:"120px"},optionLabel:"name",onChange:a[5]||(a[5]=l=>e(n)().getList())},null,8,["modelValue","options"])])):(k(),x("div",We))]),e(n)().list.length!=0&&V.value==!1?(k(),x("div",Ae,[t(e(K),{value:e(n)().list},{default:g(()=>[t(e(U),{field:"title",header:"标题",style:{"min-width":"270px"}},{body:g(l=>[s("div",Ee,C(l.data.title),1)]),_:1}),t(e(U),{header:"状态",style:{"min-width":"90px"}},{body:g(l=>[e(n)().onUpudate(l.data)?(k(),x("div",De,"更新中")):(k(),x("div",Ne,"已完结"))]),_:1}),t(e(U),{header:"集数",style:{"min-width":"60px"}},{body:g(l=>[s("div",je,C(l.data.episode),1)]),_:1}),t(e(U),{header:"更新周",style:{"min-width":"90px"}},{body:g(l=>[s("div",Fe,C(e(n)().getWeekday(l.data.time)),1)]),_:1}),t(e(U),{header:"进度",style:{"min-width":"200px"}},{body:g(l=>[s("div",Ke,[t(e(P),{class:X(m(l)==100?"finished":"progress"),value:e(n)().calProgress(l.data),style:{height:"18px"},showValue:!1},null,8,["class","value"]),s("div",Pe,[s("div",null,C(l.data.now)+" / "+C(e(n)().analyseEpisode(l.data)),1)]),s("div",{class:"progress_label white_label",style:Y({"clip-path":`polygon(0 0, ${m(l)}% 0, ${m(l)}% 100%, 0% 100%)`})},[s("div",null,C(l.data.now)+" / "+C(e(n)().analyseEpisode(l.data)),1)],4)])]),_:1}),t(e(U),{header:"操作",style:{"min-width":"230px"}},{body:g(l=>[t(e(le),null,{default:g(()=>[t(e(z),{severity:"secondary",size:"small",onClick:o=>c.value.showEditHandler(l.data)},{default:g(()=>a[6]||(a[6]=[s("i",{class:"pi pi-pen-to-square",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),t(e(z),{severity:"secondary",size:"small",onClick:o=>e(n)().minus(l.data)},{default:g(()=>a[7]||(a[7]=[s("i",{class:"pi pi-minus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),t(e(z),{severity:"secondary",size:"small",onClick:o=>e(n)().add(l.data)},{default:g(()=>a[8]||(a[8]=[s("i",{class:"pi pi-plus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),t(e(z),{severity:"secondary",size:"small",style:{"font-size":"12px"},onClick:o=>v.value.showAddHandler(l.data.title)},{default:g(()=>a[9]||(a[9]=[B("添加到")])),_:2},1032,["onClick"]),t(e(z),{severity:"secondary",size:"small",onClick:o=>e(n)().deleteItem(o,l.data)},{default:g(()=>a[10]||(a[10]=[s("i",{class:"pi pi-trash",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["value"]),t(e(ee),{rows:20,totalRecords:e(n)().length,"onUpdate:first":f,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"第 {currentPage} 页 | 共 {totalPages} 页"},null,8,["totalRecords"])])):e(n)().list.length==0&&V.value==!1?(k(),x("div",Me,[a[16]||(a[16]=s("div",{class:"empty_list"},[s("i",{class:"pi pi-ban",style:{"margin-right":"5px"}}),s("div",null,"列表为空")],-1)),s("div",qe,[a[13]||(a[13]=s("div",null,"在此页面点击",-1)),t(e(N),null,{default:g(()=>a[11]||(a[11]=[B("添加")])),_:1}),a[14]||(a[14]=s("div",null,"或者在",-1)),t(e(N),null,{default:g(()=>a[12]||(a[12]=[B("每日放送")])),_:1}),a[15]||(a[15]=s("div",null,"页面中添加正在连载的动画",-1))])])):T("",!0),t(be,{ref_key:"addRef",ref:$},null,512),t(Ve,{ref_key:"editRef",ref:c},null,512),t(Ce,{ref_key:"downloaderRef",ref:v},null,512),t(Ie,{ref_key:"bgmSearchRef",ref:w},null,512)]))}}),el=j(Ge,[["__scopeId","data-v-db128a3f"]]);export{el as default};
