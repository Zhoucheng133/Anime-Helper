import{c as H,d as D}from"./index.browser-BFOnekc9.js";import{G as N,c as v,o as i,h as k,m as c,B as A,s as b,f as s,r as h,w as p,S as w,a as g,Q as u,U as F,T as E,n as f,V as _,W as U,X as C,Y as L,R as j,P,F as O,A as z,i as T,t as V}from"./index-Cm-C714L.js";var y={name:"ChevronUpIcon",extends:N};function R(e,n,t,r,d,a){return i(),v("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[k("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1)]),16)}y.render=R;var M={root:"p-accordioncontent",content:"p-accordioncontent-content"},G=A.extend({name:"accordioncontent",classes:M}),Q={name:"BaseAccordionContent",extends:b,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:G,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},I={name:"AccordionContent",extends:Q,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function W(e,n,t,r,d,a){return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs}):(i(),s(E,c({key:0,name:"p-toggleable-content"},e.ptm("transition",a.ptParams)),{default:p(function(){return[!a.$pcAccordion.lazy||a.$pcAccordionPanel.active?w((i(),s(u(e.as),c({key:0,class:e.cx("root")},a.attrs),{default:p(function(){return[k("div",c({class:e.cx("content")},e.ptm("content",a.ptParams)),[h(e.$slots,"default")],16)]}),_:3},16,["class"])),[[F,a.$pcAccordion.lazy?!0:a.$pcAccordionPanel.active]]):g("",!0)]}),_:3},16))}I.render=W;var X={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},Y=A.extend({name:"accordionheader",classes:X}),Z={name:"BaseAccordionHeader",extends:b,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Y,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},x={name:"AccordionHeader",extends:Z,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDownKey:function(n){var t=this.findNextPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onHomeKey(n),n.preventDefault()},onArrowUpKey:function(n){var t=this.findPrevPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onEndKey(n),n.preventDefault()},onHomeKey:function(n){var t=this.findFirstPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEndKey:function(n){var t=this.findLastPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEnterKey:function(n){this.changeActiveValue(),n.preventDefault()},findPanel:function(n){return n==null?void 0:n.closest('[data-pc-name="accordionpanel"]')},findHeader:function(n){return L(n,'[data-pc-name="accordionheader"]')},findNextPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=t?n:n.nextElementSibling;return r?C(r,"data-p-disabled")?this.findNextPanel(r):this.findHeader(r):null},findPrevPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=t?n:n.previousElementSibling;return r?C(r,"data-p-disabled")?this.findPrevPanel(r):this.findHeader(r):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(n,t){U(this.findHeader(t))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return c(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}},components:{ChevronUpIcon:y,ChevronDownIcon:H},directives:{ripple:_}};function q(e,n,t,r,d,a){var m=j("ripple");return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):w((i(),s(u(e.as),c({key:0,class:e.cx("root"),onClick:a.onClick},a.attrs),{default:p(function(){return[h(e.$slots,"default",{active:a.$pcAccordionPanel.active}),h(e.$slots,"toggleicon",{active:a.$pcAccordionPanel.active,class:f(e.cx("toggleicon"))},function(){return[a.$pcAccordionPanel.active?(i(),s(u(a.$pcAccordion.$slots.collapseicon?a.$pcAccordion.$slots.collapseicon:a.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),c({key:0,class:[a.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",a.ptParams)),null,16,["class"])):(i(),s(u(a.$pcAccordion.$slots.expandicon?a.$pcAccordion.$slots.expandicon:a.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),c({key:1,class:[a.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",a.ptParams)),null,16,["class"]))]})]}),_:3},16,["class","onClick"])),[[m]])}x.render=q;var J={root:function(n){var t=n.instance,r=n.props;return["p-accordionpanel",{"p-accordionpanel-active":t.active,"p-disabled":r.disabled}]}},ee=A.extend({name:"accordionpanel",classes:J}),ne={name:"BaseAccordionPanel",extends:b,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:ee,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},K={name:"AccordionPanel",extends:ne,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function ae(e,n,t,r,d,a){return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(i(),s(u(e.as),c({key:0,class:e.cx("root")},a.attrs),{default:p(function(){return[h(e.$slots,"default")]}),_:3},16,["class"]))}K.render=ae;var te=({dt:e})=>`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: ${e("accordion.panel.border.width")};
    border-color: ${e("accordion.panel.border.color")};
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${e("accordion.header.padding")};
    color: ${e("accordion.header.color")};
    background: ${e("accordion.header.background")};
    border-style: solid;
    border-width: ${e("accordion.header.border.width")};
    border-color: ${e("accordion.header.border.color")};
    font-weight: ${e("accordion.header.font.weight")};
    border-radius: ${e("accordion.header.border.radius")};
    transition: background ${e("accordion.transition.duration")}, color ${e("accordion.transition.duration")}, outline-color ${e("accordion.transition.duration")}, box-shadow ${e("accordion.transition.duration")};
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: ${e("accordion.header.first.border.width")};
    border-start-start-radius: ${e("accordion.header.first.top.border.radius")};
    border-start-end-radius: ${e("accordion.header.first.top.border.radius")};
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: ${e("accordion.header.last.bottom.border.radius")};
    border-end-end-radius: ${e("accordion.header.last.bottom.border.radius")};
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: ${e("accordion.header.last.active.bottom.border.radius")};
    border-end-end-radius: ${e("accordion.header.last.active.bottom.border.radius")};
}

.p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.color")};
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: ${e("accordion.header.focus.ring.shadow")};
    outline: ${e("accordion.header.focus.ring.width")} ${e("accordion.header.focus.ring.style")} ${e("accordion.header.focus.ring.color")};
    outline-offset: ${e("accordion.header.focus.ring.offset")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: ${e("accordion.header.hover.background")};
    color: ${e("accordion.header.hover.color")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: ${e("accordion.header.active.background")};
    color: ${e("accordion.header.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
    background: ${e("accordion.header.active.hover.background")};
    color: ${e("accordion.header.active.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${e("accordion.header.toggle.icon.active.hover.color")};
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: ${e("accordion.content.border.width")};
    border-color: ${e("accordion.content.border.color")};
    background-color: ${e("accordion.content.background")};
    color: ${e("accordion.content.color")};
    padding: ${e("accordion.content.padding")};
}
`,re={root:"p-accordion p-component"},oe=A.extend({name:"accordion",style:te,classes:re}),ce={name:"BaseAccordion",extends:b,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:oe,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},ie={name:"Accordion",extends:ce,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(n){this.d_value=n},activeIndex:{immediate:!0,handler:function(n){this.hasAccordionTab&&(this.d_value=this.multiple?n==null?void 0:n.map(String):n==null?void 0:n.toString())}}},methods:{isItemActive:function(n){var t;return this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.includes(n):this.d_value===n},updateValue:function(n){var t,r=this.isItemActive(n);this.multiple?r?this.d_value=this.d_value.filter(function(d){return d!==n}):this.d_value?this.d_value.push(n):this.d_value=[n]:this.d_value=r?null:n,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.map(Number):Number(this.d_value)),this.$emit(r?"tab-close":"tab-open",{originalEvent:void 0,index:Number(n)})},isAccordionTab:function(n){return n.type.name==="AccordionTab"},getTabProp:function(n,t){return n.props?n.props[t]:void 0},getKey:function(n,t){return this.getTabProp(n,"header")||t},getHeaderPT:function(n,t){var r=this;return{root:c({onClick:function(a){return r.onTabClick(a,t)}},this.getTabProp(n,"headerProps"),this.getTabPT(n,"header",t)),toggleicon:c(this.getTabProp(n,"headeractionprops"),this.getTabPT(n,"headeraction",t))}},getContentPT:function(n,t){return{root:c(this.getTabProp(n,"contentProps"),this.getTabPT(n,"toggleablecontent",t)),transition:this.getTabPT(n,"transition",t),content:this.getTabPT(n,"content",t)}},getTabPT:function(n,t,r){var d=this.tabs.length,a={props:n.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:r,count:d,first:r===0,last:r===d-1,active:this.isItemActive("".concat(r))}};return c(this.ptm("accordiontab.".concat(t),a),this.ptmo(this.getTabProp(n,"pt"),t,a))},onTabClick:function(n,t){this.$emit("tab-click",{originalEvent:n,index:t})}},computed:{tabs:function(){var n=this;return this.$slots.default().reduce(function(t,r){return n.isAccordionTab(r)?t.push(r):r.children&&r.children instanceof Array&&r.children.forEach(function(d){n.isAccordionTab(d)&&t.push(d)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:K,AccordionHeader:x,AccordionContent:I,ChevronUpIcon:y,ChevronRightIcon:D}};function de(e,n,t,r,d,a){var m=P("AccordionHeader"),S=P("AccordionContent"),B=P("AccordionPanel");return i(),v("div",c({class:e.cx("root")},e.ptmi("root")),[a.hasAccordionTab?(i(!0),v(O,{key:0},z(a.tabs,function(o,l){return i(),s(B,{key:a.getKey(o,l),value:"".concat(l),pt:{root:a.getTabPT(o,"root",l)},disabled:a.getTabProp(o,"disabled")},{default:p(function(){return[T(m,{class:f(a.getTabProp(o,"headerClass")),pt:a.getHeaderPT(o,l)},{toggleicon:p(function($){return[$.active?(i(),s(u(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),c({key:0,class:[e.collapseIcon,$.class],"aria-hidden":"true",ref_for:!0},a.getTabPT(o,"headericon",l)),null,16,["class"])):(i(),s(u(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),c({key:1,class:[e.expandIcon,$.class],"aria-hidden":"true",ref_for:!0},a.getTabPT(o,"headericon",l)),null,16,["class"]))]}),default:p(function(){return[o.children&&o.children.headericon?(i(),s(u(o.children.headericon),{key:0,isTabActive:a.isItemActive("".concat(l)),active:a.isItemActive("".concat(l)),index:l},null,8,["isTabActive","active","index"])):g("",!0),o.props&&o.props.header?(i(),v("span",c({key:1,ref_for:!0},a.getTabPT(o,"headertitle",l)),V(o.props.header),17)):g("",!0),o.children&&o.children.header?(i(),s(u(o.children.header),{key:2})):g("",!0)]}),_:2},1032,["class","pt"]),T(S,{pt:a.getContentPT(o,l)},{default:p(function(){return[(i(),s(u(o)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):h(e.$slots,"default",{key:1})],16)}ie.render=de;export{K as a,x as b,I as c,ie as s};
