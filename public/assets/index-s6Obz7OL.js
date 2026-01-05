import{s as d,a3 as r,B as u,m as a,c as s,o as p}from"./index-huuLWPsQ.js";var f={name:"BaseEditableHolder",extends:d,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue||this.modelValue}},watch:{modelValue:function(t){this.d_value=t},defaultValue:function(t){this.d_value=t},$formName:{immediate:!0,handler:function(t){var n,e;this.formField=((n=this.$pcForm)===null||n===void 0||(e=n.register)===null||e===void 0?void 0:e.call(n,t,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(t){var n,e;this.formField=((n=this.$pcForm)===null||n===void 0||(e=n.register)===null||e===void 0?void 0:e.call(n,this.$formName,t))||{}}},$formDefaultValue:{immediate:!0,handler:function(t){this.d_value!==t&&(this.d_value=t)}},$formValue:{immediate:!1,handler:function(t){var n;(n=this.$pcForm)!==null&&n!==void 0&&n.getFieldState(this.$formName)&&t!==this.d_value&&(this.d_value=t)}}},formField:{},methods:{writeValue:function(t,n){var e,l;this.controlled&&(this.d_value=t,this.$emit("update:modelValue",t)),this.$emit("value-change",t),(e=(l=this.formField).onChange)===null||e===void 0||e.call(l,{originalEvent:n,value:t})},findNonEmpty:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.find(r)}},computed:{$filled:function(){return r(this.d_value)},$invalid:function(){var t,n;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.invalid,(n=this.$pcForm)===null||n===void 0||(n=n.getFieldState(this.$formName))===null||n===void 0?void 0:n.invalid)},$formName:function(){var t;return this.$formNovalidate?void 0:this.name||((t=this.$formControl)===null||t===void 0?void 0:t.name)},$formControl:function(){var t;return this.formControl||((t=this.$pcFormField)===null||t===void 0?void 0:t.formControl)},$formNovalidate:function(){var t;return(t=this.$formControl)===null||t===void 0?void 0:t.novalidate},$formDefaultValue:function(){var t,n;return this.findNonEmpty(this.d_value,(t=this.$pcFormField)===null||t===void 0?void 0:t.initialValue,(n=this.$pcForm)===null||n===void 0||(n=n.initialValues)===null||n===void 0?void 0:n[this.$formName])},$formValue:function(){var t,n;return this.findNonEmpty((t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.value,(n=this.$pcForm)===null||n===void 0||(n=n.getFieldState(this.$formName))===null||n===void 0?void 0:n.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},$={name:"BaseInput",extends:f,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var t;return(t=this.variant)!==null&&t!==void 0?t:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var t;return(t=this.fluid)!==null&&t!==void 0?t:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},c=({dt:i})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${i("inputtext.color")};
    background: ${i("inputtext.background")};
    padding-block: ${i("inputtext.padding.y")};
    padding-inline: ${i("inputtext.padding.x")};
    border: 1px solid ${i("inputtext.border.color")};
    transition: background ${i("inputtext.transition.duration")}, color ${i("inputtext.transition.duration")}, border-color ${i("inputtext.transition.duration")}, outline-color ${i("inputtext.transition.duration")}, box-shadow ${i("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${i("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${i("inputtext.shadow")};
}

.p-inputtext:enabled:hover {
    border-color: ${i("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${i("inputtext.focus.border.color")};
    box-shadow: ${i("inputtext.focus.ring.shadow")};
    outline: ${i("inputtext.focus.ring.width")} ${i("inputtext.focus.ring.style")} ${i("inputtext.focus.ring.color")};
    outline-offset: ${i("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${i("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${i("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${i("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${i("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${i("inputtext.disabled.background")};
    color: ${i("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${i("inputtext.placeholder.color")};
}

.p-inputtext.p-invalid::placeholder {
    color: ${i("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${i("inputtext.sm.font.size")};
    padding-block: ${i("inputtext.sm.padding.y")};
    padding-inline: ${i("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${i("inputtext.lg.font.size")};
    padding-block: ${i("inputtext.lg.padding.y")};
    padding-inline: ${i("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,m={root:function(t){var n=t.instance,e=t.props;return["p-inputtext p-component",{"p-filled":n.$filled,"p-inputtext-sm p-inputfield-sm":e.size==="small","p-inputtext-lg p-inputfield-lg":e.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-inputtext-fluid":n.$fluid}]}},h=u.extend({name:"inputtext",style:c,classes:m}),v={name:"BaseInputText",extends:$,style:h,provide:function(){return{$pcInputText:this,$parentInstance:this}}},x={name:"InputText",extends:v,inheritAttrs:!1,methods:{onInput:function(t){this.writeValue(t.target.value,t)}},computed:{attrs:function(){return a(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},g=["value","name","disabled","aria-invalid"];function F(i,t,n,e,l,o){return p(),s("input",a({type:"text",class:i.cx("root"),value:i.d_value,name:i.name,disabled:i.disabled,"aria-invalid":i.$invalid||void 0,onInput:t[0]||(t[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,g)}x.render=F;export{f as a,$ as b,x as s};
