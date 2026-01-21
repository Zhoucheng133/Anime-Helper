import{B as q,s as G,c as x,o as k,a as T,m as I,r as J,b as H,t as C,d as B,e as u,u as E,f as L,w as f,g as e,h as W,i as a,j as s,k as z,l as j,n as D,p as N,q as S,_ as F,v as O,x as Q,y as X,z as Y}from"./index-DIiYULlP.js";import{l as n}from"./list-WV3aXCan.js";import{s as K,a as R}from"./index.browser-BOSKGvW6.js";import{s as _}from"./index-Bdj7Y4dL.js";import{d as Z,s as M,a as U,b as ee,c as le}from"./downloader-Bj4pWVS8.js";import{s as A}from"./index-D5b_h-jZ.js";var te=({dt:r})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${r("progressbar.height")};
    background: ${r("progressbar.background")};
    border-radius: ${r("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${r("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${r("progressbar.label.color")};
    font-size: ${r("progressbar.label.font.size")};
    font-weight: ${r("progressbar.label.font.weight")};
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
`,ae={root:function(V){var g=V.instance;return["p-progressbar p-component",{"p-progressbar-determinate":g.determinate,"p-progressbar-indeterminate":g.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},se=q.extend({name:"progressbar",style:te,classes:ae}),ne={name:"BaseProgressBar",extends:G,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:se,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},P={name:"ProgressBar",extends:ne,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},ie=["aria-valuenow"];function oe(r,V,g,y,p,o){return k(),x("div",I({role:"progressbar",class:r.cx("root"),"aria-valuemin":"0","aria-valuenow":r.value,"aria-valuemax":"100"},r.ptmi("root")),[o.determinate?(k(),x("div",I({key:0,class:r.cx("value"),style:o.progressStyle},r.ptm("value")),[r.value!=null&&r.value!==0&&r.showValue?(k(),x("div",I({key:0,class:r.cx("label")},r.ptm("label")),[J(r.$slots,"default",{},function(){return[H(C(r.value+"%"),1)]})],16)):T("",!0)],16)):o.indeterminate?(k(),x("div",I({key:1,class:r.cx("value")},r.ptm("value")),null,16)):T("",!0)],16,ie)}P.render=oe;const de={class:"flex items-center gap-2 mb-4"},re={class:"flex items-center gap-2 mb-4"},ue={class:"flex items-center gap-2 mb-4"},me={class:"flex items-center gap-2 mb-4"},pe={key:0,class:"flex items-center gap-2 mb-4"},ve={key:1,class:"flex items-center gap-2 mb-4"},fe={class:"flex justify-end gap-2"},be=B({__name:"add",setup(r,{expose:V}){const g=u(!1),y=E(),p=u(""),o=u(!1),b=u(""),$=u("0"),c=u(""),v=u(n().weekdays[0]),m=async()=>{if(p.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(b.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"集数不能为空",life:3e3});return}else if($.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(c.value.length==0&&o.value){y.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(o.value&&parseInt(c.value)==0){y.add({severity:"error",summary:"添加失败",detail:"更新集数不能为0",life:3e3});return}await n().addItem(p.value,o.value,parseInt(b.value),parseInt($.value),parseInt(c.value),v.value.code),g.value=!1,p.value="",o.value=!1,b.value="",$.value="",c.value="",v.value=n().weekdays[0]};return V({showAddHandler:()=>{g.value=!0}}),(d,l)=>(k(),L(e(W),{visible:g.value,"onUpdate:visible":l[7]||(l[7]=t=>g.value=t),modal:"",header:"添加到列表...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:f(()=>[a("div",de,[s(e(K),{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),inputId:"update",binary:""},null,8,["modelValue"]),l[8]||(l[8]=a("label",{for:"update"}," 当前在更新 ",-1))]),a("div",re,[l[9]||(l[9]=a("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),s(e(_),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":l[1]||(l[1]=t=>p.value=t)},null,8,["modelValue"])]),a("div",ue,[l[10]||(l[10]=a("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),s(e(_),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:b.value,"onUpdate:modelValue":l[2]||(l[2]=t=>b.value=t),min:"1"},null,8,["modelValue"])]),a("div",me,[l[11]||(l[11]=a("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),s(e(_),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:$.value,"onUpdate:modelValue":l[3]||(l[3]=t=>$.value=t),min:"0",max:o.value?c.value:b.value},null,8,["modelValue","max"])]),o.value?(k(),x("div",pe,[l[12]||(l[12]=a("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),s(e(_),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:c.value,"onUpdate:modelValue":l[4]||(l[4]=t=>c.value=t),min:"1",max:b.value},null,8,["modelValue","max"])])):T("",!0),o.value?(k(),x("div",ve,[l[13]||(l[13]=a("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),s(e(R),{size:"small",id:"updateWeek",modelValue:v.value,"onUpdate:modelValue":l[5]||(l[5]=t=>v.value=t),options:e(n)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):T("",!0),a("div",fe,[s(e(z),{type:"button",label:"取消",severity:"secondary",onClick:l[6]||(l[6]=t=>g.value=!1),size:"small"}),s(e(z),{type:"button",label:"添加",onClick:m,size:"small"})])]),_:1},8,["visible"]))}}),ge={class:"flex items-center gap-2 mb-4"},ye={class:"flex items-center gap-2 mb-4"},ce={class:"flex items-center gap-2 mb-4"},we={class:"flex items-center gap-2 mb-4"},ke={key:0,class:"flex items-center gap-2 mb-4"},$e={key:1,class:"flex items-center gap-2 mb-4"},xe={class:"flex justify-end gap-2"},Ve=B({__name:"edit",setup(r,{expose:V}){const g=E(),y=u(""),p=u(""),o=u(!1),b=u(""),$=u(""),c=u(""),v=u(n().weekdays[0]),m=u(!1),w=t=>{if(t==0)return n().weekdays[0];const i=new Date(t).getDay();return n().weekdays[i==0?6:i-1]},d=t=>{y.value=t.id,m.value=!0,p.value=t.title,$.value=t.now.toString(),o.value=n().calculateEpisodesReleased(t.time)<t.episode,c.value=n().analyseEpisode(t).toString(),b.value=t.episode.toString(),v.value=w(t.time)},l=async()=>{if(p.value.length==0){g.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(b.value.length==0){g.add({severity:"error",summary:"添加失败",detail:"集数不能为空",life:3e3});return}else if($.value.length==0){g.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}else if(c.value.length==0&&o.value){g.add({severity:"error",summary:"添加失败",detail:"观看集数不能为空",life:3e3});return}await n().editItem(y.value,p.value,o.value,parseInt(b.value),parseInt($.value),parseInt(c.value),v.value.code),m.value=!1};return V({showEditHandler:d}),(t,i)=>(k(),L(e(W),{visible:m.value,"onUpdate:visible":i[7]||(i[7]=h=>m.value=h),modal:"",header:"编辑列表项...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:f(()=>[a("div",ge,[s(e(K),{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=h=>o.value=h),inputId:"update",binary:""},null,8,["modelValue"]),i[8]||(i[8]=a("label",{for:"update"}," 当前在更新 ",-1))]),a("div",ye,[i[9]||(i[9]=a("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),s(e(_),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=h=>p.value=h)},null,8,["modelValue"])]),a("div",ce,[i[10]||(i[10]=a("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),s(e(_),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:b.value,"onUpdate:modelValue":i[2]||(i[2]=h=>b.value=h),min:"1"},null,8,["modelValue"])]),a("div",we,[i[11]||(i[11]=a("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),s(e(_),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:$.value,"onUpdate:modelValue":i[3]||(i[3]=h=>$.value=h),min:"0",max:o.value?c.value:b.value},null,8,["modelValue","max"])]),o.value?(k(),x("div",ke,[i[12]||(i[12]=a("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),s(e(_),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:c.value,"onUpdate:modelValue":i[4]||(i[4]=h=>c.value=h),min:"1",max:b.value},null,8,["modelValue","max"])])):T("",!0),o.value?(k(),x("div",$e,[i[13]||(i[13]=a("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),s(e(R),{size:"small",id:"updateWeek",modelValue:v.value,"onUpdate:modelValue":i[5]||(i[5]=h=>v.value=h),options:e(n)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):T("",!0),a("div",xe,[s(e(z),{type:"button",label:"取消",severity:"secondary",onClick:i[6]||(i[6]=h=>m.value=!1),size:"small"}),s(e(z),{type:"button",label:"完成",onClick:l,size:"small"})])]),_:1},8,["visible"]))}}),he={class:"flex items-center gap-2 mb-4"},ze={class:"flex items-center gap-2 mb-4"},_e={class:"flex justify-end gap-2"},Ce=B({__name:"add_downloader",setup(r,{expose:V}){const g=E(),y=u(!1),p=u(""),o=u(""),b=async()=>{if(p.value.length==0){g.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(o.value.length==0){g.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await Z().addToList(p.value,o.value),y.value=!1,p.value="",o.value=""};return V({showAddHandler:c=>{y.value=!0,p.value=c}}),(c,v)=>(k(),L(e(W),{visible:y.value,"onUpdate:visible":v[3]||(v[3]=m=>y.value=m),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:f(()=>[a("div",he,[v[4]||(v[4]=a("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),s(e(_),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":v[0]||(v[0]=m=>p.value=m)},null,8,["modelValue"])]),a("div",ze,[v[5]||(v[5]=a("label",{for:"ass",class:"font-semibold w-20"},"字幕组",-1)),s(e(_),{size:"small",id:"ass",class:"flex-auto",autocomplete:"off",modelValue:o.value,"onUpdate:modelValue":v[1]||(v[1]=m=>o.value=m)},null,8,["modelValue"])]),a("div",_e,[s(e(z),{type:"button",label:"取消",severity:"secondary",onClick:v[2]||(v[2]=m=>y.value=!1),size:"small"}),s(e(z),{type:"button",label:"添加",onClick:b,size:"small"})])]),_:1},8,["visible"]))}}),Ue={class:"flex items-center gap-2 mb-4"},Te={class:"item_title"},He={class:"ep"},Le={key:1,class:"loading"},Be=B({__name:"bgm_search",setup(r,{expose:V}){const g=E(),y=u(!1),p=u([]),o=u(!1),b=u("");async function $(m,w=!1){if(y.value=!0,document.activeElement instanceof HTMLElement&&document.activeElement.blur(),m.length==0){g.add({severity:"error",summary:"搜索失败",detail:"关键字不能为空",life:3e3});return}let d=await D.get(`${N}/api/list/bgm/search/${m}`,{headers:{token:S().token}});if(d.data.ok)p.value=d.data.msg;else if(d.data.msg=="令牌已过期"){if(!w&&await S().refreshToken())return $(m,!0)}else g.add({severity:"error",summary:"搜索失败",detail:d.data.msg,life:3e3});y.value=!1}const c=async(m,w=!1)=>{let d=await D.get(`${N}/api/list/bgm/updates/${m.id.toString()}`,{headers:{token:S().token}});if(d.data.ok)await n().addItem(m.title,m.episode>d.data.msg.updates,m.episode,0,d.data.msg.updates,d.data.msg.day),o.value=!1;else if(d.data.msg=="令牌已过期"){if(!w&&await S().refreshToken())return c(m,!0)}else g.add({severity:"error",summary:"搜索失败",detail:d.data.msg,life:3e3})};return V({showDialogHandler:()=>{p.value=[],b.value="",o.value=!0}}),(m,w)=>(k(),L(e(W),{visible:o.value,"onUpdate:visible":w[3]||(w[3]=d=>o.value=d),modal:"",header:"从Bangumi中添加...",draggable:!1,class:"select-none bgm_search_dialog_content",closable:!0},{default:f(()=>[a("div",Ue,[s(e(_),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:b.value,"onUpdate:modelValue":w[0]||(w[0]=d=>b.value=d),placeholder:"搜索标题",onKeyup:w[1]||(w[1]=j(d=>$(b.value),["enter"]))},null,8,["modelValue"]),s(e(z),{size:"small",onClick:w[2]||(w[2]=d=>$(b.value)),disabled:y.value},{default:f(()=>w[4]||(w[4]=[H("搜索")])),_:1},8,["disabled"])]),a("div",null,[p.value.length!=0?(k(),L(e(M),{key:0,value:p.value,class:"mb-5"},{default:f(()=>[s(e(U),{field:"title",header:"标题",style:{"min-width":"280px"}},{body:f(d=>[a("div",Te,C(d.data.title),1)]),_:1}),s(e(U),{header:"集数",style:{"min-width":"60px"}},{body:f(d=>[a("div",He,C(d.data.episode),1)]),_:1}),s(e(U),{header:"操作",style:{"min-width":"70px"}},{body:f(d=>[s(e(z),{severity:"secondary",size:"small",onClick:l=>c(d.data),disabled:y.value||d.data.episode==0},{default:f(()=>w[5]||(w[5]=[H("添加")])),_:2},1032,["onClick","disabled"])]),_:1})]),_:1},8,["value"])):y.value?(k(),x("div",Le,w[6]||(w[6]=[a("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"20px"}},null,-1)]))):T("",!0)])]),_:1},8,["visible"]))}}),Ie=F(Be,[["__scopeId","data-v-8183a0ac"]]),Se={class:"page"},Re={class:"tool_bar"},Ee={key:1},We={key:2},Ae={key:0,class:"card"},De={class:"item_title"},Ne={key:0,class:"update_tag tag"},je={key:1,class:"done_tag tag"},Fe={class:"ep"},Ke={class:"weekday_tag tag"},Me={class:"progress_area"},Pe={class:"progress_label"},qe={key:1,class:"empty"},Ge={class:"add_tip"},Je={class:"add_tip"},Oe=B({__name:"list",setup(r){document.title="AnimeHelper | 列表";const V=u(!0),g=u(),y=u();function p(){document.activeElement instanceof HTMLElement&&document.activeElement.blur()}const o=d=>{g.value.toggle(d)},b=u([{label:"添加",items:[{label:"手动添加",icon:"pi pi-plus",command:()=>{c.value.showAddHandler()}},{label:"从Bangumi添加",icon:"pi pi-globe",command:()=>{y.value.showDialogHandler()}}]}]),$=d=>n().calProgress(d.data);O(async()=>{await n().getList(),V.value=!1});const c=u(),v=u(),m=u();function w(d){n().offset=d,n().getList()}return(d,l)=>(k(),x("div",Se,[a("div",Re,[s(e(z),{label:"添加",size:"small",onClick:o}),s(e(Q),{ref_key:"addmenuRef",ref:g,id:"overlay_menu",model:b.value,popup:!0},null,8,["model"]),s(e(R),{size:"small",modelValue:e(n)().selectedFilter,"onUpdate:modelValue":l[0]||(l[0]=t=>e(n)().selectedFilter=t),options:e(n)().filters,"scroll-height":"20rem",optionLabel:"name",onChange:l[1]||(l[1]=t=>e(n)().getList())},null,8,["modelValue","options"]),e(n)().selectedFilter.name=="搜索"?(k(),L(e(_),{key:0,size:"small",style:{width:"100%"},modelValue:e(n)().searchKeyWord,"onUpdate:modelValue":l[2]||(l[2]=t=>e(n)().searchKeyWord=t),onChange:l[3]||(l[3]=t=>e(n)().getList()),onKeyup:j(p,["enter"])},null,8,["modelValue"])):T("",!0),e(n)().selectedFilter.name=="更新周"?(k(),x("div",Ee,[s(e(R),{size:"small",modelValue:e(n)().selectedWeekday,"onUpdate:modelValue":l[4]||(l[4]=t=>e(n)().selectedWeekday=t),options:e(n)().weekdays,"scroll-height":"20rem",style:{width:"120px"},optionLabel:"name",onChange:l[5]||(l[5]=t=>e(n)().getList())},null,8,["modelValue","options"])])):(k(),x("div",We))]),e(n)().list.length!=0&&V.value==!1?(k(),x("div",Ae,[s(e(M),{value:e(n)().list},{default:f(()=>[s(e(U),{field:"title",header:"标题",style:{"min-width":"270px"}},{body:f(t=>[a("div",De,C(t.data.title),1)]),_:1}),s(e(U),{header:"状态",style:{"min-width":"90px"}},{body:f(t=>[e(n)().onUpudate(t.data)?(k(),x("div",Ne,"更新中")):(k(),x("div",je,"已完结"))]),_:1}),s(e(U),{header:"集数",style:{"min-width":"60px"}},{body:f(t=>[a("div",Fe,C(t.data.episode),1)]),_:1}),s(e(U),{header:"更新周",style:{"min-width":"90px"}},{body:f(t=>[a("div",Ke,C(e(n)().getWeekday(t.data.time)),1)]),_:1}),s(e(U),{header:"进度",style:{"min-width":"200px"}},{body:f(t=>[a("div",Me,[s(e(P),{class:X($(t)==100?"finished":"progress"),value:e(n)().calProgress(t.data),style:{height:"18px"},showValue:!1},null,8,["class","value"]),a("div",Pe,[a("div",null,C(t.data.now)+" / "+C(e(n)().analyseEpisode(t.data)),1)]),a("div",{class:"progress_label white_label",style:Y({"clip-path":`polygon(0 0, ${$(t)}% 0, ${$(t)}% 100%, 0% 100%)`})},[a("div",null,C(t.data.now)+" / "+C(e(n)().analyseEpisode(t.data)),1)],4)])]),_:1}),s(e(U),{header:"操作",style:{"min-width":"230px"}},{body:f(t=>[s(e(le),null,{default:f(()=>[s(e(z),{severity:"secondary",size:"small",onClick:i=>v.value.showEditHandler(t.data)},{default:f(()=>l[6]||(l[6]=[a("i",{class:"pi pi-pen-to-square",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),s(e(z),{severity:"secondary",size:"small",onClick:i=>e(n)().minus(t.data)},{default:f(()=>l[7]||(l[7]=[a("i",{class:"pi pi-minus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),s(e(z),{severity:"secondary",size:"small",onClick:i=>e(n)().add(t.data)},{default:f(()=>l[8]||(l[8]=[a("i",{class:"pi pi-plus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),s(e(z),{severity:"secondary",size:"small",style:{"font-size":"12px"},onClick:i=>m.value.showAddHandler(t.data.title)},{default:f(()=>l[9]||(l[9]=[H("添加到")])),_:2},1032,["onClick"]),s(e(z),{severity:"secondary",size:"small",onClick:i=>e(n)().deleteItem(i,t.data)},{default:f(()=>l[10]||(l[10]=[a("i",{class:"pi pi-trash",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["value"]),s(e(ee),{rows:20,totalRecords:e(n)().length,"onUpdate:first":w,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"第 {currentPage} 页 | 共 {totalPages} 页"},null,8,["totalRecords"])])):e(n)().list.length==0&&V.value==!1?(k(),x("div",qe,[l[19]||(l[19]=a("div",{class:"empty_list"},[a("i",{class:"pi pi-ban",style:{"margin-right":"5px"}}),a("div",null,"列表为空")],-1)),a("div",Ge,[l[13]||(l[13]=a("div",null,"在此页面点击",-1)),s(e(A),null,{default:f(()=>l[11]||(l[11]=[H("添加")])),_:1}),l[14]||(l[14]=a("div",null,"或者在",-1)),s(e(A),null,{default:f(()=>l[12]||(l[12]=[H("每日放送")])),_:1}),l[15]||(l[15]=a("div",null,"页面中点击正在连载的动画",-1))]),a("div",Je,[l[17]||(l[17]=a("div",null,"你也可以在",-1)),s(e(A),null,{default:f(()=>l[16]||(l[16]=[H("添加")])),_:1}),l[18]||(l[18]=a("div",null,"旁的下拉菜单中修改筛选方式",-1))])])):T("",!0),s(be,{ref_key:"addRef",ref:c},null,512),s(Ve,{ref_key:"editRef",ref:v},null,512),s(Ce,{ref_key:"downloaderRef",ref:m},null,512),s(Ie,{ref_key:"bgmSearchRef",ref:y},null,512)]))}}),tl=F(Oe,[["__scopeId","data-v-891567ee"]]);export{tl as default};
