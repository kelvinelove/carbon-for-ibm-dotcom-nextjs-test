(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2935],{1574:function(e,t,a){"use strict";a.d(t,{Z:function(){return w}});var o=a(8782),n=a(5393),c=a(5697),i=a.n(c),s=a(4942),l=a(7685),r=a(7294),m=a(757),u=a(4184),p=a.n(u);var d=function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent},g=a(7732),h=a(5178),y=a(8203),f=a(9033),x=n.Z.stablePrefix,b=f.Z.prefix,_=function(e){var t=e.markType,a=void 0===t?"doubleCurved":t,o=e.copy,n=e.source,c=e.cta,i=e.inverse,u=(0,r.useState)(""),f=(0,l.Z)(u,2),_=f[0],v=f[1];(0,r.useEffect)((function(){v(d(o))}),[o]);return r.createElement("div",{"data-autoid":"".concat(x,"--quote"),className:p()("".concat(b,"--quote"),(0,s.Z)({},"".concat(b,"--quote__inverse"),i))},r.createElement("div",{className:"".concat(b,"--quote__container")},r.createElement("div",{className:"".concat(b,"--quote__wrapper"),"data-autoid":"".concat(x,"--quote__copy")},function(){switch(a){case"doubleCurved":return r.createElement(r.Fragment,null,r.createElement("span",{className:"".concat(b,"--quote__mark")},"\u201c"),r.createElement("blockquote",{className:"".concat(b,"--quote__copy")},_,"\u201d"));case"singleCurved":return r.createElement(r.Fragment,null,r.createElement("span",{className:"".concat(b,"--quote__mark")},"\u2018"),r.createElement("blockquote",{className:"".concat(b,"--quote__copy")},_,"\u2019"));case"doubleAngle":return r.createElement(r.Fragment,null,r.createElement("span",{className:"".concat(b,"--quote__mark")},"\xab"),r.createElement("blockquote",{className:"".concat(b,"--quote__copy")},_,"\xbb"));case"singleAngle":return r.createElement(r.Fragment,null,r.createElement("span",{className:"".concat(b,"--quote__mark")},"\u2039"),r.createElement("blockquote",{className:"".concat(b,"--quote__copy")},_,"\u203a"));case"lowHighReversedDoubleCurved":return r.createElement(r.Fragment,null,r.createElement("span",{className:"".concat(b,"--quote__mark")},"\u201e"),r.createElement("blockquote",{className:"".concat(b,"--quote__copy")},_,"\u201c"));case"cornerBracket":return r.createElement(r.Fragment,null,r.createElement("span",{className:"".concat(b,"--quote__mark ").concat(b,"--quote__mark-corner-bracket")},"\u300c"),r.createElement("blockquote",{className:"".concat(b,"--quote__copy")},_,"\u300d"))}}()),!!(n&&n.heading&&n.copy)&&r.createElement("div",{className:"".concat(b,"--quote__source"),"data-autoid":"".concat(x,"--quote__source")},r.createElement("p",{className:"".concat(b,"--quote__source-heading")},n.heading),r.createElement("p",{className:"".concat(b,"--quote__source-body")},n.copy),n.copy2&&r.createElement("p",{className:"".concat(b,"--quote__source-optional-copy")},n.copy2))),!!c&&r.createElement("div",{className:"".concat(b,"--quote__footer")},r.createElement(g.Z,null),r.createElement(y.Z,{href:c.href},r.createElement("span",null,c.copy),"local"===c.type&&r.createElement(m.Z,null),"external"===c.type&&r.createElement(h.Z,null))))};_.propTypes={markType:i().oneOf(["doubleCurved","singleCurved","doubleAngle","singleAngle","lowHighReversedDoubleCurved","cornerBracket"]),copy:i().string.isRequired,source:i().shape({heading:i().string.isRequired,copy:i().string.isRequired,copy2:i().string}),cta:i().shape({copy:i().string,type:i().oneOf(["local","external"]),href:i().string}),inverse:i().bool};var v=_,q=n.Z.stablePrefix,E=f.Z.prefix,k=function(e){var t=e.quote;return r.createElement("div",{className:"".concat(E,"--callout-quote"),"data-autoid":"".concat(q,"--callout-quote")},r.createElement(o.Z,null,r.createElement(v,t)))};k.propTypes={quote:i().shape({markType:i().oneOf(["doubleCurved","singleCurved","doubleAngle","singleAngle","lowHighReversedDoubleCurved"]),copy:i().string.isRequired,source:i().shape({heading:i().string,copy:i().string}),cta:i().shape({copy:i().string,type:i().oneOf(["local","external"]),href:i().string}),inverse:i().bool})};var w=k},7436:function(e,t,a){"use strict";var o=a(8440),n=a(5393),c=a(7732),i=a(5174),s=a(5697),l=a.n(s),r=a(7294),m=a(9033),u=n.Z.stablePrefix,p=m.Z.prefix,d=function(e){var t=e.heading,a=e.logosGroup,n=e.ctaCopy,s=e.ctaHref,l=e.hideBorder,m=null;return s&&(m={style:"card",type:"local",heading:n,cta:{href:s}}),r.createElement("section",{"data-autoid":"".concat(u,"--logo-grid"),className:"".concat(p,"--logo-grid")},r.createElement("div",{className:"".concat(p,"--logo-grid__container")},r.createElement("div",{className:"".concat(p,"--logo-grid__wrapper")},r.createElement(o.Z,{heading:t,cta:m},r.createElement("div",{className:"".concat(p,"--logo-grid__row")},a.map((function(e,t){return r.createElement("div",{className:"".concat(p,"--logo-grid__col"),key:t},r.createElement("div",{className:"".concat(p,"--logo-grid__logo"),key:e.label},r.createElement(i.Z,{defaultSrc:e.imgSrc,classname:"".concat(p,"--logo-grid_img"),alt:e.altText,longDescription:e.label})))})))))),!l&&r.createElement(c.Z,null))};d.propTypes={heading:l().string,logosGroup:l().arrayOf(l().shape({label:l().string,imgSrc:l().string,altText:l().string})).isRequired,ctaCopy:l().string,ctaHref:l().string,hideBorder:l().bool},t.Z=d},226:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example-page-b",function(){return a(7157)}])},7157:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return B}});var o=a(5893),n=a(7462),c=a(8440),i=a(7251),s=a(5393),l=a(7732),r=a(1499),m=a(4710),u=a(5697),p=a.n(u),d=a(7294),g=a(9033),h=a(9625),y=s.Z.stablePrefix,f=g.Z.prefix,x=function(e){var t=e.title,a=e.heading,o=e.copy,s=e.mediaType,u=e.mediaData,p=e.items,g=e.cta,x=d.createElement("div",null,t&&d.createElement("h1",{"data-autoid":"".concat(y,"--leadspace-block__title"),className:"".concat(f,"--leadspace-block__title")},t));return d.createElement("div",{"data-autoid":"".concat(y,"--leadspace-block"),className:"".concat(f,"--leadspace-block")},x,d.createElement(c.Z,{heading:a,copy:o},function(e,t){if(t)return d.createElement("div",{"data-autoid":"".concat(y,"--leadspace-block__media"),className:"".concat(f,"--leadspace-block__media")},"image"===e&&d.createElement(r.Z,t),"video"===e&&d.createElement(h.Z,t))}(s,u),d.createElement(m.Z,{style:"vertical-end",heading:p.heading,items:p.items}),d.createElement(i.Z,(0,n.Z)({customClassName:"".concat(f,"--leadspace-block__cta ").concat(f,"--leadspace-block__cta-col")},g))),d.createElement(l.Z,null))};x.propTypes={title:p().string.isRequired,heading:p().string.isRequired,items:p().shape({heading:p().string.isRequired,items:p().arrayOf(p().shape({style:p().oneOf(["text","card","button","feature"]),type:p().oneOfType([p().oneOf(["jump","local","external","download","video"]),p().arrayOf(p().oneOf(["jump","local","external","download","video"]))]),copy:p().string,href:p().string,customClassName:p().string})).isRequired}).isRequired,copy:p().string,mediaType:p().oneOf(["image","video"]),mediaData:p().oneOfType([p().shape({inverse:p().bool,image:p().shape({classname:p().string,sources:p().arrayOf(p().shape({src:p().string,breakpoint:p().oneOfType([p().string,p().number])})),defaultSrc:p().string.isRequired,alt:p().string.isRequired,longDescription:p().string}).isRequired,lightbox:p().bool,heading:p().string,copy:p().string,customClassName:p().string}),p().shape({customClassName:p().string,videoId:p().string.isRequired,showCaption:p().bool,inverse:p().bool})]),cta:p().shape({style:p().oneOf(["text","card","button","feature"]),type:p().oneOfType([p().oneOf(["jump","local","external","download","video"]),p().arrayOf(p().oneOf(["jump","local","external","download","video"]))]),copy:p().string,href:p().string,customClassName:p().string})},x.defaultProps={copy:"",mediaType:null,mediaData:null,cta:null};var b=x,_=a(4908),v=a(259),q=s.Z.stablePrefix,E=g.Z.prefix,k=function(e){var t=e.heading,a=e.items;return d.createElement("div",{"data-autoid":"".concat(q,"--content-group-horizontal"),className:"".concat(E,"--content-group-horizontal")},d.createElement(c.Z,{heading:t,border:!0},a.map((function(e,t){return d.createElement(_.Z,{eyebrow:e.eyebrow,heading:e.heading,copy:e.copy,cta:e.cta,key:t})}))))};k.propTypes={heading:p().string.isRequired,items:p().arrayOf(p().shape({eyebrow:p().string,heading:p().string.isRequired,copy:p().string.isRequired,cta:p().shape({heading:p().string,items:p().arrayOf(p().shape({type:p().oneOfType([p().oneOf(["local","external"]),p().arrayOf(p().oneOf(["local","external"]))]),copy:p().string,href:p().string,customClassName:p().string})).isRequired,iconPlacement:p().oneOf(["left","right"])})})).isRequired};var w=(0,v.Z)(k,"\n  The ContentGroupHorizontal component has been deprecated in favor of the ContentBlockHorizontal component.\n  See ContentBlockHorizontal documentation for more information.\n"),C=a(7348),N=a(4514),Z=a(6493),T=a(66),j=a(7436),O=a(521),S=a(1574),R=a(9540),I={sources:[{src:"images/320/fpo--16x9--320x180--003.jpg",breakpoint:320},{src:"images/480/fpo--16x9--480x270--003.jpg",breakpoint:400},{src:"images/720/fpo--16x9--720x405--003.jpg",breakpoint:672}],alt:"Image alt text",defaultSrc:"images/720/fpo--16x9--720x405--003.jpg"},B=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(C.Z,{theme:"white",menuLabel:"Jump to",stickyOffset:48,children:[(0,o.jsx)("a",{name:"section-1","data-title":"Lead Space Block"}),(0,o.jsx)(b,{title:"Lead Space Block",copy:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",heading:"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",mediaType:"video",mediaData:{videoId:"1_9h94wo6b",showDescription:!0},items:{heading:"Featured products",items:[{type:"local",copy:"IBM Cloud Continuous Delivery",cta:{href:"https://ibm.com"}},{type:"local",copy:"UrbanCode",cta:{href:"https://ibm.com"}},{type:"local",copy:"View all products",cta:{href:"https://ibm.com"}}]},cta:{style:"button",type:"local",buttons:[{type:"local",copy:"Excepteur sint occaecat",href:"https://example.com/"}]}}),(0,o.jsx)("a",{name:"section-2","data-title":"Content Block Segmented"}),(0,o.jsx)(N.Z,{heading:"Content Block Segmented",items:[{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",cta:{type:"local",copy:"Lorem Ipsum dolor sit",href:"https://example.com"}},{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames."},{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",cta:{type:"local",copy:"Lorem Ipsum dolor sit",href:"https://example.com"}},{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames."}]}),(0,o.jsxs)(Z.Z,{nested:!0,type:"2-1",border:!0,children:[(0,o.jsx)("a",{name:"section-3","data-title":"Content Block Segmented (2)"}),(0,o.jsx)(N.Z,{heading:"Content Block Segmented (2)",items:[{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",image:{heading:"Mauris iaculis eget dolor nec hendrerit.",image:I},cta:{type:"local",copy:"Lorem Ipsum dolor sit",href:"https://example.com"}},{heading:"A scelerisque purus semper eget duis at tellus.",copy:"Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",image:{heading:"Mauris iaculis eget dolor nec hendrerit.",image:I}}],cta:{style:"card",disableImage:!0,type:"video",media:{src:"1_9h94wo6b",type:"video"}},mediaType:"image"})]}),(0,o.jsx)(T.Z,{mediaData:{videoId:"1_9h94wo6b",showCaption:!0},mediaType:"video",heading:"Callout With Media",copy:"Porttitor eget dolor morbi non arcu. Et ligula ullamcorper malesuada proin libero nunc consequat. In est ante in nibh mauris cursus mattis. Turpis tincidunt id aliquet risus feugiat in. Vel facilisis volutpat est velit egestas dui."}),(0,o.jsx)("a",{name:"section-4","data-title":"Content Group Horizontal"}),(0,o.jsx)(w,{heading:"Content Group Horizontal",items:[{eyebrow:"Lorem ipsum",heading:"Aliquam condimentum",copy:"Lorem ipsum dolor sit amet, _consectetur_ sellus at elit sollicitudin.",cta:{items:[{type:"local",copy:"Link text",href:"https://example.com"},{type:"external",copy:"External link text",href:"https://example.com"}]}},{eyebrow:"Lorem ipsum",heading:"Aliquam condimentum",copy:"Lorem ipsum dolor sit amet, _consectetur_ adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin.",cta:{items:[{type:"local",copy:"Link text",href:"https://example.com"},{type:"external",copy:"External link text",href:"https://example.com"}]}}]}),(0,o.jsx)("a",{name:"section-5","data-title":"Logo Grid"}),(0,o.jsx)(j.Z,{heading:"Logo Grid",logosGroup:[{title:"Microsoft",imgSrc:"images/logos/logo-microsoft.png",altText:"Image alt text",href:"http://example.com/"},{title:"Dell",imgSrc:"images/logos/logo-dell.png",altText:"Image alt text",href:"http://example.com/"},{title:"Rabobank",imgSrc:"images/logos/logo-rabobank.png",altText:"Image alt text",href:"http://example.com/"},{title:"Adobe",imgSrc:"images/logos/logo-adobe.png",altText:"Image alt text",href:"http://example.com/"},{title:"US Bank",imgSrc:"images/logos/logo-usbank.png",altText:"Image alt text",href:"http://example.com/"},{title:"Cisco",imgSrc:"images/logos/logo-cisco.png",altText:"Image alt text",href:"http://example.com/"}],ctaCopy:"Amet justo donec",ctaHref:"https://www.example.com"}),(0,o.jsx)("a",{name:"section-6","data-title":"Content Block Cards"}),(0,o.jsx)(O.Z,{heading:"Content Block Cards",cards:[{image:{defaultSrc:"images/1312/fpo--1x1--1312x1312--001.jpg",alt:"Image alt text"},eyebrow:"Topic",heading:"Natural language processing.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"images/1312/fpo--4x3--1312x984--002.jpg",alt:"Image alt text"},eyebrow:"Blog",heading:"Natural language processing.",cta:{href:"https://www.example.com"}},{image:{defaultSrc:"images/1312/fpo--2x1--1312x656--003.jpg",alt:"Image alt text"},eyebrow:"Topic",heading:"Natural language processing.",cta:{href:"https://www.example.com"}}]}),(0,o.jsx)("a",{name:"section-7","data-title":"Callout Quote"}),(0,o.jsx)(S.Z,{quote:{copy:"Callout Quote: Duis aute irure dolor in reprehenderit",source:{heading:"Lorem ipsum",copy:"dolor sit amet"},cta:{copy:"Link with Icon",type:"local",href:"https://example.com"}}})]}),(0,o.jsx)("div",{className:"bx--grid",children:(0,o.jsx)("div",{className:"bx--row",children:(0,o.jsx)("div",{className:"bx--col-sm-4 bx--col-lg-12 bx--offset-lg-4",children:(0,o.jsx)(R.Z,{theme:"white",cta:{style:"button",type:"local",buttons:[{type:"local",copy:"Contact sales",href:"https://example.com/"}]},items:[{heading:"Get connected",copy:"IBM DevOps partners have a wide range of expertise.\n                Find one to build the right solution for you.",cta:{copy:"Find a partner",type:"local",href:"https://example.com/"}},{heading:"Learn how",copy:"Dig into more self-directed learning about DevOps methodologies.",cta:{copy:"Browse tutorials",type:"local",href:"https://example.com/"}}],heading:"CTA Section",copy:"Want to discuss your options with a DevOps expert? Contact our sales team to evaluate your needs."})})})})]})}}},function(e){e.O(0,[6011,6628,3413,2358,9774,532,2888,179],(function(){return t=226,e(e.s=t);var t}));var t=e.O();_N_E=t}]);