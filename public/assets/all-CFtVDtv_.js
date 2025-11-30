import{B as mt,s as yt,c as U,o as M,r as vt,m as gt,y as bt,u as Z,e as $,q as K,v as X,x as J,d as Y,f as tt,w as A,g as w,h as C,t as H,i as _,j as O,C as ht,E as xt,z as _t,F as wt,a as kt,_ as Ct}from"./index-Dlzrg73N.js";import{g as Et,d as $t}from"./dayjs.min-2rai63wT.js";import{_ as St}from"./loading.vue_vue_type_script_setup_true_lang-Dy0z9eS6.js";import{d as Tt,s as At,b as Q,c as Ot}from"./downloader-CSVtc_MQ.js";import{s as et,b as zt}from"./index.browser-CRTWgEnj.js";import{s as R}from"./index-Ct2rUClv.js";var Lt=({dt:g})=>`
.p-inputgroup,
.p-inputgroup .p-iconfield,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${g("inputgroup.addon.padding")};
    background: ${g("inputgroup.addon.background")};
    color: ${g("inputgroup.addon.color")};
    border-block-start: 1px solid ${g("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${g("inputgroup.addon.border.color")};
    min-width: ${g("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${g("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${g("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iconfield > .p-component,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-iconfield:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${g("inputgroup.addon.border.radius")};
    border-end-start-radius: ${g("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-iconfield:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${g("inputgroup.addon.border.radius")};
    border-end-end-radius: ${g("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

.p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
    border-inline-start: 0;
}
`,Mt={root:"p-inputgroup"},Rt=mt.extend({name:"inputgroup",style:Lt,classes:Mt}),Vt={name:"BaseInputGroup",extends:yt,style:Rt,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},F={name:"InputGroup",extends:Vt,inheritAttrs:!1};function Nt(g,E,k,x,v,e){return M(),U("div",gt({class:g.cx("root")},g.ptmi("root")),[vt(g.$slots,"default")],16)}F.render=Nt;var I={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */var jt=I.exports,W;function Ht(){return W||(W=1,function(g,E){(function(x,v){g.exports=v()})(jt,function(){return function(){var k={686:function(e,r,t){t.d(r,{default:function(){return ft}});var a=t(279),l=t.n(a),i=t(370),f=t.n(i),h=t(817),b=t.n(h);function c(p){try{return document.execCommand(p)}catch{return!1}}var d=function(o){var n=b()(o);return c("cut"),n},y=d;function S(p){var o=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[o?"right":"left"]="-9999px";var u=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(u,"px"),n.setAttribute("readonly",""),n.value=p,n}var q=function(o,n){var u=S(o);n.container.appendChild(u);var s=b()(u);return c("copy"),u.remove(),s},nt=function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},u="";return typeof o=="string"?u=q(o,n):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o==null?void 0:o.type)?u=q(o.value,n):(u=b()(o),c("copy")),u},P=nt;function V(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?V=function(n){return typeof n}:V=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},V(p)}var ot=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.action,u=n===void 0?"copy":n,s=o.container,m=o.target,T=o.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(m!==void 0)if(m&&V(m)==="object"&&m.nodeType===1){if(u==="copy"&&m.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(m.hasAttribute("readonly")||m.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(T)return P(T,{container:s});if(m)return u==="cut"?y(m):P(m,{container:s})},rt=ot;function z(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?z=function(n){return typeof n}:z=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},z(p)}function it(p,o){if(!(p instanceof o))throw new TypeError("Cannot call a class as a function")}function G(p,o){for(var n=0;n<o.length;n++){var u=o[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(p,u.key,u)}}function at(p,o,n){return o&&G(p.prototype,o),n&&G(p,n),p}function lt(p,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(o&&o.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),o&&B(p,o)}function B(p,o){return B=Object.setPrototypeOf||function(u,s){return u.__proto__=s,u},B(p,o)}function ut(p){var o=ct();return function(){var u=N(p),s;if(o){var m=N(this).constructor;s=Reflect.construct(u,arguments,m)}else s=u.apply(this,arguments);return st(this,s)}}function st(p,o){return o&&(z(o)==="object"||typeof o=="function")?o:pt(p)}function pt(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function ct(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function N(p){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},N(p)}function D(p,o){var n="data-clipboard-".concat(p);if(o.hasAttribute(n))return o.getAttribute(n)}var dt=function(p){lt(n,p);var o=ut(n);function n(u,s){var m;return it(this,n),m=o.call(this),m.resolveOptions(s),m.listenClick(u),m}return at(n,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=z(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var m=this;this.listener=f()(s,"click",function(T){return m.onClick(T)})}},{key:"onClick",value:function(s){var m=s.delegateTarget||s.currentTarget,T=this.action(m)||"copy",j=rt({action:T,container:this.container,target:this.target(m),text:this.text(m)});this.emit(j?"success":"error",{action:T,text:j,trigger:m,clearSelection:function(){m&&m.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(s){return D("action",s)}},{key:"defaultTarget",value:function(s){var m=D("target",s);if(m)return document.querySelector(m)}},{key:"defaultText",value:function(s){return D("text",s)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(s){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return P(s,m)}},{key:"cut",value:function(s){return y(s)}},{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],m=typeof s=="string"?[s]:s,T=!!document.queryCommandSupported;return m.forEach(function(j){T=T&&!!document.queryCommandSupported(j)}),T}}]),n}(l()),ft=dt},828:function(e){var r=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(l,i){for(;l&&l.nodeType!==r;){if(typeof l.matches=="function"&&l.matches(i))return l;l=l.parentNode}}e.exports=a},438:function(e,r,t){var a=t(828);function l(h,b,c,d,y){var S=f.apply(this,arguments);return h.addEventListener(c,S,y),{destroy:function(){h.removeEventListener(c,S,y)}}}function i(h,b,c,d,y){return typeof h.addEventListener=="function"?l.apply(null,arguments):typeof c=="function"?l.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(S){return l(S,b,c,d,y)}))}function f(h,b,c,d){return function(y){y.delegateTarget=a(y.target,b),y.delegateTarget&&d.call(h,y)}}e.exports=i},879:function(e,r){r.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},r.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||r.node(t[0]))},r.string=function(t){return typeof t=="string"||t instanceof String},r.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(e,r,t){var a=t(879),l=t(438);function i(c,d,y){if(!c&&!d&&!y)throw new Error("Missing required arguments");if(!a.string(d))throw new TypeError("Second argument must be a String");if(!a.fn(y))throw new TypeError("Third argument must be a Function");if(a.node(c))return f(c,d,y);if(a.nodeList(c))return h(c,d,y);if(a.string(c))return b(c,d,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function f(c,d,y){return c.addEventListener(d,y),{destroy:function(){c.removeEventListener(d,y)}}}function h(c,d,y){return Array.prototype.forEach.call(c,function(S){S.addEventListener(d,y)}),{destroy:function(){Array.prototype.forEach.call(c,function(S){S.removeEventListener(d,y)})}}}function b(c,d,y){return l(document.body,c,d,y)}e.exports=i},817:function(e){function r(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var l=t.hasAttribute("readonly");l||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),l||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),f=document.createRange();f.selectNodeContents(t),i.removeAllRanges(),i.addRange(f),a=i.toString()}return a}e.exports=r},279:function(e){function r(){}r.prototype={on:function(t,a,l){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:a,ctx:l}),this},once:function(t,a,l){var i=this;function f(){i.off(t,f),a.apply(l,arguments)}return f._=a,this.on(t,f,l)},emit:function(t){var a=[].slice.call(arguments,1),l=((this.e||(this.e={}))[t]||[]).slice(),i=0,f=l.length;for(i;i<f;i++)l[i].fn.apply(l[i].ctx,a);return this},off:function(t,a){var l=this.e||(this.e={}),i=l[t],f=[];if(i&&a)for(var h=0,b=i.length;h<b;h++)i[h].fn!==a&&i[h].fn._!==a&&f.push(i[h]);return f.length?l[t]=f:delete l[t],this}},e.exports=r,e.exports.TinyEmitter=r}},x={};function v(e){if(x[e])return x[e].exports;var r=x[e]={exports:{}};return k[e](r,r.exports,v),r.exports}return function(){v.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return v.d(r,{a:r}),r}}(),function(){v.d=function(e,r){for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){v.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),v(686)}().default})}(I)),I.exports}var It=Ht();const Pt=Et(It),Bt=g=>({toClipboard(E,k){return new Promise((x,v)=>{const e=document.createElement("button"),r=new Pt(e,{text:()=>E,action:()=>"copy",container:k!==void 0?k:document.body});r.on("success",t=>{r.destroy(),x(t)}),r.on("error",t=>{r.destroy(),v(t)}),document.body.appendChild(e),e.click(),document.body.removeChild(e)})}}),{toClipboard:Dt}=Bt(),L=bt("all",()=>{const g=Z(),E=$([]);return{download:async e=>{const{data:r}=await K.post(`${X}/api/all/download`,{link:e},{headers:{token:J().token}});r.ok?g.add({severity:"success",summary:"下载成功",detail:"已添加到下载队列",life:3e3}):g.add({severity:"error",summary:"下载失败",detail:r.msg,life:3e3})},list:E,getList:async e=>{const{data:r}=await K.get(`${X}/api/all/get`,{headers:{token:J().token},params:{type:e}});if(r.ok){const t=r.msg;E.value=t}else g.add({severity:"error",summary:"请求失败",detail:r.msg,life:3e3})},copy:e=>{Dt(e),g.add({severity:"success",summary:"复制成功",detail:"已复制链接到剪贴板",life:3e3})}}}),Ut={class:"mb-5 select-text"},Ft={class:"flex items-center gap-2 mb-4"},Yt={class:"flex items-center gap-2 mb-4"},qt={class:"flex justify-end gap-2"},Gt=Y({__name:"add",setup(g,{expose:E}){const k=Z(),x=$(!1),v=$(""),e=$(""),r=$(""),t=async()=>{if(v.value.length==0){k.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(e.value.length==0){k.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await Tt().addToList(v.value,e.value),v.value="",e.value="",x.value=!1};return E({showAddHandler:l=>{x.value=!0,r.value=l;const i=l.match(/\[(.*?)\]/),f=l.match(/【(.*?)】/),h=i?l.indexOf(i[0]):1/0;(f?l.indexOf(f[0]):1/0)<h?e.value=f[1]:i?e.value=i[1]:f&&(e.value=f[1])}}),(l,i)=>(M(),tt(w(et),{visible:x.value,"onUpdate:visible":i[3]||(i[3]=f=>x.value=f),modal:"",header:"添加到下载器列表...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:A(()=>[C("div",Ut,H(r.value),1),C("div",Ft,[i[4]||(i[4]=C("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),_(w(R),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:v.value,"onUpdate:modelValue":i[0]||(i[0]=f=>v.value=f)},null,8,["modelValue"])]),C("div",Yt,[i[5]||(i[5]=C("label",{for:"ass",class:"font-semibold w-20"},"字幕组",-1)),_(w(R),{size:"small",id:"ass",class:"flex-auto",autocomplete:"off",modelValue:e.value,"onUpdate:modelValue":i[1]||(i[1]=f=>e.value=f)},null,8,["modelValue"])]),C("div",qt,[_(w(O),{type:"button",label:"取消",severity:"secondary",onClick:i[2]||(i[2]=f=>x.value=!1),size:"small"}),_(w(O),{type:"button",label:"添加",onClick:t,size:"small"})])]),_:1},8,["visible"]))}}),Kt={class:"flex items-center gap-4 mb-4"},Xt={class:"flex items-center gap-4 mb-4"},Jt=Y({__name:"copy",setup(g,{expose:E}){const k=$(!1),x=$(""),v=$("");E({visible:k,url:x,magnet:v});const e=r=>{L().copy(r)};return(r,t)=>(M(),tt(w(et),{visible:k.value,"onUpdate:visible":t[4]||(t[4]=a=>k.value=a),modal:"",header:"链接",style:{width:"25rem"}},{default:A(()=>[C("div",Kt,[_(w(F),null,{default:A(()=>[_(w(R),{id:"url",class:"flex-auto",autocomplete:"off",size:"small",modelValue:x.value,"onUpdate:modelValue":t[0]||(t[0]=a=>x.value=a)},null,8,["modelValue"]),_(w(O),{size:"small",icon:"pi pi-clipboard",onClick:t[1]||(t[1]=a=>e(x.value))})]),_:1})]),C("div",Xt,[_(w(F),null,{default:A(()=>[_(w(R),{id:"magnet",class:"flex-auto",autocomplete:"off",size:"small",modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=a=>v.value=a)},null,8,["modelValue"]),_(w(O),{size:"small",icon:"pi pi-clipboard",onClick:t[3]||(t[3]=a=>e(v.value))})]),_:1})])]),_:1},8,["visible"]))}}),Qt={class:"page"},Wt={class:"topbar"},Zt={class:"title_area"},te={class:"title"},ee={class:"flex"},ne={class:"select-none text-gray-400 text-xs"},oe={key:0,class:"select-none text-gray-400 text-xs ml-8"},re=Y({__name:"all",setup(g){const E=$(),k=ht(),x=$(),v=$("");document.title="AnimeHelper | 所有";const e=$("kisssub"),r=[{name:"Kisssub",code:"kisssub"},{name:"Mikan",code:"mikan"}],t=xt(()=>v.value==""?L().list:L().list.filter(b=>b.title.includes(v.value)));async function a(){E.value.loadingHandler(!0,"获取所有列表"),await L().getList(e.value),E.value.loadingHandler(!1,"获取所有列表")}const l=$(),i=b=>{l.value.visible=!0,l.value.url=b.url,l.value.magnet=b.magnet};function f(b){if(b===0)return"0 B";const c=["B","KB","MB","GB","TB","PB"],d=Math.floor(Math.log(b)/Math.log(1024)),y=b/Math.pow(1024,d);return`${parseFloat(y.toFixed(2)).toString()} ${c[d]}`}_t(async()=>{a()});const h=(b,c)=>{k.require({target:b.currentTarget,message:"你确定要下载它吗",rejectProps:{label:"取消",severity:"secondary",outlined:!0,size:"small"},acceptProps:{size:"small",label:"下载"},accept:()=>L().download(c)})};return(b,c)=>(M(),U(wt,null,[C("div",Qt,[C("div",Wt,[_(w(zt),{size:"small",options:r,modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=d=>e.value=d),optionLabel:"name","option-value":"code",fluid:!1,onChange:a},null,8,["modelValue"]),_(w(R),{size:"small",modelValue:v.value,"onUpdate:modelValue":c[1]||(c[1]=d=>v.value=d)},null,8,["modelValue"])]),_(w(At),{value:t.value},{default:A(()=>[_(w(Q),{field:"title",header:"标题"},{body:A(d=>[C("div",Zt,[C("div",te,H(d.data.title),1),C("div",ee,[C("div",ne,H(w($t)(d.data.time).format("YYYY-MM-DD HH:mm")),1),e.value!="kisssub"?(M(),U("div",oe,H(f(d.data.length)),1)):kt("",!0)])])]),_:1}),_(w(Q),{header:"操作",style:{"min-width":"150px"}},{body:A(d=>[_(w(Ot),null,{default:A(()=>[_(w(O),{severity:"secondary",icon:"pi pi-link",size:"small",style:{"font-size":"12px"},onClick:y=>i(d.data)},null,8,["onClick"]),_(w(O),{severity:"secondary",label:"添加至",size:"small",style:{"font-size":"12px"},onClick:y=>x.value.showAddHandler(d.data.title)},null,8,["onClick"]),_(w(O),{severity:"secondary",size:"small",onClick:y=>h(y,d.data.url)},{default:A(()=>c[2]||(c[2]=[C("i",{class:"pi pi-download",style:{"font-size":"12px"}},null,-1)])),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["value"])]),_(St,{ref_key:"loadingRef",ref:E},null,512),_(Gt,{ref_key:"addRef",ref:x},null,512),_(Jt,{ref_key:"copyRef",ref:l},null,512)],64))}}),de=Ct(re,[["__scopeId","data-v-c4d030ed"]]);export{de as default};
