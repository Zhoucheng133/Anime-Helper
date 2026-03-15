import{d as o,c as D,a as V,s as R}from"./downloader-aWl8EhTz.js";import{B as N,c as w,o as f,i as s,m as S,r as M,d as C,u as U,e as b,f as _,w as p,g as l,h as H,j as t,k as v,H as Y,a as J,t as T,_ as A,n as K,p as G,q as j,D as Q,F as W,I as X,J as Z,E as ee,v as le,b as k}from"./index-VjTWdxNO.js";import{a as te,s as $}from"./index-DA2pYZ_Z.js";import{a as P}from"./index.browser-BhTGiqYo.js";import{s as se}from"./index-SUj3h6WO.js";import{d as oe}from"./dayjs.min-2rai63wT.js";import{s as F}from"./index-DtMlGHhc.js";import{s as ne,a as E,b as O,c as I}from"./index-BM9S0PBq.js";var ie=({dt:e})=>`
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
`,ae={root:{position:"relative"}},de={root:function(d){var c=d.instance,u=d.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":c.checked,"p-disabled":u.disabled,"p-invalid":c.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},re=N.extend({name:"toggleswitch",style:ie,classes:de,inlineStyles:ae}),ce={name:"BaseToggleSwitch",extends:te,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:re,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},q={name:"ToggleSwitch",extends:ce,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(d){var c=d==="root"?this.ptmi:this.ptm;return c(d,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(d){if(!this.disabled&&!this.readonly){var c=this.checked?this.falseValue:this.trueValue;this.writeValue(c,d),this.$emit("change",d)}},onFocus:function(d){this.$emit("focus",d)},onBlur:function(d){var c,u;this.$emit("blur",d),(c=(u=this.formField).onBlur)===null||c===void 0||c.call(u,d)}},computed:{checked:function(){return this.d_value===this.trueValue}}},ue=["data-p-checked","data-p-disabled"],ge=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function pe(e,d,c,u,h,a){return f(),w("div",S({class:e.cx("root"),style:e.sx("root")},a.getPTOptions("root"),{"data-p-checked":a.checked,"data-p-disabled":e.disabled}),[s("input",S({id:e.inputId,type:"checkbox",role:"switch",class:[e.cx("input"),e.inputClass],style:e.inputStyle,checked:a.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":a.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:d[0]||(d[0]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:d[1]||(d[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onChange:d[2]||(d[2]=function(){return a.onChange&&a.onChange.apply(a,arguments)})},a.getPTOptions("input")),null,16,ge),s("div",S({class:e.cx("slider")},a.getPTOptions("slider")),[s("div",S({class:e.cx("handle")},a.getPTOptions("handle")),[M(e.$slots,"handle",{checked:a.checked})],16)],16)],16,ue)}q.render=pe;const he={class:"flex items-center gap-2 mb-4"},me={class:"flex items-center gap-2 mb-4"},fe={class:"flex justify-end gap-2"},ve=C({__name:"add_list",setup(e,{expose:d}){const c=U(),u=b(!1),h=b(""),a=b(""),y=async()=>{if(h.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(a.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await o().addToList(h.value,a.value),u.value=!1,h.value="",a.value=""};return d({showAddHandler:()=>{u.value=!0}}),(i,g)=>(f(),_(l(H),{visible:u.value,"onUpdate:visible":g[3]||(g[3]=m=>u.value=m),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[s("div",he,[g[4]||(g[4]=s("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),t(l($),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:h.value,"onUpdate:modelValue":g[0]||(g[0]=m=>h.value=m)},null,8,["modelValue"])]),s("div",me,[g[5]||(g[5]=s("label",{for:"ass",class:"font-semibold w-20"},"字幕组",-1)),t(l($),{size:"small",id:"ass",class:"flex-auto",autocomplete:"off",modelValue:a.value,"onUpdate:modelValue":g[1]||(g[1]=m=>a.value=m)},null,8,["modelValue"])]),s("div",fe,[t(l(v),{type:"button",label:"取消",severity:"secondary",onClick:g[2]||(g[2]=m=>u.value=!1),size:"small"}),t(l(v),{type:"button",label:"添加",onClick:y,size:"small"})])]),_:1},8,["visible"]))}}),be={class:"flex items-center gap-2 mb-4"},we={class:"flex justify-end gap-2"},ye=C({__name:"add_exclude",setup(e,{expose:d}){const c=U(),u=b(!1),h=b(""),a=async()=>{if(h.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"关键字不能为空",life:3e3});return}await o().addToExclude(h.value),u.value=!1,h.value=""};return d({showAddHandler:()=>{u.value=!0}}),(n,i)=>(f(),_(l(H),{visible:u.value,"onUpdate:visible":i[2]||(i[2]=g=>u.value=g),modal:"",header:"添加一个排除关键字...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[s("div",be,[i[3]||(i[3]=s("label",{for:"title",class:"font-semibold w-20"},"关键字",-1)),t(l($),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:h.value,"onUpdate:modelValue":i[0]||(i[0]=g=>h.value=g)},null,8,["modelValue"])]),s("div",we,[t(l(v),{type:"button",label:"取消",severity:"secondary",onClick:i[1]||(i[1]=g=>u.value=!1),size:"small"}),t(l(v),{type:"button",label:"添加",onClick:a,size:"small"})])]),_:1},8,["visible"]))}}),ke={class:"mb-5"},$e={class:"flex items-center m-3"},_e={class:"flex items-center m-3"},xe={class:"flex items-center gap-3"},Ve={class:"flex items-center m-3"},Ce={class:"flex items-center m-3"},ze={class:"label"},Se={key:0,class:"flex items-center m-3"},Te={class:"flex items-center m-3"},He={class:"label"},Le={class:"flex justify-end gap-2"},Be=C({__name:"config",setup(e,{expose:d}){const c=b(!1),u=Y(()=>{if(o().clientTypeSelected.id=="aria")return"http(s)://.../jsonrpc";if(o().clientTypeSelected.id=="qbit")return"http(s)://";if(o().clientTypeSelected.id=="transmission")return"http(s)://.../transmission/rpc"}),h=()=>{o().save(),c.value=!1};return d({showConfigHandler:()=>{o().getList(),c.value=!0}}),(y,n)=>(f(),_(l(H),{visible:c.value,"onUpdate:visible":n[7]||(n[7]=i=>c.value=i),modal:"",header:"配置下载器",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[s("div",ke,[s("div",$e,[n[8]||(n[8]=s("div",{class:"label"},"RSS来源",-1)),t(l(P),{size:"small",options:l(o)().rssTypes,modelValue:l(o)().rssSelected,"onUpdate:modelValue":n[0]||(n[0]=i=>l(o)().rssSelected=i),optionLabel:"text"},null,8,["options","modelValue"])]),s("div",_e,[n[10]||(n[10]=s("div",{class:"label"},"更新频率",-1)),s("div",xe,[t(l($),{size:"small",modelValue:l(o)().freq,"onUpdate:modelValue":n[1]||(n[1]=i=>l(o)().freq=i),type:"number",min:"10",max:"1440"},null,8,["modelValue"]),n[9]||(n[9]=s("div",null,"分钟",-1))])]),s("div",Ve,[n[11]||(n[11]=s("div",{class:"label"},"下载器",-1)),t(l(P),{size:"small",options:l(o)().clientType,modelValue:l(o)().clientTypeSelected,"onUpdate:modelValue":n[2]||(n[2]=i=>l(o)().clientTypeSelected=i),optionLabel:"text"},null,8,["options","modelValue"])]),s("div",Ce,[s("div",ze,T(l(o)().clientTypeSelected.id=="aria"?"Aria2 地址":"服务器地址"),1),t(l($),{size:"small",placeholder:u.value,fluid:!0,modelValue:l(o)().link,"onUpdate:modelValue":n[3]||(n[3]=i=>l(o)().link=i)},null,8,["placeholder","modelValue"])]),l(o)().clientTypeSelected.id!="aria"?(f(),w("div",Se,[n[12]||(n[12]=s("div",{class:"label"},"用户名",-1)),t(l($),{size:"small",fluid:!0,modelValue:l(o)().username,"onUpdate:modelValue":n[4]||(n[4]=i=>l(o)().username=i)},null,8,["modelValue"])])):J("",!0),s("div",Te,[s("div",He,T(l(o)().clientTypeSelected.id=="aria"?"Aria2 密钥":"密码"),1),t(l(se),{size:"small",modelValue:l(o)().secret,"onUpdate:modelValue":n[5]||(n[5]=i=>l(o)().secret=i),feedback:!1,toggleMask:"",fluid:!0,style:{width:"100%"}},null,8,["modelValue"])])]),s("div",Le,[t(l(v),{type:"button",label:"取消",severity:"secondary",onClick:n[6]||(n[6]=i=>c.value=!1),size:"small"}),t(l(v),{type:"button",label:"完成",onClick:h,size:"small"})])]),_:1},8,["visible"]))}}),Fe=A(Be,[["__scopeId","data-v-d19dc360"]]),Ue={class:"mb-5"},Ae={class:"item_tag"},Re={key:0,class:"tag tag_success"},je={key:1,class:"tag tag_err"},Pe={class:"item_msg"},Ee={class:"item_time"},Oe=C({__name:"log",setup(e,{expose:d}){const c=U(),u=b(!1);let h=n=>oe(n).format("YYYY-MM-DD HH:mm");const a=b([]),y=async(n=!1)=>{u.value=!0;const{data:i}=await K.get(`${G}/api/download/log`,{headers:{token:j().token}});if(i.ok)a.value=i.msg.reverse();else if(i.msg=="令牌已过期"){if(!n&&await j().refreshToken()){y(!0);return}}else c.add({severity:"error",summary:"获取日志失败",detail:i.msg,life:3e3})};return d({showLogHandler:y}),(n,i)=>{const g=X("tooltip");return f(),_(l(H),{visible:u.value,"onUpdate:visible":i[0]||(i[0]=m=>u.value=m),modal:"",header:"日志",style:{width:"40rem"},draggable:!1,class:"select-none",closable:!0},{default:p(()=>[s("div",Ue,[(f(!0),w(W,null,Q(a.value,(m,L)=>Z((f(),w("div",{class:"item",key:L},[s("div",Ae,[m.ok?(f(),w("div",Re,"OK")):(f(),w("div",je,"ERR"))]),s("div",Pe,T(m.msg),1),s("div",Ee,T(l(h)(m.time)),1)])),[[g,m.msg,void 0,{bottom:!0}]])),128))])]),_:1},8,["visible"])}}}),Ie=A(Oe,[["__scopeId","data-v-20340ce2"]]),qe={class:"d_page"},De={class:"flex items-center m-5"},Ne={class:"flex items-center gap-5"},Me={class:"flex items-center m-5"},Ye={key:1,class:"add_tip"},Je={key:1,class:"add_tip"},Ke=C({__name:"downloader",setup(e){const d=ee(),c=b(),u=b(),h=b(),a=b();document.title="AnimeHelper | 下载器",le(()=>{o().getList()});const y=()=>{a.value.showConfigHandler()},n=()=>{h.value.showLogHandler()},i=()=>{u.value.showAddHandler()},g=()=>{c.value.showAddHandler()},m=(z,r)=>{d.require({target:z.currentTarget,message:"你确定要删除这个它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"删除",severity:"danger"},accept:()=>o().delFromExclude(r)})},L=(z,r)=>{d.require({target:z.currentTarget,message:"你确定要删除这个它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"删除",severity:"danger"},accept:()=>o().delFromList(r)})};return(z,r)=>(f(),w("div",qe,[s("div",De,[r[1]||(r[1]=s("div",{class:"label"},"运行状态",-1)),s("div",Ne,[t(l(F),{value:l(o)().running?"运行中":"等待中",severity:l(o)().running?"success":"warn"},null,8,["value","severity"]),t(l(q),{modelValue:l(o)().running,"onUpdate:modelValue":r[0]||(r[0]=x=>l(o)().running=x),onValueChange:l(o)().toggleRun},null,8,["modelValue","onValueChange"])])]),s("div",Me,[r[2]||(r[2]=s("div",{class:"label"},"系统操作",-1)),t(l(D),null,{default:p(()=>[t(l(v),{label:"显示日志",size:"small",severity:"secondary",onClick:n}),t(l(v),{label:"下载器配置",size:"small",severity:"secondary",onClick:y})]),_:1})]),t(l(ne),{multiple:!0,value:[0,1]},{default:p(()=>[t(l(E),{value:0},{default:p(()=>[t(l(O),null,{default:p(()=>r[3]||(r[3]=[k("番剧列表")])),_:1}),t(l(I),null,{default:p(()=>[t(l(v),{size:"small",onClick:g},{default:p(()=>r[4]||(r[4]=[k("添加")])),_:1}),l(o)().list.length!=0?(f(),_(l(R),{key:0,value:l(o)().list},{default:p(()=>[t(l(V),{field:"title",header:"标题"}),t(l(V),{field:"ass",header:"字幕组"}),t(l(V),{header:"操作"},{body:p(x=>[t(l(v),{size:"small",label:"删除",severity:"danger",variant:"text",onClick:B=>L(B,x.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):(f(),w("div",Ye,[r[6]||(r[6]=s("div",null,"没有添加任何需要下载的番剧，你需要",-1)),t(l(F),null,{default:p(()=>r[5]||(r[5]=[k("添加")])),_:1}),r[7]||(r[7]=s("div",null,"才能执行下载器",-1))]))]),_:1})]),_:1}),t(l(E),{value:1},{default:p(()=>[t(l(O),null,{default:p(()=>r[8]||(r[8]=[k("排除关键字")])),_:1}),t(l(I),null,{default:p(()=>[t(l(v),{size:"small",onClick:i},{default:p(()=>r[9]||(r[9]=[k("添加")])),_:1}),l(o)().exclude.length!=0?(f(),_(l(R),{key:0,value:l(o)().exclude},{default:p(()=>[t(l(V),{field:"key",header:"关键字"}),t(l(V),{header:"操作"},{body:p(x=>[t(l(v),{size:"small",label:"删除",severity:"danger",variant:"text",onClick:B=>m(B,x.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):(f(),w("div",Je,[r[11]||(r[11]=s("div",null,"没有添加任何排除关键字，你可以",-1)),t(l(F),null,{default:p(()=>r[10]||(r[10]=[k("添加")])),_:1}),r[12]||(r[12]=s("div",null,"确保不下载带有此关键字的资源",-1))]))]),_:1})]),_:1})]),_:1}),t(ve,{ref_key:"addListRef",ref:c},null,512),t(ye,{ref_key:"addExcludeRef",ref:u},null,512),t(Ie,{ref_key:"logRef",ref:h},null,512),t(Fe,{ref_key:"configRef",ref:a},null,512)]))}}),sl=A(Ke,[["__scopeId","data-v-a188a9cb"]]);export{sl as default};
