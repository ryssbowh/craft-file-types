(function(e){function t(t){for(var o,l,s=t[0],a=t[1],c=t[2],p=0,u=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&u.push(i[l][0]),i[l]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},i={main:0},r=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=a;r.push(["9b23","chunk-vendors"]),n()})({"1b9a":function(e,t,n){var o=n("4ad2");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("499e").default;i("c887e58e",o,!0,{sourceMap:!1,shadowMode:!1})},"453e":function(e,t,n){"use strict";n("1b9a")},"4ad2":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,".type[data-v-3184f3b4]{width:calc(33% - 7px)}.extensions[data-v-3184f3b4]{height:200px;overflow-y:auto}.extension[data-v-3184f3b4]{background:#e4edf6;margin-right:5px;border-radius:3px;padding:5px 7px;margin-bottom:5px;float:left}.delete[data-v-3184f3b4]:before{margin-top:-5px}h3[data-v-3184f3b4]{margin-bottom:0}@media (max-width:600px){.type[data-v-3184f3b4]{width:calc(100% - 7px)}}",""]),e.exports=t},"9b23":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("f2bf");Object(o["pushScopeId"])("data-v-3184f3b4");var i={class:"buttons"},r={class:"list flex"},l=["name","value"],s=["name","value"],a=["onClick"],c={class:"extension"},d=["onClick"];function p(e,t,n,p,u,h){var b=Object(o["resolveComponent"])("draggable");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("button",{type:"submit",class:"btn submit",onClick:t[0]||(t[0]=Object(o["withModifiers"])((function(t){return e.setShowTypeModal(!0)}),["prevent"]))},"New type"),Object(o["createElementVNode"])("button",{type:"submit",class:"btn submit",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.setShowExtensionModal(!0)}),["prevent"]))},"New extension")]),Object(o["createElementVNode"])("div",r,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(h.types,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"type",key:t},[Object(o["createElementVNode"])("input",{type:"hidden",name:"settings[fileTypes]["+t+"][label]",value:e.label},null,8,l),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.extensions,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("input",{key:e.ext,type:"hidden",name:"settings[fileTypes]["+t+"][extensions][]",value:e.ext},null,8,s)})),128)),Object(o["createElementVNode"])("h3",null,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.label)+" ",1),0==e.extensions.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{key:0,title:"Delete",class:"delete icon",onClick:Object(o["withModifiers"])((function(e){return h.confirmAndDeleteType(t)}),["prevent"])},null,8,a)):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])(b,{list:e.extensions,group:"extensions",itemKey:"'id'",class:Object(o["normalizeClass"])("extensions text "+(0==e.extensions.length?"error":""))},{item:Object(o["withCtx"])((function(e){var n=e.element;return[Object(o["createElementVNode"])("div",c,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n.ext)+" ",1),Object(o["createElementVNode"])("a",{title:"Delete",class:"delete icon",onClick:Object(o["withModifiers"])((function(e){return h.confirmAndDeleteExtension(t,n.id)}),["prevent"])},null,8,d)])]})),_:2},1032,["list","class"])])})),128))])])}Object(o["popScopeId"])();var u=n("5530"),h=(n("4e82"),n("b64b"),n("d81d"),n("5502")),b={computed:Object(u["a"])({types:function(){var e=this;return Object.keys(this.fileTypes).sort().reduce((function(t,n){return t[n]=e.fileTypes[n],t}),{})}},Object(h["c"])(["fileTypes"])),props:{originalFileTypes:Object},created:function(){this.setFileTypes(this.originalFileTypes)},mounted:function(){var e=this;$("#main-form").submit((function(t){for(var n in e.fileTypes)0==e.fileTypes[n].extensions.length&&t.preventDefault()}))},methods:Object(u["a"])({rawExtensions:function(e){return e.map((function(e){return e.ext}))},confirmAndDeleteExtension:function(e,t){confirm(this.t("Delete this extension ?"))&&this.deleteExtension({group:e,id:t})},confirmAndDeleteType:function(e){confirm(this.t("Delete this type ?"))&&this.deleteType(e)}},Object(h["b"])(["setFileTypes","deleteExtension","setShowTypeModal","setShowExtensionModal","deleteType"]))};n("453e");b.render=p,b.__scopeId="data-v-3184f3b4";var m=b,f=(n("b0c0"),{class:"modal elementselectormodal modal-type",style:{display:"none"},ref:"modal"}),O={class:"header"},y={class:"body"},j={class:"content"},E={class:"main"},v={class:"field width-100"},x={class:"heading"},g={class:"required",for:"name"},w={class:"input ltr"},N={key:0,class:"errors"},V={class:"field width-100"},T={class:"heading"},k={class:"required",for:"handle"},M={class:"input ltr"},S={key:0,class:"errors"},D={class:"footer"},B={class:"buttons right"};function C(e,t,n,i,r,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",f,[Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("h3",null,Object(o["toDisplayString"])(e.t("New file type")),1)]),Object(o["createElementVNode"])("div",y,[Object(o["createElementVNode"])("div",j,[Object(o["createElementVNode"])("form",E,[Object(o["createElementVNode"])("div",v,[Object(o["createElementVNode"])("div",x,[Object(o["createElementVNode"])("label",g,Object(o["toDisplayString"])(e.t("Name")),1)]),Object(o["createElementVNode"])("div",w,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",id:"name",class:Object(o["normalizeClass"])({text:!0,fullwidth:!0,error:r.nameError}),"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.name=e}),maxlength:"255",required:""},null,2),[[o["vModelText"],r.name]])]),r.nameError?(Object(o["openBlock"])(),Object(o["createElementBlock"])("ul",N,[Object(o["createElementVNode"])("li",null,Object(o["toDisplayString"])(r.nameError),1)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",V,[Object(o["createElementVNode"])("div",T,[Object(o["createElementVNode"])("label",k,Object(o["toDisplayString"])(e.t("Handle")),1)]),Object(o["createElementVNode"])("div",M,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",id:"handle",class:Object(o["normalizeClass"])({text:!0,fullwidth:!0,error:r.handleError}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.handle=e}),maxlength:"255",required:""},null,2),[[o["vModelText"],r.handle]])]),r.handleError?(Object(o["openBlock"])(),Object(o["createElementBlock"])("ul",S,[Object(o["createElementVNode"])("li",null,Object(o["toDisplayString"])(r.handleError),1)])):Object(o["createCommentVNode"])("",!0)])])])]),Object(o["createElementVNode"])("div",D,[Object(o["createElementVNode"])("div",B,[Object(o["createElementVNode"])("button",{type:"button",class:"btn",onClick:t[2]||(t[2]=function(){return l.closeModal&&l.closeModal.apply(l,arguments)})},Object(o["toDisplayString"])(e.t("Close")),1),Object(o["createElementVNode"])("button",{type:"button",class:"btn submit",onClick:t[3]||(t[3]=function(){return l.save&&l.save.apply(l,arguments)})},Object(o["toDisplayString"])(e.t("Save")),1)])])],512)}n("498a");var q=Garnish.Modal.extend({updateSizeAndPosition:function(){this.$container&&(this.$container.css({"min-width":"200px","min-height":"200px",transform:"translate(-50%, -50%)",width:"auto","max-width":Garnish.$win.width()-2*this.settings.minGutter,left:"50%",height:"auto","max-height":Garnish.$win.height()-2*this.settings.minGutter,top:"50%"}),this.trigger("updateSizeAndPosition"))}}),_={computed:Object(u["a"])({hasError:function(){return this.handleError||this.nameError}},Object(h["c"])(["showTypeModal","fileTypes"])),data:function(){return{popup:null,name:"",handle:"",nameError:!1,handleError:!1,handleGenerator:null}},watch:{showTypeModal:function(){this.showTypeModal?this.popup?this.popup.show():this.createModal():this.popup.hide(),this.removeErrors(),this.name="",this.handle=""}},beforeUnmount:function(){this.popup.destroy()},methods:Object(u["a"])({createModal:function(){this.popup=new q(this.$refs.modal,{hideOnEsc:!1,hideOnShadeClick:!1}),this.handleGenerator=new Craft.HandleGenerator(".modal-type #name",".modal-type #handle")},removeErrors:function(){this.nameError=!1,this.handleError=!1},closeModal:function(){this.setShowTypeModal(!1)},validateModal:function(){for(var e in this.removeErrors(),this.name.trim()||(this.nameError=this.t("Name is required")),this.handle.trim()?/^[a-zA-Z0-9]+$/.test(this.handle)||(this.handleError=this.t("Handle can only contain alphanumeric characters")):this.handleError=this.t("Handle is required"),this.fileTypes)e==this.handle.trim()&&(this.handleError=this.t("This handle is already defined"))},save:function(){this.validateModal(),this.hasError||(this.addType({handle:this.handle,type:{label:this.name,extensions:[]}}),this.closeModal())}},Object(h["b"])(["addType","setShowTypeModal"]))};_.render=C;var P=_,A={class:"modal elementselectormodal modal-extension",style:{display:"none"},ref:"modal"},F={class:"header"},z={class:"body"},G={class:"content"},U={class:"main"},H={class:"field width-100"},I={class:"heading"},L={class:"required",for:"extension"},J={class:"input ltr"},Z={key:0,class:"errors"},K={class:"field width-100"},Q={class:"heading"},R={class:"required",for:"type"},W={class:"input ltr"},X={class:"select"},Y=["value"],ee={key:0,class:"errors"},te={class:"footer"},ne={class:"buttons right"};function oe(e,t,n,i,r,l){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",A,[Object(o["createElementVNode"])("div",F,[Object(o["createElementVNode"])("h3",null,Object(o["toDisplayString"])(e.t("New extension")),1)]),Object(o["createElementVNode"])("div",z,[Object(o["createElementVNode"])("div",G,[Object(o["createElementVNode"])("form",U,[Object(o["createElementVNode"])("div",H,[Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("label",L,Object(o["toDisplayString"])(e.t("Extension")),1)]),Object(o["createElementVNode"])("div",J,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",id:"extension",class:Object(o["normalizeClass"])({text:!0,fullwidth:!0,error:r.extensionError}),"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.extension=e}),maxlength:"255",required:""},null,2),[[o["vModelText"],r.extension]])]),r.extensionError?(Object(o["openBlock"])(),Object(o["createElementBlock"])("ul",Z,[Object(o["createElementVNode"])("li",null,Object(o["toDisplayString"])(r.extensionError),1)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",K,[Object(o["createElementVNode"])("div",Q,[Object(o["createElementVNode"])("label",R,Object(o["toDisplayString"])(e.t("Type")),1)]),Object(o["createElementVNode"])("div",W,[Object(o["createElementVNode"])("div",X,[Object(o["withDirectives"])(Object(o["createElementVNode"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.type=e}),id:"type"},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.fileTypes,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("option",{key:t,value:t},Object(o["toDisplayString"])(e.label),9,Y)})),128))],512),[[o["vModelSelect"],r.type]])])]),r.typeError?(Object(o["openBlock"])(),Object(o["createElementBlock"])("ul",ee,[Object(o["createElementVNode"])("li",null,Object(o["toDisplayString"])(r.typeError),1)])):Object(o["createCommentVNode"])("",!0)])])])]),Object(o["createElementVNode"])("div",te,[Object(o["createElementVNode"])("div",ne,[Object(o["createElementVNode"])("button",{type:"button",class:"btn",onClick:t[2]||(t[2]=function(){return l.closeModal&&l.closeModal.apply(l,arguments)})},Object(o["toDisplayString"])(e.t("Close")),1),Object(o["createElementVNode"])("button",{type:"button",class:"btn submit",onClick:t[3]||(t[3]=function(){return l.save&&l.save.apply(l,arguments)})},Object(o["toDisplayString"])(e.t("Save")),1)])])],512)}n("caad"),n("2532");var ie={computed:Object(u["a"])({},Object(h["c"])(["showExtensionModal","fileTypes"])),data:function(){return{popup:null,extension:"",type:"",extensionError:"",typeError:""}},watch:{showExtensionModal:function(){this.showExtensionModal?this.popup?this.popup.show():this.createModal():this.popup.hide(),this.removeErrors(),this.extension="",this.type=""}},beforeUnmount:function(){this.popup.destroy()},methods:Object(u["a"])({createModal:function(){this.popup=new q(this.$refs.modal,{hideOnEsc:!1,hideOnShadeClick:!1})},removeErrors:function(){this.extensionError="",this.typeError=""},closeModal:function(){this.setShowExtensionModal(!1)},validateModal:function(){for(var e in this.removeErrors(),this.extension.trim()?/^[a-zA-Z0-9]+$/.test(this.extension)||(this.extensionError=this.t("Extension can only contain alphanumeric characters")):this.extensionError=this.t("Extension is required"),this.type.trim()||(this.typeError=this.t("Type is required")),this.fileTypes){var t=this.fileTypes[e].extensions.map((function(e){return e.ext}));t.includes(this.extension)&&(this.extensionError=this.t("This extension is already defined"))}},save:function(){this.validateModal(),this.extensionError||this.typeError||(this.addExtension({type:this.type,extension:this.extension}),this.closeModal())}},Object(h["b"])(["addExtension","setShowExtensionModal"]))};ie.render=oe;var re=ie,le=Object(h["a"])({state:function(){return{fileTypes:{},showTypeModal:!1,showExtensionModal:!1}},mutations:{setShowTypeModal:function(e,t){e.showTypeModal=t},setShowExtensionModal:function(e,t){e.showExtensionModal=t},setFileTypes:function(e,t){for(var n in t){var o=[];for(var i in t[n].extensions){var r=t[n].extensions[i];o.push({id:r,ext:r})}t[n].extensions=o}e.fileTypes=t},deleteExtension:function(e,t){var n=t.group,o=t.id,i=e.fileTypes[n].extensions,r=[];for(var l in i){var s=i[l];s.id!=o&&r.push(s)}e.fileTypes[n].extensions=r},deleteType:function(e,t){delete e.fileTypes[t]},addType:function(e,t){var n=t.handle,o=t.type;e.fileTypes[n]=o},addExtension:function(e,t){var n=t.type,o=t.extension;e.fileTypes[n].extensions.push({id:o,ext:o})}}}),se=n("b76a"),ae=n.n(se),ce=Object(o["createApp"])({components:{FileTypes:m}});ce.use(le),ce.component("draggable",ae.a),ce.component("type-modal",P),ce.component("extension-modal",re);var de={install:function(e){e.config.globalProperties.t=function(e,t){return window.Craft.t("file-types",e,t)}}};ce.use(de),ce.mount("#content")}});
//# sourceMappingURL=main.js.map