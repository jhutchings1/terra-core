(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{2561:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),l=o(n(894)),i=o(n(940));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var l=p(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(f,e);var t,n,o,a=c(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=a.call(this,e)).state={},t.handleOnChange=t.handleOnChange.bind(s(t)),t}return t=f,(n=[{key:"handleOnChange",value:function(e){this.setState({selectedAnswer:e.currentTarget.value})}},{key:"render",value:function(){return r.default.createElement(i.default,{id:"testing-radio-field",legend:"Which Department do you work for?",help:"Your work falls inline with one of these departments",isInvalid:void 0===this.state.selectedAnswer,error:"One must be selected",isInline:!0,required:!0},r.default.createElement(l.default,{id:"ux-dept",name:"dept",labelText:"UX/Interaction Design",onChange:this.handleOnChange,value:"ux"}),r.default.createElement(l.default,{id:"magazine-dept",name:"dept",labelText:"Magazine Advertisements",onChange:this.handleOnChange,value:"magazine"}),r.default.createElement(l.default,{id:"website-dept",name:"dept",labelText:"Website Advertisements",onChange:this.handleOnChange,value:"website"}),r.default.createElement(l.default,{id:"events-dept",name:"dept",labelText:"Event Promotions",onChange:this.handleOnChange,value:"events"}))}}])&&d(t.prototype,n),o&&d(t,o),f}(r.default.Component);t.default=h},940:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),l=s(n(3)),i=n(8),o=s(n(14)),a=s(n(5)),d=s(n(9)),u=s(n(82)),c=s(n(139)),f=s(n(981));function s(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var _=a.default.bind(f.default),m={children:l.default.node,error:l.default.node,help:l.default.node,hideRequired:l.default.bool,isInline:l.default.bool,isInvalid:l.default.bool,isLegendHidden:l.default.bool,legend:l.default.string.isRequired,legendAttrs:l.default.object,required:l.default.bool,showOptional:l.default.bool},g=function(e){var t=e.children,n=e.error,l=e.help,a=e.hideRequired,f=e.isInvalid,s=e.isInline,m=e.isLegendHidden,g=e.legend,b=e.legendAttrs,y=e.required,v=e.showOptional,O=h(e,["children","error","help","hideRequired","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"]),w=r.default.useContext(d.default),R=(0,o.default)(_("radio-field",{"is-inline":s},w.className),O.className),E=_(["legend",b.className]),x="terra-radio-field-description-".concat((0,u.default)()),q=l?"terra-radio-field-description-help-".concat((0,u.default)()):"",F=n?"terra-radio-field-description-error-".concat((0,u.default)()):"",j="".concat(x," ").concat(F," ").concat(q),C=r.default.createElement("legend",{id:x,className:_(["legend-group",{"legend-group-hidden":m}])},r.default.createElement("div",p({},b,{className:E}),f&&r.default.createElement("span",{className:_("error-icon")}),y&&(f||!a)&&r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-hidden":"true",className:_("required")},"*"),r.default.createElement(i.FormattedMessage,{id:"Terra.form.field.required"},(function(e){return r.default.createElement(c.default,{text:e})}))),g,y&&!f&&a&&r.default.createElement("span",{className:_("required-hidden")},"*"),v&&!y&&r.default.createElement(i.FormattedMessage,{id:"Terra.form.field.optional"},(function(e){return r.default.createElement("span",{className:_("optional")},e)})),!f&&r.default.createElement("span",{className:_("error-icon-hidden")}))),P=r.default.Children.map(t,(function(e){return e&&e.type.isRadio?r.default.cloneElement(e,{inputAttrs:{"aria-describedby":j}}):e}));return r.default.createElement("fieldset",p({},O,{"aria-required":y,required:y,className:R}),C,P,f&&n&&r.default.createElement("div",{id:F,className:_("error-text")},n),l&&r.default.createElement("div",{id:q,className:_("help-text")},l))};g.propTypes=m,g.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};var b=g;t.default=b},981:function(e,t,n){e.exports={"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___UsxqF","orion-fusion-theme":"RadioField-module__orion-fusion-theme___35-W7","radio-field":"RadioField-module__radio-field___1-oF2","is-inline":"RadioField-module__is-inline___uxuYG","legend-group":"RadioField-module__legend-group___PWMMa","legend-group-hidden":"RadioField-module__legend-group-hidden___3ukE_",legend:"RadioField-module__legend___25iPe","error-icon":"RadioField-module__error-icon___9-6Tu","error-icon-hidden":"RadioField-module__error-icon-hidden___25XHU",required:"RadioField-module__required___1JrPY","required-hidden":"RadioField-module__required-hidden___2I4Rp",optional:"RadioField-module__optional___2c2A5","help-text":"RadioField-module__help-text___2xeXL","error-text":"RadioField-module__error-text___3DC8J"}}}]);
//# sourceMappingURL=404-43b3f098de1acd94a316.js.map