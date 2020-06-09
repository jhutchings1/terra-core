(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1055:function(e,r,t){e.exports={"color-bar-example-1":"colors-module__color-bar-example-1___33oPT","color-bar-example-2":"colors-module__color-bar-example-2___3mUZ9","color-bar-example-3":"colors-module__color-bar-example-3___2xZY3","two-colors-bar-2-colors-example-1":"colors-module__two-colors-bar-2-colors-example-1___2VQFl","two-colors-bar-2-colors-example-2":"colors-module__two-colors-bar-2-colors-example-2___DTjK3","two-colors-bar-2-colors-example-3":"colors-module__two-colors-bar-2-colors-example-3___3-C1U","customized-color-bar-example-1":"colors-module__customized-color-bar-example-1___2eaSv","customized-color-bar-example-2":"colors-module__customized-color-bar-example-2___T5N82"}},1110:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var a=t(0),n=t.n(a),o=t(856),l=t.n(o),u=function(e){var r=e.url;return n.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-progress-bar",name:"terra-progress-bar",version:"4.23.0",url:r})}},2170:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=o(t(0)),n=o(t(943));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return a.default.createElement(n.default,{valueText:"15%",value:15})};r.default=l},2171:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=o(t(0)),n=o(t(943));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(){return a.default.createElement("div",null,a.default.createElement(n.default,{heightSize:"tiny",valueText:"15%",value:15}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(n.default,{heightSize:"small",valueText:"30%",value:30}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(n.default,{heightSize:"medium",valueText:"45%",value:45}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(n.default,{heightSize:"large",valueText:"60%",value:60}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(n.default,{heightSize:"huge",valueText:"75%",value:75}))};r.default=l},2172:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=u(t(0)),n=u(t(943)),o=u(t(5)),l=u(t(1055));function u(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(l.default),c=function(){return a.default.createElement("div",null,a.default.createElement(n.default,{valueText:"5%",value:5,max:10,colorClass:s(["color-bar-example-1"])}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(n.default,{valueText:"7.5%",value:7.5,max:10,colorClass:s(["color-bar-example-2"])}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(n.default,{valueText:"10%",value:10,max:10,colorClass:s(["color-bar-example-3"])}))};r.default=c},2173:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=u(t(0)),n=u(t(943)),o=u(t(5)),l=u(t(1055));function u(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(l.default),c=function(){return a.default.createElement("div",null,a.default.createElement(n.default,{valueText:"5%",value:5,max:10,colorClass:s(["two-colors-bar-example-1"])}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(n.default,{valueText:"3%",value:3,max:10,colorClass:s(["two-colors-bar-example-2"])}),a.default.createElement("br",null),a.default.createElement("br",null),a.default.createElement(n.default,{valueText:"8%",value:8,max:10,colorClass:s(["two-colors-bar-example-3"])}))};r.default=c},2896:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return H}));var a=t(0),n=t.n(a),o=t(282),l=t(1110),u=t(2170),s=t.n(u);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d={};function m(e){var r=e.components,t=p(e,["components"]);return Object(o.mdx)("wrapper",c({},d,t,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ProgressBar from 'terra-progress-bar';\n\nconst ProgressBarDefault = () => (\n  <ProgressBar valueText=\"15%\" value={15} />\n);\n\nexport default ProgressBarDefault;\n\n")))}m.isMDXComponent=!0;var i=t(855),f=t.n(i),b=function(e){var r=e.title,t=e.description,a=e.isExpanded;return n.a.createElement(f.a,{title:r||"Progress Bar Default",description:t,example:n.a.createElement(s.a,null),exampleSrc:n.a.createElement(m,null),isExpanded:a})},_=t(2171),g=t.n(_);function x(){return(x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function v(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var h={};function y(e){var r=e.components,t=v(e,["components"]);return Object(o.mdx)("wrapper",x({},h,t,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",x({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport ProgressBar from \'terra-progress-bar\';\n\nconst ProgressBarSize = () => (\n  <div>\n    <ProgressBar heightSize="tiny" valueText="15%" value={15} />\n    <br />\n    <br />\n    <ProgressBar heightSize="small" valueText="30%" value={30} />\n    <br />\n    <br />\n    <ProgressBar heightSize="medium" valueText="45%" value={45} />\n    <br />\n    <br />\n    <ProgressBar heightSize="large" valueText="60%" value={60} />\n    <br />\n    <br />\n    <ProgressBar heightSize="huge" valueText="75%" value={75} />\n  </div>\n);\n\nexport default ProgressBarSize;\n\n')))}y.isMDXComponent=!0;var O=function(e){var r=e.title,t=e.description,a=e.isExpanded;return n.a.createElement(f.a,{title:r||"Progress Bar Size",description:t,example:n.a.createElement(g.a,null),exampleSrc:n.a.createElement(y,null),isExpanded:a})},j=t(2172),P=t.n(j);function T(){return(T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function E(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var w={};function N(e){var r=e.components,t=E(e,["components"]);return Object(o.mdx)("wrapper",T({},w,t,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",T({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ProgressBar from 'terra-progress-bar';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ProgressBarColor = () => (\n  <div>\n    <ProgressBar valueText=\"5%\" value={5} max={10} colorClass={cx(['color-bar-example-1'])} />\n    <br />\n    <br />\n    <ProgressBar valueText=\"7.5%\" value={7.5} max={10} colorClass={cx(['color-bar-example-2'])} />\n    <br />\n    <br />\n    <ProgressBar valueText=\"10%\" value={10} max={10} colorClass={cx(['color-bar-example-3'])} />\n  </div>\n);\n\nexport default ProgressBarColor;\n\n")))}N.isMDXComponent=!0;var C=function(e){var r=e.title,t=e.description,a=e.isExpanded;return n.a.createElement(f.a,{title:r||"Progress Bar Color",description:t,example:n.a.createElement(P.a,null),exampleSrc:n.a.createElement(N,null),isExpanded:a})},B=t(2173),S=t.n(B);function k(){return(k=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function D(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var M={};function z(e){var r=e.components,t=D(e,["components"]);return Object(o.mdx)("wrapper",k({},M,t,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ProgressBar from 'terra-progress-bar';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ProgressBarGradient = () => (\n  <div>\n    <ProgressBar valueText=\"5%\" value={5} max={10} colorClass={cx(['two-colors-bar-example-1'])} />\n    <br />\n    <br />\n    <ProgressBar valueText=\"3%\" value={3} max={10} colorClass={cx(['two-colors-bar-example-2'])} />\n    <br />\n    <br />\n    <ProgressBar valueText=\"8%\" value={8} max={10} colorClass={cx(['two-colors-bar-example-3'])} />\n  </div>\n);\n\nexport default ProgressBarGradient;\n\n")))}z.isMDXComponent=!0;var X=function(e){var r=e.title,t=e.description,a=e.isExpanded;return n.a.createElement(f.a,{title:r||"Progress Bar Two Colors",description:t,example:n.a.createElement(S.a,null),exampleSrc:n.a.createElement(z,null),isExpanded:a})},q=t(858),R=t.n(q);function I(){return(I=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function L(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var V=function(){return Object(o.mdx)(R.a,{rows:[{name:"heightSize",type:function(){var e={};function r(r){var t=r.components,a=L(r,["components"]);return Object(o.mdx)("wrapper",I({},e,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",I({parentName:"pre"},{className:"language-json"}),'[\n "tiny",\n "small",\n "medium",\n "large",\n "huge"\n]\n')))}return r.isMDXComponent=!0,r({})},required:!1,defaultValue:"'small'",description:function(){var e={};function r(r){var t=r.components,a=L(r,["components"]);return Object(o.mdx)("wrapper",I({},e,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the size of the progress-bar from the following values; ",Object(o.mdx)("inlineCode",{parentName:"p"},"tiny"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"small"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"medium"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"large")," and ",Object(o.mdx)("inlineCode",{parentName:"p"},"huge")))}return r.isMDXComponent=!0,r({})}},{name:"value",type:function(){var e={};function r(r){var t=r.components,a=L(r,["components"]);return Object(o.mdx)("wrapper",I({},e,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return r.isMDXComponent=!0,r({})},required:!0,defaultValue:"none",description:function(){var e={};function r(r){var t=r.components,a=L(r,["components"]);return Object(o.mdx)("wrapper",I({},e,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the fill-value of the progress bar with respect to the ",Object(o.mdx)("inlineCode",{parentName:"p"},"max")," prop."))}return r.isMDXComponent=!0,r({})}},{name:"max",type:function(){var e={};function r(r){var t=r.components,a=L(r,["components"]);return Object(o.mdx)("wrapper",I({},e,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return r.isMDXComponent=!0,r({})},required:!1,defaultValue:"100",description:function(){var e={};function r(r){var t=r.components,a=L(r,["components"]);return Object(o.mdx)("wrapper",I({},e,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the maximum possible fill-value."))}return r.isMDXComponent=!0,r({})}},{name:"valueText",type:function(){var e={};function r(r){var t=r.components,a=L(r,["components"]);return Object(o.mdx)("wrapper",I({},e,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return r.isMDXComponent=!0,r({})},required:!1,defaultValue:"undefined",description:function(){var e={};function r(r){var t=r.components,a=L(r,["components"]);return Object(o.mdx)("wrapper",I({},e,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Value passed to aria-valuetext for accessibility. You can view more about this attribute\nat ",Object(o.mdx)("a",I({parentName:"p"},{href:"https://www.w3.org/WAI/PF/aria/states_and_properties#aria-valuetext"}),"https://www.w3.org/WAI/PF/aria/states_and_properties#aria-valuetext"),"."))}return r.isMDXComponent=!0,r({})}},{name:"colorClass",type:function(){var e={};function r(r){var t=r.components,a=L(r,["components"]);return Object(o.mdx)("wrapper",I({},e,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return r.isMDXComponent=!0,r({})},required:!1,defaultValue:"'default-color'",description:function(){var e={};function r(r){var t=r.components,a=L(r,["components"]);return Object(o.mdx)("wrapper",I({},e,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets an author defined class, to control the colors of the progress bar and override the base color styles."),Object(o.mdx)("p",null,Object(o.mdx)("img",I({parentName:"p"},{src:"https://badgen.net/badge//IMPORTANT/blue?icon=github",alt:"IMPORTANT"})),"\nAdding ",Object(o.mdx)("inlineCode",{parentName:"p"},"var(--my-app...")," CSS variables is required for proper re-themeability when creating custom color styles ",Object(o.mdx)("em",{parentName:"p"},"(see included examples)"),"."))}return r.isMDXComponent=!0,r({})}}]})};function A(){return(A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function U(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var F={};function H(e){var r=e.components,t=U(e,["components"]);return Object(o.mdx)("wrapper",A({},F,t,{components:r,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-progress-bar"},"Terra Progress Bar"),Object(o.mdx)("p",null,"The progress bar component provides users a way to display the progress of process or activity in a graphical manner. It can be modified\nin height and fill color. Its styling is set such that, the ",Object(o.mdx)("inlineCode",{parentName:"p"},"ProgressBar")," element will occupy full width of its parent element and will\nflex based on the width of the parent container."),Object(o.mdx)("p",null,"Note: The progress bar displays fill with respect to percentage (value between 0 and 100). If ",Object(o.mdx)("inlineCode",{parentName:"p"},"max")," isn't specified in the input to the component, then ",Object(o.mdx)("inlineCode",{parentName:"p"},"value")," corresponds to a percentage value."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",A({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-progress-bar"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",A({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",A({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",A({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",A({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",A({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",A({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",A({parentName:"pre"},{className:"language-jsx"}),"import ProgressBar from 'terra-progress-bar';\n")),Object(o.mdx)("h3",{id:"color-class"},"Color Class"),Object(o.mdx)("pre",null,Object(o.mdx)("code",A({parentName:"pre"},{className:"language-css"}),":root {\n  --my-app-progress-bar-example-1-background-color: rgb(255, 165, 0);\n  --my-app-progress-bar-example-2-background-color: #8ccc62;\n  --my-app-progress-bar-example-3-background-color: rgb(255, 0, 0);\n}\n\n:local {\n  .color-bar-example-1 {\n    color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0));\n    &::-webkit-progress-value { background-color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0)); }\n    &::-moz-progress-bar { background-color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0)); }\n    &::-ms-fill { background-color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0)); }\n  }\n\n  .color-bar-example-2 {\n    color: var(--my-app-progress-bar-example-2-background-color, #8ccc62);\n    &::-webkit-progress-value { background-color: var(--my-app-progress-bar-example-2-background-color, #8ccc62); }\n    &::-moz-progress-bar { background-color: var(--my-app-progress-bar-example-2-background-color, #8ccc62); }\n    &::-ms-fill { background-color: var(--my-app-progress-bar-example-2-background-color, #8ccc62); }\n  }\n\n  .color-bar-example-3 {\n    color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0));\n    &::-webkit-progress-value { background-color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0)); }\n    &::-moz-progress-bar { background-color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0)); }\n    &::-ms-fill { background-color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0)); }\n  }\n}\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",A({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",A({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",A({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(b,{title:"Default",mdxType:"ProgressBarDefault"}),Object(o.mdx)(O,{title:"Size",mdxType:"ProgressBarSize"}),Object(o.mdx)(C,{title:"Color",description:"By passing in a colorClass, authors can manually set the bar color of any `<ProgressBar />` component.",mdxType:"ProgressBarColor"}),Object(o.mdx)(X,{title:"Foreground and Background Color",description:"By passing in a colorClass, authors can manually set the bar color of any `<ProgressBar />` component.",mdxType:"ProgressBarTwoColors"}),Object(o.mdx)("h2",{id:"progress-bar-props"},"Progress Bar Props"),Object(o.mdx)(V,{mdxType:"ProgressBarPropsTable"}))}H.isMDXComponent=!0},855:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=u(t(0)),n=u(t(3)),o=u(t(5)),l=u(t(859));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,r,t){return r&&c(e.prototype,r),t&&c(e,t),e}function d(e,r){return(d=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function m(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=b(e);if(r){var n=b(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return i(this,t)}}function i(e,r){return!r||"object"!==s(r)&&"function"!=typeof r?f(e):r}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=o.default.bind(l.default),g={example:n.default.element,exampleSrc:n.default.element,title:n.default.string,description:n.default.node,isExpanded:n.default.bool},x=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&d(e,r)}(t,e);var r=m(t);function t(e){var a;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),(a=r.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(f(a)),a.handleCodeToggle=a.handleCodeToggle.bind(f(a)),a}return p(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:_("header")},a.default.createElement("h2",{className:_("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:_("description")},e):null}}]),p(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,r=e.example,n=e.exampleSrc,o=e.title,l=e.description,u=this.state,s=u.isExpanded,c=u.isBackgroundTransparent;return a.default.createElement("div",{className:_("template")},t.renderHeader(o),a.default.createElement("div",{className:_("content",{"dynamic-content":c})},t.renderDescription(l),r),n&&a.default.createElement("div",{className:_("footer")},a.default.createElement("div",{className:_("button-container")},a.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:_("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:_("chevron-right")}))),s&&a.default.createElement("div",{className:_("code")},n)))}}]),t}(a.default.Component);x.propTypes=g,x.defaultProps={isExpanded:!1};var v=x;r.default=v},856:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=u(t(0)),n=u(t(3)),o=u(t(5)),l=u(t(857));function u(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(l.default),c={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},p=function(e){var r=e.src,t=e.name,n=e.url,o=e.version,l=a.default.createElement("a",{className:s("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:s("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:s("badge-version")},"v".concat(o))),u=r?a.default.createElement("a",{className:s("badge"),href:r},a.default.createElement("span",{className:s("badge-name")},"github"),a.default.createElement("span",{className:s("badge-version")},"source")):void 0;return a.default.createElement("div",{className:s("badge-container")},l,u)};p.propTypes=c;var d=p;r.default=d},857:function(e,r,t){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},858:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=u(t(0)),n=u(t(3)),o=u(t(5)),l=u(t(860));function u(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(l.default),c={rows:n.default.arrayOf(n.default.shape({name:n.default.string,type:n.default.func,required:n.default.bool,defaultValue:n.default.string,description:n.default.func}))},p=function(e){var r=e.rows;return a.default.createElement("table",{className:s("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:s("tr")},a.default.createElement("th",{className:s("th")},"Prop Name"),a.default.createElement("th",{className:s("th")},"Type"),a.default.createElement("th",{className:s("th")},"Is Required"),a.default.createElement("th",{className:s("th")},"Default Value"),a.default.createElement("th",{className:s("th")},"Description"))),a.default.createElement("tbody",null,r.map((function(e){return a.default.createElement("tr",{className:s(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:s(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:s(["td","props-td"])},e.type()),a.default.createElement("td",{className:s(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:s(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:s(["td","props-td"])},e.description()))}))))};p.propTypes=c;var d=p;r.default=d},859:function(e,r,t){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},860:function(e,r,t){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},943:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ProgressBarHeightSize=r.default=void 0;var a=c(t(0)),n=c(t(3)),o=c(t(14)),l=c(t(5)),u=c(t(9)),s=c(t(987));function c(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=l.default.bind(s.default);r.ProgressBarHeightSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var i={heightSize:n.default.oneOf(["tiny","small","medium","large","huge"]),value:n.default.number.isRequired,max:n.default.number,valueText:n.default.string,colorClass:n.default.string},f={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},b=function(e){var r=e.heightSize,t=e.value,n=e.max,l=e.valueText,s=e.colorClass,c=d(e,["heightSize","value","max","valueText","colorClass"]),i=a.default.useContext(u.default),f=(0,o.default)(m("progress-bar",r,s,i.className),c.className),b=t/n*100;return a.default.createElement("progress",p({},c,{className:f,max:100,value:b,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":b,"aria-valuetext":l,tabIndex:"-1"}))};b.propTypes=i,b.defaultProps=f;var _=b;r.default=_},987:function(e,r,t){e.exports={"clinical-lowlight-theme":"ProgressBar-module__clinical-lowlight-theme___qLQPu","orion-fusion-theme":"ProgressBar-module__orion-fusion-theme___2n2Bw","progress-bar":"ProgressBar-module__progress-bar___RnSdv","default-color":"ProgressBar-module__default-color___2k9lZ",tiny:"ProgressBar-module__tiny___2O6Dl",small:"ProgressBar-module__small___2452Z",medium:"ProgressBar-module__medium___3VPS8",large:"ProgressBar-module__large___1Dd94",huge:"ProgressBar-module__huge___3_Syb"}}}]);
//# sourceMappingURL=83-b16ede136115520111bf.js.map