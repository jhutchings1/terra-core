(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1136:function(e,t,a){e.exports={"clinical-lowlight-theme":"DemographicsBanner-module__clinical-lowlight-theme___3Pxzl","orion-fusion-theme":"DemographicsBanner-module__orion-fusion-theme___hQZqq","demographics-banner":"DemographicsBanner-module__demographics-banner___25HQW","profile-photo":"DemographicsBanner-module__profile-photo___1Px_m",value:"DemographicsBanner-module__value___nKrr0","value-text":"DemographicsBanner-module__value-text___xM0Lf","value-label":"DemographicsBanner-module__value-label___xeVI3","person-name":"DemographicsBanner-module__person-name___2NtnX",identifiers:"DemographicsBanner-module__identifiers___3TyN9","person-details":"DemographicsBanner-module__person-details___3Gh5Z","preferred-first-name":"DemographicsBanner-module__preferred-first-name___3i69_",deceased:"DemographicsBanner-module__deceased___yZ9hb",abbreviation:"DemographicsBanner-module__abbreviation___2ME-P",row:"DemographicsBanner-module__row___LRY4o",content:"DemographicsBanner-module__content___376Js","application-content":"DemographicsBanner-module__application-content___QP1ii","large-demographics-banner":"DemographicsBanner-module__large-demographics-banner___suzHO"}},1239:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(5)),r=o(a(0)),l=o(a(139)),i=o(a(1136));function o(e){return e&&e.__esModule?e:{default:e}}var s=n.default.bind(i.default),u=function(e){var t,a=e.label,n=e.value,i=e.abbrTitle;return a&&i?t=r.default.createElement("span",{className:s("value-label")},r.default.createElement("abbr",{className:s("abbreviation"),title:i,"aria-hidden":"true"},"".concat(a,":"))):a&&(t=r.default.createElement("span",{className:s("value-label")},"".concat(a,":"))),r.default.createElement("span",{className:s("value")},i&&r.default.createElement(l.default,{text:i}),t,r.default.createElement("span",{className:s("value-text")},n))},d={personDetails:function(e){var t=[r.default.createElement(u,{key:"age",value:e.age}),r.default.createElement(u,{key:"gender",value:e.gender}),r.default.createElement(u,{key:"dob",abbrTitle:e.dateOfBirthFullText,label:e.dateOfBirthLabel,value:e.dateOfBirth})];return e.gestationalAge&&t.push(r.default.createElement(u,{key:"ga",abbrTitle:e.gestationalAgeFullText,label:e.gestationalAgeLabel,value:e.gestationalAge})),e.postMenstrualAge&&t.push(r.default.createElement(u,{key:"pma",abbrTitle:e.postMenstrualAgeFullText,label:e.postMenstrualAgeLabel,value:e.postMenstrualAge})),e.deceasedDate&&t.push(r.default.createElement(u,{key:"deceased",label:e.deceasedDateLabel,value:e.deceasedDate})),t},applicationIdentifiers:function(e){var t=e.identifiers;return t?Object.keys(t).map((function(e){return r.default.createElement(u,{key:"identifier-".concat(e),label:e,value:t[e]})})):null}};t.default=d},1654:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),r=s(a(3)),l=s(a(878));a(1136);var i=s(a(1655)),o=s(a(1656));function s(e){return e&&e.__esModule?e:{default:e}}var u={applicationContent:r.default.node,age:r.default.string,dateOfBirth:r.default.string,dateOfBirthLabel:r.default.string,dateOfBirthFullText:r.default.string,deceasedDate:r.default.string,deceasedDateLabel:r.default.string,gender:r.default.string,gestationalAge:r.default.string,gestationalAgeLabel:r.default.string,gestationalAgeFullText:r.default.string,identifiers:r.default.object,personName:r.default.string,photo:r.default.node,postMenstrualAge:r.default.string,postMenstrualAgeLabel:r.default.string,postMenstrualAgeFullText:r.default.string,preferredFirstName:r.default.string},d=function(e){return n.default.createElement(l.default,{tiny:n.default.createElement(i.default,e),small:n.default.createElement(o.default,e)})};d.propTypes=u,d.defaultProps={applicationContent:null,age:"--",dateOfBirth:"--",dateOfBirthLabel:"DOB",dateOfBirthFullText:"Date of Birth",deceasedDate:null,deceasedDateLabel:"Deceased",gender:"--",gestationalAge:null,gestationalAgeLabel:"GA",gestationalAgeFullText:"Gestational Age",identifiers:{},personName:"--",photo:null,postMenstrualAge:null,postMenstrualAgeLabel:"PMA",postMenstrualAgeFullText:"Post Menstrual Age",preferredFirstName:null};var f=d;t.default=f},1655:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(0)),r=u(a(14)),l=u(a(5)),i=u(a(9)),o=u(a(1136)),s=u(a(1239));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=l.default.bind(o.default);t.default=function(e){e.age;var t=e.applicationContent,a=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),l=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.personName),o=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),u=f(e,["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","personName","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"]),p=n.default.useContext(i.default),g=(0,r.default)(c("demographics-banner",{deceased:a},p.className),u.className);return delete u.className,n.default.createElement("section",d({className:g},u),n.default.createElement("h1",{className:c("person-name")},n.default.createElement("span",null,l,o&&n.default.createElement("span",{className:c("preferred-first-name")},o))),n.default.createElement("div",{className:c("person-details")},s.default.personDetails(e),s.default.applicationIdentifiers(e)),n.default.createElement("div",{className:c("application-content")},t))}},1656:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(0)),r=u(a(14)),l=u(a(5)),i=u(a(9)),o=u(a(1136)),s=u(a(1239));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=l.default.bind(o.default);t.default=function(e){e.age;var t=e.applicationContent,a=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),l=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.personName),o=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),u=f(e,["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","personName","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"]),p=n.default.useContext(i.default),g=(0,r.default)(c("demographics-banner","large-demographics-banner",{deceased:a},p.className),u.className);return delete u.className,n.default.createElement("section",d({className:g},u),e.photo&&n.default.createElement("div",{className:c("profile-photo")},e.photo),n.default.createElement("div",{className:c("content")},n.default.createElement("div",{className:c("row")},n.default.createElement("h1",{className:c("person-name")},l,o&&n.default.createElement("span",{className:c("preferred-first-name")},o)),n.default.createElement("div",{className:c("application-content")},t)),n.default.createElement("div",{className:c("row")},n.default.createElement("div",{className:c("person-details")},s.default.personDetails(e)),n.default.createElement("div",{className:c("identifiers")},s.default.applicationIdentifiers(e)))))}},878:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var n=s(a(0)),r=s(a(3)),l=s(a(141)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=n?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(191));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m(e);if(t){var r=m(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return p(this,a)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var h={children:r.default.node,onChange:r.default.func,onResize:r.default.func,tiny:r.default.element,small:r.default.element,medium:r.default.element,large:r.default.element,huge:r.default.element,enormous:r.default.element,responsiveTo:r.default.oneOf(["window","parent"])},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(s,e);var t,a,r,o=c(s);function s(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(e=o.call(this)).state={element:null},e.setContainer=e.setContainer.bind(g(e)),e.handleResize=e.handleResize.bind(g(e)),e.handleWindowResize=e.handleWindowResize.bind(g(e)),e.animationFrameID=null,e}return t=s,(a=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new l.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"handleResize",value:function(e){var t=this.props,a=t.onChange,n=t.onResize,r=t.tiny,l=t.small,o=t.medium,s=t.large,u=t.huge,d=t.enormous;n&&n(e);var f,c=(0,i.activeBreakpointForSize)(e);a&&c!==this.breakpoint&&a(c),this.breakpoint=c,(r||l||o||s||u||d)&&(f=e>=i.default.enormous&&d?"enormous":e>=i.default.huge&&u?"huge":e>=i.default.large&&s?"large":e>=i.default.medium&&o?"medium":e>=i.default.small&&l?"small":"tiny",this.state.element!==f&&this.setState({element:f}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:n.default.createElement(n.default.Fragment,null,"parent"===a&&!this.container&&n.default.createElement("div",{ref:this.setContainer}),t)}}])&&d(t.prototype,a),r&&d(t,r),s}(n.default.Component);b.propTypes=h,b.defaultProps={responsiveTo:"parent"};var v=b;t.default=v},936:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(0)),r=o(a(3)),l=a(8),i=o(a(1654));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d={applicationContent:r.default.node,age:r.default.string,dateOfBirth:r.default.string,deceasedDate:r.default.string,gender:r.default.string,gestationalAge:r.default.string,identifiers:r.default.object,intl:l.intlShape.isRequired,personName:r.default.string,photo:r.default.node,postMenstrualAge:r.default.string,preferredFirstName:r.default.string},f={applicationContent:null,age:void 0,dateOfBirth:void 0,deceasedDate:null,gender:void 0,gestationalAge:null,identifiers:{},personName:void 0,photo:null,postMenstrualAge:null,preferredFirstName:null},c=function(e){var t=e.age,a=e.dateOfBirth,r=e.gender,l=e.intl,o=e.personName,d=u(e,["age","dateOfBirth","gender","intl","personName"]),f=l.formatMessage({id:"Terra.demographicsBanner.noDataProvided"});return n.default.createElement(i.default,s({},d,{age:t||f,dateOfBirth:a||f,gender:r||f,personName:o||f,dateOfBirthLabel:l.formatMessage({id:"Terra.demographicsBanner.dateOfBirth"}),dateOfBirthFullText:l.formatMessage({id:"Terra.demographicsBanner.dateOfBirthFullText"}),deceasedDateLabel:l.formatMessage({id:"Terra.demographicsBanner.deceased"}),gestationalAgeLabel:l.formatMessage({id:"Terra.demographicsBanner.gestationalAge"}),gestationalAgeFullText:l.formatMessage({id:"Terra.demographicsBanner.gestationalAgeFullText"}),postMenstrualAgeLabel:l.formatMessage({id:"Terra.demographicsBanner.postMenstrualAge"}),postMenstrualAgeFullText:l.formatMessage({id:"Terra.demographicsBanner.postMenstrualAgeFullText"})}))};c.propTypes=d,c.defaultProps=f;var p=(0,l.injectIntl)(c);t.default=p}}]);
//# sourceMappingURL=13-c004f13ea6c9c78c1bf5.js.map