"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8386],{8386:function(e,t,o){o.r(t),o.d(t,{CustomElement:function(){return r.Z},descriptor:function(){return u},propTypes:function(){return f}});var n=o(7147),r=o(6881),i=o(7921),a=o(5697),s=o.n(a),l=o(9033),c=o(8474),d=(l.Z.prefix,c.Z.stablePrefix),u=Object.assign({},n.descriptor,{altAriaLabel:{},colorScheme:{attribute:"color-scheme"},parentHref:{attribute:"parent-href"},iconInline:{serialize:i._P},slot:{}}),f=Object.assign({},n.propTypes,{altAriaLabel:s().string,colorScheme:s().string,parentHref:s().string,iconInline:s().bool,slot:s().string});const h=(0,i.ZP)("".concat(d,"-card-footer"),u);h.propTypes=f,t.default=h},6881:function(e,t,o){var n=o(6424),r=o(3237),i=o(1120),a=o(6254),s=o(9033),l=o(8474),c=o(4747),d=o(5779),u=o(3699);let f,h,p,_=e=>e;const{prefix:k}=s.Z,{stablePrefix:y}=l.Z;let b=(0,n.Z)([(0,a.Mo)(`${y}-card-footer`)],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,a.IO)(`.${y}-ce--card__footer--static`)],key:"_staticNode",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_hasCopy",value:()=>!1},{kind:"get",key:"_shouldUseParentLink",value:function(){const{href:e,parentHref:t}=this;return Boolean(t)&&(!e||t===e)}},{kind:"method",key:"_handleSlotChange",value:function({target:e}){if(!e.name){const t=e.assignedNodes().some((e=>e.nodeType!==Node.TEXT_NODE||e.textContent.trim()));this._hasCopy=t}}},{kind:"method",key:"_renderContent",value:function(){const{_hasCopy:e}=this;return(0,a.dy)(f||(f=_`
      <span ?hidden="${0}" class="${0}--card__cta__copy">
        <slot @slotchange="${0}"></slot>
      </span>
    `),!e,k,this._handleSlotChange)}},{kind:"method",key:"_renderInner",value:function(){return this.iconPlacement===c.T.LEFT?(0,a.dy)(h||(h=_`
          ${0}${0}
        `),this._renderIcon(),this._renderContent()):(0,a.dy)(p||(p=_`
          ${0}${0}
        `),this._renderContent(),this._renderIcon())}},{kind:"field",decorators:[(0,a.Cb)({reflect:!1})],key:"altAriaLabel",value:void 0},{kind:"field",decorators:[(0,a.Cb)({attribute:"color-scheme",reflect:!0})],key:"colorScheme",value:()=>d.t.REGULAR},{kind:"field",decorators:[(0,a.Cb)({attribute:"parent-href",reflect:!0})],key:"parentHref",value:void 0},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"iconInline",value:()=>!0},{kind:"field",decorators:[(0,a.Cb)({reflect:!0})],key:"slot",value:()=>"footer"},{kind:"method",key:"updated",value:function(){var e,t,n,a;((0,r.Z)((0,i.Z)(o.prototype),"updated",this).call(this),this._hasCopy)?null===(e=this.shadowRoot)||void 0===e||null===(t=e.querySelector("a"))||void 0===t||t.removeAttribute("aria-label"):null===(n=this.shadowRoot)||void 0===n||null===(a=n.querySelector("a"))||void 0===a||a.setAttribute("aria-label",this.altAriaLabel?this.altAriaLabel:"");const{iconInline:s,iconPlacement:l,_staticNode:d,_linkNode:u}=this,f=null!==u&&void 0!==u?u:d;f.classList.add(`${k}--card__footer`),f.classList.add(`${y}-ce--card__footer`),f.classList.toggle(`${k}--card__footer__icon-left`,l===c.T.LEFT),s&&l===c.T.RIGHT&&f.classList.add(`${k}--link-with-icon--inline-icon`)}},{kind:"get",static:!0,key:"stableSelector",value:function(){return`${y}--card-footer`}},{kind:"field",static:!0,key:"styles",value:()=>u.Z}]}}),c.Z);t.Z=b}}]);