_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"6pvD":function(e,a,t){"use strict";var i=t("tZdU"),o=t("nDLM"),n=t("SzR1"),r=t("v05o"),s=t("17x9"),c=t.n(s),l=t("q1tI"),u=t.n(l),d=t("9a1i").a.prefix,m=r.a.stablePrefix,p=function(e){var a=e.heading,t=e.items,i=e.copy;return u.a.createElement("section",{"data-autoid":"".concat(m,"--content-group-cards"),className:"".concat(d,"--content-group-cards")},u.a.createElement(n.a,{heading:a,copy:i},u.a.createElement("div",{"data-autoid":"".concat(m,"--content-group-cards-group"),className:"".concat(d,"--content-group-cards-group ").concat(d,"--grid--condensed")},u.a.createElement("div",{className:"".concat(d,"--content-group-cards__row")},g(t)))))},g=function(e){return e.map((function(e,a){return u.a.createElement("div",{"data-autoid":"".concat(m,"--content-group-cards-item"),className:"".concat(d,"--content-group-cards-item__col"),key:a,role:"region"},u.a.createElement(o.a,{customClassName:"".concat(d,"--content-group-cards-item"),heading:e.heading,copy:e.copy,cta:{href:e.cta.href,icon:{src:i.a}},"aria-label":e.heading}))}))};p.propTypes={heading:c.a.string.isRequired,copy:c.a.string,items:c.a.arrayOf(c.a.shape({title:c.a.string,heading:c.a.string,cta:c.a.shape({href:c.a.string})}))},a.a=p},AOqb:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example-page-a",function(){return t("LKRB")}])},CoFa:function(e,a,t){"use strict";var i=t("lSNA"),o=t.n(i),n=t("QILm"),r=t.n(n),s=t("ZOMM"),c=t("TSYQ"),l=t.n(c),u=t("IXDt"),d=t("v05o"),m=t("17x9"),p=t.n(m),g=t("q1tI"),h=t.n(g),f=t("9a1i"),y=d.a.stablePrefix,b=f.a.prefix,x=function(e){var a=e.cards,t=e.theme,i=r()(e,["cards","theme"]),n=a.filter((function(e){var a=e.image,t=e.eyebrow,i=e.heading,o=e.copy,n=e.cta.href;return a&&t&&i&&!o&&n}));return h.a.createElement(u.a,{heading:i.heading,autoid:"".concat(y,"--card-group-images-group"),customClassName:l()("".concat(b,"--card-group"),o()({},"".concat(b,"--card-group--").concat(t),t)),children:[h.a.createElement(s.a,{cards:n})]})};x.propTypes={theme:p.a.oneOf(["white","g10","g90","g100"]),heading:p.a.string.isRequired,cards:p.a.arrayOf(p.a.exact({image:p.a.shape({classname:p.a.string,sources:p.a.arrayOf(p.a.shape({src:p.a.string,breakpoint:p.a.oneOfType([p.a.string,p.a.number])})),defaultSrc:p.a.string.isRequired,alt:p.a.string.isRequired,longDescription:p.a.string}),eyebrow:p.a.string,heading:p.a.string,cta:p.a.shape({href:p.a.string})})).isRequired},a.a=x},IXDt:function(e,a,t){"use strict";var i=t("lSNA"),o=t.n(i),n=t("QILm"),r=t.n(n),s=t("TSYQ"),c=t.n(s),l=t("vtTq"),u=t("v05o"),d=t("LcsC"),m=t("17x9"),p=t.n(m),g=t("q1tI"),h=t.n(g),f=t("9a1i"),y=u.a.stablePrefix,b=f.a.prefix,x=function(e){var a=e.heading,t=e.copy,i=e.theme,n=e.children,s=e.cta,u=e.customClassName,m=e.childrenCustomClassName,p=r()(e,["heading","copy","theme","children","cta","customClassName","childrenCustomClassName"]);return h.a.createElement("section",{className:c()("".concat(b,"--content-section"),u,o()({},"".concat(b,"--content-section--").concat(i),i)),"data-autoid":p.autoid?p.autoid:"".concat(y,"--content-section")},h.a.createElement("div",{className:"".concat(b,"--content-section__grid")},h.a.createElement("div",{className:"".concat(b,"--content-section__row")},h.a.createElement("div",{className:"".concat(b,"--content-section__left")},a&&h.a.createElement("h2",{className:"".concat(b,"--content-section__heading")},a),t&&h.a.createElement("div",{"data-autoid":"".concat(y,"--content-section__copy"),className:"".concat(b,"--content-section__copy"),dangerouslySetInnerHTML:{__html:Object(d.a)(t,{bold:!1})}}),s&&h.a.createElement(l.a,{style:"text",type:s.type,copy:s.copy,href:s.href,customClassName:"".concat(b,"--content-section__cta")})),h.a.createElement("div",{className:c()("".concat(b,"--content-section__children"),m)},n))))};x.propTypes={heading:p.a.string.isRequired,copy:p.a.string,theme:p.a.oneOf(["white","g10","g90","g100"]),children:p.a.oneOfType([p.a.arrayOf(p.a.node),p.a.node]),cta:p.a.shape({type:p.a.oneOfType([p.a.oneOf(["local","external","download","video"]),p.a.arrayOf(p.a.oneOf(["local","external","download","video"]))]),copy:p.a.string,href:p.a.string,customClassName:p.a.string}),customClassName:p.a.string,childrenCustomClassName:p.a.string},a.a=x},KN0A:function(e,a,t){"use strict";var i=t("pVnL"),o=t.n(i),n=t("TSYQ"),r=t.n(n),s=t("SzR1"),c=t("v05o"),l=t("lSNA"),u=t.n(l),d=t("QILm"),m=t.n(d),p=t("U2ia"),g=t("17x9"),h=t.n(g),f=t("q1tI"),y=t.n(f),b=t("9a1i");function x(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function O(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?x(Object(t),!0).forEach((function(a){u()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var w=c.a.stablePrefix,v=b.a.prefix,q=function(e){var a=e.heading,t=e.copy,i=e.pictogram,n=i.src,s=m()(i,["src"]),c=e.cta,l=e.className;return y.a.createElement("div",{className:r()(l,"".concat(v,"--pictogram-item")),"data-autoid":"".concat(w,"--pictogram-item")},y.a.createElement("div",{className:"".concat(v,"--pictogram-item__row")},y.a.createElement("div",{className:"".concat(v,"--pictogram-item__wrapper")},y.a.createElement(n,o()({"data-autoid":"".concat(w,"--pictogram-item__pictogram"),className:"".concat(v,"--pictogram-item__pictogram")},s))),y.a.createElement("div",{"data-autoid":"".concat(w,"--pictogram-item__content"),className:"".concat(v,"--pictogram-item__content")},y.a.createElement(p.a,{heading:a,copy:t,cta:c&&O({style:"text"},c)}))))};q.propTypes={heading:h.a.string.isRequired,copy:h.a.string.isRequired,cta:h.a.shape({type:h.a.oneOfType([h.a.oneOf(["jump","local","external","download","video"]),h.a.arrayOf(h.a.oneOf(["jump","local","external","download","video"]))]),copy:h.a.string,href:h.a.string,customClassName:h.a.string}),pictogram:h.a.shape({src:h.a.object.isRequired}).isRequired,className:h.a.string};var j=q,N=c.a.stablePrefix,C=b.a.prefix,L=function(e){var a=e.heading,t=e.items,i=e.className,o=e.copy;return y.a.createElement("div",{"data-autoid":"".concat(N,"--content-group-pictograms"),className:r()(i,"".concat(C,"--content-group-pictograms"))},y.a.createElement(s.a,{heading:a,copy:o},P(t)))},P=function(e){return e.map((function(e,a){return y.a.createElement(j,o()({className:"".concat(C,"--content-group-pictograms__item"),"data-autoid":"".concat(C,"--content-group-pictograms__item")},e,{key:a}))}))};L.propTypes={heading:h.a.string.isRequired,copy:h.a.string,items:h.a.arrayOf(h.a.shape({heading:h.a.string.isRequired,copy:h.a.string.isRequired,cta:h.a.shape({style:h.a.oneOf(["text","card","button","feature"]),type:h.a.oneOfType([h.a.oneOf(["jump","local","external","download","video"]),h.a.arrayOf(h.a.oneOf(["jump","local","external","download","video"]))]),copy:h.a.string,href:h.a.string,customClassName:h.a.string}),pictogram:h.a.shape({src:h.a.object.isRequired}),className:h.a.string})).isRequired,className:h.a.string};a.a=L},L2Bh:function(e,a,t){"use strict";var i=t("lSNA"),o=t.n(i),n=t("QILm"),r=t.n(n),s=t("ZOMM"),c=t("TSYQ"),l=t.n(c),u=t("IXDt"),d=t("v05o"),m=t("17x9"),p=t.n(m),g=t("q1tI"),h=t.n(g),f=t("9a1i"),y=d.a.stablePrefix,b=f.a.prefix,x=function(e){var a=e.cards,t=e.cta,i=e.theme,n=r()(e,["cards","cta","theme"]),c=a.filter((function(e){var a=e.image,t=e.heading,i=e.copy,o=e.cta.href;return!a&&t&&i&&o}));return h.a.createElement(u.a,{heading:n.heading,autoid:"".concat(y,"--card-group-simple-group"),customClassName:l()("".concat(b,"--card-group"),o()({},"".concat(b,"--card-group--").concat(i),i)),children:[h.a.createElement(s.a,{cards:c,cta:t})]})};x.propTypes={theme:p.a.oneOf(["white","g10","g90","g100"]),heading:p.a.string.isRequired,cards:p.a.arrayOf(p.a.exact({heading:p.a.string,copy:p.a.string,cta:p.a.shape({href:p.a.string})})).isRequired,cta:p.a.shape({heading:p.a.string,cta:p.a.shape({href:p.a.string})})},a.a=x},LKRB:function(e,a,t){"use strict";t.r(a);var i=t("nKUr"),o=(t("l7su"),t("iOPE")),n=t("7kqu"),r=t("ZNIK"),s=t("9GtX"),c=t("pVnL"),l=t.n(c),u=t("qVTj"),d=t("6pvD"),m=t("KN0A"),p=t("7G3Q"),g=t("v05o"),h=t("17x9"),f=t.n(h),y=t("q1tI"),b=t.n(y),x=t("9a1i"),O=g.a.stablePrefix,w=x.a.prefix,v=function(e){var a=e.heading,t=e.copy,i=e.cta,o=e.items,n=e.aside,r=e.border,s={ContentGroupCards:d.a,ContentGroupSimple:p.a,ContentGroupPictograms:m.a},c=o.map((function(e,a){var t=s[e.type];return b.a.createElement(t,l()({key:a},e))}));return b.a.createElement("div",{"data-autoid":"".concat(O,"--content-block-mixed"),className:"".concat(w,"--content-block-mixed")},b.a.createElement(u.a,{heading:a,copy:t,cta:i,aside:n,border:r},c))};v.propTypes={heading:f.a.string.isRequired,copy:f.a.string,items:f.a.arrayOf(f.a.oneOfType([f.a.shape({type:f.a.oneOf(["ContentGroupCards","ContentGroupSimple","ContentGroupPictograms"]).isRequired,heading:f.a.string.isRequired,items:f.a.arrayOf(f.a.shape({title:f.a.string,copy:f.a.string,cta:f.a.shape({href:f.a.string})}))}),f.a.shape({type:f.a.oneOf(["ContentGroupCards","ContentGroupSimple","ContentGroupPictograms"]).isRequired,heading:f.a.string.isRequired,mediaType:f.a.oneOf(["image","video"]),mediaData:f.a.oneOfType([f.a.shape({inverse:f.a.bool,image:f.a.shape({classname:f.a.string,sources:f.a.arrayOf(f.a.shape({src:f.a.string,breakpoint:f.a.oneOfType([f.a.string,f.a.number])})),defaultSrc:f.a.string.isRequired,alt:f.a.string.isRequired,longDescription:f.a.string}).isRequired,lightbox:f.a.bool,heading:f.a.string,copy:f.a.string,customClassName:f.a.string}),f.a.shape({customClassName:f.a.string,videoId:f.a.string.isRequired,showCaption:f.a.bool,inverse:f.a.bool})]),items:f.a.arrayOf(f.a.shape({cta:f.a.shape({style:f.a.oneOf(["text","card","button","feature"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video"]))]),copy:f.a.string,href:f.a.string,customClassName:f.a.string}),customClassName:f.a.string,copy:f.a.string,heading:f.a.string,mediaType:f.a.oneOf(["image","video"]),mediaData:f.a.oneOfType([f.a.shape({inverse:f.a.bool,image:f.a.shape({classname:f.a.string,sources:f.a.arrayOf(f.a.shape({src:f.a.string,breakpoint:f.a.oneOfType([f.a.string,f.a.number])})),defaultSrc:f.a.string.isRequired,alt:f.a.string.isRequired,longDescription:f.a.string}).isRequired,lightbox:f.a.bool,heading:f.a.string,copy:f.a.string,customClassName:f.a.string}),f.a.shape({customClassName:f.a.string,videoId:f.a.string.isRequired,showCaption:f.a.bool,inverse:f.a.bool})]),inverse:f.a.bool})).isRequired,cta:f.a.shape({style:f.a.oneOf(["text","card","button","feature"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video"]))]),copy:f.a.string,href:f.a.string,customClassName:f.a.string})}),f.a.shape({type:f.a.oneOf(["ContentGroupCards","ContentGroupSimple","ContentGroupPictograms"]).isRequired,heading:f.a.string.isRequired,items:f.a.arrayOf(f.a.shape({heading:f.a.string.isRequired,copy:f.a.string.isRequired,cta:f.a.shape({style:f.a.oneOf(["text","card","button","feature"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video"]))]),copy:f.a.string,href:f.a.string,customClassName:f.a.string}),pictogram:f.a.shape({src:f.a.object.isRequired}),className:f.a.string})).isRequired,className:f.a.string})])).isRequired,cta:f.a.shape({style:f.a.oneOf(["card"]),type:f.a.oneOfType([f.a.oneOf(["jump","local","external","download","video"]),f.a.arrayOf(f.a.oneOf(["jump","local","external","download","video"]))]),copy:f.a.string,customClassName:f.a.string}),aside:f.a.shape({items:f.a.element,border:f.a.bool}),border:f.a.bool};var q=v,j=t("oHr6"),N=t("vJbN"),C=t("dakj"),L=t("4Sc1"),P=t("3xA/"),k=t("CoFa"),S=t("L2Bh"),T={sources:[{src:"images/320/fpo--16x9--320x180--003.jpg",breakpoint:320},{src:"images/480/fpo--16x9--480x270--003.jpg",breakpoint:400},{src:"images/720/fpo--16x9--720x405--003.jpg",breakpoint:672}],alt:"Image alt text",defaultSrc:"images/720/fpo--16x9--720x405--003.jpg"};a.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{type:"centered",theme:"g100",title:"Lead space title",copy:"Use this area for a short line of copy to support the title",gradient:!0,image:{sources:[{src:"images/leadspace/fpo--leadspace--1584x560--003.jpg",breakpoint:"sm"},{src:"images/leadspace/fpo--leadspace--1584x560--003.jpg",breakpoint:"md"}],defaultSrc:"images/leadspace/fpo--leadspace--1584x560--003.jpg",alt:"lead space image"}}),Object(i.jsxs)(s.a,{menuLabel:"Jump to",theme:"white",stickyOffset:48,children:[Object(i.jsx)("a",{name:"content-block-mixed","data-title":"Content Block - Mixed Groups"}),Object(i.jsx)(q,{heading:"Content Block - Mixed Groups",copy:"Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, *consequat* libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{cta:{href:"https://www.example.com"},style:"card",type:"local",heading:"Lorem ipsum dolor sit amet"},items:[{type:"ContentGroupCards",heading:"Content Group - with Cards",items:[{heading:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",cta:{href:"https://www.example.com"}},{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",cta:{href:"https://www.example.com"}},{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",copy:"Lorem ipsum dolor sit amet",cta:{href:"https://www.example.com"}},{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",cta:{href:"https://www.example.com"}}]},{type:"ContentGroupPictograms",heading:"Content Group - with Pictograms",items:[{heading:"Aliquam condimentum interdum",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com",type:"local",copy:"Lorem ipsum dolor"},pictogram:{src:o.a,"aria-label":"Desktop"}},{heading:"Aliquam condimentum interdum",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com",type:"local",copy:"Lorem ipsum dolor"},pictogram:{src:n.a,"aria-label":"Pattern"}},{heading:"Aliquam condimentum interdum",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com",type:"local",copy:"Lorem ipsum dolor"},pictogram:{src:n.c,"aria-label":"Touch"}}]},{type:"ContentGroupSimple",mediaType:"image",mediaData:{heading:"Lorem ipsum dolor sit amet.",image:T},heading:"Content Group - Simple",items:[{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."},{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."}]}],aside:{items:Object(i.jsx)(j.a,{style:"card",heading:"Tutorials",items:[{type:"local",copy:"Containerization A Complete Guide",cta:{href:"https://ibm.com"}},{type:"external",copy:"Why should you use microservices and containers",cta:{href:"https://ibm.com"}}]}),border:!1}}),Object(i.jsxs)(N.a,{nested:!0,type:"2-1",border:!0,children:[Object(i.jsx)("a",{name:"content-block-segmented","data-title":"Content Block - Segmented"}),Object(i.jsx)(C.a,{heading:"Content Block - Segmented",copy:"Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, *consequat* libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit.",mediaType:"image",mediaData:{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:T},items:[{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit."},{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit."}],cta:{cta:{href:"https://www.example.com"},style:"card",type:"local",heading:"Lorem ipsum dolor"}})]}),Object(i.jsxs)(N.a,{nested:!0,type:"2-1",border:!0,children:[Object(i.jsx)("a",{name:"content-block-simple","data-title":"Content Block - Simple"}),Object(i.jsx)(L.a,{inverse:!1,heading:"Content Block - Simple",copy:"Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, *consequat* libero. Here are some common categories: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",mediaType:"image",mediaData:{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:{sources:[{src:"images/320/fpo--16x9--320x180--003.jpg",breakpoint:320},{src:"images/480/fpo--16x9--480x270--003.jpg",breakpoint:400},{src:"images/720/fpo--16x9--720x405--003.jpg",breakpoint:672}],alt:"Image alt text",defaultSrc:"images/720/fpo--16x9--720x405--003.jpg"}},cta:{cta:{href:"https://www.ibm.com"},style:"card",type:"external",heading:"Lorem ipsum dolor sit amet"}})]}),Object(i.jsxs)(N.a,{nested:!0,type:"2-1",children:[Object(i.jsx)("a",{name:"content-block-media","data-title":"Content Block - with Media"}),Object(i.jsx)(P.a,{copy:"Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, *consequat* libero. Phasellus at elit sollicitudin, sodales nulla quis, consequat.",heading:"Content Block - with Media",items:[{mediaType:"image",mediaData:{heading:"Lorem ipsum dolor sit amet.",image:{sources:[{src:"images/320/fpo--16x9--320x180--003.jpg",breakpoint:320},{src:"images/480/fpo--16x9--480x270--003.jpg",breakpoint:400},{src:"images/720/fpo--16x9--720x405--003.jpg",breakpoint:672}],alt:"Image alt text",defaultSrc:"images/720/fpo--16x9--720x405--003.jpg"}},heading:"Lorem ipsum dolor sit amet",items:[{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."},{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."}],cta:{cta:{href:"https://www.example.com"},style:"card",type:"local",heading:"Lorem ipsum dolor sit ametttt"}},{mediaType:"image",mediaData:{heading:"Lorem ipsum dolor sit amet.",image:{sources:[{src:"images/320/fpo--16x9--320x180--003.jpg",breakpoint:320},{src:"images/480/fpo--16x9--480x270--003.jpg",breakpoint:400},{src:"images/720/fpo--16x9--720x405--003.jpg",breakpoint:672}],alt:"Image alt text",defaultSrc:"images/720/fpo--16x9--720x405--003.jpg"}},heading:"Lorem ipsum dolor sit amet",items:[{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."},{heading:"Lorem ipsum dolor sit amet.",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."}],cta:{cta:{href:"https://www.example.com"},style:"card",type:"local",heading:"Lorem ipsum dolor sit ametttt"}}],cta:{heading:"Feature Card",card:{type:"local",heading:"Consectetur adipisicing elit",image:{defaultSrc:"images/720/fpo--1x1--720x720--003.jpg",alt:"Image alt text"},cta:{href:"https://www.example.com"}}}})]})]}),Object(i.jsx)(k.a,{heading:"Card Section - with Images",theme:"g10",cards:[{image:{defaultSrc:"images/1312/fpo--16x9--1312x738--005.jpg",alt:"Image alt text"},eyebrow:"Topic",heading:"Natural language processing.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"images/1312/fpo--1x1--1312x1312--001.jpg",alt:"Image alt text"},eyebrow:"Blog",heading:"Natural language processing.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"images/1312/fpo--2x1--1312x656--003.jpg",alt:"Image alt text"},eyebrow:"Topic",heading:"Natural language processing.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"images/1312/fpo--3x2--874--004.jpg",alt:"Image alt text"},eyebrow:"Blog",heading:"Serving society ethically in the age of Artificial Intelligence.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"images/1312/fpo--4x3--1312x984--002.jpg",alt:"Image alt text"},eyebrow:"Topic",heading:"Serving society ethically in the age of Artificial Intelligence.",cta:{href:"https://www.example.com"}}]}),Object(i.jsx)(S.a,{heading:"Card Section - Simple",theme:"g10",cards:[{heading:"Nunc convallis lobortis",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com"}},{heading:"Fusce gravida eu arcu",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com"}},{heading:"Interdum et malesuada",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com"}},{heading:"Nunc convallis loborti",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com"}},{heading:"Nunc convallis lbortis",copy:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",cta:{href:"https://www.example.com"}}],cta:{heading:"Top level card link",cta:{href:"https://www.example.com"}}})]})}},X8q3:function(e,a,t){"use strict";t.d(a,"a",(function(){return h})),t.d(a,"b",(function(){return m})),t.d(a,"c",(function(){return d}));var i=t("O9pe"),o=t("17x9"),n=t.n(o),r=t("q1tI"),s=t.n(r);function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){u(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function m(e,a){if(null==e)return{};var t,i,o=function(e,a){if(null==e)return{};var t,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=["className","children","tabIndex"],g=["tabindex"],h=s.a.forwardRef((function(e,a){var t=e.className,o=e.children,n=e.tabIndex,r=m(e,p),c=Object(i.a)(l(l({},r),{},{tabindex:n})),u=c.tabindex,d=m(c,g);return t&&(d.className=t),void 0!==u&&null!==u&&(d.tabIndex=u),a&&(d.ref=a),s.a.createElement("svg",d,o)}));h.displayName="Icon",h.propTypes={"aria-hidden":n.a.string,"aria-label":n.a.string,"aria-labelledby":n.a.string,children:n.a.node,className:n.a.string,height:n.a.oneOfType([n.a.number,n.a.string]),preserveAspectRatio:n.a.string,tabIndex:n.a.string,viewBox:n.a.string,width:n.a.oneOfType([n.a.number,n.a.string]),xmlns:n.a.string},h.defaultProps={xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"}},dakj:function(e,a,t){"use strict";var i=t("lSNA"),o=t.n(i),n=t("qVTj"),r=t("SzR1"),s=t("U2ia"),c=t("TSYQ"),l=t.n(c),u=t("v05o"),d=t("/J8l"),m=t("17x9"),p=t.n(m),g=t("q1tI"),h=t.n(g),f=t("9a1i"),y=t("vQcT");function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function x(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){o()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var O=u.a.stablePrefix,w=f.a.prefix,v=function(e){var a=e.copy,t=e.cta,i=e.heading,r=e.mediaType,s=e.mediaData,c=e.items,u=e.aside,d=e.border;return h.a.createElement("div",{"data-autoid":"".concat(O,"--content-block-segmented"),className:l()("".concat(w,"--content-block-segmented"),o()({},"".concat(w,"--content-block-segmented-border"),d||u&&u.border))},h.a.createElement(n.a,{heading:i,copy:a,cta:t,aside:u,border:d},q(r,s),j(c)))},q=function(e,a){if(a)return h.a.createElement("div",{"data-autoid":"".concat(O,"--content-block-segmented__media")},"image"===e&&h.a.createElement(d.a,a),"video"===e&&h.a.createElement(y.a,a))},j=function(e){return e.map((function(e,a){return h.a.createElement(r.a,{heading:e.heading,key:a,cta:!e.cta||"jump"!==e.cta.type&&"local"!==e.cta.type?void 0:x({style:"text"},e.cta)},h.a.createElement("div",{"data-autoid":"".concat(O,"--content-block-segmented__content-group")},h.a.createElement(s.a,{copy:e.copy,key:a}),(e.image||e.video)&&h.a.createElement("div",{"data-autoid":"".concat(O,"--content-block-segmented__media")},e.image&&h.a.createElement(d.a,e.image),e.video&&h.a.createElement(y.a,e.video))))}))};v.propTypes={heading:p.a.string.isRequired,copy:p.a.string,cta:p.a.shape({style:p.a.oneOf(["text","card"]),type:p.a.oneOfType([p.a.oneOf(["jump","local","external","download","video"]),p.a.arrayOf(p.a.oneOf(["jump","local","external","download","video"]))]),heading:p.a.string,href:p.a.string,customClassName:p.a.string}),mediaType:p.a.oneOf(["image","video"]),mediaData:p.a.oneOfType([p.a.shape({inverse:p.a.bool,image:p.a.shape({classname:p.a.string,sources:p.a.arrayOf(p.a.shape({src:p.a.string,breakpoint:p.a.oneOfType([p.a.string,p.a.number])})),defaultSrc:p.a.string.isRequired,alt:p.a.string.isRequired,longDescription:p.a.string}).isRequired,lightbox:p.a.bool,heading:p.a.string,copy:p.a.string,customClassName:p.a.string}),p.a.shape({customClassName:p.a.string,videoId:p.a.string.isRequired,showCaption:p.a.bool,inverse:p.a.bool})]),items:p.a.arrayOf(p.a.shape({heading:p.a.string,copy:p.a.string,image:p.a.shape({inverse:p.a.bool,image:p.a.shape({classname:p.a.string,sources:p.a.arrayOf(p.a.shape({src:p.a.string,breakpoint:p.a.oneOfType([p.a.string,p.a.number])})),defaultSrc:p.a.string.isRequired,alt:p.a.string.isRequired,longDescription:p.a.string}).isRequired,lightbox:p.a.bool,heading:p.a.string,copy:p.a.string,customClassName:p.a.string}),cta:p.a.shape({style:p.a.oneOf(["card"]),type:p.a.oneOf(["local"]),heading:p.a.string,customClassName:p.a.string}),video:p.a.shape({customClassName:p.a.string,videoId:p.a.string.isRequired,showCaption:p.a.bool,inverse:p.a.bool})})).isRequired,aside:p.a.shape({items:p.a.element,border:p.a.bool}),border:p.a.bool},a.a=v},vJbN:function(e,a,t){"use strict";var i=t("lSNA"),o=t.n(i),n=t("TSYQ"),r=t.n(n),s=t("v05o"),c=t("044X"),l=t("17x9"),u=t.n(l),d=t("q1tI"),m=t.n(d),p=t("9a1i"),g=s.a.stablePrefix,h=p.a.prefix,f={"1-3":["".concat(h,"--col-lg-4"),"".concat(h,"--col-lg-12")],"2-1":["".concat(h,"--layout-2-3"),"".concat(h,"--layout-1-3")]};function y(e,a){return a&&"".concat(h,"--layout--").concat(e,"-").concat(a)}var b=function(e){var a,t=e.type,i=e.marginTop,n=e.marginBottom,s=e.stickyOffset,c=e.border,l=e.nested,u=e.children;return m.a.createElement("section",{"data-autoid":"".concat(g,"--layout"),className:r()(l?"":"".concat(h,"--grid"),(a={},o()(a,y("top",i),i),o()(a,y("bottom",n),n),a))},m.a.createElement("div",{className:r()("".concat(h,"--row"),o()({},"".concat(h,"--layout--border"),c))},function(e,a,t){var i=[];return t.map((function(t,o){"true"===t.props["data-sticky"]?i.push(m.a.createElement("div",{className:r()(f[e]&&f[e][o]?"".concat(f[e][o]," ").concat(h,"--layout--sticky-mobile"):"".concat(h,"--col")),key:o,style:{top:a?"".concat(a,"px"):0}},m.a.cloneElement(t,{className:r()(t.props.className,"".concat(h,"--layout--sticky-desktop")),style:{top:a?"".concat(a,"px"):0}}))):i.push(m.a.cloneElement(t,{className:r()(t.props.className,f[e]&&f[e][o]?f[e][o]:"".concat(h,"--col")),key:o}))})),i}(t,s,u)))};b.propTypes={type:u.a.oneOf(["1-3","2-1"]).isRequired,marginTop:u.a.oneOf(["layout-01","layout-02","layout-03","layout-04","layout-05","layout-06","layout-07"]),marginBottom:u.a.oneOf(["layout-01","layout-02","layout-03","layout-04","layout-05","layout-06","layout-07"]),children:u.a.node,stickyOffset:u.a.number,border:u.a.bool,nested:u.a.bool},b.defaultProps={marginTop:null,marginBottom:null,stickyOffset:null,border:!1,nested:!1},a.a=Object(c.a)(b,"\n  The Layout component has been deprecated in favor of the style mixin and classes.\n  See Layout documentation for more information.\n")}},[["AOqb",2,3,5,6,23,20,1,7,9,10,12,15,11]]]);