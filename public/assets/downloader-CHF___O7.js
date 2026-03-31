import{d as n,c as D,a as V,s as R}from"./downloader-CYfJZSn2.js";import{B as N,c as w,o as m,i as o,m as S,r as M,d as C,u as U,e as v,f as _,w as g,g as l,h as H,j as s,k as f,H as Y,a as J,t as T,_ as A,n as K,p as G,q as j,D as Q,F as W,I as X,J as Z,E as ee,v as le,b as k}from"./index-C-WxeSE6.js";import{a as te,s as $}from"./index-9UKUqfCB.js";import{a as P}from"./index.browser-Bs3lR8L4.js";import{s as se}from"./index-DhUuPrzo.js";import{d as oe}from"./dayjs.min-2rai63wT.js";import{s as F}from"./index-CkNVQe_y.js";import{s as ne,a as E,b as O,c as I}from"./index-C5RsY_7N.js";var ie=({dt:e})=>`
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
`,ae={root:{position:"relative"}},de={root:function(d){var c=d.instance,u=d.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":c.checked,"p-disabled":u.disabled,"p-invalid":c.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},re=N.extend({name:"toggleswitch",style:ie,classes:de,inlineStyles:ae}),ce={name:"BaseToggleSwitch",extends:te,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:re,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},q={name:"ToggleSwitch",extends:ce,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(d){var c=d==="root"?this.ptmi:this.ptm;return c(d,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(d){if(!this.disabled&&!this.readonly){var c=this.checked?this.falseValue:this.trueValue;this.writeValue(c,d),this.$emit("change",d)}},onFocus:function(d){this.$emit("focus",d)},onBlur:function(d){var c,u;this.$emit("blur",d),(c=(u=this.formField).onBlur)===null||c===void 0||c.call(u,d)}},computed:{checked:function(){return this.d_value===this.trueValue}}},ue=["data-p-checked","data-p-disabled"],ge=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function pe(e,d,c,u,p,a){return m(),w("div",S({class:e.cx("root"),style:e.sx("root")},a.getPTOptions("root"),{"data-p-checked":a.checked,"data-p-disabled":e.disabled}),[o("input",S({id:e.inputId,type:"checkbox",role:"switch",class:[e.cx("input"),e.inputClass],style:e.inputStyle,checked:a.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":a.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:d[0]||(d[0]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:d[1]||(d[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onChange:d[2]||(d[2]=function(){return a.onChange&&a.onChange.apply(a,arguments)})},a.getPTOptions("input")),null,16,ge),o("div",S({class:e.cx("slider")},a.getPTOptions("slider")),[o("div",S({class:e.cx("handle")},a.getPTOptions("handle")),[M(e.$slots,"handle",{checked:a.checked})],16)],16)],16,ue)}q.render=pe;const he={class:"flex items-center gap-2 mb-4"},me={class:"flex items-center gap-2 mb-4"},fe={class:"flex justify-end gap-2"},ve=C({__name:"add_list",setup(e,{expose:d}){const c=U(),u=v(!1),p=v(""),a=v(""),y=async()=>{if(p.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(a.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await n().addToList(p.value,a.value),u.value=!1,p.value="",a.value=""};return d({showAddHandler:()=>{u.value=!0}}),(t,i)=>(m(),_(l(H),{visible:u.value,"onUpdate:visible":i[3]||(i[3]=h=>u.value=h),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:g(()=>[o("div",he,[i[4]||(i[4]=o("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),s(l($),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":i[0]||(i[0]=h=>p.value=h)},null,8,["modelValue"])]),o("div",me,[i[5]||(i[5]=o("label",{for:"ass",class:"font-semibold w-20"},"字幕组",-1)),s(l($),{size:"small",id:"ass",class:"flex-auto",autocomplete:"off",modelValue:a.value,"onUpdate:modelValue":i[1]||(i[1]=h=>a.value=h)},null,8,["modelValue"])]),o("div",fe,[s(l(f),{type:"button",label:"取消",severity:"secondary",onClick:i[2]||(i[2]=h=>u.value=!1),size:"small"}),s(l(f),{type:"button",label:"添加",onClick:y,size:"small"})])]),_:1},8,["visible"]))}}),be={class:"flex items-center gap-2 mb-4"},we={class:"flex justify-end gap-2"},ye=C({__name:"add_exclude",setup(e,{expose:d}){const c=U(),u=v(!1),p=v(""),a=async()=>{if(p.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"关键字不能为空",life:3e3});return}await n().addToExclude(p.value),u.value=!1,p.value=""};return d({showAddHandler:()=>{u.value=!0}}),(b,t)=>(m(),_(l(H),{visible:u.value,"onUpdate:visible":t[2]||(t[2]=i=>u.value=i),modal:"",header:"添加一个排除关键字...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:g(()=>[o("div",be,[t[3]||(t[3]=o("label",{for:"title",class:"font-semibold w-20"},"关键字",-1)),s(l($),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=i=>p.value=i)},null,8,["modelValue"])]),o("div",we,[s(l(f),{type:"button",label:"取消",severity:"secondary",onClick:t[1]||(t[1]=i=>u.value=!1),size:"small"}),s(l(f),{type:"button",label:"添加",onClick:a,size:"small"})])]),_:1},8,["visible"]))}}),ke={class:"mb-5"},$e={class:"flex items-center m-3"},_e={class:"flex items-center m-3"},xe={class:"flex items-center gap-3"},Ve={class:"flex items-center m-3"},Ce={class:"flex items-center m-3"},ze={class:"label"},Se={key:0,class:"flex items-center m-3"},Te={class:"flex items-center m-3"},He={class:"label"},Le={class:"flex justify-end gap-2"},Be=C({__name:"config",setup(e,{expose:d}){const c=v(!1),u=Y(()=>{if(n().clientTypeSelected.id=="aria")return"http(s)://.../jsonrpc";if(n().clientTypeSelected.id=="qbit")return"http(s)://";if(n().clientTypeSelected.id=="transmission")return"http(s)://.../transmission/rpc"}),p=async()=>{await n().check()},a=()=>{n().save(),c.value=!1};return d({showConfigHandler:()=>{n().getList(),c.value=!0}}),(b,t)=>(m(),_(l(H),{visible:c.value,"onUpdate:visible":t[7]||(t[7]=i=>c.value=i),modal:"",header:"配置下载器",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:g(()=>[o("div",ke,[o("div",$e,[t[8]||(t[8]=o("div",{class:"label"},"RSS来源",-1)),s(l(P),{size:"small",options:l(n)().rssTypes,modelValue:l(n)().rssSelected,"onUpdate:modelValue":t[0]||(t[0]=i=>l(n)().rssSelected=i),optionLabel:"text"},null,8,["options","modelValue"])]),o("div",_e,[t[10]||(t[10]=o("div",{class:"label"},"更新频率",-1)),o("div",xe,[s(l($),{size:"small",modelValue:l(n)().freq,"onUpdate:modelValue":t[1]||(t[1]=i=>l(n)().freq=i),type:"number",min:"10",max:"1440"},null,8,["modelValue"]),t[9]||(t[9]=o("div",null,"分钟",-1))])]),o("div",Ve,[t[11]||(t[11]=o("div",{class:"label"},"下载器",-1)),s(l(P),{size:"small",options:l(n)().clientType,modelValue:l(n)().clientTypeSelected,"onUpdate:modelValue":t[2]||(t[2]=i=>l(n)().clientTypeSelected=i),optionLabel:"text"},null,8,["options","modelValue"])]),o("div",Ce,[o("div",ze,T(l(n)().clientTypeSelected.id=="aria"?"Aria2 地址":"服务器地址"),1),s(l($),{size:"small",placeholder:u.value,fluid:!0,modelValue:l(n)().link,"onUpdate:modelValue":t[3]||(t[3]=i=>l(n)().link=i)},null,8,["placeholder","modelValue"])]),l(n)().clientTypeSelected.id!="aria"?(m(),w("div",Se,[t[12]||(t[12]=o("div",{class:"label"},"用户名",-1)),s(l($),{size:"small",fluid:!0,modelValue:l(n)().username,"onUpdate:modelValue":t[4]||(t[4]=i=>l(n)().username=i)},null,8,["modelValue"])])):J("",!0),o("div",Te,[o("div",He,T(l(n)().clientTypeSelected.id=="aria"?"Aria2 密钥":"密码"),1),s(l(se),{size:"small",modelValue:l(n)().secret,"onUpdate:modelValue":t[5]||(t[5]=i=>l(n)().secret=i),feedback:!1,toggleMask:"",fluid:!0,style:{width:"100%"}},null,8,["modelValue"])])]),o("div",Le,[s(l(f),{type:"button",label:"检验",severity:"secondary",size:"small",style:{"margin-right":"auto"},onClick:p}),s(l(f),{type:"button",label:"取消",severity:"secondary",onClick:t[6]||(t[6]=i=>c.value=!1),size:"small"}),s(l(f),{type:"button",label:"完成",onClick:a,size:"small"})])]),_:1},8,["visible"]))}}),Fe=A(Be,[["__scopeId","data-v-75c1d06a"]]),Ue={class:"mb-5"},Ae={class:"item_tag"},Re={key:0,class:"tag tag_success"},je={key:1,class:"tag tag_err"},Pe={class:"item_msg"},Ee={class:"item_time"},Oe=C({__name:"log",setup(e,{expose:d}){const c=U(),u=v(!1);let p=b=>oe(b).format("YYYY-MM-DD HH:mm");const a=v([]),y=async(b=!1)=>{u.value=!0;const{data:t}=await K.get(`${G}/api/download/log`,{headers:{token:j().token}});if(t.ok)a.value=t.msg.reverse();else if(t.msg=="令牌已过期"){if(!b&&await j().refreshToken()){y(!0);return}}else c.add({severity:"error",summary:"获取日志失败",detail:t.msg,life:3e3})};return d({showLogHandler:y}),(b,t)=>{const i=X("tooltip");return m(),_(l(H),{visible:u.value,"onUpdate:visible":t[0]||(t[0]=h=>u.value=h),modal:"",header:"日志",style:{width:"40rem"},draggable:!1,class:"select-none",closable:!0},{default:g(()=>[o("div",Ue,[(m(!0),w(W,null,Q(a.value,(h,L)=>Z((m(),w("div",{class:"item",key:L},[o("div",Ae,[h.ok?(m(),w("div",Re,"OK")):(m(),w("div",je,"ERR"))]),o("div",Pe,T(h.msg),1),o("div",Ee,T(l(p)(h.time)),1)])),[[i,h.msg,void 0,{bottom:!0}]])),128))])]),_:1},8,["visible"])}}}),Ie=A(Oe,[["__scopeId","data-v-20340ce2"]]),qe={class:"d_page"},De={class:"flex items-center m-5"},Ne={class:"flex items-center gap-5"},Me={class:"flex items-center m-5"},Ye={key:1,class:"add_tip"},Je={key:1,class:"add_tip"},Ke=C({__name:"downloader",setup(e){const d=ee(),c=v(),u=v(),p=v(),a=v();document.title="AnimeHelper | 下载器",le(()=>{n().getList()});const y=()=>{a.value.showConfigHandler()},b=()=>{p.value.showLogHandler()},t=()=>{u.value.showAddHandler()},i=()=>{c.value.showAddHandler()},h=(z,r)=>{d.require({target:z.currentTarget,message:"你确定要删除这个它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"删除",severity:"danger"},accept:()=>n().delFromExclude(r)})},L=(z,r)=>{d.require({target:z.currentTarget,message:"你确定要删除这个它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"删除",severity:"danger"},accept:()=>n().delFromList(r)})};return(z,r)=>(m(),w("div",qe,[o("div",De,[r[1]||(r[1]=o("div",{class:"label"},"运行状态",-1)),o("div",Ne,[s(l(F),{value:l(n)().running?"运行中":"等待中",severity:l(n)().running?"success":"warn"},null,8,["value","severity"]),s(l(q),{modelValue:l(n)().running,"onUpdate:modelValue":r[0]||(r[0]=x=>l(n)().running=x),onValueChange:l(n)().toggleRun},null,8,["modelValue","onValueChange"])])]),o("div",Me,[r[2]||(r[2]=o("div",{class:"label"},"系统操作",-1)),s(l(D),null,{default:g(()=>[s(l(f),{label:"显示日志",size:"small",severity:"secondary",onClick:b}),s(l(f),{label:"下载器配置",size:"small",severity:"secondary",onClick:y})]),_:1})]),s(l(ne),{multiple:!0,value:[0,1]},{default:g(()=>[s(l(E),{value:0},{default:g(()=>[s(l(O),null,{default:g(()=>r[3]||(r[3]=[k("番剧列表")])),_:1}),s(l(I),null,{default:g(()=>[s(l(f),{size:"small",onClick:i},{default:g(()=>r[4]||(r[4]=[k("添加")])),_:1}),l(n)().list.length!=0?(m(),_(l(R),{key:0,value:l(n)().list},{default:g(()=>[s(l(V),{field:"title",header:"标题"}),s(l(V),{field:"ass",header:"字幕组"}),s(l(V),{header:"操作"},{body:g(x=>[s(l(f),{size:"small",label:"删除",severity:"danger",variant:"text",onClick:B=>L(B,x.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):(m(),w("div",Ye,[r[6]||(r[6]=o("div",null,"没有添加任何需要下载的番剧，你需要",-1)),s(l(F),null,{default:g(()=>r[5]||(r[5]=[k("添加")])),_:1}),r[7]||(r[7]=o("div",null,"才能执行下载器",-1))]))]),_:1})]),_:1}),s(l(E),{value:1},{default:g(()=>[s(l(O),null,{default:g(()=>r[8]||(r[8]=[k("排除关键字")])),_:1}),s(l(I),null,{default:g(()=>[s(l(f),{size:"small",onClick:t},{default:g(()=>r[9]||(r[9]=[k("添加")])),_:1}),l(n)().exclude.length!=0?(m(),_(l(R),{key:0,value:l(n)().exclude},{default:g(()=>[s(l(V),{field:"key",header:"关键字"}),s(l(V),{header:"操作"},{body:g(x=>[s(l(f),{size:"small",label:"删除",severity:"danger",variant:"text",onClick:B=>h(B,x.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):(m(),w("div",Je,[r[11]||(r[11]=o("div",null,"没有添加任何排除关键字，你可以",-1)),s(l(F),null,{default:g(()=>r[10]||(r[10]=[k("添加")])),_:1}),r[12]||(r[12]=o("div",null,"确保不下载带有此关键字的资源",-1))]))]),_:1})]),_:1})]),_:1}),s(ve,{ref_key:"addListRef",ref:c},null,512),s(ye,{ref_key:"addExcludeRef",ref:u},null,512),s(Ie,{ref_key:"logRef",ref:p},null,512),s(Fe,{ref_key:"configRef",ref:a},null,512)]))}}),sl=A(Ke,[["__scopeId","data-v-a188a9cb"]]);export{sl as default};
