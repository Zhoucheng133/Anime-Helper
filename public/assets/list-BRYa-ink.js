import{B as ee,s as le,f as ae,c as x,o as y,a as A,m as T,r as se,b as I,t as z,d as L,e as d,g as S,w as u,u as l,h as B,i as s,j as t,k as h,l as N,n as P,F as G,p as M,q as F,v as j,x as J,y as te,_ as K,z as O,A as ne,C as ie,D as oe}from"./index-C9tWa43g.js";import{l as o,_ as Q,s as q,a as de}from"./add.vue_vue_type_script_setup_true_lang-Bpk5QhxW.js";import{s as X,a as W}from"./index.browser-Ca2qov4x.js";import{s as H}from"./index-D1Aklo2o.js";import{d as re,s as U,a as Y,b as ue,c as me}from"./downloader-D9PTbN7J.js";import{s as D}from"./index-BT445y6F.js";var ve=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
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
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
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
`,pe={root:function(V){var c=V.instance;return["p-progressbar p-component",{"p-progressbar-determinate":c.determinate,"p-progressbar-indeterminate":c.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},fe=ee.extend({name:"progressbar",style:ve,classes:pe}),ge={name:"BaseProgressBar",extends:le,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:fe,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},Z={name:"ProgressBar",extends:ge,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"},dataP:function(){return ae({determinate:this.determinate,indeterminate:this.indeterminate})}}},be=["aria-valuenow","data-p"],ye=["data-p"],ce=["data-p"],we=["data-p"];function ke(p,V,c,f,r,n){return y(),x("div",T({role:"progressbar",class:p.cx("root"),"aria-valuemin":"0","aria-valuenow":p.value,"aria-valuemax":"100","data-p":n.dataP},p.ptmi("root")),[n.determinate?(y(),x("div",T({key:0,class:p.cx("value"),style:n.progressStyle,"data-p":n.dataP},p.ptm("value")),[p.value!=null&&p.value!==0&&p.showValue?(y(),x("div",T({key:0,class:p.cx("label"),"data-p":n.dataP},p.ptm("label")),[se(p.$slots,"default",{},function(){return[I(z(p.value+"%"),1)]})],16,ce)):A("",!0)],16,ye)):n.indeterminate?(y(),x("div",T({key:1,class:p.cx("value"),"data-p":n.dataP},p.ptm("value")),null,16,we)):A("",!0)],16,be)}Z.render=ke;const $e={class:"flex items-center gap-2 mb-4"},xe={class:"flex items-center gap-2 mb-4"},_e={class:"flex items-center gap-2 mb-4"},he={class:"flex items-center gap-2 mb-4"},Ve={key:0,class:"flex items-center gap-2 mb-4"},ze={key:1,class:"flex items-center gap-2 mb-4"},Ce={class:"flex justify-end gap-2"},He=L({__name:"add",setup(p,{expose:V}){const c=o(),f=d(!1),r=d(""),n=d(!1),b=d(""),g=d("0"),w=d(""),i=d(c.weekdays[0]),m=async()=>{if(!c.formChecker(r.value,n.value,b.value,g.value,w.value))return;await c.addItem(r.value,n.value,parseInt(b.value),parseInt(g.value),parseInt(w.value),i.value.code,"")&&(f.value=!1,r.value="",n.value=!1,b.value="",g.value="0",w.value="",i.value=c.weekdays[0])};return V({showAddHandler:()=>{f.value=!0}}),(_,e)=>(y(),S(l(B),{visible:f.value,"onUpdate:visible":e[8]||(e[8]=a=>f.value=a),modal:"",header:"添加到列表...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:u(()=>[s("div",$e,[t(l(X),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),binary:""},null,8,["modelValue"]),s("div",{onClick:e[1]||(e[1]=a=>n.value=!n.value)},"当前在更新")]),s("div",xe,[e[9]||(e[9]=s("div",{class:"font-semibold w-20"},"标题",-1)),t(l(H),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=a=>r.value=a)},null,8,["modelValue"])]),s("div",_e,[e[10]||(e[10]=s("div",{class:"font-semibold w-20"},"集数",-1)),t(l(H),{type:"number",size:"small",class:"flex-auto",autocomplete:"off",modelValue:b.value,"onUpdate:modelValue":e[3]||(e[3]=a=>b.value=a),min:"1"},null,8,["modelValue"])]),s("div",he,[e[11]||(e[11]=s("div",{class:"font-semibold w-20"},"观看至",-1)),t(l(H),{type:"number",size:"small",class:"flex-auto",autocomplete:"off",modelValue:g.value,"onUpdate:modelValue":e[4]||(e[4]=a=>g.value=a),min:"0",max:n.value?w.value:b.value},null,8,["modelValue","max"])]),n.value?(y(),x("div",Ve,[e[12]||(e[12]=s("div",{class:"font-semibold w-20"},"更新至",-1)),t(l(H),{type:"number",size:"small",class:"flex-auto",autocomplete:"off",modelValue:w.value,"onUpdate:modelValue":e[5]||(e[5]=a=>w.value=a),min:"1",max:b.value},null,8,["modelValue","max"])])):A("",!0),n.value?(y(),x("div",ze,[e[13]||(e[13]=s("div",{class:"font-semibold w-20"},"更新周",-1)),t(l(W),{size:"small",modelValue:i.value,"onUpdate:modelValue":e[6]||(e[6]=a=>i.value=a),options:l(c).weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):A("",!0),s("div",Ce,[t(l(h),{type:"button",label:"取消",severity:"secondary",onClick:e[7]||(e[7]=a=>f.value=!1),size:"small"}),t(l(h),{type:"button",label:"添加",onClick:m,size:"small"})])]),_:1},8,["visible"]))}}),Ue={class:"flex items-center gap-2 mb-4"},Re={class:"flex items-center gap-2 mb-4"},Ae={class:"flex items-center gap-2 mb-4"},Ie={class:"flex items-center gap-2 mb-4"},Le={key:0,class:"flex items-center gap-2 mb-4"},Se={key:1,class:"flex items-center gap-2 mb-4"},Be={class:"flex justify-end gap-2"},Ee=L({__name:"edit",setup(p,{expose:V}){const c=d(""),f=d(""),r=d(!1),n=d(""),b=d(""),g=d(""),w=d(o().weekdays[0]),i=d(!1),m=e=>{if(e==0)return o().weekdays[0];const a=new Date(e).getDay();return o().weekdays[a==0?6:a-1]},R=e=>{c.value=e.id,i.value=!0,f.value=e.title,b.value=e.now.toString(),r.value=o().calculateEpisodesReleased(e.time)<e.episode,g.value=o().analyseEpisode(e).toString(),n.value=e.episode.toString(),w.value=m(e.time)},_=async()=>{o().formChecker(f.value,r.value,n.value,b.value,g.value)&&(await o().editItem(c.value,f.value,r.value,parseInt(n.value),parseInt(b.value),parseInt(g.value),w.value.code),i.value=!1)};return V({showEditHandler:R}),(e,a)=>(y(),S(l(B),{visible:i.value,"onUpdate:visible":a[8]||(a[8]=k=>i.value=k),modal:"",header:"编辑列表项...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:u(()=>[s("div",Ue,[t(l(X),{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=k=>r.value=k),binary:""},null,8,["modelValue"]),s("div",{onClick:a[1]||(a[1]=k=>r.value=!r.value)},"当前在更新")]),s("div",Re,[a[9]||(a[9]=s("div",{class:"font-semibold w-20"},"标题",-1)),t(l(H),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=k=>f.value=k)},null,8,["modelValue"])]),s("div",Ae,[a[10]||(a[10]=s("div",{class:"font-semibold w-20"},"集数",-1)),t(l(H),{type:"number",size:"small",class:"flex-auto",autocomplete:"off",modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]=k=>n.value=k),min:"1"},null,8,["modelValue"])]),s("div",Ie,[a[11]||(a[11]=s("div",{class:"font-semibold w-20"},"观看至",-1)),t(l(H),{type:"number",size:"small",class:"flex-auto",autocomplete:"off",modelValue:b.value,"onUpdate:modelValue":a[4]||(a[4]=k=>b.value=k),min:"0",max:r.value?g.value:n.value},null,8,["modelValue","max"])]),r.value?(y(),x("div",Le,[a[12]||(a[12]=s("div",{class:"font-semibold w-20"},"更新至",-1)),t(l(H),{type:"number",size:"small",class:"flex-auto",autocomplete:"off",modelValue:g.value,"onUpdate:modelValue":a[5]||(a[5]=k=>g.value=k),min:"1",max:n.value},null,8,["modelValue","max"])])):A("",!0),r.value?(y(),x("div",Se,[a[13]||(a[13]=s("div",{class:"font-semibold w-20"},"更新周",-1)),t(l(W),{size:"small",modelValue:w.value,"onUpdate:modelValue":a[6]||(a[6]=k=>w.value=k),options:l(o)().weekdays,"scroll-height":"20rem",optionLabel:"name"},null,8,["modelValue","options"])])):A("",!0),s("div",Be,[t(l(h),{type:"button",label:"取消",severity:"secondary",onClick:a[7]||(a[7]=k=>i.value=!1),size:"small"}),t(l(h),{type:"button",label:"完成",onClick:_,size:"small"})])]),_:1},8,["visible"]))}}),Te={class:"flex items-center gap-2 mb-4"},We={class:"flex items-center gap-2 mb-4"},De={class:"flex justify-end gap-2"},Fe=L({__name:"add_downloader",setup(p,{expose:V}){const c=N(),f=d(!1),r=d(""),n=d(""),b=async()=>{if(r.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(n.value.length==0){c.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await re().addToList(r.value,n.value),f.value=!1,r.value="",n.value=""};return V({showAddHandler:w=>{f.value=!0,r.value=w}}),(w,i)=>(y(),S(l(B),{visible:f.value,"onUpdate:visible":i[3]||(i[3]=m=>f.value=m),modal:"",header:"添加番剧...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:u(()=>[s("div",Te,[i[4]||(i[4]=s("div",{class:"font-semibold w-20"},"标题",-1)),t(l(H),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=m=>r.value=m)},null,8,["modelValue"])]),s("div",We,[i[5]||(i[5]=s("div",{class:"font-semibold w-20"},"字幕组",-1)),t(l(H),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=m=>n.value=m)},null,8,["modelValue"])]),s("div",De,[t(l(h),{type:"button",label:"取消",severity:"secondary",onClick:i[2]||(i[2]=m=>f.value=!1),size:"small"}),t(l(h),{type:"button",label:"添加",onClick:b,size:"small"})])]),_:1},8,["visible"]))}}),je={class:"cover flex justify-center"},Ne=["src"],Ke={class:"flex items-center gap-2 mb-4 mt-4"},Me={class:"flex items-center gap-2 mb-4 mt-4"},qe={class:"flex items-center gap-2 mb-4 mt-4"},Pe={class:"flex items-center gap-2 mb-4 mt-4"},Ge={class:"rating"},Je={class:"flex justify-end gap-2"},Oe=L({__name:"info",emits:["showAdd"],setup(p,{expose:V,emit:c}){const f=c,r=N(),n=d(),b=P(),g=()=>{i.value=!1,f("showAdd",m.value)},w=te(()=>100-m.value.score*10);let i=d(!1),m=d({title:"",id:"",score:0,updates:0,eps:0,image:"",weekday:0});const R=async(_,e=!1)=>{n.value.loadingHandler(!0,"加载番剧信息");const{data:a}=await F.get(`${j}/api/calendar/info/${_}`,{headers:{token:b.token}});if(a.ok)m.value=a.msg,i.value=!0;else if(a.msg=="令牌已过期"){if(!e&&await b.refreshToken()){R(_,!0);return}}else r.add({severity:"error",summary:"获取信息失败",detail:a.msg,life:3e3});n.value.loadingHandler(!1,"加载番剧信息")};return V({showInfoHanlder:R}),(_,e)=>(y(),x(G,null,[t(l(B),{visible:l(i),"onUpdate:visible":e[1]||(e[1]=a=>M(i)?i.value=a:i=a),modal:"",header:"番剧信息",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:u(()=>[s("div",je,[s("img",{src:l(m).image,alt:"",width:"100",height:"141",class:"cover_img",draggable:!1},null,8,Ne)]),s("div",Ke,[e[2]||(e[2]=s("div",{class:"font-semibold w-20"},"标题",-1)),s("div",null,z(l(m).title),1)]),s("div",Me,[e[3]||(e[3]=s("div",{class:"font-semibold w-20"},"集数",-1)),s("div",null,z(l(m).eps),1)]),s("div",qe,[e[4]||(e[4]=s("div",{class:"font-semibold w-20"},"更新至",-1)),s("div",null,z(l(m).updates),1)]),s("div",Pe,[e[5]||(e[5]=s("div",{class:"font-semibold w-20"},"评分",-1)),s("div",Ge,[t(l(q),{modelValue:0,readonly:"",class:"rate0"}),t(l(q),{modelValue:5,readonly:"",class:"rate5",style:J({"clip-path":`inset(0 ${w.value}% 0 0)`})},null,8,["style"])]),s("div",null,z(l(m).score)+" / 10",1)]),s("div",Je,[t(l(h),{type:"button",label:"取消",severity:"secondary",onClick:e[0]||(e[0]=a=>M(i)?i.value=!1:i=!1),size:"small"}),t(l(h),{type:"button",label:"添加到列表",onClick:g,size:"small"})])]),_:1},8,["visible"]),t(Q,{ref_key:"loadingRef",ref:n},null,512)],64))}}),Qe=K(Oe,[["__scopeId","data-v-87a32260"]]),Xe={class:"flex items-center gap-2 mb-4"},Ye=["src"],Ze={class:"item_title"},el={class:"ep select-none"},ll={key:1,class:"loading"},al=L({__name:"bgm_search",setup(p,{expose:V}){const c=N(),f=d(),r=d(),n=d(),b=P(),g=d(!1),w=d([]),i=d(!1),m=d("");function R(C){f.value.showInfoHanlder(C.id,0)}async function _(C,$=!1){if(C.length==0){c.add({severity:"error",summary:"搜索失败",detail:"关键字不能为空",life:3e3});return}g.value=!0,document.activeElement instanceof HTMLElement&&document.activeElement.blur();let v=await F.get(`${j}/api/list/bgm/search/${C}`,{headers:{token:b.token}});if(v.data.ok)w.value=v.data.msg;else if(v.data.msg=="令牌已过期"){if(!$&&await b.refreshToken())return _(C,!0)}else c.add({severity:"error",summary:"搜索失败",detail:v.data.msg,life:3e3});g.value=!1}const e=async(C,$=!1)=>{r.value.loadingHandler(!0,"加载集数信息");let v=await F.get(`${j}/api/list/bgm/updates/${C.toString()}`,{headers:{token:b.token}});if(r.value.loadingHandler(!1,"加载集数信息"),v.data.ok){const E=v.data.msg;n.value.showAddHandler(E,E.weekday),i.value=!1}else if(v.data.msg=="令牌已过期"){if(!$&&await b.refreshToken())return e(C,!0)}else c.add({severity:"error",summary:"搜索失败",detail:v.data.msg,life:3e3})},a=async C=>{n.value.showAddHandler(C,C.weekday),i.value=!1};return V({showDialogHandler:()=>{w.value=[],m.value="",i.value=!0}}),(C,$)=>(y(),x(G,null,[t(l(B),{visible:i.value,"onUpdate:visible":$[3]||($[3]=v=>i.value=v),modal:"",header:"从Bangumi中添加...",draggable:!1,class:"bgm_search_dialog_content",closable:!0},{default:u(()=>[s("div",Xe,[t(l(H),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:m.value,"onUpdate:modelValue":$[0]||($[0]=v=>m.value=v),placeholder:"搜索标题",onKeyup:$[1]||($[1]=O(v=>_(m.value),["enter"]))},null,8,["modelValue"]),t(l(h),{size:"small",onClick:$[2]||($[2]=v=>_(m.value)),disabled:g.value},{default:u(()=>[...$[4]||($[4]=[I("搜索",-1)])]),_:1},8,["disabled"])]),s("div",null,[w.value.length!=0?(y(),S(l(Y),{key:0,value:w.value,class:"mb-5"},{default:u(()=>[t(l(U),{field:"title",header:"封面",style:{"min-width":"70px"}},{body:u(v=>[s("img",{src:v.data.image,height:"70.7",width:"50",draggable:!1},null,8,Ye)]),_:1}),t(l(U),{field:"title",header:"标题",style:{"min-width":"280px"}},{body:u(v=>[s("div",Ze,z(v.data.title),1)]),_:1}),t(l(U),{header:"集数",style:{"min-width":"60px"}},{body:u(v=>[s("div",el,z(v.data.eps==0?"?":v.data.eps),1)]),_:1}),t(l(U),{header:"操作",style:{"min-width":"140px"},class:"select-none"},{body:u(v=>[t(l(h),{severity:"secondary",size:"small",onClick:E=>R(v.data),disabled:g.value||v.data.episode==0},{default:u(()=>[...$[5]||($[5]=[I("查看",-1)])]),_:1},8,["onClick","disabled"]),t(l(h),{size:"small",onClick:E=>e(v.data.id),disabled:g.value||v.data.episode==0,class:"ml-2"},{default:u(()=>[...$[6]||($[6]=[I("添加",-1)])]),_:1},8,["onClick","disabled"])]),_:1})]),_:1},8,["value"])):g.value?(y(),x("div",ll,[...$[7]||($[7]=[s("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"20px"}},null,-1)])])):A("",!0)])]),_:1},8,["visible"]),t(Qe,{ref_key:"infoRef",ref:f,onShowAdd:a},null,512),t(de,{ref_key:"addRef",ref:n},null,512),t(Q,{ref_key:"loadingRef",ref:r},null,512)],64))}}),sl=K(al,[["__scopeId","data-v-9ef0a657"]]),tl={class:"page"},nl={class:"tool_bar"},il={key:1},ol={key:2},dl={key:0,class:"card"},rl={class:"item_title"},ul={key:0,class:"update_tag tag"},ml={key:1,class:"done_tag tag"},vl={class:"ep"},pl={key:0,class:"weekday_tag weekday_tag_now"},fl={key:1,class:"weekday_tag"},gl={class:"progress_area"},bl={class:"progress_label"},yl={key:1,class:"empty"},cl={class:"add_tip"},wl={class:"add_tip"},kl=L({__name:"list",setup(p){document.title="AnimeHelper | 列表";const V=d(!0),c=d(),f=d();function r(){document.activeElement instanceof HTMLElement&&document.activeElement.blur()}const n=_=>{c.value.toggle(_)},b=d([{label:"添加",items:[{label:"手动添加",icon:"pi pi-plus",command:()=>{w.value.showAddHandler()}},{label:"从Bangumi添加",icon:"pi pi-globe",command:()=>{f.value.showDialogHandler()}}]}]),g=_=>o().calProgress(_.data);ne(async()=>{await o().getList(),V.value=!1});const w=d(),i=d(),m=d();function R(_){o().offset=_,o().getList()}return(_,e)=>(y(),x("div",tl,[s("div",nl,[t(l(h),{label:"添加",size:"small",onClick:n}),t(l(ie),{ref_key:"addmenuRef",ref:c,id:"overlay_menu",model:b.value,popup:!0},null,8,["model"]),t(l(W),{size:"small",modelValue:l(o)().selectedFilter,"onUpdate:modelValue":e[0]||(e[0]=a=>l(o)().selectedFilter=a),options:l(o)().filters,"scroll-height":"20rem",optionLabel:"name",onChange:e[1]||(e[1]=a=>l(o)().getList())},null,8,["modelValue","options"]),l(o)().selectedFilter.name=="搜索"?(y(),S(l(H),{key:0,size:"small",style:{width:"100%"},modelValue:l(o)().searchKeyWord,"onUpdate:modelValue":e[2]||(e[2]=a=>l(o)().searchKeyWord=a),onChange:e[3]||(e[3]=a=>l(o)().getList()),onKeyup:O(r,["enter"])},null,8,["modelValue"])):A("",!0),l(o)().selectedFilter.name=="更新周"?(y(),x("div",il,[t(l(W),{size:"small",modelValue:l(o)().selectedWeekday,"onUpdate:modelValue":e[4]||(e[4]=a=>l(o)().selectedWeekday=a),options:l(o)().weekdays,"scroll-height":"20rem",style:{width:"120px"},optionLabel:"name",onChange:e[5]||(e[5]=a=>l(o)().getList())},null,8,["modelValue","options"])])):(y(),x("div",ol))]),l(o)().list.length!=0&&V.value==!1?(y(),x("div",dl,[t(l(Y),{value:l(o)().list},{default:u(()=>[t(l(U),{field:"title",header:"标题",style:{"min-width":"270px"}},{body:u(a=>[s("div",rl,z(a.data.title),1)]),_:1}),t(l(U),{header:"状态",style:{"min-width":"90px"}},{body:u(a=>[l(o)().onUpudate(a.data)?(y(),x("div",ul,"更新中")):(y(),x("div",ml,"已完结"))]),_:1}),t(l(U),{header:"集数",style:{"min-width":"60px"}},{body:u(a=>[s("div",vl,z(a.data.episode),1)]),_:1}),t(l(U),{header:"更新周",style:{"min-width":"90px"}},{body:u(a=>[l(o)().getWeekday(a.data.time)===l(o)().getWeekday(Date.now())?(y(),x("div",pl,z(l(o)().getWeekday(a.data.time)),1)):(y(),x("div",fl,z(l(o)().getWeekday(a.data.time)),1))]),_:1}),t(l(U),{header:"进度",style:{"min-width":"200px"}},{body:u(a=>[s("div",gl,[t(l(Z),{class:oe(g(a)==100?"finished":"progress"),value:l(o)().calProgress(a.data),style:{height:"18px"},showValue:!1},null,8,["class","value"]),s("div",bl,[s("div",null,z(a.data.now)+" / "+z(l(o)().analyseEpisode(a.data)),1)]),s("div",{class:"progress_label white_label",style:J({"clip-path":`polygon(0 0, ${g(a)}% 0, ${g(a)}% 100%, 0% 100%)`})},[s("div",null,z(a.data.now)+" / "+z(l(o)().analyseEpisode(a.data)),1)],4)])]),_:1}),t(l(U),{header:"操作",style:{"min-width":"230px"}},{body:u(a=>[t(l(me),null,{default:u(()=>[t(l(h),{severity:"secondary",size:"small",onClick:k=>i.value.showEditHandler(a.data)},{default:u(()=>[...e[6]||(e[6]=[s("i",{class:"pi pi-pen-to-square",style:{"font-size":"12px"}},null,-1)])]),_:1},8,["onClick"]),t(l(h),{severity:"secondary",size:"small",onClick:k=>l(o)().minus(a.data),disabled:a.data.now<=0},{default:u(()=>[...e[7]||(e[7]=[s("i",{class:"pi pi-minus",style:{"font-size":"12px"}},null,-1)])]),_:1},8,["onClick","disabled"]),t(l(h),{severity:"secondary",size:"small",onClick:k=>l(o)().add(a.data),disabled:a.data.now>=l(o)().analyseEpisode(a.data)},{default:u(()=>[...e[8]||(e[8]=[s("i",{class:"pi pi-plus",style:{"font-size":"12px"}},null,-1)])]),_:1},8,["onClick","disabled"]),t(l(h),{severity:"secondary",size:"small",style:{"font-size":"12px"},onClick:k=>m.value.showAddHandler(a.data.title)},{default:u(()=>[...e[9]||(e[9]=[I("添加到",-1)])]),_:1},8,["onClick"]),t(l(h),{severity:"secondary",size:"small",onClick:k=>l(o)().deleteItem(k,a.data)},{default:u(()=>[...e[10]||(e[10]=[s("i",{class:"pi pi-trash",style:{"font-size":"12px"}},null,-1)])]),_:1},8,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["value"]),t(l(ue),{rows:20,totalRecords:l(o)().length,"onUpdate:first":R,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"第 {currentPage} 页 | 共 {totalPages} 页"},null,8,["totalRecords"])])):l(o)().list.length==0&&V.value==!1?(y(),x("div",yl,[e[19]||(e[19]=s("div",{class:"empty_list"},[s("i",{class:"pi pi-ban",style:{"margin-right":"5px"}}),s("div",null,"列表为空")],-1)),s("div",cl,[e[13]||(e[13]=s("div",null,"在此页面点击",-1)),t(l(D),null,{default:u(()=>[...e[11]||(e[11]=[I("添加",-1)])]),_:1}),e[14]||(e[14]=s("div",null,"或者在",-1)),t(l(D),null,{default:u(()=>[...e[12]||(e[12]=[I("每日放送",-1)])]),_:1}),e[15]||(e[15]=s("div",null,"页面中点击正在连载的动画",-1))]),s("div",wl,[e[17]||(e[17]=s("div",null,"你也可以在",-1)),t(l(D),null,{default:u(()=>[...e[16]||(e[16]=[I("添加",-1)])]),_:1}),e[18]||(e[18]=s("div",null,"旁的下拉菜单中修改筛选方式",-1))])])):A("",!0),t(He,{ref_key:"addRef",ref:w},null,512),t(Ee,{ref_key:"editRef",ref:i},null,512),t(Fe,{ref_key:"downloaderRef",ref:m},null,512),t(sl,{ref_key:"bgmSearchRef",ref:f},null,512)]))}}),Cl=K(kl,[["__scopeId","data-v-67f930b8"]]);export{Cl as default};
