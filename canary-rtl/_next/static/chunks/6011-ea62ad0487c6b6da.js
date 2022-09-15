"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6011],{6312:function(e,t,r){var n=r(7462),o=r(7294),a=r(682),i=r(5393),c=r(5697),l=r.n(c),u=r(9033),s=i.Z.stablePrefix,f=u.Z.prefix,p=function(e){var t=e.buttons,r=(0,o.useRef)(null);return(0,o.useEffect)((function(){r.current&&r.current.style.setProperty("--".concat(s,"--button-group--item-count"),String(t.length))}),[t]),o.createElement("ol",{className:"".concat(f,"--buttongroup"),"data-autoid":"".concat(s,"--button-group"),ref:r},t.map((function(e,r){return o.createElement("li",{key:r,className:"".concat(f,"--buttongroup-item")},o.createElement(a.Z,(0,n.Z)({"data-autoid":"".concat(s,"--button-group-").concat(r),isExpressive:!0},e,{type:"button",kind:r===t.length-1?"primary":"tertiary"}),e.copy))})))};p.propTypes={buttons:l().arrayOf(l().shape({copy:l().string,href:l().string,onClick:l().func,renderIcon:l().elementType})).isRequired},t.Z=p},7251:function(e,t,r){r.d(t,{Z:function(){return U}});var n=r(4942),o=r(7685),a=r(5987),i=r(7294),c=r(6312),l=r(9124),u=r(5697),s=r.n(u),f=["type","openLightBox","renderLightBox","videoTitle","formatCTAcopy"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.type,r=e.openLightBox,n=e.renderLightBox,u=e.videoTitle,s=e.formatCTAcopy,p=(0,a.Z)(e,f),y=(0,i.useState)({}),g=(0,o.Z)(y,2),m=g[0],v=g[1];return t.includes("video")?i.createElement("div",null,l.Z.launchLightBox(n,r,m),!n&&i.createElement(c.Z,{buttons:h(d({videoTitle:u,openLightBox:r,setMediaData:v,formatCTAcopy:s},p))})):i.createElement(c.Z,{buttons:h(d({},p))})},h=function(e){var t=e.openLightBox,r=e.videoTitle,n=e.setMediaData,o=e.formatCTAcopy;return e.buttons.map((function(e,a){if("video"===e.type){e.onClick=function(r){return r.preventDefault(),n(e.media),l.Z.setLightBox(r,t)};var i=r.filter((function(e){return e.key===a}));e.copy=i[0]?o({title:(null===e||void 0===e?void 0:e.media.title)||i[0].title,duration:i[0].duration}):e.copy,e.href="#"}else e.onClick=e.onClick||function(t){return l.Z.jump(t,e.type)},e.target=l.Z.external(e.type);return e.renderIcon=l.Z.iconSelector(e.type),e.iconDescription=g(e.type),e}))},g=function(e){switch(e){case"external":return"external launch icon";case"jump":return"down arrow icon";case"video":return"play button icon";default:return"right arrow icon"}};y.propTypes={type:s().oneOfType([s().oneOf(["jump","local","external","download","video","default"]),s().arrayOf(s().oneOf(["jump","local","external","download","video","default"]))]),buttons:s().arrayOf(s().shape({type:s().oneOf(["local","external","jump","video"]),copy:s().string,href:s().string,mediaData:s().shape({customClassName:s().string,videoId:s().string.isRequired,showCaption:s().bool,inverse:s().bool})})).isRequired,openLightBox:s().func,renderLightBox:s().bool,videoTitle:s().arrayOf(s().shape({title:s().string,duration:s().string,key:s().oneOfType([s().number,s().string])})),setMediaData:s().func,formatCTAcopy:s().func},y.defaultProps={type:"default",formatCTAcopy:function(e){var t=e.title,r=e.duration;return"".concat(t," ").concat(r)}};var m=y,v=r(4814),b=r(1374),O=r(9033),w=["type","openLightBox","renderLightBox","videoTitle","disableImage"],x=["style"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=function(e){return i.createElement("svg",e,i.createElement("title",null,"Group 3"),i.createElement("g",{fill:"none",fillRule:"evenodd"},i.createElement("circle",{fillOpacity:".9",fill:"#525252",cx:"32",cy:"32",r:"32"}),i.createElement("path",{d:"M26.556 43.111a1 1 0 0 1-1-1v-22a1 1 0 0 1 1.5-.87l19 11a1 1 0 0 1 0 1.74l-19 11a1 1 0 0 1-.5.13z",fill:"#F3F3F3",fillRule:"nonzero"})))};Z.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"};var P=O.Z.prefix,L=function(e){var t=e.type,r=e.openLightBox,n=e.renderLightBox,c=e.videoTitle,u=e.disableImage,s=(0,a.Z)(e,w),f=(s.style,(0,a.Z)(s,x)),p=(0,i.useState)(3),d=(0,o.Z)(p,2),y=d[0],h=d[1],g=(0,i.useCallback)((function(e){null!==e&&void 0!==e&&e.parentElement&&h(e.parentElement.offsetWidth)}),[]);if("video"===t){var m,O,E;if(!u)O=j(j({},O=f.image?f.image:{defaultSrc:b.Z.getThumbnailUrl({mediaId:null===(E=f.media)||void 0===E?void 0:E.src,width:y}),alt:c[0].title}),{},{icon:Z,refImage:g});return i.createElement(i.Fragment,null,l.Z.launchLightBox(n,r,s.media),!n&&i.createElement(v.Z,{customClassName:"".concat(P,"--card__CardCTA ").concat(P,"--card__video"),card:j(j({},f),{},{cta:{href:"#",icon:{src:l.Z.iconSelector(t)},iconPlacement:"left",copy:null===(m=c[0].duration)||void 0===m?void 0:m.replace(/\(|\)/g,""),handleClick:function(e){return l.Z.setLightBox(e,r)}},image:O,heading:c[0].title})}))}return i.createElement(v.Z,{customClassName:"".concat(P,"--card__CardCTA"),card:j(j({},f),{},{cta:{type:t,href:s.cta.href,icon:{src:l.Z.iconSelector(t)}},copy:s.copy,target:l.Z.external(t),href:s.cta.href})})};L.propTypes={type:s().oneOfType([s().oneOf(["jump","local","external","download","video","default"]),s().arrayOf(s().oneOf(["jump","local","external","download","video","default"]))]),disableImage:s().bool,openLightBox:s().func,renderLightBox:s().bool,videoTitle:s().arrayOf(s().shape({title:s().string,duration:s().string,key:s().oneOfType([s().number,s().string])}))},L.defaultProps={type:"default",copy:"",cta:null,disableImage:!1,media:null};var _=L,T=r(3906),C=["size","type","openLightBox","renderLightBox","videoTitle","formatCTAcopy"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.size,r=e.type,n=e.openLightBox,o=e.renderLightBox,c=e.videoTitle,u=e.formatCTAcopy,s=(0,a.Z)(e,C);return"video"===r?i.createElement("div",null,l.Z.launchLightBox(o,n,s.card.cta.media),!o&&i.createElement(T.Z,{card:D({card:B(B({},s.card),{},{heading:u({title:c[0].title,duration:c[0].duration})})}),size:t,onClick:function(e){return l.Z.setLightBox(e,n)}})):i.createElement(T.Z,{card:D({card:B({},s.card)}),size:t})},D=function(e){var t=e.card;return"jump"===t.type?t.cta.type="jump":"video"===t.type&&(t.cta.href="#"),t.cta=B(B({},t.cta),{},{icon:{src:l.Z.iconSelector(t.cta.type)}}),t.type="link",t};N.propTypes={size:s().oneOf(["medium","large"]),type:s().oneOfType([s().oneOf(["jump","local","external","download","video","default"]),s().arrayOf(s().oneOf(["jump","local","external","download","video","default"]))]),openLightBox:s().func,renderLightBox:s().bool,videoTitle:s().arrayOf(s().shape({title:s().string,duration:s().string,key:s().oneOfType([s().number,s().string])})),formatCTAcopy:s().func},N.defaultProps={type:"default",formatCTAcopy:function(e){var t=e.title,r=e.duration;return"".concat(t," ").concat(r)}};var S=N,A=r(7462),R=r(8203),I=["type","openLightBox","renderLightBox","videoTitle","formatCTAcopy","iconPlacement"],z=function(e){var t,r=e.type,n=e.openLightBox,o=e.renderLightBox,c=e.videoTitle,u=e.formatCTAcopy,s=e.iconPlacement,f=(0,a.Z)(e,I),p=l.Z.iconSelector(r,s),d="video"!==r?f.href?f.href:null===(t=f.cta)||void 0===t?void 0:t.href:null;return"video"===r?i.createElement(i.Fragment,null,l.Z.launchLightBox(o,n,f.media),!o&&i.createElement(R.Z,(0,A.Z)({href:"#",onClick:function(e){return l.Z.setLightBox(e,n)},iconInline:f.iconInline},s&&{iconPlacement:s}),i.createElement("span",null,u({title:c[0].title,duration:c[0].duration})),i.createElement(p,null))):i.createElement(R.Z,(0,A.Z)({href:d,target:l.Z.external(r),onClick:function(e){return l.Z.jump(e,r)},iconInline:f.iconInline},s&&{iconPlacement:s}),i.createElement("span",null,f.copy),"default"!==r&&i.createElement(p,null))};z.propTypes={type:s().oneOfType([s().oneOf(["jump","local","external","download","video","default"]),s().arrayOf(s().oneOf(["jump","local","external","download","video","default"]))]),iconPlacement:s().oneOf(["left","right"]),openLightBox:s().func,renderLightBox:s().bool,videoTitle:s().arrayOf(s().shape({title:s().string,duration:s().string,key:s().oneOfType([s().number,s().string])})),formatCTAcopy:s().func},z.defaultProps={type:"default",formatCTAcopy:function(e){var t=e.title,r=e.duration;return"".concat(t," ").concat(r)},iconPlacement:"right"};var F=z,q=r(1002),G=r(5861);function M(){M=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return Z()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=l;var s={};function f(){}function p(){}function d(){}var y={};c(y,o,(function(){return this}));var h=Object.getPrototypeOf,g=h&&h(h(j([])));g&&g!==t&&r.call(g,o)&&(y=g);var m=d.prototype=f.prototype=Object.create(y);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function n(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==(0,q.Z)(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function O(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return p.prototype=d,c(m,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},v(b.prototype),c(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},v(m),c(m,i,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var V=function(e,t,r){var n,a=(0,i.useState)([{title:"",duration:"",key:0}]),c=(0,o.Z)(a,2),l=c[0],u=c[1];return(0,i.useEffect)((function(){n()}),[n,e,r]),n=(0,i.useCallback)((0,G.Z)(M().mark((function n(){var o;return M().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("video"!==e&&!e.includes("video")){n.next=5;break}return n.next=3,Promise.all(t.map(function(){var e=(0,G.Z)(M().mark((function e(t){var n,o;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.Z.api(t.src);case 2:return n=e.sent,o=b.Z.getMediaDuration(n.msDuration,!0),e.abrupt("return",{title:r||n.name,duration:o,key:t.key});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:o=n.sent,u(o);case 5:case"end":return n.stop()}}),n)}))),[e,t,r]),l},H=["style","type","size","customClassName"];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Y=function(e){var t,r,c=e.style,u=e.type,s=e.size,f=e.customClassName,p=(0,a.Z)(e,H),d=(0,i.useState)(!1),y=(0,o.Z)(d,2),h=y[0],g=y[1],v="feature"===c?null===p||void 0===p||null===(t=p.card)||void 0===t||null===(r=t.cta)||void 0===r?void 0:r.media:p.media,b=u&&("video"===u||u.includes("video"))?l.Z.getVideoId(c,p):[],O=V(u,b,null===v||void 0===v?void 0:v.title),w="card"===c?_:"button"===c?m:"feature"===c?S:F,x=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({style:c,size:s,type:u,renderLightBox:h,openLightBox:g,videoTitle:O},p);return i.createElement("div",{className:f},i.createElement(w,x))};Y.propTypes={size:s().oneOf(["medium","large"]),style:s().oneOf(["text","card","button","feature"]),type:s().oneOfType([s().oneOf(["jump","local","external","download","video","default"]),s().arrayOf(s().oneOf(["jump","local","external","download","video","default"]))]),copy:s().string,href:s().string,customClassName:s().string},Y.defaultProps={style:"text",type:"default",copy:"",href:"",customVideoTitle:null};var U=Y},6011:function(e,t,r){var n=r(4942),o=r(7294),a=r(757),i=r(9931),c=r(7251),l=r(4184),u=r.n(l),s=r(5393),f=r(5697),p=r.n(f),d=r(1811),y=r(9033);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=s.Z.stablePrefix,v=y.Z.prefix,b=function(e){var t=e.cards,r=e.cardsPerRow,n=e.cta,a=e.border,i=(0,o.useRef)(),c=(0,o.useRef)(null);(0,o.useEffect)((function(){return c.current=new ResizeObserver(l),c.current.observe(document.documentElement),function(){return c.current=null}}),[l]);var l=(0,o.useCallback)((function(){window.requestAnimationFrame((function(){var e=i.current;e&&(e.getElementsByClassName("".concat(v,"--card__eyebrow")).length>0&&(0,d.Z)(e.getElementsByClassName("".concat(v,"--card__eyebrow")),"md"),e.getElementsByClassName("".concat(v,"--card__heading")).length>0&&(0,d.Z)(e.getElementsByClassName("".concat(v,"--card__heading")),"md"),e.getElementsByClassName("".concat(v,"--card__copy")).length>0&&(0,d.Z)(e.getElementsByClassName("".concat(v,"--card__copy")),"md"),e.getElementsByClassName("".concat(v,"--card__footer")).length>0&&(0,d.Z)(e.getElementsByClassName("".concat(v,"--card__footer")),"md"))}))}),[]);return O(t,r,i,n,a)},O=function(e,t,r,l,s){var f;return o.createElement("div",{"data-autoid":"".concat(m,"--card-group"),className:u()("".concat(v,"--card-group__cards__row"),(f={},(0,n.Z)(f,"".concat(v,"--card-group--border"),s),(0,n.Z)(f,"".concat(v,"--row--condensed"),!s),f)),style:{"--dds--card-group--cards-in-row":t},ref:r},e.map((function(e,t){return o.createElement("div",{key:t,className:"".concat(v,"--card-group__cards__col")},o.createElement(c.Z,{style:"card",key:t,customClassName:"".concat(v,"--card-group__card"),image:e.image,media:e.media,heading:e.heading,eyebrow:e.eyebrow,copy:e.copy,pictogram:e.pictogram,cta:g(g({},e.cta),{},{icon:{src:a.Z}}),type:e.media?"video":e.type?e.type:"local"}))})),l&&o.createElement("div",{className:"".concat(v,"--card-group__cards__col")},o.createElement(i.Z,{inverse:!0,heading:l.heading,cta:{href:l.cta.href,icon:{src:a.Z}}})))};b.propTypes={cards:p().arrayOf(p().shape({heading:p().string,eyebrow:p().string,copy:p().string,image:p().shape({classname:p().string,sources:p().arrayOf(p().shape({src:p().string,breakpoint:p().oneOfType([p().string,p().number])})),media:p().arrayOf(p().shape({src:p().string,type:p().string})),defaultSrc:p().string.isRequired,alt:p().string.isRequired,longDescription:p().string}),cta:p().shape({href:p().string}),pictogram:p().node})).isRequired,cardsPerRow:p().number,cta:p().shape({heading:p().string,cta:p().shape({href:p().string})})},b.defaultProps={cardsPerRow:3},t.Z=b},3906:function(e,t,r){var n=r(7462),o=r(4942),a=r(5987),i=r(9931),c=r(4184),l=r.n(c),u=r(5393),s=r(5697),f=r.n(s),p=r(7294),d=r(9033),y=["card","size"],h=u.Z.stablePrefix,g=d.Z.prefix,m=function(e){var t,r,c=e.card,u=e.size,s=(0,a.Z)(e,y),f=c.image,d=c.cta,m=c.copy;return d&&f&&p.createElement("div",{className:l()((t={},(0,o.Z)(t,"".concat(g,"--feature-card"),"medium"==u),(0,o.Z)(t,"".concat(g,"--feature-card-large"),"large"==u),(0,o.Z)(t,"".concat(g,"--feature-card-large_no-copy-text"),"large"===u&&!m),t)),"data-autoid":"".concat(h,"large"===u?"--feature-card-large":"--feature-card")},p.createElement(i.Z,(0,n.Z)({customClassName:l()((r={},(0,o.Z)(r,"".concat(g,"--feature-card__card"),"medium"===u),(0,o.Z)(r,"".concat(g,"--feature-card-large__card"),"large"===u),r))},c,s)))};m.propTypes={eyebrow:f().string,heading:f().string.isRequired,copy:f().string,card:f().shape({heading:f().string,eyebrow:f().string,copy:f().string,cta:f().shape({copy:f().string,href:f().string,type:f().oneOf(["jump","local","external","download","video"])}),image:f().shape({classname:f().string,sources:f().arrayOf(f().shape({src:f().string,breakpoint:f().oneOfType([f().string,f().number])})),defaultSrc:f().string.isRequired,alt:f().string.isRequired,longDescription:f().string}),inverse:f().bool,customClassName:f().string,type:f().oneOf(["link"])}).isRequired,onClick:f().func,size:f().oneOf(["medium","large"])},m.defaultProps={size:"medium"},t.Z=m},1811:function(e,t,r){var n=r(3514);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Array.prototype.slice.call(e),o=t?parseFloat(n.AV[t].width)*n.XE:0;if(window.innerWidth>o){var a=0;r.forEach((function(e){e.style.height="auto",e.offsetHeight>a&&(a=e.clientHeight)})),r.forEach((function(e){e.style.height=a+"px"}))}else r.forEach((function(e){e.style.height="auto"}))}}}]);