import{b as D,c as F}from"./index.browser-Ca2qov4x.js";import{H as N,c as v,o as i,i as $,m as r,B as A,s as b,g as s,r as h,w as u,P as I,a as g,K as p,Q as _,T as E,D as f,R as U,f as L,J as j,S as k,U as O,O as z,V as P,F as V,G as W,j as w,t as M}from"./index-C9tWa43g.js";var T={name:"ChevronUpIcon",extends:N};function R(e){return Z(e)||J(e)||G(e)||Q()}function Q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e,n){if(e){if(typeof e=="string")return C(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(e,n):void 0}}function J(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Z(e){if(Array.isArray(e))return C(e)}function C(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function q(e,n,t,a,d,o){return i(),v("svg",r({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),R(n[0]||(n[0]=[$("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1)])),16)}T.render=q;var X={root:"p-accordioncontent",contentWrapper:"p-accordioncontent-wrapper",content:"p-accordioncontent-content"},Y=A.extend({name:"accordioncontent",classes:X}),ee={name:"BaseAccordionContent",extends:b,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Y,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},S={name:"AccordionContent",extends:ee,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function ne(e,n,t,a,d,o){return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs}):(i(),s(E,r({key:0,name:"p-collapsible"},e.ptm("transition",o.ptParams)),{default:u(function(){return[!o.$pcAccordion.lazy||o.$pcAccordionPanel.active?I((i(),s(p(e.as),r({key:0,class:e.cx("root")},o.attrs),{default:u(function(){return[$("div",r({class:e.cx("contentWrapper")},e.ptm("contentWrapper",o.ptParams)),[$("div",r({class:e.cx("content")},e.ptm("content",o.ptParams)),[h(e.$slots,"default")],16)],16)]}),_:3},16,["class"])),[[_,o.$pcAccordion.lazy?!0:o.$pcAccordionPanel.active]]):g("",!0)]}),_:3},16))}S.render=ne;var te={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},oe=A.extend({name:"accordionheader",classes:te}),ae={name:"BaseAccordionHeader",extends:b,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:oe,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},K={name:"AccordionHeader",extends:ae,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDownKey:function(n){var t=this.findNextPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onHomeKey(n),n.preventDefault()},onArrowUpKey:function(n){var t=this.findPrevPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onEndKey(n),n.preventDefault()},onHomeKey:function(n){var t=this.findFirstPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEndKey:function(n){var t=this.findLastPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEnterKey:function(n){this.changeActiveValue(),n.preventDefault()},findPanel:function(n){return n==null?void 0:n.closest('[data-pc-name="accordionpanel"]')},findHeader:function(n){return O(n,'[data-pc-name="accordionheader"]')},findNextPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?n:n.nextElementSibling;return a?k(a,"data-p-disabled")?this.findNextPanel(a):this.findHeader(a):null},findPrevPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?n:n.previousElementSibling;return a?k(a,"data-p-disabled")?this.findPrevPanel(a):this.findHeader(a):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(n,t){j(this.findHeader(t))}},computed:{id:function(){return"".concat(this.$pcAccordion.$id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.$id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return L({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:T,ChevronDownIcon:D},directives:{ripple:U}};function re(e,n,t,a,d,o){var m=z("ripple");return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:o.$pcAccordionPanel.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):I((i(),s(p(e.as),r({key:0,"data-p":o.dataP,class:e.cx("root"),onClick:o.onClick},o.attrs),{default:u(function(){return[h(e.$slots,"default",{active:o.$pcAccordionPanel.active}),h(e.$slots,"toggleicon",{active:o.$pcAccordionPanel.active,class:f(e.cx("toggleicon"))},function(){return[o.$pcAccordionPanel.active?(i(),s(p(o.$pcAccordion.$slots.collapseicon?o.$pcAccordion.$slots.collapseicon:o.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),r({key:0,class:[o.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",o.ptParams)),null,16,["class"])):(i(),s(p(o.$pcAccordion.$slots.expandicon?o.$pcAccordion.$slots.expandicon:o.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),r({key:1,class:[o.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",o.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[m]])}K.render=re;var ce={root:function(n){var t=n.instance,a=n.props;return["p-accordionpanel",{"p-accordionpanel-active":t.active,"p-disabled":a.disabled}]}},ie=A.extend({name:"accordionpanel",classes:ce}),de={name:"BaseAccordionPanel",extends:b,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:ie,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},x={name:"AccordionPanel",extends:de,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function se(e,n,t,a,d,o){return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:o.active,a11yAttrs:o.a11yAttrs}):(i(),s(p(e.as),r({key:0,class:e.cx("root")},o.attrs),{default:u(function(){return[h(e.$slots,"default")]}),_:3},16,["class"]))}x.render=se;var le=`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-accordioncontent-wrapper {
        min-height: 0;
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,pe={root:"p-accordion p-component"},ue=A.extend({name:"accordion",style:le,classes:pe}),he={name:"BaseAccordion",extends:b,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:ue,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},fe={name:"Accordion",extends:he,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(n){this.d_value=n},activeIndex:{immediate:!0,handler:function(n){this.hasAccordionTab&&(this.d_value=this.multiple?n==null?void 0:n.map(String):n==null?void 0:n.toString())}}},methods:{isItemActive:function(n){var t;return this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.includes(n):this.d_value===n},updateValue:function(n){var t,a=this.isItemActive(n);this.multiple?a?this.d_value=this.d_value.filter(function(d){return d!==n}):this.d_value?this.d_value.push(n):this.d_value=[n]:this.d_value=a?null:n,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.map(Number):Number(this.d_value)),this.$emit(a?"tab-close":"tab-open",{originalEvent:void 0,index:Number(n)})},isAccordionTab:function(n){return n.type.name==="AccordionTab"},getTabProp:function(n,t){return n.props?n.props[t]:void 0},getKey:function(n,t){return this.getTabProp(n,"header")||t},getHeaderPT:function(n,t){var a=this;return{root:r({onClick:function(o){return a.onTabClick(o,t)}},this.getTabProp(n,"headerProps"),this.getTabPT(n,"header",t)),toggleicon:r(this.getTabProp(n,"headeractionprops"),this.getTabPT(n,"headeraction",t))}},getContentPT:function(n,t){return{root:r(this.getTabProp(n,"contentProps"),this.getTabPT(n,"toggleablecontent",t)),transition:this.getTabPT(n,"transition",t),content:this.getTabPT(n,"content",t)}},getTabPT:function(n,t,a){var d=this.tabs.length,o={props:n.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:d,first:a===0,last:a===d-1,active:this.isItemActive("".concat(a))}};return r(this.ptm("accordiontab.".concat(t),o),this.ptmo(this.getTabProp(n,"pt"),t,o))},onTabClick:function(n,t){this.$emit("tab-click",{originalEvent:n,index:t})}},computed:{tabs:function(){var n=this;return this.$slots.default().reduce(function(t,a){return n.isAccordionTab(a)?t.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(d){n.isAccordionTab(d)&&t.push(d)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:x,AccordionHeader:K,AccordionContent:S,ChevronUpIcon:T,ChevronRightIcon:F}};function ve(e,n,t,a,d,o){var m=P("AccordionHeader"),H=P("AccordionContent"),B=P("AccordionPanel");return i(),v("div",r({class:e.cx("root")},e.ptmi("root")),[o.hasAccordionTab?(i(!0),v(V,{key:0},W(o.tabs,function(c,l){return i(),s(B,{key:o.getKey(c,l),value:"".concat(l),pt:{root:o.getTabPT(c,"root",l)},disabled:o.getTabProp(c,"disabled")},{default:u(function(){return[w(m,{class:f(o.getTabProp(c,"headerClass")),pt:o.getHeaderPT(c,l)},{toggleicon:u(function(y){return[y.active?(i(),s(p(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),r({key:0,class:[e.collapseIcon,y.class],"aria-hidden":"true"},{ref_for:!0},o.getTabPT(c,"headericon",l)),null,16,["class"])):(i(),s(p(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),r({key:1,class:[e.expandIcon,y.class],"aria-hidden":"true"},{ref_for:!0},o.getTabPT(c,"headericon",l)),null,16,["class"]))]}),default:u(function(){return[c.children&&c.children.headericon?(i(),s(p(c.children.headericon),{key:0,isTabActive:o.isItemActive("".concat(l)),active:o.isItemActive("".concat(l)),index:l},null,8,["isTabActive","active","index"])):g("",!0),c.props&&c.props.header?(i(),v("span",r({key:1,ref_for:!0},o.getTabPT(c,"headertitle",l)),M(c.props.header),17)):g("",!0),c.children&&c.children.header?(i(),s(p(c.children.header),{key:2})):g("",!0)]}),_:2},1032,["class","pt"]),w(H,{pt:o.getContentPT(c,l)},{default:u(function(){return[(i(),s(p(c)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):h(e.$slots,"default",{key:1})],16)}fe.render=ve;export{x as a,K as b,S as c,fe as s};
