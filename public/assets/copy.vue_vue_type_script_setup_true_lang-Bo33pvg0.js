import{d as pt}from"./downloader-CCZPzk0B.js";import{s as X}from"./index.browser-CVe5_-_l.js";import{s as M}from"./index-BXG5dCoD.js";import{B as ct,s as dt,c as ft,o as H,r as mt,m as yt,z as vt,u as J,e as A,v as G,x as q,y as N,d as K,f as Q,w as R,g as _,h as k,t as gt,i as C,j as V}from"./index-c7rHhO_G.js";import{g as bt}from"./dayjs.min-2rai63wT.js";var ht=({dt:f})=>`
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
    padding: ${f("inputgroup.addon.padding")};
    background: ${f("inputgroup.addon.background")};
    color: ${f("inputgroup.addon.color")};
    border-block-start: 1px solid ${f("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${f("inputgroup.addon.border.color")};
    min-width: ${f("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${f("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${f("inputgroup.addon.border.color")};
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
    border-start-start-radius: ${f("inputgroup.addon.border.radius")};
    border-end-start-radius: ${f("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-iconfield:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${f("inputgroup.addon.border.radius")};
    border-end-end-radius: ${f("inputgroup.addon.border.radius")};
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
`,xt={root:"p-inputgroup"},wt=ct.extend({name:"inputgroup",style:ht,classes:xt}),_t={name:"BaseInputGroup",extends:dt,style:wt,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},U={name:"InputGroup",extends:_t,inheritAttrs:!1};function Et(f,S,x,b,v,o){return H(),ft("div",yt({class:f.cx("root")},f.ptmi("root")),[mt(f.$slots,"default")],16)}U.render=Et;var I={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */var St=I.exports,Y;function Tt(){return Y||(Y=1,function(f,S){(function(b,v){f.exports=v()})(St,function(){return function(){var x={686:function(o,r,t){t.d(r,{default:function(){return lt}});var a=t(279),p=t.n(a),i=t(370),d=t.n(i),g=t(817),w=t.n(g);function m(l){try{return document.execCommand(l)}catch{return!1}}var h=function(n){var e=w()(n);return m("cut"),e},y=h;function T(l){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var u=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(u,"px"),e.setAttribute("readonly",""),e.value=l,e}var B=function(n,e){var u=T(n);e.container.appendChild(u);var s=w()(u);return m("copy"),u.remove(),s},W=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},u="";return typeof n=="string"?u=B(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?u=B(n.value,e):(u=w()(n),m("copy")),u},j=W;function O(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(e){return typeof e}:O=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(l)}var Z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,u=e===void 0?"copy":e,s=n.container,c=n.target,E=n.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(c!==void 0)if(c&&O(c)==="object"&&c.nodeType===1){if(u==="copy"&&c.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(c.hasAttribute("readonly")||c.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return j(E,{container:s});if(c)return u==="cut"?y(c):j(c,{container:s})},tt=Z;function $(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$=function(e){return typeof e}:$=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(l)}function et(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function F(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function nt(l,n,e){return n&&F(l.prototype,n),e&&F(l,e),l}function ot(l,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(n&&n.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),n&&z(l,n)}function z(l,n){return z=Object.setPrototypeOf||function(u,s){return u.__proto__=s,u},z(l,n)}function rt(l){var n=ut();return function(){var u=L(l),s;if(n){var c=L(this).constructor;s=Reflect.construct(u,arguments,c)}else s=u.apply(this,arguments);return it(this,s)}}function it(l,n){return n&&($(n)==="object"||typeof n=="function")?n:at(l)}function at(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function ut(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(l){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(l)}function D(l,n){var e="data-clipboard-".concat(l);if(n.hasAttribute(e))return n.getAttribute(e)}var st=function(l){ot(e,l);var n=rt(e);function e(u,s){var c;return et(this,e),c=n.call(this),c.resolveOptions(s),c.listenClick(u),c}return nt(e,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=$(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var c=this;this.listener=d()(s,"click",function(E){return c.onClick(E)})}},{key:"onClick",value:function(s){var c=s.delegateTarget||s.currentTarget,E=this.action(c)||"copy",P=tt({action:E,container:this.container,target:this.target(c),text:this.text(c)});this.emit(P?"success":"error",{action:E,text:P,trigger:c,clearSelection:function(){c&&c.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(s){return D("action",s)}},{key:"defaultTarget",value:function(s){var c=D("target",s);if(c)return document.querySelector(c)}},{key:"defaultText",value:function(s){return D("text",s)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return j(s,c)}},{key:"cut",value:function(s){return y(s)}},{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],c=typeof s=="string"?[s]:s,E=!!document.queryCommandSupported;return c.forEach(function(P){E=E&&!!document.queryCommandSupported(P)}),E}}]),e}(p()),lt=st},828:function(o){var r=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(p,i){for(;p&&p.nodeType!==r;){if(typeof p.matches=="function"&&p.matches(i))return p;p=p.parentNode}}o.exports=a},438:function(o,r,t){var a=t(828);function p(g,w,m,h,y){var T=d.apply(this,arguments);return g.addEventListener(m,T,y),{destroy:function(){g.removeEventListener(m,T,y)}}}function i(g,w,m,h,y){return typeof g.addEventListener=="function"?p.apply(null,arguments):typeof m=="function"?p.bind(null,document).apply(null,arguments):(typeof g=="string"&&(g=document.querySelectorAll(g)),Array.prototype.map.call(g,function(T){return p(T,w,m,h,y)}))}function d(g,w,m,h){return function(y){y.delegateTarget=a(y.target,w),y.delegateTarget&&h.call(g,y)}}o.exports=i},879:function(o,r){r.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},r.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||r.node(t[0]))},r.string=function(t){return typeof t=="string"||t instanceof String},r.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(o,r,t){var a=t(879),p=t(438);function i(m,h,y){if(!m&&!h&&!y)throw new Error("Missing required arguments");if(!a.string(h))throw new TypeError("Second argument must be a String");if(!a.fn(y))throw new TypeError("Third argument must be a Function");if(a.node(m))return d(m,h,y);if(a.nodeList(m))return g(m,h,y);if(a.string(m))return w(m,h,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function d(m,h,y){return m.addEventListener(h,y),{destroy:function(){m.removeEventListener(h,y)}}}function g(m,h,y){return Array.prototype.forEach.call(m,function(T){T.addEventListener(h,y)}),{destroy:function(){Array.prototype.forEach.call(m,function(T){T.removeEventListener(h,y)})}}}function w(m,h,y){return p(document.body,m,h,y)}o.exports=i},817:function(o){function r(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var p=t.hasAttribute("readonly");p||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),p||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),d=document.createRange();d.selectNodeContents(t),i.removeAllRanges(),i.addRange(d),a=i.toString()}return a}o.exports=r},279:function(o){function r(){}r.prototype={on:function(t,a,p){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:a,ctx:p}),this},once:function(t,a,p){var i=this;function d(){i.off(t,d),a.apply(p,arguments)}return d._=a,this.on(t,d,p)},emit:function(t){var a=[].slice.call(arguments,1),p=((this.e||(this.e={}))[t]||[]).slice(),i=0,d=p.length;for(i;i<d;i++)p[i].fn.apply(p[i].ctx,a);return this},off:function(t,a){var p=this.e||(this.e={}),i=p[t],d=[];if(i&&a)for(var g=0,w=i.length;g<w;g++)i[g].fn!==a&&i[g].fn._!==a&&d.push(i[g]);return d.length?p[t]=d:delete p[t],this}},o.exports=r,o.exports.TinyEmitter=r}},b={};function v(o){if(b[o])return b[o].exports;var r=b[o]={exports:{}};return x[o](r,r.exports,v),r.exports}return function(){v.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return v.d(r,{a:r}),r}}(),function(){v.d=function(o,r){for(var t in r)v.o(r,t)&&!v.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})}}(),function(){v.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)}}(),v(686)}().default})}(I)),I.exports}var Ct=Tt();const kt=bt(Ct),At=f=>({toClipboard(S,x){return new Promise((b,v)=>{const o=document.createElement("button"),r=new kt(o,{text:()=>S,action:()=>"copy",container:x!==void 0?x:document.body});r.on("success",t=>{r.destroy(),b(t)}),r.on("error",t=>{r.destroy(),v(t)}),document.body.appendChild(o),o.click(),document.body.removeChild(o)})}}),{toClipboard:$t}=At(),Ot=vt("recent",()=>{const f=J(),S=A([]),x=async(o,r=!1)=>{const{data:t}=await G.get(`${q}/api/recent/get`,{headers:{token:N().token},params:{type:o}});if(t.ok){const a=t.msg;S.value=a}else if(t.msg=="令牌已过期"){if(!r&&await N().refreshToken()){x(o,!0);return}}else f.add({severity:"error",summary:"请求失败",detail:t.msg,life:3e3})},b=async(o,r=!1)=>{const{data:t}=await G.post(`${q}/api/recent/download`,{link:o},{headers:{token:N().token}});if(t.ok)f.add({severity:"success",summary:"下载成功",detail:"已添加到下载队列",life:3e3});else if(t.msg=="令牌已过期"){if(!r&&await N().refreshToken()){b(o,!0);return}}else f.add({severity:"error",summary:"下载失败",detail:t.msg,life:3e3})};return{download:b,list:S,getList:x,copy:o=>{$t(o),f.add({severity:"success",summary:"复制成功",detail:"已复制链接到剪贴板",life:3e3})}}}),Lt={class:"mb-5 select-text"},Pt={class:"flex items-center gap-2 mb-4"},Nt={class:"flex items-center gap-2 mb-4"},Rt={class:"flex justify-end gap-2"},Bt=K({__name:"add",setup(f,{expose:S}){const x=J(),b=A(!1),v=A(""),o=A(""),r=A(""),t=async()=>{if(v.value.length==0){x.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(o.value.length==0){x.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await pt().addToList(v.value,o.value),v.value="",o.value="",b.value=!1};return S({showAddHandler:p=>{b.value=!0,r.value=p;const i=p.match(/\[(.*?)\]/),d=p.match(/【(.*?)】/),g=i?p.indexOf(i[0]):1/0;(d?p.indexOf(d[0]):1/0)<g?o.value=d[1]:i?o.value=i[1]:d&&(o.value=d[1])}}),(p,i)=>(H(),Q(_(X),{visible:b.value,"onUpdate:visible":i[3]||(i[3]=d=>b.value=d),modal:"",header:"添加到下载器列表...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:R(()=>[k("div",Lt,gt(r.value),1),k("div",Pt,[i[4]||(i[4]=k("label",{for:"title",class:"font-semibold w-20"},"标题",-1)),C(_(M),{size:"small",id:"title",class:"flex-auto",autocomplete:"off",modelValue:v.value,"onUpdate:modelValue":i[0]||(i[0]=d=>v.value=d)},null,8,["modelValue"])]),k("div",Nt,[i[5]||(i[5]=k("label",{for:"ass",class:"font-semibold w-20"},"字幕组",-1)),C(_(M),{size:"small",id:"ass",class:"flex-auto",autocomplete:"off",modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=d=>o.value=d)},null,8,["modelValue"])]),k("div",Rt,[C(_(V),{type:"button",label:"取消",severity:"secondary",onClick:i[2]||(i[2]=d=>b.value=!1),size:"small"}),C(_(V),{type:"button",label:"添加",onClick:t,size:"small"})])]),_:1},8,["visible"]))}}),It={class:"flex items-center gap-4 mb-4"},Mt={class:"flex items-center gap-4 mb-4"},Ft=K({__name:"copy",setup(f,{expose:S}){const x=A(!1),b=A(""),v=A("");S({visible:x,url:b,magnet:v});const o=r=>{Ot().copy(r)};return(r,t)=>(H(),Q(_(X),{visible:x.value,"onUpdate:visible":t[4]||(t[4]=a=>x.value=a),modal:"",header:"链接",style:{width:"25rem"}},{default:R(()=>[k("div",It,[C(_(U),null,{default:R(()=>[C(_(M),{id:"url",class:"flex-auto",autocomplete:"off",size:"small",modelValue:b.value,"onUpdate:modelValue":t[0]||(t[0]=a=>b.value=a)},null,8,["modelValue"]),C(_(V),{size:"small",icon:"pi pi-clipboard",onClick:t[1]||(t[1]=a=>o(b.value))})]),_:1})]),k("div",Mt,[C(_(U),null,{default:R(()=>[C(_(M),{id:"magnet",class:"flex-auto",autocomplete:"off",size:"small",modelValue:v.value,"onUpdate:modelValue":t[2]||(t[2]=a=>v.value=a)},null,8,["modelValue"]),C(_(V),{size:"small",icon:"pi pi-clipboard",onClick:t[3]||(t[3]=a=>o(v.value))})]),_:1})])]),_:1},8,["visible"]))}});export{Bt as _,Ft as a,Ot as r,U as s};
