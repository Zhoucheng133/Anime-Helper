import{B as q,s as P,c as x,o as f,a as U,m as B,r as G,b as T,t as _,d as L,e as u,f as H,w as p,u as e,g as R,h as s,i as n,j as h,k as D,l as N,n as E,p as A,q as S,_ as j,v as J,x as O,y as Q,z as X}from"./index-BHH3DADK.js";import{l as i}from"./list-Byq-Kn1_.js";import{s as F,a as I}from"./index.browser-CoiqPHQw.js";import{s as z}from"./index-BM_ZD716.js";import{d as Y,s as K,a as C,b as Z,c as ee}from"./downloader-Dm5rtWWW.js";import{s as W}from"./index-CqRMdbnR.js";var le=({dt:o})=>`
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
`,ae={root:function(V){var y=V.instance;return["p-progressbar p-component",{"p-progressbar-determinate":y.determinate,"p-progressbar-indeterminate":y.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},te=q.extend({name:"progressbar",style:le,classes:ae}),se={name:"BaseProgressBar",extends:P,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:te,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},M={name:"ProgressBar",extends:se,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},ne=["aria-valuenow"];function ie(o,V,y,m,d,r){return f(),x("div",B({role:"progressbar",class:o.cx("root"),"aria-valuemin":"0","aria-valuenow":o.value,"aria-valuemax":"100"},o.ptmi("root")),[r.determinate?(f(),x("div",B({key:0,class:o.cx("value"),style:r.progressStyle},o.ptm("value")),[o.value!=null&&o.value!==0&&o.showValue?(f(),x("div",B({key:0,class:o.cx("label")},o.ptm("label")),[G(o.$slots,"default",{},function(){return[T(_(o.value+"%"),1)]})],16)):U("",!0)],16)):r.indeterminate?(f(),x("div",B({key:1,class:o.cx("value")},o.ptm("value")),null,16)):U("",!0)],16,ne)}M.render=ie;const oe={class:"flex items-center gap-2 mb-4"},de={class:"flex items-center gap-2 mb-4"},re={class:"flex items-center gap-2 mb-4"},ue={class:"flex items-center gap-2 mb-4"},me={key:0,class:"flex items-center gap-2 mb-4"},pe={key:1,class:"flex items-center gap-2 mb-4"},ve={class:"flex justify-end gap-2"},fe=L({__name:"add",setup(o,{expose:V}){const y=u(!1),m=u(""),d=u(!1),r=u(""),k=u("0"),c=u(""),$=u(i().weekdays[0]),v=async()=>{i().formChecker(m.value,d.value,r.value,k.value,c.value)&&(await i().addItem(m.value,d.value,parseInt(r.value),parseInt(k.value),parseInt(c.value),$.value.code),y.value=!1,m.value="",d.value=!1,r.value="",k.value="",c.value="",$.value=i().weekdays[0])};return V({showAddHandler:()=>{y.value=!0}}),(g,t)=>(f(),H(e(R),{visible:y.value,"onUpdate:visible":t[7]||(t[7]=l=>y.value=l),modal:"",header:"添加到列表...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[s("div",oe,[n(e(F),{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=l=>d.value=l),inputId:"update",binary:""},null,8,["modelValue"]),t[8]||(t[8]=s("label",{for:"update"}," 当前在更新 ",-1))]),s("div",de,[t[9]||(t[9]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),n(e(z),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=l=>m.value=l)},null,8,["modelValue"])]),s("div",re,[t[10]||(t[10]=s("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),n(e(z),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=l=>r.value=l),min:"1"},null,8,["modelValue"])]),s("div",ue,[t[11]||(t[11]=s("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),n(e(z),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:k.value,"onUpdate:modelValue":t[3]||(t[3]=l=>k.value=l),min:"0",max:d.value?c.value:r.value},null,8,["modelValue","max"])]),d.value?(f(),x("div",me,[t[12]||(t[12]=s("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),n(e(z),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:c.value,"onUpdate:modelValue":t[4]||(t[4]=l=>c.value=l),min:"1",max:r.value},null,8,["modelValue","max"])])):U("",!0),d.value?(f(),x("div",pe,[t[13]||(t[13]=s("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),n(e(I),{size:"small",id:"updateWeek",modelValue:$.value,"onUpdate:modelValue":t[5]||(t[5]=l=>$.value=l),options:e(i)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):U("",!0),s("div",ve,[n(e(h),{type:"button",label:"取消",severity:"secondary",onClick:t[6]||(t[6]=l=>y.value=!1),size:"small"}),n(e(h),{type:"button",label:"添加",onClick:v,size:"small"})])]),_:1},8,["visible"]))}}),be={class:"flex items-center gap-2 mb-4"},ge={class:"flex items-center gap-2 mb-4"},ye={class:"flex items-center gap-2 mb-4"},ce={class:"flex items-center gap-2 mb-4"},ke={key:0,class:"flex items-center gap-2 mb-4"},we={key:1,class:"flex items-center gap-2 mb-4"},$e={class:"flex justify-end gap-2"},xe=L({__name:"edit",setup(o,{expose:V}){const y=u(""),m=u(""),d=u(!1),r=u(""),k=u(""),c=u(""),$=u(i().weekdays[0]),v=u(!1),b=l=>{if(l==0)return i().weekdays[0];const a=new Date(l).getDay();return i().weekdays[a==0?6:a-1]},g=l=>{y.value=l.id,v.value=!0,m.value=l.title,k.value=l.now.toString(),d.value=i().calculateEpisodesReleased(l.time)<l.episode,c.value=i().analyseEpisode(l).toString(),r.value=l.episode.toString(),$.value=b(l.time)},t=async()=>{i().formChecker(m.value,d.value,r.value,k.value,c.value)&&(await i().editItem(y.value,m.value,d.value,parseInt(r.value),parseInt(k.value),parseInt(c.value),$.value.code),v.value=!1)};return V({showEditHandler:g}),(l,a)=>(f(),H(e(R),{visible:v.value,"onUpdate:visible":a[7]||(a[7]=w=>v.value=w),modal:"",header:"编辑列表项...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[s("div",be,[n(e(F),{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=w=>d.value=w),inputId:"update",binary:""},null,8,["modelValue"]),a[8]||(a[8]=s("label",{for:"update"}," 当前在更新 ",-1))]),s("div",ge,[a[9]||(a[9]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),n(e(z),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=w=>m.value=w)},null,8,["modelValue"])]),s("div",ye,[a[10]||(a[10]=s("label",{for:"episode",class:"font-semibold w-20"},"集数",-1)),n(e(z),{type:"number",size:"small",id:"episode",class:"flex-auto",autocomplete:"off",modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=w=>r.value=w),min:"1"},null,8,["modelValue"])]),s("div",ce,[a[11]||(a[11]=s("label",{for:"watchTo",class:"font-semibold w-20"},"观看至",-1)),n(e(z),{type:"number",size:"small",id:"watchTo",class:"flex-auto",autocomplete:"off",modelValue:k.value,"onUpdate:modelValue":a[3]||(a[3]=w=>k.value=w),min:"0",max:d.value?c.value:r.value},null,8,["modelValue","max"])]),d.value?(f(),x("div",ke,[a[12]||(a[12]=s("label",{for:"updateTo",class:"font-semibold w-20"},"更新至",-1)),n(e(z),{type:"number",size:"small",id:"updateTo",class:"flex-auto",autocomplete:"off",modelValue:c.value,"onUpdate:modelValue":a[4]||(a[4]=w=>c.value=w),min:"1",max:r.value},null,8,["modelValue","max"])])):U("",!0),d.value?(f(),x("div",we,[a[13]||(a[13]=s("label",{for:"updateWeek",class:"font-semibold w-20"},"更新周",-1)),n(e(I),{size:"small",id:"updateWeek",modelValue:$.value,"onUpdate:modelValue":a[5]||(a[5]=w=>$.value=w),options:e(i)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):U("",!0),s("div",$e,[n(e(h),{type:"button",label:"取消",severity:"secondary",onClick:a[6]||(a[6]=w=>v.value=!1),size:"small"}),n(e(h),{type:"button",label:"完成",onClick:t,size:"small"})])]),_:1},8,["visible"]))}}),Ve={class:"flex items-center gap-2 mb-4"},he={class:"flex items-center gap-2 mb-4"},ze={class:"flex justify-end gap-2"},_e=L({__name:"add_downloader",setup(o,{expose:V}){const y=D(),m=u(!1),d=u(""),r=u(""),k=async()=>{if(d.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(r.value.length==0){y.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await Y().addToList(d.value,r.value),m.value=!1,d.value="",r.value=""};return V({showAddHandler:$=>{m.value=!0,d.value=$}}),($,v)=>(f(),H(e(R),{visible:m.value,"onUpdate:visible":v[3]||(v[3]=b=>m.value=b),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[s("div",Ve,[v[4]||(v[4]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),n(e(z),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:d.value,"onUpdate:modelValue":v[0]||(v[0]=b=>d.value=b)},null,8,["modelValue"])]),s("div",he,[v[5]||(v[5]=s("label",{for:"ass",class:"font-semibold w-20"},"字幕组",-1)),n(e(z),{size:"small",id:"ass",class:"flex-auto",autocomplete:"off",modelValue:r.value,"onUpdate:modelValue":v[1]||(v[1]=b=>r.value=b)},null,8,["modelValue"])]),s("div",ze,[n(e(h),{type:"button",label:"取消",severity:"secondary",onClick:v[2]||(v[2]=b=>m.value=!1),size:"small"}),n(e(h),{type:"button",label:"添加",onClick:k,size:"small"})])]),_:1},8,["visible"]))}}),Ce={class:"flex items-center gap-2 mb-4"},Ue={class:"item_title"},Te={class:"ep"},He={key:1,class:"loading"},Le=L({__name:"bgm_search",setup(o,{expose:V}){const y=D(),m=u(!1),d=u([]),r=u(!1),k=u("");async function c(b,g=!1){if(m.value=!0,document.activeElement instanceof HTMLElement&&document.activeElement.blur(),b.length==0){y.add({severity:"error",summary:"搜索失败",detail:"关键字不能为空",life:3e3});return}let t=await E.get(`${A}/api/list/bgm/search/${b}`,{headers:{token:S().token}});if(t.data.ok)d.value=t.data.msg;else if(t.data.msg=="令牌已过期"){if(!g&&await S().refreshToken())return c(b,!0)}else y.add({severity:"error",summary:"搜索失败",detail:t.data.msg,life:3e3});m.value=!1}const $=async(b,g=!1)=>{let t=await E.get(`${A}/api/list/bgm/updates/${b.id.toString()}`,{headers:{token:S().token}});if(t.data.ok)await i().addItem(b.title,b.episode>t.data.msg.updates,b.episode,0,t.data.msg.updates,t.data.msg.day),r.value=!1;else if(t.data.msg=="令牌已过期"){if(!g&&await S().refreshToken())return $(b,!0)}else y.add({severity:"error",summary:"搜索失败",detail:t.data.msg,life:3e3})};return V({showDialogHandler:()=>{d.value=[],k.value="",r.value=!0}}),(b,g)=>(f(),H(e(R),{visible:r.value,"onUpdate:visible":g[3]||(g[3]=t=>r.value=t),modal:"",header:"从Bangumi中添加...",draggable:!1,class:"select-none bgm_search_dialog_content",closable:!0},{default:p(()=>[s("div",Ce,[n(e(z),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:k.value,"onUpdate:modelValue":g[0]||(g[0]=t=>k.value=t),placeholder:"搜索标题",onKeyup:g[1]||(g[1]=N(t=>c(k.value),["enter"]))},null,8,["modelValue"]),n(e(h),{size:"small",onClick:g[2]||(g[2]=t=>c(k.value)),disabled:m.value},{default:p(()=>g[4]||(g[4]=[T("搜索")])),_:1},8,["disabled"])]),s("div",null,[d.value.length!=0?(f(),H(e(K),{key:0,value:d.value,class:"mb-5"},{default:p(()=>[n(e(C),{field:"title",header:"标题",style:{"min-width":"280px"}},{body:p(t=>[s("div",Ue,_(t.data.title),1)]),_:1}),n(e(C),{header:"集数",style:{"min-width":"60px"}},{body:p(t=>[s("div",Te,_(t.data.episode),1)]),_:1}),n(e(C),{header:"操作",style:{"min-width":"70px"}},{body:p(t=>[n(e(h),{severity:"secondary",size:"small",onClick:l=>$(t.data),disabled:m.value||t.data.episode==0},{default:p(()=>g[5]||(g[5]=[T("添加")])),_:2},1032,["onClick","disabled"])]),_:1})]),_:1},8,["value"])):m.value?(f(),x("div",He,g[6]||(g[6]=[s("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"20px"}},null,-1)]))):U("",!0)])]),_:1},8,["visible"]))}}),Be=j(Le,[["__scopeId","data-v-8183a0ac"]]),Se={class:"page"},Ie={class:"tool_bar"},Re={key:1},We={key:2},Ee={key:0,class:"card"},Ae={class:"item_title"},De={key:0,class:"update_tag tag"},Ne={key:1,class:"done_tag tag"},je={class:"ep"},Fe={key:0,class:"weekday_tag weekday_tag_now"},Ke={key:1,class:"weekday_tag"},Me={class:"progress_area"},qe={class:"progress_label"},Pe={key:1,class:"empty"},Ge={class:"add_tip"},Je={class:"add_tip"},Oe=L({__name:"list",setup(o){document.title="AnimeHelper | 列表";const V=u(!0),y=u(),m=u();function d(){document.activeElement instanceof HTMLElement&&document.activeElement.blur()}const r=t=>{y.value.toggle(t)},k=u([{label:"添加",items:[{label:"手动添加",icon:"pi pi-plus",command:()=>{$.value.showAddHandler()}},{label:"从Bangumi添加",icon:"pi pi-globe",command:()=>{m.value.showDialogHandler()}}]}]),c=t=>i().calProgress(t.data);J(async()=>{await i().getList(),V.value=!1});const $=u(),v=u(),b=u();function g(t){i().offset=t,i().getList()}return(t,l)=>(f(),x("div",Se,[s("div",Ie,[n(e(h),{label:"添加",size:"small",onClick:r}),n(e(O),{ref_key:"addmenuRef",ref:y,id:"overlay_menu",model:k.value,popup:!0},null,8,["model"]),n(e(I),{size:"small",modelValue:e(i)().selectedFilter,"onUpdate:modelValue":l[0]||(l[0]=a=>e(i)().selectedFilter=a),options:e(i)().filters,"scroll-height":"20rem",optionLabel:"name",onChange:l[1]||(l[1]=a=>e(i)().getList())},null,8,["modelValue","options"]),e(i)().selectedFilter.name=="搜索"?(f(),H(e(z),{key:0,size:"small",style:{width:"100%"},modelValue:e(i)().searchKeyWord,"onUpdate:modelValue":l[2]||(l[2]=a=>e(i)().searchKeyWord=a),onChange:l[3]||(l[3]=a=>e(i)().getList()),onKeyup:N(d,["enter"])},null,8,["modelValue"])):U("",!0),e(i)().selectedFilter.name=="更新周"?(f(),x("div",Re,[n(e(I),{size:"small",modelValue:e(i)().selectedWeekday,"onUpdate:modelValue":l[4]||(l[4]=a=>e(i)().selectedWeekday=a),options:e(i)().weekdays,"scroll-height":"20rem",style:{width:"120px"},optionLabel:"name",onChange:l[5]||(l[5]=a=>e(i)().getList())},null,8,["modelValue","options"])])):(f(),x("div",We))]),e(i)().list.length!=0&&V.value==!1?(f(),x("div",Ee,[n(e(K),{value:e(i)().list},{default:p(()=>[n(e(C),{field:"title",header:"标题",style:{"min-width":"270px"}},{body:p(a=>[s("div",Ae,_(a.data.title),1)]),_:1}),n(e(C),{header:"状态",style:{"min-width":"90px"}},{body:p(a=>[e(i)().onUpudate(a.data)?(f(),x("div",De,"更新中")):(f(),x("div",Ne,"已完结"))]),_:1}),n(e(C),{header:"集数",style:{"min-width":"60px"}},{body:p(a=>[s("div",je,_(a.data.episode),1)]),_:1}),n(e(C),{header:"更新周",style:{"min-width":"90px"}},{body:p(a=>[e(i)().getWeekday(a.data.time)===e(i)().getWeekday(Date.now())?(f(),x("div",Fe,_(e(i)().getWeekday(a.data.time)),1)):(f(),x("div",Ke,_(e(i)().getWeekday(a.data.time)),1))]),_:1}),n(e(C),{header:"进度",style:{"min-width":"200px"}},{body:p(a=>[s("div",Me,[n(e(M),{class:Q(c(a)==100?"finished":"progress"),value:e(i)().calProgress(a.data),style:{height:"18px"},showValue:!1},null,8,["class","value"]),s("div",qe,[s("div",null,_(a.data.now)+" / "+_(e(i)().analyseEpisode(a.data)),1)]),s("div",{class:"progress_label white_label",style:X({"clip-path":`polygon(0 0, ${c(a)}% 0, ${c(a)}% 100%, 0% 100%)`})},[s("div",null,_(a.data.now)+" / "+_(e(i)().analyseEpisode(a.data)),1)],4)])]),_:1}),n(e(C),{header:"操作",style:{"min-width":"230px"}},{body:p(a=>[n(e(ee),null,{default:p(()=>[n(e(h),{severity:"secondary",size:"small",onClick:w=>v.value.showEditHandler(a.data)},{default:p(()=>l[6]||(l[6]=[s("i",{class:"pi pi-pen-to-square",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),n(e(h),{severity:"secondary",size:"small",onClick:w=>e(i)().minus(a.data)},{default:p(()=>l[7]||(l[7]=[s("i",{class:"pi pi-minus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),n(e(h),{severity:"secondary",size:"small",onClick:w=>e(i)().add(a.data)},{default:p(()=>l[8]||(l[8]=[s("i",{class:"pi pi-plus",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"]),n(e(h),{severity:"secondary",size:"small",style:{"font-size":"12px"},onClick:w=>b.value.showAddHandler(a.data.title)},{default:p(()=>l[9]||(l[9]=[T("添加到")])),_:2},1032,["onClick"]),n(e(h),{severity:"secondary",size:"small",onClick:w=>e(i)().deleteItem(w,a.data)},{default:p(()=>l[10]||(l[10]=[s("i",{class:"pi pi-trash",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["value"]),n(e(Z),{rows:20,totalRecords:e(i)().length,"onUpdate:first":g,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"第 {currentPage} 页 | 共 {totalPages} 页"},null,8,["totalRecords"])])):e(i)().list.length==0&&V.value==!1?(f(),x("div",Pe,[l[19]||(l[19]=s("div",{class:"empty_list"},[s("i",{class:"pi pi-ban",style:{"margin-right":"5px"}}),s("div",null,"列表为空")],-1)),s("div",Ge,[l[13]||(l[13]=s("div",null,"在此页面点击",-1)),n(e(W),null,{default:p(()=>l[11]||(l[11]=[T("添加")])),_:1}),l[14]||(l[14]=s("div",null,"或者在",-1)),n(e(W),null,{default:p(()=>l[12]||(l[12]=[T("每日放送")])),_:1}),l[15]||(l[15]=s("div",null,"页面中点击正在连载的动画",-1))]),s("div",Je,[l[17]||(l[17]=s("div",null,"你也可以在",-1)),n(e(W),null,{default:p(()=>l[16]||(l[16]=[T("添加")])),_:1}),l[18]||(l[18]=s("div",null,"旁的下拉菜单中修改筛选方式",-1))])])):U("",!0),n(fe,{ref_key:"addRef",ref:$},null,512),n(xe,{ref_key:"editRef",ref:v},null,512),n(_e,{ref_key:"downloaderRef",ref:b},null,512),n(Be,{ref_key:"bgmSearchRef",ref:m},null,512)]))}}),al=j(Oe,[["__scopeId","data-v-a71d8f85"]]);export{al as default};
