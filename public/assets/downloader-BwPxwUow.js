import{d as u,c as I,s as C,a as U}from"./downloader-DU693uhL.js";import{B as N,f as M,c as w,o as m,i as a,m as T,r as Y,d as z,l as F,g as V,w as p,e as v,u as e,h as L,j as l,k as f,a as K,t as H,y as G,_ as R,n as J,q as Q,v as W,K as X,F as Z,G as ee,H as te,A as le,D as se,b as _}from"./index-DzITSWVY.js";import{a as ae,s as x}from"./index-CQIboTul.js";import{a as j}from"./index.browser-BrG0UY0f.js";import{s as ne}from"./index-CDMYcrtU.js";import{d as oe}from"./dayjs.min-2rai63wT.js";import{s as A}from"./index-AFKmZRbO.js";import{s as ie,a as O,b as E,c as q}from"./index-BamLCz8B.js";var de=`
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
`,re={root:{position:"relative"}},ce={root:function(o){var r=o.instance,c=o.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":r.checked,"p-disabled":c.disabled,"p-invalid":r.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},ue=N.extend({name:"toggleswitch",style:de,classes:ce,inlineStyles:re}),ge={name:"BaseToggleSwitch",extends:ae,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ue,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},D={name:"ToggleSwitch",extends:ge,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(o){var r=o==="root"?this.ptmi:this.ptm;return r(o,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(o){if(!this.disabled&&!this.readonly){var r=this.checked?this.falseValue:this.trueValue;this.writeValue(r,o),this.$emit("change",o)}},onFocus:function(o){this.$emit("focus",o)},onBlur:function(o){var r,c;this.$emit("blur",o),(r=(c=this.formField).onBlur)===null||r===void 0||r.call(c,o)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return M({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},pe=["data-p-checked","data-p-disabled","data-p"],he=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],me=["data-p"],fe=["data-p"];function ve(d,o,r,c,g,n){return m(),w("div",T({class:d.cx("root"),style:d.sx("root")},n.getPTOptions("root"),{"data-p-checked":n.checked,"data-p-disabled":d.disabled,"data-p":n.dataP}),[a("input",T({id:d.inputId,type:"checkbox",role:"switch",class:[d.cx("input"),d.inputClass],style:d.inputStyle,checked:n.checked,tabindex:d.tabindex,disabled:d.disabled,readonly:d.readonly,"aria-checked":n.checked,"aria-labelledby":d.ariaLabelledby,"aria-label":d.ariaLabel,"aria-invalid":d.invalid||void 0,onFocus:o[0]||(o[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:o[1]||(o[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onChange:o[2]||(o[2]=function(){return n.onChange&&n.onChange.apply(n,arguments)})},n.getPTOptions("input")),null,16,he),a("div",T({class:d.cx("slider")},n.getPTOptions("slider"),{"data-p":n.dataP}),[a("div",T({class:d.cx("handle")},n.getPTOptions("handle"),{"data-p":n.dataP}),[Y(d.$slots,"handle",{checked:n.checked})],16,fe)],16,me)],16,pe)}D.render=ve;const be={class:"flex items-center gap-2 mb-4"},we={class:"flex items-center gap-2 mb-4"},ye={class:"flex justify-end gap-2"},ke=z({__name:"add_list",setup(d,{expose:o}){const r=F(),c=v(!1),g=v(""),n=v(""),h=async()=>{if(g.value.length==0){r.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(n.value.length==0){r.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await u().addToList(g.value,n.value),c.value=!1,g.value="",n.value=""};return o({showAddHandler:()=>{c.value=!0}}),(t,s)=>(m(),V(e(L),{visible:c.value,"onUpdate:visible":s[3]||(s[3]=b=>c.value=b),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[a("div",be,[s[4]||(s[4]=a("div",{class:"font-semibold w-20"},"标题",-1)),l(e(x),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:g.value,"onUpdate:modelValue":s[0]||(s[0]=b=>g.value=b)},null,8,["modelValue"])]),a("div",we,[s[5]||(s[5]=a("div",{class:"font-semibold w-20"},"字幕组",-1)),l(e(x),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=b=>n.value=b)},null,8,["modelValue"])]),a("div",ye,[l(e(f),{type:"button",label:"取消",severity:"secondary",onClick:s[2]||(s[2]=b=>c.value=!1),size:"small"}),l(e(f),{type:"button",label:"添加",onClick:h,size:"small"})])]),_:1},8,["visible"]))}}),_e={class:"flex items-center gap-2 mb-4"},xe={class:"flex justify-end gap-2"},Ve=z({__name:"add_exclude",setup(d,{expose:o}){const r=F(),c=v(!1),g=v(""),n=async()=>{if(g.value.length==0){r.add({severity:"error",summary:"添加失败",detail:"关键字不能为空",life:3e3});return}await u().addToExclude(g.value),c.value=!1,g.value=""};return o({showAddHandler:()=>{c.value=!0}}),(k,t)=>(m(),V(e(L),{visible:c.value,"onUpdate:visible":t[2]||(t[2]=s=>c.value=s),modal:"",header:"添加一个排除关键字...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[a("div",_e,[t[3]||(t[3]=a("div",{class:"font-semibold w-20"},"关键字",-1)),l(e(x),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=s=>g.value=s)},null,8,["modelValue"])]),a("div",xe,[l(e(f),{type:"button",label:"取消",severity:"secondary",onClick:t[1]||(t[1]=s=>c.value=!1),size:"small"}),l(e(f),{type:"button",label:"添加",onClick:n,size:"small"})])]),_:1},8,["visible"]))}}),$e={class:"mb-5"},Ce={class:"flex items-center m-3"},ze={class:"flex items-center m-3"},Se={class:"flex items-center gap-3"},Te={class:"flex items-center m-3"},He={class:"flex items-center m-3"},Le={class:"label"},Pe={key:0,class:"flex items-center m-3"},Be={class:"flex items-center m-3"},Ae={class:"label"},Fe={class:"flex justify-end gap-2"},Re=z({__name:"config",setup(d,{expose:o}){const r=v(!1),c=G(()=>{if(u().clientTypeSelected.id=="aria")return"http(s)://.../jsonrpc";if(u().clientTypeSelected.id=="qbit")return"http(s)://";if(u().clientTypeSelected.id=="transmission")return"http(s)://.../transmission/rpc"}),g=async()=>{await u().check()},n=async()=>{await u().save()&&(r.value=!1)};return o({showConfigHandler:()=>{u().getList(),r.value=!0}}),(k,t)=>(m(),V(e(L),{visible:r.value,"onUpdate:visible":t[7]||(t[7]=s=>r.value=s),modal:"",header:"配置下载器",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:p(()=>[a("div",$e,[a("div",Ce,[t[8]||(t[8]=a("div",{class:"label"},"RSS来源",-1)),l(e(j),{size:"small",options:e(u)().rssTypes,modelValue:e(u)().rssSelected,"onUpdate:modelValue":t[0]||(t[0]=s=>e(u)().rssSelected=s),optionLabel:"text"},null,8,["options","modelValue"])]),a("div",ze,[t[10]||(t[10]=a("div",{class:"label"},"更新频率",-1)),a("div",Se,[l(e(x),{size:"small",modelValue:e(u)().freq,"onUpdate:modelValue":t[1]||(t[1]=s=>e(u)().freq=s),type:"number",min:"10",max:"1440"},null,8,["modelValue"]),t[9]||(t[9]=a("div",null,"分钟",-1))])]),a("div",Te,[t[11]||(t[11]=a("div",{class:"label"},"下载器",-1)),l(e(j),{size:"small",options:e(u)().clientType,modelValue:e(u)().clientTypeSelected,"onUpdate:modelValue":t[2]||(t[2]=s=>e(u)().clientTypeSelected=s),optionLabel:"text"},null,8,["options","modelValue"])]),a("div",He,[a("div",Le,H(e(u)().clientTypeSelected.id=="aria"?"Aria2 地址":"服务器地址"),1),l(e(x),{size:"small",placeholder:c.value,fluid:!0,modelValue:e(u)().link,"onUpdate:modelValue":t[3]||(t[3]=s=>e(u)().link=s)},null,8,["placeholder","modelValue"])]),e(u)().clientTypeSelected.id!="aria"?(m(),w("div",Pe,[t[12]||(t[12]=a("div",{class:"label"},"用户名",-1)),l(e(x),{size:"small",fluid:!0,modelValue:e(u)().username,"onUpdate:modelValue":t[4]||(t[4]=s=>e(u)().username=s)},null,8,["modelValue"])])):K("",!0),a("div",Be,[a("div",Ae,H(e(u)().clientTypeSelected.id=="aria"?"Aria2 密钥":"密码"),1),l(e(ne),{size:"small",modelValue:e(u)().secret,"onUpdate:modelValue":t[5]||(t[5]=s=>e(u)().secret=s),feedback:!1,toggleMask:"",fluid:!0,style:{width:"100%"}},null,8,["modelValue"])])]),a("div",Fe,[l(e(f),{type:"button",label:"检验",severity:"secondary",size:"small",style:{"margin-right":"auto"},onClick:g}),l(e(f),{type:"button",label:"取消",severity:"secondary",onClick:t[6]||(t[6]=s=>r.value=!1),size:"small"}),l(e(f),{type:"button",label:"完成",onClick:n,size:"small"})])]),_:1},8,["visible"]))}}),Ue=R(Re,[["__scopeId","data-v-1feecc99"]]),je={class:"mb-5"},Oe={class:"item_tag"},Ee={key:0,class:"tag tag_success"},qe={key:1,class:"tag tag_err"},De={class:"item_msg"},Ie={class:"item_time"},Ne=z({__name:"log",setup(d,{expose:o}){const r=F(),c=v(!1),g=J();let n=t=>oe(t).format("YYYY-MM-DD HH:mm");const h=v([]),k=async(t=!1)=>{c.value=!0;const{data:s}=await Q.get(`${W}/api/download/log`,{headers:{token:g.token}});if(s.ok)h.value=s.msg.reverse();else if(s.msg=="令牌已过期"){if(!t&&await g.refreshToken()){k(!0);return}}else r.add({severity:"error",summary:"获取日志失败",detail:s.msg,life:3e3})};return o({showLogHandler:k}),(t,s)=>{const b=ee("tooltip");return m(),V(e(L),{visible:c.value,"onUpdate:visible":s[0]||(s[0]=y=>c.value=y),modal:"",header:"日志",style:{width:"40rem"},draggable:!1,class:"select-none",closable:!0},{default:p(()=>[a("div",je,[(m(!0),w(Z,null,X(h.value,(y,P)=>te((m(),w("div",{class:"item",key:P},[a("div",Oe,[y.ok?(m(),w("div",Ee,"OK")):(m(),w("div",qe,"ERR"))]),a("div",De,H(y.msg),1),a("div",Ie,H(e(n)(y.time)),1)])),[[b,y.msg,void 0,{bottom:!0}]])),128))])]),_:1},8,["visible"])}}}),Me=R(Ne,[["__scopeId","data-v-4e77cc17"]]),Ye={class:"d_page"},Ke={class:"flex items-center m-5"},Ge={class:"flex items-center gap-5"},Je={class:"flex items-center m-5"},Qe={key:1,class:"add_tip"},We={key:1,class:"add_tip"},Xe=z({__name:"downloader",setup(d){const o=le(),r=v(),c=v(),g=v(),n=v(),h=u();document.title="AnimeHelper | 下载器",se(()=>{h.getList()});const k=()=>{n.value.showConfigHandler()},t=()=>{g.value.showLogHandler()},s=()=>{c.value.showAddHandler()},b=()=>{r.value.showAddHandler()},y=(S,i)=>{o.require({target:S.currentTarget,message:"你确定要删除这个它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"删除",severity:"danger"},accept:()=>h.delFromExclude(i)})},P=(S,i)=>{o.require({target:S.currentTarget,message:"你确定要删除这个它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"删除",severity:"danger"},accept:()=>h.delFromList(i)})};return(S,i)=>(m(),w("div",Ye,[a("div",Ke,[i[1]||(i[1]=a("div",{class:"label"},"运行状态",-1)),a("div",Ge,[l(e(A),{value:e(h).running?"运行中":"等待中",severity:e(h).running?"success":"warn"},null,8,["value","severity"]),l(e(D),{modelValue:e(h).running,"onUpdate:modelValue":i[0]||(i[0]=$=>e(h).running=$),onValueChange:e(h).toggleRun},null,8,["modelValue","onValueChange"])])]),a("div",Je,[i[2]||(i[2]=a("div",{class:"label"},"系统操作",-1)),l(e(I),null,{default:p(()=>[l(e(f),{label:"显示日志",size:"small",severity:"secondary",onClick:t}),l(e(f),{label:"下载器配置",size:"small",severity:"secondary",onClick:k})]),_:1})]),l(e(ie),{multiple:!0,value:[0,1]},{default:p(()=>[l(e(O),{value:0},{default:p(()=>[l(e(E),null,{default:p(()=>[...i[3]||(i[3]=[_("番剧列表",-1)])]),_:1}),l(e(q),null,{default:p(()=>[l(e(f),{size:"small",onClick:b},{default:p(()=>[...i[4]||(i[4]=[_("添加",-1)])]),_:1}),e(h).list.length!=0?(m(),V(e(U),{key:0,value:e(h).list,stripedRows:""},{default:p(()=>[l(e(C),{field:"title",header:"标题"}),l(e(C),{field:"ass",header:"字幕组"}),l(e(C),{header:"操作"},{body:p($=>[l(e(f),{size:"small",label:"删除",severity:"danger",variant:"text",onClick:B=>P(B,$.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):(m(),w("div",Qe,[i[6]||(i[6]=a("div",null,"没有添加任何需要下载的番剧，你需要",-1)),l(e(A),null,{default:p(()=>[...i[5]||(i[5]=[_("添加",-1)])]),_:1}),i[7]||(i[7]=a("div",null,"才能执行下载器",-1))]))]),_:1})]),_:1}),l(e(O),{value:1},{default:p(()=>[l(e(E),null,{default:p(()=>[...i[8]||(i[8]=[_("排除关键字",-1)])]),_:1}),l(e(q),null,{default:p(()=>[l(e(f),{size:"small",onClick:s},{default:p(()=>[...i[9]||(i[9]=[_("添加",-1)])]),_:1}),e(h).exclude.length!=0?(m(),V(e(U),{key:0,value:e(h).exclude,stripedRows:""},{default:p(()=>[l(e(C),{field:"key",header:"关键字"}),l(e(C),{header:"操作"},{body:p($=>[l(e(f),{size:"small",label:"删除",severity:"danger",variant:"text",onClick:B=>y(B,$.data.id)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])):(m(),w("div",We,[i[11]||(i[11]=a("div",null,"没有添加任何排除关键字，你可以",-1)),l(e(A),null,{default:p(()=>[...i[10]||(i[10]=[_("添加",-1)])]),_:1}),i[12]||(i[12]=a("div",null,"确保不下载带有此关键字的资源",-1))]))]),_:1})]),_:1})]),_:1}),l(ke,{ref_key:"addListRef",ref:r},null,512),l(Ve,{ref_key:"addExcludeRef",ref:c},null,512),l(Me,{ref_key:"logRef",ref:g},null,512),l(Ue,{ref_key:"configRef",ref:n},null,512)]))}}),it=R(Xe,[["__scopeId","data-v-e789dbf5"]]);export{it as default};
