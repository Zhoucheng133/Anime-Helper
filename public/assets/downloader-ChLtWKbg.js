import{d as n,c as I,s as z,a as U}from"./downloader-D9PTbN7J.js";import{B as D,f as M,c as b,o as h,i as a,m as T,r as N,d as S,l as A,g as $,w as p,e as f,u as e,h as H,j as l,k as m,a as Y,t as L,y as G,_ as F,n as K,q as J,v as Q,G as W,F as X,O as Z,P as ee,M as te,A as le,b as x}from"./index-C9tWa43g.js";import{a as se,s as V}from"./index-D1Aklo2o.js";import{a as R}from"./index.browser-Ca2qov4x.js";import{s as ae}from"./index-_C-dHbaR.js";import{d as ne}from"./dayjs.min-2rai63wT.js";import{s as B}from"./index-BT445y6F.js";import{s as ie,a as j,b as O,c as E}from"./index-CIN3R_NL.js";var oe=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
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
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,de={root:{position:"relative"}},re={root:function(o){var c=o.instance,u=o.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":c.checked,"p-disabled":u.disabled,"p-invalid":c.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},ce=D.extend({name:"toggleswitch",style:oe,classes:re,inlineStyles:de}),ue={name:"BaseToggleSwitch",extends:se,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ce,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},q={name:"ToggleSwitch",extends:ue,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(o){var c=o==="root"?this.ptmi:this.ptm;return c(o,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(o){if(!this.disabled&&!this.readonly){var c=this.checked?this.falseValue:this.trueValue;this.writeValue(c,o),this.$emit("change",o)}},onFocus:function(o){this.$emit("focus",o)},onBlur:function(o){var c,u;this.$emit("blur",o),(c=(u=this.formField).onBlur)===null||c===void 0||c.call(u,o)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return M({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},ge=["data-p-checked","data-p-disabled","data-p"],pe=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],he=["data-p"],me=["data-p"];function fe(r,o,c,u,g,i){return h(),b("div",T({class:r.cx("root"),style:r.sx("root")},i.getPTOptions("root"),{"data-p-checked":i.checked,"data-p-disabled":r.disabled,"data-p":i.dataP}),[a("input",T({id:r.inputId,type:"checkbox",role:"switch",class:[r.cx("input"),r.inputClass],style:r.inputStyle,checked:i.checked,tabindex:r.tabindex,disabled:r.disabled,readonly:r.readonly,"aria-checked":i.checked,"aria-labelledby":r.ariaLabelledby,"aria-label":r.ariaLabel,"aria-invalid":r.invalid||void 0,onFocus:o[0]||(o[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:o[1]||(o[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onChange:o[2]||(o[2]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("input")),null,16,pe),a("div",T({class:r.cx("slider")},i.getPTOptions("slider"),{"data-p":i.dataP}),[a("div",T({class:r.cx("handle")},i.getPTOptions("handle"),{"data-p":i.dataP}),[N(r.$slots,"handle",{checked:i.checked})],16,me)],16,he)],16,ge)}q.render=fe;const ve={class:"flex items-center gap-2 mb-4"},be={class:"flex items-center gap-2 mb-4"},we={class:"flex justify-end gap-2"},ye=S({__name:"add_list",setup(r,{expose:o}){const c=A(),u=f(!1),g=f(""),i=f(""),w=async()=>{if(g.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(i.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await n().addToList(g.value,i.value),u.value=!1,g.value="",i.value=""};return o({showAddHandler:()=>{u.value=!0}}),(t,s)=>(h(),$(e(H),{visible:u.value,"onUpdate:visible":s[3]||(s[3]=v=>u.value=v),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[a("div",ve,[s[4]||(s[4]=a("div",{class:"font-semibold w-20"},"标题",-1)),l(e(V),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:g.value,"onUpdate:modelValue":s[0]||(s[0]=v=>g.value=v)},null,8,["modelValue"])]),a("div",be,[s[5]||(s[5]=a("div",{class:"font-semibold w-20"},"字幕组",-1)),l(e(V),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=v=>i.value=v)},null,8,["modelValue"])]),a("div",we,[l(e(m),{type:"button",label:"取消",severity:"secondary",onClick:s[2]||(s[2]=v=>u.value=!1),size:"small"}),l(e(m),{type:"button",label:"添加",onClick:w,size:"small"})])]),_:1},8,["visible"]))}}),ke={class:"flex items-center gap-2 mb-4"},_e={class:"flex justify-end gap-2"},xe=S({__name:"add_exclude",setup(r,{expose:o}){const c=A(),u=f(!1),g=f(""),i=async()=>{if(g.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"关键字不能为空",life:3e3});return}await n().addToExclude(g.value),u.value=!1,g.value=""};return o({showAddHandler:()=>{u.value=!0}}),(k,t)=>(h(),$(e(H),{visible:u.value,"onUpdate:visible":t[2]||(t[2]=s=>u.value=s),modal:"",header:"添加一个排除关键字...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[a("div",ke,[t[3]||(t[3]=a("div",{class:"font-semibold w-20"},"关键字",-1)),l(e(V),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=s=>g.value=s)},null,8,["modelValue"])]),a("div",_e,[l(e(m),{type:"button",label:"取消",severity:"secondary",onClick:t[1]||(t[1]=s=>u.value=!1),size:"small"}),l(e(m),{type:"button",label:"添加",onClick:i,size:"small"})])]),_:1},8,["visible"]))}}),Ve={class:"mb-5"},$e={class:"flex items-center m-3"},Ce={class:"flex items-center m-3"},ze={class:"flex items-center gap-3"},Se={class:"flex items-center m-3"},Te={class:"flex items-center m-3"},Le={class:"label"},He={key:0,class:"flex items-center m-3"},Pe={class:"flex items-center m-3"},Be={class:"label"},Ae={class:"flex justify-end gap-2"},Fe=S({__name:"config",setup(r,{expose:o}){const c=f(!1),u=G(()=>{if(n().clientTypeSelected.id=="aria")return"http(s)://.../jsonrpc";if(n().clientTypeSelected.id=="qbit")return"http(s)://";if(n().clientTypeSelected.id=="transmission")return"http(s)://.../transmission/rpc"}),g=async()=>{await n().check()},i=async()=>{await n().save()&&(c.value=!1)};return o({showConfigHandler:()=>{n().getList(),c.value=!0}}),(k,t)=>(h(),$(e(H),{visible:c.value,"onUpdate:visible":t[7]||(t[7]=s=>c.value=s),modal:"",header:"配置下载器",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[a("div",Ve,[a("div",$e,[t[8]||(t[8]=a("div",{class:"label"},"RSS来源",-1)),l(e(R),{size:"small",options:e(n)().rssTypes,modelValue:e(n)().rssSelected,"onUpdate:modelValue":t[0]||(t[0]=s=>e(n)().rssSelected=s),optionLabel:"text"},null,8,["options","modelValue"])]),a("div",Ce,[t[10]||(t[10]=a("div",{class:"label"},"更新频率",-1)),a("div",ze,[l(e(V),{size:"small",modelValue:e(n)().freq,"onUpdate:modelValue":t[1]||(t[1]=s=>e(n)().freq=s),type:"number",min:"10",max:"1440"},null,8,["modelValue"]),t[9]||(t[9]=a("div",null,"分钟",-1))])]),a("div",Se,[t[11]||(t[11]=a("div",{class:"label"},"下载器",-1)),l(e(R),{size:"small",options:e(n)().clientType,modelValue:e(n)().clientTypeSelected,"onUpdate:modelValue":t[2]||(t[2]=s=>e(n)().clientTypeSelected=s),optionLabel:"text"},null,8,["options","modelValue"])]),a("div",Te,[a("div",Le,L(e(n)().clientTypeSelected.id=="aria"?"Aria2 地址":"服务器地址"),1),l(e(V),{size:"small",placeholder:u.value,fluid:!0,modelValue:e(n)().link,"onUpdate:modelValue":t[3]||(t[3]=s=>e(n)().link=s)},null,8,["placeholder","modelValue"])]),e(n)().clientTypeSelected.id!="aria"?(h(),b("div",He,[t[12]||(t[12]=a("div",{class:"label"},"用户名",-1)),l(e(V),{size:"small",fluid:!0,modelValue:e(n)().username,"onUpdate:modelValue":t[4]||(t[4]=s=>e(n)().username=s)},null,8,["modelValue"])])):Y("",!0),a("div",Pe,[a("div",Be,L(e(n)().clientTypeSelected.id=="aria"?"Aria2 密钥":"密码"),1),l(e(ae),{size:"small",modelValue:e(n)().secret,"onUpdate:modelValue":t[5]||(t[5]=s=>e(n)().secret=s),feedback:!1,toggleMask:"",fluid:!0,style:{width:"100%"}},null,8,["modelValue"])])]),a("div",Ae,[l(e(m),{type:"button",label:"检验",severity:"secondary",size:"small",style:{"margin-right":"auto"},onClick:g}),l(e(m),{type:"button",label:"取消",severity:"secondary",onClick:t[6]||(t[6]=s=>c.value=!1),size:"small"}),l(e(m),{type:"button",label:"完成",onClick:i,size:"small"})])]),_:1},8,["visible"]))}}),Ue=F(Fe,[["__scopeId","data-v-1feecc99"]]),Re={class:"mb-5"},je={class:"item_tag"},Oe={key:0,class:"tag tag_success"},Ee={key:1,class:"tag tag_err"},qe={class:"item_msg"},Ie={class:"item_time"},De=S({__name:"log",setup(r,{expose:o}){const c=A(),u=f(!1),g=K();let i=t=>ne(t).format("YYYY-MM-DD HH:mm");const w=f([]),k=async(t=!1)=>{u.value=!0;const{data:s}=await J.get(`${Q}/api/download/log`,{headers:{token:g.token}});if(s.ok)w.value=s.msg.reverse();else if(s.msg=="令牌已过期"){if(!t&&await g.refreshToken()){k(!0);return}}else c.add({severity:"error",summary:"获取日志失败",detail:s.msg,life:3e3})};return o({showLogHandler:k}),(t,s)=>{const v=Z("tooltip");return h(),$(e(H),{visible:u.value,"onUpdate:visible":s[0]||(s[0]=y=>u.value=y),modal:"",header:"日志",style:{width:"40rem"},draggable:!1,class:"select-none",closable:!0},{default:p(()=>[a("div",Re,[(h(!0),b(X,null,W(w.value,(y,_)=>ee((h(),b("div",{class:"item",key:_},[a("div",je,[y.ok?(h(),b("div",Oe,"OK")):(h(),b("div",Ee,"ERR"))]),a("div",qe,L(y.msg),1),a("div",Ie,L(e(i)(y.time)),1)])),[[v,y.msg,void 0,{bottom:!0}]])),128))])]),_:1},8,["visible"])}}}),Me=F(De,[["__scopeId","data-v-4e77cc17"]]),Ne={class:"d_page"},Ye={class:"flex items-center m-5"},Ge={class:"flex items-center gap-5"},Ke={class:"flex items-center m-5"},Je={key:1,class:"add_tip"},Qe={key:1,class:"add_tip"},We=S({__name:"downloader",setup(r){const o=te(),c=f(),u=f(),g=f(),i=f();document.title="AnimeHelper | 下载器",le(()=>{n().getList()});const w=()=>{i.value.showConfigHandler()},k=()=>{g.value.showLogHandler()},t=()=>{u.value.showAddHandler()},s=()=>{c.value.showAddHandler()},v=(_,d)=>{o.require({target:_.currentTarget,message:"你确定要删除这个它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"删除",severity:"danger"},accept:()=>n().delFromExclude(d)})},y=(_,d)=>{o.require({target:_.currentTarget,message:"你确定要删除这个它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"删除",severity:"danger"},accept:()=>n().delFromList(d)})};return(_,d)=>(h(),b("div",Ne,[a("div",Ye,[d[1]||(d[1]=a("div",{class:"label"},"运行状态",-1)),a("div",Ge,[l(e(B),{value:e(n)().running?"运行中":"等待中",severity:e(n)().running?"success":"warn"},null,8,["value","severity"]),l(e(q),{modelValue:e(n)().running,"onUpdate:modelValue":d[0]||(d[0]=C=>e(n)().running=C),onValueChange:e(n)().toggleRun},null,8,["modelValue","onValueChange"])])]),a("div",Ke,[d[2]||(d[2]=a("div",{class:"label"},"系统操作",-1)),l(e(I),null,{default:p(()=>[l(e(m),{label:"显示日志",size:"small",severity:"secondary",onClick:k}),l(e(m),{label:"下载器配置",size:"small",severity:"secondary",onClick:w})]),_:1})]),l(e(ie),{multiple:!0,value:[0,1]},{default:p(()=>[l(e(j),{value:0},{default:p(()=>[l(e(O),null,{default:p(()=>[...d[3]||(d[3]=[x("番剧列表",-1)])]),_:1}),l(e(E),null,{default:p(()=>[l(e(m),{size:"small",onClick:s},{default:p(()=>[...d[4]||(d[4]=[x("添加",-1)])]),_:1}),e(n)().list.length!=0?(h(),$(e(U),{key:0,value:e(n)().list},{default:p(()=>[l(e(z),{field:"title",header:"标题"}),l(e(z),{field:"ass",header:"字幕组"}),l(e(z),{header:"操作"},{body:p(C=>[l(e(m),{size:"small",label:"删除",severity:"danger",variant:"text",onClick:P=>y(P,C.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):(h(),b("div",Je,[d[6]||(d[6]=a("div",null,"没有添加任何需要下载的番剧，你需要",-1)),l(e(B),null,{default:p(()=>[...d[5]||(d[5]=[x("添加",-1)])]),_:1}),d[7]||(d[7]=a("div",null,"才能执行下载器",-1))]))]),_:1})]),_:1}),l(e(j),{value:1},{default:p(()=>[l(e(O),null,{default:p(()=>[...d[8]||(d[8]=[x("排除关键字",-1)])]),_:1}),l(e(E),null,{default:p(()=>[l(e(m),{size:"small",onClick:t},{default:p(()=>[...d[9]||(d[9]=[x("添加",-1)])]),_:1}),e(n)().exclude.length!=0?(h(),$(e(U),{key:0,value:e(n)().exclude},{default:p(()=>[l(e(z),{field:"key",header:"关键字"}),l(e(z),{header:"操作"},{body:p(C=>[l(e(m),{size:"small",label:"删除",severity:"danger",variant:"text",onClick:P=>v(P,C.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):(h(),b("div",Qe,[d[11]||(d[11]=a("div",null,"没有添加任何排除关键字，你可以",-1)),l(e(B),null,{default:p(()=>[...d[10]||(d[10]=[x("添加",-1)])]),_:1}),d[12]||(d[12]=a("div",null,"确保不下载带有此关键字的资源",-1))]))]),_:1})]),_:1})]),_:1}),l(ye,{ref_key:"addListRef",ref:c},null,512),l(xe,{ref_key:"addExcludeRef",ref:u},null,512),l(Me,{ref_key:"logRef",ref:g},null,512),l(Ue,{ref_key:"configRef",ref:i},null,512)]))}}),it=F(We,[["__scopeId","data-v-a188a9cb"]]);export{it as default};
