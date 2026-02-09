import{d as n,c as D,a as V,s as R}from"./downloader-BsEqcijl.js";import{B as N,c as y,o as v,i as s,m as S,r as M,d as C,u as U,e as w,f as _,w as p,g as l,h as L,j as t,k as b,a as Y,t as T,_ as A,n as J,p as K,q as P,D as G,F as Q,I as W,J as X,E as Z,v as ee,b as k}from"./index-CSidAbVf.js";import{a as le,s as $}from"./index-Dt52M_-S.js";import{a as j}from"./index.browser-C_5xybPj.js";import{s as te}from"./index-VJr3nqgn.js";import{d as se}from"./dayjs.min-2rai63wT.js";import{s as F}from"./index-n4Rzu-BO.js";import{s as oe,a as E,b as O,c as I}from"./index-C3NA3fBy.js";var ne=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}
`,ae={root:{position:"relative"}},ie={root:function(i){var r=i.instance,u=i.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":r.checked,"p-disabled":u.disabled,"p-invalid":r.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},de=N.extend({name:"toggleswitch",style:ne,classes:ie,inlineStyles:ae}),re={name:"BaseToggleSwitch",extends:le,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:de,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},q={name:"ToggleSwitch",extends:re,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(i){var r=i==="root"?this.ptmi:this.ptm;return r(i,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(i){if(!this.disabled&&!this.readonly){var r=this.checked?this.falseValue:this.trueValue;this.writeValue(r,i),this.$emit("change",i)}},onFocus:function(i){this.$emit("focus",i)},onBlur:function(i){var r,u;this.$emit("blur",i),(r=(u=this.formField).onBlur)===null||r===void 0||r.call(u,i)}},computed:{checked:function(){return this.d_value===this.trueValue}}},ue=["data-p-checked","data-p-disabled"],ce=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function ge(e,i,r,u,m,a){return v(),y("div",S({class:e.cx("root"),style:e.sx("root")},a.getPTOptions("root"),{"data-p-checked":a.checked,"data-p-disabled":e.disabled}),[s("input",S({id:e.inputId,type:"checkbox",role:"switch",class:[e.cx("input"),e.inputClass],style:e.inputStyle,checked:a.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":a.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:i[0]||(i[0]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:i[1]||(i[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onChange:i[2]||(i[2]=function(){return a.onChange&&a.onChange.apply(a,arguments)})},a.getPTOptions("input")),null,16,ce),s("div",S({class:e.cx("slider")},a.getPTOptions("slider")),[s("div",S({class:e.cx("handle")},a.getPTOptions("handle")),[M(e.$slots,"handle",{checked:a.checked})],16)],16)],16,ue)}q.render=ge;const pe={class:"flex items-center gap-2 mb-4"},he={class:"flex items-center gap-2 mb-4"},me={class:"flex justify-end gap-2"},fe=C({__name:"add_list",setup(e,{expose:i}){const r=U(),u=w(!1),m=w(""),a=w(""),o=async()=>{if(m.value.length==0){r.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(a.value.length==0){r.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await n().addToList(m.value,a.value),u.value=!1,m.value="",a.value=""};return i({showAddHandler:()=>{u.value=!0}}),(h,g)=>(v(),_(l(L),{visible:u.value,"onUpdate:visible":g[3]||(g[3]=f=>u.value=f),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[s("div",pe,[g[4]||(g[4]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),t(l($),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":g[0]||(g[0]=f=>m.value=f)},null,8,["modelValue"])]),s("div",he,[g[5]||(g[5]=s("label",{for:"ass",class:"font-semibold w-20"},"字幕组",-1)),t(l($),{size:"small",id:"ass",class:"flex-auto",autocomplete:"off",modelValue:a.value,"onUpdate:modelValue":g[1]||(g[1]=f=>a.value=f)},null,8,["modelValue"])]),s("div",me,[t(l(b),{type:"button",label:"取消",severity:"secondary",onClick:g[2]||(g[2]=f=>u.value=!1),size:"small"}),t(l(b),{type:"button",label:"添加",onClick:o,size:"small"})])]),_:1},8,["visible"]))}}),ve={class:"flex items-center gap-2 mb-4"},be={class:"flex justify-end gap-2"},we=C({__name:"add_exclude",setup(e,{expose:i}){const r=U(),u=w(!1),m=w(""),a=async()=>{if(m.value.length==0){r.add({severity:"error",summary:"添加失败",detail:"关键字不能为空",life:3e3});return}await n().addToExclude(m.value),u.value=!1,m.value=""};return i({showAddHandler:()=>{u.value=!0}}),(c,h)=>(v(),_(l(L),{visible:u.value,"onUpdate:visible":h[2]||(h[2]=g=>u.value=g),modal:"",header:"添加一个排除关键字...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[s("div",ve,[h[3]||(h[3]=s("label",{for:"title",class:"font-semibold w-20"},"关键字",-1)),t(l($),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":h[0]||(h[0]=g=>m.value=g)},null,8,["modelValue"])]),s("div",be,[t(l(b),{type:"button",label:"取消",severity:"secondary",onClick:h[1]||(h[1]=g=>u.value=!1),size:"small"}),t(l(b),{type:"button",label:"添加",onClick:a,size:"small"})])]),_:1},8,["visible"]))}}),ye={class:"mb-5"},ke={class:"flex items-center m-3"},$e={class:"flex items-center m-3"},_e={class:"flex items-center gap-3"},xe={class:"flex items-center m-3"},Ve={class:"flex items-center m-3"},Ce={class:"label"},ze={key:0,class:"flex items-center m-3"},Se={class:"flex items-center m-3"},Te={class:"label"},Le={class:"flex justify-end gap-2"},He=C({__name:"config",setup(e,{expose:i}){const r=w(!1),u=()=>{n().save(),r.value=!1};return i({showConfigHandler:()=>{n().getList(),r.value=!0}}),(a,o)=>(v(),_(l(L),{visible:r.value,"onUpdate:visible":o[7]||(o[7]=c=>r.value=c),modal:"",header:"配置下载器",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[s("div",ye,[s("div",ke,[o[8]||(o[8]=s("div",{class:"label"},"RSS来源",-1)),t(l(j),{size:"small",options:l(n)().rssTypes,modelValue:l(n)().rssSelected,"onUpdate:modelValue":o[0]||(o[0]=c=>l(n)().rssSelected=c),optionLabel:"text"},null,8,["options","modelValue"])]),s("div",$e,[o[10]||(o[10]=s("div",{class:"label"},"更新频率",-1)),s("div",_e,[t(l($),{size:"small",modelValue:l(n)().freq,"onUpdate:modelValue":o[1]||(o[1]=c=>l(n)().freq=c),type:"number",min:"10",max:"1440"},null,8,["modelValue"]),o[9]||(o[9]=s("div",null,"分钟",-1))])]),s("div",xe,[o[11]||(o[11]=s("div",{class:"label"},"下载器",-1)),t(l(j),{size:"small",options:l(n)().clientType,modelValue:l(n)().clientTypeSelected,"onUpdate:modelValue":o[2]||(o[2]=c=>l(n)().clientTypeSelected=c),optionLabel:"text"},null,8,["options","modelValue"])]),s("div",Ve,[s("div",Ce,T(l(n)().clientTypeSelected.id=="aria"?"Aria2 地址":"服务器地址"),1),t(l($),{size:"small",placeholder:"http(s)://",fluid:!0,modelValue:l(n)().link,"onUpdate:modelValue":o[3]||(o[3]=c=>l(n)().link=c)},null,8,["modelValue"])]),l(n)().clientTypeSelected.id=="qbit"?(v(),y("div",ze,[o[12]||(o[12]=s("div",{class:"label"},"用户名",-1)),t(l($),{size:"small",fluid:!0,modelValue:l(n)().username,"onUpdate:modelValue":o[4]||(o[4]=c=>l(n)().username=c)},null,8,["modelValue"])])):Y("",!0),s("div",Se,[s("div",Te,T(l(n)().clientTypeSelected.id=="aria"?"Aria2 密钥":"密码"),1),t(l(te),{size:"small",modelValue:l(n)().secret,"onUpdate:modelValue":o[5]||(o[5]=c=>l(n)().secret=c),feedback:!1,toggleMask:"",fluid:!0,style:{width:"100%"}},null,8,["modelValue"])])]),s("div",Le,[t(l(b),{type:"button",label:"取消",severity:"secondary",onClick:o[6]||(o[6]=c=>r.value=!1),size:"small"}),t(l(b),{type:"button",label:"完成",onClick:u,size:"small"})])]),_:1},8,["visible"]))}}),Be=A(He,[["__scopeId","data-v-44d666fa"]]),Fe={class:"mb-5"},Ue={class:"item_tag"},Ae={key:0,class:"tag tag_success"},Re={key:1,class:"tag tag_err"},Pe={class:"item_msg"},je={class:"item_time"},Ee=C({__name:"log",setup(e,{expose:i}){const r=U(),u=w(!1);let m=c=>se(c).format("YYYY-MM-DD HH:mm");const a=w([]),o=async(c=!1)=>{u.value=!0;const{data:h}=await J.get(`${K}/api/download/log`,{headers:{token:P().token}});if(h.ok)a.value=h.msg.reverse();else if(h.msg=="令牌已过期"){if(!c&&await P().refreshToken()){o(!0);return}}else r.add({severity:"error",summary:"获取日志失败",detail:h.msg,life:3e3})};return i({showLogHandler:o}),(c,h)=>{const g=W("tooltip");return v(),_(l(L),{visible:u.value,"onUpdate:visible":h[0]||(h[0]=f=>u.value=f),modal:"",header:"日志",style:{width:"40rem"},draggable:!1,class:"select-none",closable:!0},{default:p(()=>[s("div",Fe,[(v(!0),y(Q,null,G(a.value,(f,H)=>X((v(),y("div",{class:"item",key:H},[s("div",Ue,[f.ok?(v(),y("div",Ae,"OK")):(v(),y("div",Re,"ERR"))]),s("div",Pe,T(f.msg),1),s("div",je,T(l(m)(f.time)),1)])),[[g,f.msg,void 0,{bottom:!0}]])),128))])]),_:1},8,["visible"])}}}),Oe=A(Ee,[["__scopeId","data-v-20340ce2"]]),Ie={class:"d_page"},qe={class:"flex items-center m-5"},De={class:"flex items-center gap-5"},Ne={class:"flex items-center m-5"},Me={key:1,class:"add_tip"},Ye={key:1,class:"add_tip"},Je=C({__name:"downloader",setup(e){const i=Z(),r=w(),u=w(),m=w(),a=w();document.title="AnimeHelper | 下载器",ee(()=>{n().getList()});const o=()=>{a.value.showConfigHandler()},c=()=>{m.value.showLogHandler()},h=()=>{u.value.showAddHandler()},g=()=>{r.value.showAddHandler()},f=(z,d)=>{i.require({target:z.currentTarget,message:"你确定要删除这个它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"删除",severity:"danger"},accept:()=>n().delFromExclude(d)})},H=(z,d)=>{i.require({target:z.currentTarget,message:"你确定要删除这个它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"删除",severity:"danger"},accept:()=>n().delFromList(d)})};return(z,d)=>(v(),y("div",Ie,[s("div",qe,[d[1]||(d[1]=s("div",{class:"label"},"运行状态",-1)),s("div",De,[t(l(F),{value:l(n)().running?"运行中":"等待中",severity:l(n)().running?"success":"warn"},null,8,["value","severity"]),t(l(q),{modelValue:l(n)().running,"onUpdate:modelValue":d[0]||(d[0]=x=>l(n)().running=x),onValueChange:l(n)().toggleRun},null,8,["modelValue","onValueChange"])])]),s("div",Ne,[d[2]||(d[2]=s("div",{class:"label"},"系统操作",-1)),t(l(D),null,{default:p(()=>[t(l(b),{label:"显示日志",size:"small",severity:"secondary",onClick:c}),t(l(b),{label:"下载器配置",size:"small",severity:"secondary",onClick:o})]),_:1})]),t(l(oe),{multiple:!0,value:[0,1]},{default:p(()=>[t(l(E),{value:0},{default:p(()=>[t(l(O),null,{default:p(()=>d[3]||(d[3]=[k("番剧列表")])),_:1}),t(l(I),null,{default:p(()=>[t(l(b),{size:"small",onClick:g},{default:p(()=>d[4]||(d[4]=[k("添加")])),_:1}),l(n)().list.length!=0?(v(),_(l(R),{key:0,value:l(n)().list},{default:p(()=>[t(l(V),{field:"title",header:"标题"}),t(l(V),{field:"ass",header:"字幕组"}),t(l(V),{header:"操作"},{body:p(x=>[t(l(b),{size:"small",label:"删除",severity:"danger",variant:"text",onClick:B=>H(B,x.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):(v(),y("div",Me,[d[6]||(d[6]=s("div",null,"没有添加任何需要下载的番剧，你需要",-1)),t(l(F),null,{default:p(()=>d[5]||(d[5]=[k("添加")])),_:1}),d[7]||(d[7]=s("div",null,"才能执行下载器",-1))]))]),_:1})]),_:1}),t(l(E),{value:1},{default:p(()=>[t(l(O),null,{default:p(()=>d[8]||(d[8]=[k("排除关键字")])),_:1}),t(l(I),null,{default:p(()=>[t(l(b),{size:"small",onClick:h},{default:p(()=>d[9]||(d[9]=[k("添加")])),_:1}),l(n)().exclude.length!=0?(v(),_(l(R),{key:0,value:l(n)().exclude},{default:p(()=>[t(l(V),{field:"key",header:"关键字"}),t(l(V),{header:"操作"},{body:p(x=>[t(l(b),{size:"small",label:"删除",severity:"danger",variant:"text",onClick:B=>f(B,x.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):(v(),y("div",Ye,[d[11]||(d[11]=s("div",null,"没有添加任何排除关键字，你可以",-1)),t(l(F),null,{default:p(()=>d[10]||(d[10]=[k("添加")])),_:1}),d[12]||(d[12]=s("div",null,"确保不下载带有此关键字的资源",-1))]))]),_:1})]),_:1})]),_:1}),t(fe,{ref_key:"addListRef",ref:r},null,512),t(we,{ref_key:"addExcludeRef",ref:u},null,512),t(Oe,{ref_key:"logRef",ref:m},null,512),t(Be,{ref_key:"configRef",ref:a},null,512)]))}}),tl=A(Je,[["__scopeId","data-v-a188a9cb"]]);export{tl as default};
