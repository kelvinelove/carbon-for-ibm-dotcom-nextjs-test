(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"6eD3":function(e,t,a){"use strict";var r=a("rqb6");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Array.prototype.slice.call(e),n=t?parseFloat(r.b[t].width)*r.a:0;if(window.innerWidth>n){var o=0;a.forEach((function(e){e.style.height="auto",e.offsetHeight>o&&(o=e.clientHeight)})),a.forEach((function(e){e.style.height=o+"px"}))}else a.forEach((function(e){e.style.height="auto"}))}},F8Pe:function(e,t,a){"use strict";var r=a("pVnL"),n=a.n(r),o=a("q1tI"),c=a.n(o),i=a("2n3a"),l=a("C+eC"),u=a("17x9"),s=a.n(u),d=a("9a1i"),p=l.a.stablePrefix,f=d.a.prefix,y=function(e){var t=e.buttons,a=Object(o.useRef)(null);return Object(o.useEffect)((function(){a.current&&a.current.style.setProperty("--".concat(p,"--button-group--item-count"),String(t.length))}),[t]),c.a.createElement("ol",{className:"".concat(f,"--buttongroup"),"data-autoid":"".concat(p,"--button-group"),ref:a},t.map((function(e,a){return c.a.createElement("li",{key:a,className:"".concat(f,"--buttongroup-item")},c.a.createElement(i.a,n()({"data-autoid":"".concat(p,"--button-group-").concat(a),isExpressive:!0},e,{type:"button",kind:a===t.length-1?"primary":"tertiary"}),e.copy))})))};y.propTypes={buttons:s.a.arrayOf(s.a.shape({copy:s.a.string,href:s.a.string,onClick:s.a.func,renderIcon:s.a.elementType})).isRequired},t.a=y},VlHH:function(e,t,a){"use strict";var r=a("pVnL"),n=a.n(r),o=a("lSNA"),c=a.n(o),i=a("QILm"),l=a.n(i),u=a("nDLM"),s=a("TSYQ"),d=a.n(s),p=a("C+eC"),f=a("17x9"),y=a.n(f),g=a("q1tI"),m=a.n(g),h=a("9a1i"),O=p.a.stablePrefix,b=h.a.prefix,v=function(e){var t,a,r=e.card,o=e.size,i=l()(e,["card","size"]),s=r.image,p=r.cta,f=r.copy;return p&&s&&m.a.createElement("div",{className:d()((t={},c()(t,"".concat(b,"--feature-card"),"medium"==o),c()(t,"".concat(b,"--feature-card-large"),"large"==o),c()(t,"".concat(b,"--feature-card-large_no-copy-text"),"large"===o&&!f),t)),"data-autoid":"".concat(O,"large"===o?"--feature-card-large":"--feature-card")},m.a.createElement(u.a,n()({customClassName:d()((a={},c()(a,"".concat(b,"--feature-card__card"),"medium"===o),c()(a,"".concat(b,"--feature-card-large__card"),"large"===o),a))},r,i)))};v.propTypes={eyebrow:y.a.string,heading:y.a.string.isRequired,copy:y.a.string,card:y.a.shape({heading:y.a.string,eyebrow:y.a.string,copy:y.a.string,cta:y.a.shape({copy:y.a.string,href:y.a.string,type:y.a.oneOf(["jump","local","external","download","video"])}),image:y.a.shape({classname:y.a.string,sources:y.a.arrayOf(y.a.shape({src:y.a.string,breakpoint:y.a.oneOfType([y.a.string,y.a.number])})),defaultSrc:y.a.string.isRequired,alt:y.a.string.isRequired,longDescription:y.a.string}),inverse:y.a.bool,customClassName:y.a.string,type:y.a.oneOf(["link"])}).isRequired,onClick:y.a.func,size:y.a.oneOf(["medium","large"])},v.defaultProps={size:"medium"},t.a=v},ZOMM:function(e,t,a){"use strict";var r=a("lSNA"),n=a.n(r),o=a("q1tI"),c=a.n(o),i=a("tZdU"),l=a("nDLM"),u=a("vtTq"),s=a("TSYQ"),d=a.n(s),p=a("C+eC"),f=a("17x9"),y=a.n(f),g=a("6eD3"),m=a("9a1i");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=p.a.stablePrefix,v=m.a.prefix,j=function(e){var t=e.cards,a=e.cardsPerRow,r=e.cta,n=e.border,c=Object(o.useRef)(),i=Object(o.useRef)(null);Object(o.useEffect)((function(){return i.current=new ResizeObserver(l),i.current.observe(document.documentElement),function(){return i.current=null}}),[l]);var l=Object(o.useCallback)((function(){window.requestAnimationFrame((function(){var e=c.current;e&&(e.getElementsByClassName("".concat(v,"--card__eyebrow")).length>0&&Object(g.a)(e.getElementsByClassName("".concat(v,"--card__eyebrow")),"md"),e.getElementsByClassName("".concat(v,"--card__heading")).length>0&&Object(g.a)(e.getElementsByClassName("".concat(v,"--card__heading")),"md"),e.getElementsByClassName("".concat(v,"--card__copy")).length>0&&Object(g.a)(e.getElementsByClassName("".concat(v,"--card__copy")),"md"),e.getElementsByClassName("".concat(v,"--card__footer")).length>0&&Object(g.a)(e.getElementsByClassName("".concat(v,"--card__footer")),"md"))}))}),[]);return w(t,a,c,r,n)},w=function(e,t,a,r,o){var s;return c.a.createElement("div",{"data-autoid":"".concat(b,"--card-group"),className:d()("".concat(v,"--card-group__cards__row"),(s={},n()(s,"".concat(v,"--card-group--border"),o),n()(s,"".concat(v,"--row--condensed"),!o),s)),style:{"--dds--card-group--cards-in-row":t},ref:a},e.map((function(e,t){return c.a.createElement("div",{key:t,className:"".concat(v,"--card-group__cards__col")},c.a.createElement(u.a,{style:"card",key:t,customClassName:"".concat(v,"--card-group__card"),image:e.image,media:e.media,heading:e.heading,eyebrow:e.eyebrow,copy:e.copy,pictogram:e.pictogram,cta:O(O({},e.cta),{},{icon:{src:i.a}}),type:e.media?"video":e.type?e.type:"local"}))})),r&&c.a.createElement("div",{className:"".concat(v,"--card-group__cards__col")},c.a.createElement(l.a,{inverse:!0,heading:r.heading,cta:{href:r.cta.href,icon:{src:i.a}}})))};j.propTypes={cards:y.a.arrayOf(y.a.shape({heading:y.a.string,eyebrow:y.a.string,copy:y.a.string,image:y.a.shape({classname:y.a.string,sources:y.a.arrayOf(y.a.shape({src:y.a.string,breakpoint:y.a.oneOfType([y.a.string,y.a.number])})),media:y.a.arrayOf(y.a.shape({src:y.a.string,type:y.a.string})),defaultSrc:y.a.string.isRequired,alt:y.a.string.isRequired,longDescription:y.a.string}),cta:y.a.shape({href:y.a.string}),pictogram:y.a.node})).isRequired,cardsPerRow:y.a.number,cta:y.a.shape({heading:y.a.string,cta:y.a.shape({href:y.a.string})})},j.defaultProps={cardsPerRow:3},t.a=j},vtTq:function(e,t,a){"use strict";var r=a("lSNA"),n=a.n(r),o=a("J4zp"),c=a.n(o),i=a("QILm"),l=a.n(i),u=a("q1tI"),s=a.n(u),d=a("F8Pe"),p=a("0X9N"),f=a("17x9"),y=a.n(f);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=function(e){var t=e.type,a=e.openLightBox,r=e.renderLightBox,n=e.videoTitle,o=e.formatCTAcopy,i=l()(e,["type","openLightBox","renderLightBox","videoTitle","formatCTAcopy"]),f=Object(u.useState)({}),y=c()(f,2),g=y[0],h=y[1];return t.includes("video")?s.a.createElement("div",null,p.a.launchLightBox(r,a,g),!r&&s.a.createElement(d.a,{buttons:O(m({videoTitle:n,openLightBox:a,setMediaData:h,formatCTAcopy:o},i))})):s.a.createElement(d.a,{buttons:O(m({},i))})},O=function(e){var t=e.openLightBox,a=e.videoTitle,r=e.setMediaData,n=e.formatCTAcopy;return e.buttons.map((function(e,o){if("video"===e.type){e.onClick=function(a){return a.preventDefault(),r(e.media),p.a.setLightBox(a,t)};var c=a.filter((function(e){return e.key===o}));e.copy=c[0]?n({title:(null===e||void 0===e?void 0:e.media.title)||c[0].title,duration:c[0].duration}):e.copy,e.href="#"}else e.onClick=e.onClick||function(t){return p.a.jump(t,e.type)},e.target=p.a.external(e.type);return e.renderIcon=p.a.iconSelector(e.type),e.iconDescription=b(e.type),e}))},b=function(e){switch(e){case"external":return"external launch icon";case"jump":return"down arrow icon";case"video":return"play button icon";default:return"right arrow icon"}};h.propTypes={type:y.a.oneOfType([y.a.oneOf(["jump","local","external","download","video","default"]),y.a.arrayOf(y.a.oneOf(["jump","local","external","download","video","default"]))]),buttons:y.a.arrayOf(y.a.shape({type:y.a.oneOf(["local","external","jump","video"]),copy:y.a.string,href:y.a.string,mediaData:y.a.shape({customClassName:y.a.string,videoId:y.a.string.isRequired,showCaption:y.a.bool,inverse:y.a.bool})})).isRequired,openLightBox:y.a.func,renderLightBox:y.a.bool,videoTitle:y.a.arrayOf(y.a.shape({title:y.a.string,duration:y.a.string,key:y.a.oneOfType([y.a.number,y.a.string])})),setMediaData:y.a.func,formatCTAcopy:y.a.func},h.defaultProps={type:"default",formatCTAcopy:function(e){var t=e.title,a=e.duration;return"".concat(t," ").concat(a)}};var v=h,j=a("uCqq"),w=a("RJyT"),x=a("9a1i");function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=function(e){return s.a.createElement("svg",e,s.a.createElement("title",null,"Group 3"),s.a.createElement("g",{fill:"none",fillRule:"evenodd"},s.a.createElement("circle",{fillOpacity:".9",fill:"#525252",cx:"32",cy:"32",r:"32"}),s.a.createElement("path",{d:"M26.556 43.111a1 1 0 0 1-1-1v-22a1 1 0 0 1 1.5-.87l19 11a1 1 0 0 1 0 1.74l-19 11a1 1 0 0 1-.5.13z",fill:"#F3F3F3",fillRule:"nonzero"})))};T.defaultProps={width:"64",height:"64",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"};var C=x.a.prefix,B=function(e){var t=e.type,a=e.openLightBox,r=e.renderLightBox,n=e.videoTitle,o=e.disableImage,i=l()(e,["type","openLightBox","renderLightBox","videoTitle","disableImage"]),d=(i.style,l()(i,["style"])),f=Object(u.useState)(3),y=c()(f,2),g=y[0],m=y[1],h=Object(u.useCallback)((function(e){(null===e||void 0===e?void 0:e.parentElement)&&m(e.parentElement.offsetWidth)}),[]);if("video"===t){var O,b,v;if(!o)b=E(E({},b=d.image?d.image:{defaultSrc:w.a.getThumbnailUrl({mediaId:null===(v=d.media)||void 0===v?void 0:v.src,width:g}),alt:n[0].title}),{},{icon:T,refImage:h});return s.a.createElement(s.a.Fragment,null,p.a.launchLightBox(r,a,i.media),!r&&s.a.createElement(j.a,{customClassName:"".concat(C,"--card__CardCTA ").concat(C,"--card__video"),card:E(E({},d),{},{cta:{href:"#",icon:{src:p.a.iconSelector(t)},iconPlacement:"left",copy:null===(O=n[0].duration)||void 0===O?void 0:O.replace(/\(|\)/g,""),handleClick:function(e){return p.a.setLightBox(e,a)}},image:b,heading:n[0].title})}))}return s.a.createElement(j.a,{customClassName:"".concat(C,"--card__CardCTA"),card:E(E({},d),{},{cta:{type:t,href:i.cta.href,icon:{src:p.a.iconSelector(t)}},copy:i.copy,target:p.a.external(t),href:i.cta.href})})};B.propTypes={type:y.a.oneOfType([y.a.oneOf(["jump","local","external","download","video","default"]),y.a.arrayOf(y.a.oneOf(["jump","local","external","download","video","default"]))]),disableImage:y.a.bool,openLightBox:y.a.func,renderLightBox:y.a.bool,videoTitle:y.a.arrayOf(y.a.shape({title:y.a.string,duration:y.a.string,key:y.a.oneOfType([y.a.number,y.a.string])}))},B.defaultProps={type:"default",copy:"",cta:null,disableImage:!1,media:null};var _=B,L=a("VlHH");function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=function(e){var t=e.size,a=e.type,r=e.openLightBox,n=e.renderLightBox,o=e.videoTitle,c=e.formatCTAcopy,i=l()(e,["size","type","openLightBox","renderLightBox","videoTitle","formatCTAcopy"]);return"video"===a?s.a.createElement("div",null,p.a.launchLightBox(n,r,i.card.cta.media),!n&&s.a.createElement(L.a,{card:S({card:D(D({},i.card),{},{heading:c({title:o[0].title,duration:o[0].duration})})}),size:t,onClick:function(e){return p.a.setLightBox(e,r)}})):s.a.createElement(L.a,{card:S({card:D({},i.card)}),size:t})},S=function(e){var t=e.card;return"jump"===t.type?t.cta.type="jump":"video"===t.type&&(t.cta.href="#"),t.cta=D(D({},t.cta),{},{icon:{src:p.a.iconSelector(t.cta.type)}}),t.type="link",t};N.propTypes={size:y.a.oneOf(["medium","large"]),type:y.a.oneOfType([y.a.oneOf(["jump","local","external","download","video","default"]),y.a.arrayOf(y.a.oneOf(["jump","local","external","download","video","default"]))]),openLightBox:y.a.func,renderLightBox:y.a.bool,videoTitle:y.a.arrayOf(y.a.shape({title:y.a.string,duration:y.a.string,key:y.a.oneOfType([y.a.number,y.a.string])})),formatCTAcopy:y.a.func},N.defaultProps={type:"default",formatCTAcopy:function(e){var t=e.title,a=e.duration;return"".concat(t," ").concat(a)}};var q=N,A=a("pVnL"),I=a.n(A),R=a("qHd8"),z=function(e){var t,a=e.type,r=e.openLightBox,n=e.renderLightBox,o=e.videoTitle,c=e.formatCTAcopy,i=e.iconPlacement,u=l()(e,["type","openLightBox","renderLightBox","videoTitle","formatCTAcopy","iconPlacement"]),d=p.a.iconSelector(a,i),f="video"!==a?u.href?u.href:null===(t=u.cta)||void 0===t?void 0:t.href:null;return"video"===a?s.a.createElement(s.a.Fragment,null,p.a.launchLightBox(n,r,u.media),!n&&s.a.createElement(R.a,I()({href:"#",onClick:function(e){return p.a.setLightBox(e,r)},iconInline:u.iconInline},i&&{iconPlacement:i}),s.a.createElement("span",null,c({title:o[0].title,duration:o[0].duration})),s.a.createElement(d,null))):s.a.createElement(R.a,I()({href:f,target:p.a.external(a),onClick:function(e){return p.a.jump(e,a)},iconInline:u.iconInline},i&&{iconPlacement:i}),s.a.createElement("span",null,u.copy),"default"!==a&&s.a.createElement(d,null))};z.propTypes={type:y.a.oneOfType([y.a.oneOf(["jump","local","external","download","video","default"]),y.a.arrayOf(y.a.oneOf(["jump","local","external","download","video","default"]))]),iconPlacement:y.a.oneOf(["left","right"]),openLightBox:y.a.func,renderLightBox:y.a.bool,videoTitle:y.a.arrayOf(y.a.shape({title:y.a.string,duration:y.a.string,key:y.a.oneOfType([y.a.number,y.a.string])})),formatCTAcopy:y.a.func},z.defaultProps={type:"default",formatCTAcopy:function(e){var t=e.title,a=e.duration;return"".concat(t," ").concat(a)},iconPlacement:"right"};var F=z,M=a("o0o1"),H=a.n(M),V=a("yXPU"),J=a.n(V);var Q=function(e,t,a){var r,n=Object(u.useState)([{title:"",duration:"",key:0}]),o=c()(n,2),i=o[0],l=o[1];return Object(u.useEffect)((function(){r()}),[r,e,a]),r=Object(u.useCallback)(J()(H.a.mark((function r(){var n;return H.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("video"!==e&&!e.includes("video")){r.next=5;break}return r.next=3,Promise.all(t.map(function(){var e=J()(H.a.mark((function e(t){var r,n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.api(t.src);case 2:return r=e.sent,n=w.a.getMediaDuration(r.msDuration,!0),e.abrupt("return",{title:a||r.name,duration:n,key:t.key});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:n=r.sent,l(n);case 5:case"end":return r.stop()}}),r)}))),[e,t,a]),i};function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var W=function(e){var t,a,r=e.style,o=e.type,i=e.size,d=e.customClassName,f=l()(e,["style","type","size","customClassName"]),y=Object(u.useState)(!1),g=c()(y,2),m=g[0],h=g[1],O="feature"===r?null===f||void 0===f||null===(t=f.card)||void 0===t||null===(a=t.cta)||void 0===a?void 0:a.media:f.media,b=o&&("video"===o||o.includes("video"))?p.a.getVideoId(r,f):[],j=Q(o,b,null===O||void 0===O?void 0:O.title),w="card"===r?_:"button"===r?v:"feature"===r?q:F,x=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({style:r,size:i,type:o,renderLightBox:m,openLightBox:h,videoTitle:j},f);return s.a.createElement("div",{className:d},s.a.createElement(w,x))};W.propTypes={size:y.a.oneOf(["medium","large"]),style:y.a.oneOf(["text","card","button","feature"]),type:y.a.oneOfType([y.a.oneOf(["jump","local","external","download","video","default"]),y.a.arrayOf(y.a.oneOf(["jump","local","external","download","video","default"]))]),copy:y.a.string,href:y.a.string,customClassName:y.a.string},W.defaultProps={style:"text",type:"default",copy:"",href:"",customVideoTitle:null};t.a=W}}]);