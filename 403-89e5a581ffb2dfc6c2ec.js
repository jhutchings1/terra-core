(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{2553:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(l(0)),r=i(l(5)),n=i(l(969)),d=i(l(874));function i(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(d.default),o=function(){return a.default.createElement("div",{className:u("content-wrapper")},a.default.createElement(n.default,{inputId:"test-input",defaultValue:"Value",error:"Text",help:"Help",hideRequired:!0,inputAttrs:{name:"test",type:"text"},label:"Label Text",labelAttrs:{className:"label"},showOptional:!0,maxWidth:"40%"}))};t.default=o},874:function(e,t,l){e.exports={"content-wrapper":"Input-test-module__content-wrapper___dsRQD"}},969:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(l(0)),r=u(l(3)),n=u(l(283)),d=u(l(294)),i=u(l(285));function u(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var f={inputId:r.default.string.isRequired,label:r.default.string.isRequired,defaultValue:r.default.oneOfType([r.default.string,r.default.number]),disabled:r.default.bool,error:r.default.node,errorIcon:r.default.element,help:r.default.node,hideRequired:r.default.bool,inputAttrs:r.default.object,isIncomplete:r.default.bool,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,labelAttrs:r.default.object,maxWidth:r.default.string,onChange:r.default.func,placeholder:r.default.string,refCallback:r.default.func,required:r.default.bool,showOptional:r.default.bool,type:r.default.string,value:r.default.oneOfType([r.default.string,r.default.number])},p={defaultValue:void 0,disabled:!1,error:null,errorIcon:a.default.createElement(d.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,placeholder:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},c=function(e){var t,l=e.defaultValue,r=e.disabled,d=e.error,u=e.errorIcon,f=e.help,p=e.hideRequired,c=e.inputAttrs,b=e.inputId,h=e.isIncomplete,v=e.isInline,m=e.isInvalid,I=e.isLabelHidden,y=e.label,O=e.labelAttrs,g=e.maxWidth,w=e.onChange,q=e.placeholder,_=e.refCallback,x=e.required,A=e.showOptional,j=e.type,C=e.value,R=s(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","placeholder","refCallback","required","showOptional","type","value"]);f&&d&&m?t="".concat(b,"-error ").concat(b,"-help"):(f&&(t="".concat(b,"-help")),d&&m&&(t="".concat(b,"-error")));var k=j||c.type;return a.default.createElement(n.default,o({label:y,labelAttrs:O,error:d,errorIcon:u,help:f,hideRequired:p,required:x,showOptional:A,isInvalid:m,isInline:v,isLabelHidden:I,htmlFor:b,maxWidth:g},R),a.default.createElement(i.default,o({},c,{disabled:c.disabled||r,id:b,isIncomplete:h,type:k,onChange:w,placeholder:q||c.placeholder,value:C,defaultValue:l,refCallback:_,"aria-describedby":t})))};c.propTypes=f,c.defaultProps=p;var b=c;t.default=b}}]);
//# sourceMappingURL=403-89e5a581ffb2dfc6c2ec.js.map