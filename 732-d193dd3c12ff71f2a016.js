(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{2762:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n(0)),o=u(n(286));function u(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(l,t);var e,n,u,c=f(l);function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=c.call(this,t)).onChange=e.onChange.bind(s(e)),e.state={searchText:"",callCount:0},e}return e=l,(n=[{key:"onChange",value:function(t,e){var n=e;e&&e.length>0&&/\d/.test(e)&&(n=e.substring(0,e.length-1)),this.setState((function(t){return{searchText:n,callCount:t.callCount+1}}))}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement("p",{id:"searchOnChangeCallCount"},this.state.callCount),r.default.createElement("p",{id:"searchOnChangeText"},this.state.searchText),r.default.createElement(o.default,{id:"searchfield",onChange:this.onChange,value:this.state.searchText}))}}])&&a(e.prototype,n),u&&a(e,u),l}(r.default.Component);e.default=h}}]);
//# sourceMappingURL=732-d193dd3c12ff71f2a016.js.map