import{d as st}from"./downloader-C3riP16r.js";import{B as lt,s as ct,c as dt,o as U,r as ft,m as mt,P as yt,l as Y,n as vt,e as A,q as F,v as q,d as X,g as J,w as N,u as _,h as K,i as k,t as gt,j as C,k as I}from"./index-DBONk9aZ.js";import{s as M}from"./index-BlwOzJ9m.js";import{g as bt}from"./dayjs.min-2rai63wT.js";var ht=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-floatlabel .p-inputwrapper,
    .p-inputgroup .p-iftalabel .p-inputwrapper {
        display: inline-flex;
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
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
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
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label,
    .p-inputgroup .p-floatlabel .p-inputwrapper ~ label,
    .p-inputgroup .p-iftalabel .p-inputwrapper ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`,wt={root:"p-inputgroup"},xt=lt.extend({name:"inputgroup",style:ht,classes:wt}),_t={name:"BaseInputGroup",extends:ct,style:xt,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},D={name:"InputGroup",extends:_t,inheritAttrs:!1};function Et(w,S,h,g,f,i){return U(),dt("div",mt({class:w.cx("root")},w.ptmi("root")),[ft(w.$slots,"default")],16)}D.render=Et;var R={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */var St=R.exports,G;function Tt(){return G||(G=1,function(w,S){(function(g,f){w.exports=f()})(St,function(){return function(){var h={686:function(i,o,t){t.d(o,{default:function(){return pt}});var r=t(279),p=t.n(r),a=t(370),d=t.n(a),v=t(817),x=t.n(v);function m(l){try{return document.execCommand(l)}catch{return!1}}var b=function(n){var e=x()(n);return m("cut"),e},y=b;function T(l){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var u=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(u,"px"),e.setAttribute("readonly",""),e.value=l,e}var H=function(n,e){var u=T(n);e.container.appendChild(u);var s=x()(u);return m("copy"),u.remove(),s},Q=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},u="";return typeof n=="string"?u=H(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?u=H(n.value,e):(u=x()(n),m("copy")),u},V=Q;function $(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$=function(e){return typeof e}:$=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(l)}var W=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,u=e===void 0?"copy":e,s=n.container,c=n.target,E=n.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(c!==void 0)if(c&&$(c)==="object"&&c.nodeType===1){if(u==="copy"&&c.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(c.hasAttribute("readonly")||c.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return V(E,{container:s});if(c)return u==="cut"?y(c):V(c,{container:s})},Z=W;function O(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(e){return typeof e}:O=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(l)}function tt(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function B(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function et(l,n,e){return n&&B(l.prototype,n),e&&B(l,e),l}function nt(l,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(n&&n.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),n&&j(l,n)}function j(l,n){return j=Object.setPrototypeOf||function(u,s){return u.__proto__=s,u},j(l,n)}function ot(l){var n=at();return function(){var u=L(l),s;if(n){var c=L(this).constructor;s=Reflect.construct(u,arguments,c)}else s=u.apply(this,arguments);return rt(this,s)}}function rt(l,n){return n&&(O(n)==="object"||typeof n=="function")?n:it(l)}function it(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function at(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(l){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(l)}function z(l,n){var e="data-clipboard-".concat(l);if(n.hasAttribute(e))return n.getAttribute(e)}var ut=function(l){nt(e,l);var n=ot(e);function e(u,s){var c;return tt(this,e),c=n.call(this),c.resolveOptions(s),c.listenClick(u),c}return et(e,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=O(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var c=this;this.listener=d()(s,"click",function(E){return c.onClick(E)})}},{key:"onClick",value:function(s){var c=s.delegateTarget||s.currentTarget,E=this.action(c)||"copy",P=Z({action:E,container:this.container,target:this.target(c),text:this.text(c)});this.emit(P?"success":"error",{action:E,text:P,trigger:c,clearSelection:function(){c&&c.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(s){return z("action",s)}},{key:"defaultTarget",value:function(s){var c=z("target",s);if(c)return document.querySelector(c)}},{key:"defaultText",value:function(s){return z("text",s)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return V(s,c)}},{key:"cut",value:function(s){return y(s)}},{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],c=typeof s=="string"?[s]:s,E=!!document.queryCommandSupported;return c.forEach(function(P){E=E&&!!document.queryCommandSupported(P)}),E}}]),e}(p()),pt=ut},828:function(i){var o=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function r(p,a){for(;p&&p.nodeType!==o;){if(typeof p.matches=="function"&&p.matches(a))return p;p=p.parentNode}}i.exports=r},438:function(i,o,t){var r=t(828);function p(v,x,m,b,y){var T=d.apply(this,arguments);return v.addEventListener(m,T,y),{destroy:function(){v.removeEventListener(m,T,y)}}}function a(v,x,m,b,y){return typeof v.addEventListener=="function"?p.apply(null,arguments):typeof m=="function"?p.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(T){return p(T,x,m,b,y)}))}function d(v,x,m,b){return function(y){y.delegateTarget=r(y.target,x),y.delegateTarget&&b.call(v,y)}}i.exports=a},879:function(i,o){o.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},o.nodeList=function(t){var r=Object.prototype.toString.call(t);return t!==void 0&&(r==="[object NodeList]"||r==="[object HTMLCollection]")&&"length"in t&&(t.length===0||o.node(t[0]))},o.string=function(t){return typeof t=="string"||t instanceof String},o.fn=function(t){var r=Object.prototype.toString.call(t);return r==="[object Function]"}},370:function(i,o,t){var r=t(879),p=t(438);function a(m,b,y){if(!m&&!b&&!y)throw new Error("Missing required arguments");if(!r.string(b))throw new TypeError("Second argument must be a String");if(!r.fn(y))throw new TypeError("Third argument must be a Function");if(r.node(m))return d(m,b,y);if(r.nodeList(m))return v(m,b,y);if(r.string(m))return x(m,b,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function d(m,b,y){return m.addEventListener(b,y),{destroy:function(){m.removeEventListener(b,y)}}}function v(m,b,y){return Array.prototype.forEach.call(m,function(T){T.addEventListener(b,y)}),{destroy:function(){Array.prototype.forEach.call(m,function(T){T.removeEventListener(b,y)})}}}function x(m,b,y){return p(document.body,m,b,y)}i.exports=a},817:function(i){function o(t){var r;if(t.nodeName==="SELECT")t.focus(),r=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var p=t.hasAttribute("readonly");p||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),p||t.removeAttribute("readonly"),r=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var a=window.getSelection(),d=document.createRange();d.selectNodeContents(t),a.removeAllRanges(),a.addRange(d),r=a.toString()}return r}i.exports=o},279:function(i){function o(){}o.prototype={on:function(t,r,p){var a=this.e||(this.e={});return(a[t]||(a[t]=[])).push({fn:r,ctx:p}),this},once:function(t,r,p){var a=this;function d(){a.off(t,d),r.apply(p,arguments)}return d._=r,this.on(t,d,p)},emit:function(t){var r=[].slice.call(arguments,1),p=((this.e||(this.e={}))[t]||[]).slice(),a=0,d=p.length;for(a;a<d;a++)p[a].fn.apply(p[a].ctx,r);return this},off:function(t,r){var p=this.e||(this.e={}),a=p[t],d=[];if(a&&r)for(var v=0,x=a.length;v<x;v++)a[v].fn!==r&&a[v].fn._!==r&&d.push(a[v]);return d.length?p[t]=d:delete p[t],this}},i.exports=o,i.exports.TinyEmitter=o}},g={};function f(i){if(g[i])return g[i].exports;var o=g[i]={exports:{}};return h[i](o,o.exports,f),o.exports}return function(){f.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return f.d(o,{a:o}),o}}(),function(){f.d=function(i,o){for(var t in o)f.o(o,t)&&!f.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:o[t]})}}(),function(){f.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)}}(),f(686)}().default})}(R)),R.exports}var Ct=Tt();const kt=bt(Ct),At=w=>({toClipboard(S,h){return new Promise((g,f)=>{const i=document.createElement("button"),o=new kt(i,{text:()=>S,action:()=>"copy",container:h!==void 0?h:document.body});o.on("success",t=>{o.destroy(),g(t)}),o.on("error",t=>{o.destroy(),f(t)}),document.body.appendChild(i),i.click(),document.body.removeChild(i)})}}),{toClipboard:Ot}=At(),$t=yt("recent",()=>{const w=Y(),S=A([]),h=vt(),g=async(o,t=!1)=>{const{data:r}=await F.get(`${q}/api/recent/get`,{headers:{token:h.token},params:{type:o}});if(r.ok){const p=r.msg;S.value=p}else if(r.msg=="令牌已过期"){if(!t&&await h.refreshToken()){g(o,!0);return}}else w.add({severity:"error",summary:"请求失败",detail:r.msg,life:3e3})},f=async(o,t=!1)=>{const{data:r}=await F.post(`${q}/api/recent/download`,{link:o},{headers:{token:h.token}});if(r.ok)w.add({severity:"success",summary:"下载成功",detail:"已添加到下载队列",life:3e3});else if(r.msg=="令牌已过期"){if(!t&&await h.refreshToken()){f(o,!0);return}}else w.add({severity:"error",summary:"下载失败",detail:r.msg,life:3e3})};return{download:f,list:S,getList:g,copy:o=>{Ot(o),w.add({severity:"success",summary:"复制成功",detail:"已复制链接到剪贴板",life:3e3})}}}),Lt={class:"mb-5 select-text"},Pt={class:"flex items-center gap-2 mb-4"},Nt={class:"flex items-center gap-2 mb-4"},Rt={class:"flex justify-end gap-2"},Ht=X({__name:"add",setup(w,{expose:S}){const h=Y(),g=A(!1),f=A(""),i=A(""),o=A(""),t=async()=>{if(f.value.length==0){h.add({severity:"error",summary:"添加失败",detail:"标题不能为空",life:3e3});return}else if(i.value.length==0){h.add({severity:"error",summary:"添加失败",detail:"字幕组不能为空",life:3e3});return}await st().addToList(f.value,i.value),f.value="",i.value="",g.value=!1};return S({showAddHandler:p=>{g.value=!0,o.value=p;const a=p.match(/\[(.*?)\]/),d=p.match(/【(.*?)】/),v=a?p.indexOf(a[0]):1/0;(d?p.indexOf(d[0]):1/0)<v?i.value=d[1]:a?i.value=a[1]:d&&(i.value=d[1])}}),(p,a)=>(U(),J(_(K),{visible:g.value,"onUpdate:visible":a[3]||(a[3]=d=>g.value=d),modal:"",header:"添加到下载器列表...",style:{width:"25rem"},draggable:!1,class:"select-none",closable:!1},{default:N(()=>[k("div",Lt,gt(o.value),1),k("div",Pt,[a[4]||(a[4]=k("div",{class:"font-semibold w-20"},"标题",-1)),C(_(M),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=d=>f.value=d)},null,8,["modelValue"])]),k("div",Nt,[a[5]||(a[5]=k("div",{class:"font-semibold w-20"},"字幕组",-1)),C(_(M),{size:"small",class:"flex-auto",autocomplete:"off",modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=d=>i.value=d)},null,8,["modelValue"])]),k("div",Rt,[C(_(I),{type:"button",label:"取消",severity:"secondary",onClick:a[2]||(a[2]=d=>g.value=!1),size:"small"}),C(_(I),{type:"button",label:"添加",onClick:t,size:"small"})])]),_:1},8,["visible"]))}}),It={class:"flex items-center gap-4 mb-4"},Mt={class:"flex items-center gap-4 mb-4"},Bt=X({__name:"copy",setup(w,{expose:S}){const h=A(!1),g=A(""),f=A("");S({visible:h,url:g,magnet:f});const i=o=>{$t().copy(o)};return(o,t)=>(U(),J(_(K),{visible:h.value,"onUpdate:visible":t[4]||(t[4]=r=>h.value=r),modal:"",header:"链接",style:{width:"25rem"}},{default:N(()=>[k("div",It,[C(_(D),null,{default:N(()=>[C(_(M),{class:"flex-auto",autocomplete:"off",size:"small",modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=r=>g.value=r)},null,8,["modelValue"]),C(_(I),{size:"small",icon:"pi pi-clipboard",onClick:t[1]||(t[1]=r=>i(g.value))})]),_:1})]),k("div",Mt,[C(_(D),null,{default:N(()=>[C(_(M),{class:"flex-auto",autocomplete:"off",size:"small",modelValue:f.value,"onUpdate:modelValue":t[2]||(t[2]=r=>f.value=r)},null,8,["modelValue"]),C(_(I),{size:"small",icon:"pi pi-clipboard",onClick:t[3]||(t[3]=r=>i(f.value))})]),_:1})])]),_:1},8,["visible"]))}});export{Ht as _,Bt as a,$t as r,D as s};
