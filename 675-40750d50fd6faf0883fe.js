(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{2473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(910));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(f,e);var t,n,l,u=a(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=u.call(this,e)).state={selectedKey:"1"},t.handleSelection=t.handleSelection.bind(s(t)),t}return t=f,(n=[{key:"handleSelection",value:function(e,t){r.default.Utils.shouldHandleSingleSelection(this.state.selectedKey,t)&&(e.preventDefault(),this.setState({selectedKey:t}))}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("h3",null,"Selected Button:"," ",o.default.createElement("span",{id:"selected-key"},this.state.selectedKey)),o.default.createElement(r.default,{id:"button-group-single-select",onChange:this.handleSelection,selectedKeys:[this.state.selectedKey]},o.default.createElement(r.default.Button,{text:"Single-Select 1",key:"1"}),o.default.createElement(r.default.Button,{text:"Single-Select 2",key:"2"}),o.default.createElement(r.default.Button,{text:"Single-Select 3",key:"3"}),o.default.createElement(r.default.Button,{text:"Single-Select 4",key:"4"})))}}])&&c(t.prototype,n),l&&c(t,l),f}(o.default.Component);t.default=y}}]);
//# sourceMappingURL=675-40750d50fd6faf0883fe.js.map