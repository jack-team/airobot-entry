var B=Object.defineProperty;var J=(v,w,x)=>w in v?B(v,w,{enumerable:!0,configurable:!0,writable:!0,value:x}):v[w]=x;var q=(v,w,x)=>J(v,typeof w!="symbol"?w+"":w,x);(function(v){typeof define=="function"&&define.amd?define(v):v()})(function(){"use strict";const v=`.ideabosque-ai-iframe {
  border-radius: 20px;
  background: #fff;
  overflow: hidden;
  border: 0;
}

.ideabosque-ai-drawer {
  height: 0;
  width: 0;
  position: fixed;
  padding: 0;
  bottom: 0 !important;
  right: unset;
  top: unset;
  left: unset;
  border: 0;
  box-sizing: border-box;
  overflow: hidden;
  margin: 0;
  background-color: transparent !important
}

.ideabosque-ai-drawer-body {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  transform: translateX(-100%);
  transition: all .3s ease-in-out
}

.ideabosque-ai-drawer-body .ideabosque-ai-iframe {
  height: 100% !important;
  border-radius: 0 !important
}

.ideabosque-ai-drawer-switch {
  position: absolute;
  bottom: 104px;
  right: 0;
  background: #3b6351;
  transform: translateX(calc(100% + 27px));
  background: 56px;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  border: 2px solid #F3F4F6;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 4px;
  cursor: pointer;
}

.ideabosque-ai-window-close {
  position: absolute;
  right: 12px;
  top: 12px;
  background-image: url(https://shopify-airobot-entry.pages.dev/close.svg?v=1.0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.ideabosque-ai-drawer-switch div {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: url(https://shopify-airobot-entry.pages.dev/avatar.svg?v=1.0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.ideabosque-ai-drawer-open .ideabosque-ai-drawer-body {
  transform: translateX(0)
}

.ideabosque-ai-drawer-open .ideabosque-ai-drawer-switch::after {
  transform: rotate(0)
}

@media(max-width:640px) {
  .ideabosque-ai-iframe {
    margin-bottom: 24px;
    width: 100% !important;
    height: 580px !important
  }
}

@media(max-width:980px) {
  .ideabosque-ai-iframe {
    margin-bottom: 24px
  }
}`;function w(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var x={exports:{}},E;function A(){return E||(E=1,function(i){var e=Object.prototype.hasOwnProperty,t="~";function a(){}Object.create&&(a.prototype=Object.create(null),new a().__proto__||(t=!1));function p(u,n,r){this.fn=u,this.context=n,this.once=r||!1}function b(u,n,r,s,h){if(typeof r!="function")throw new TypeError("The listener must be a function");var f=new p(r,s||u,h),d=t?t+n:n;return u._events[d]?u._events[d].fn?u._events[d]=[u._events[d],f]:u._events[d].push(f):(u._events[d]=f,u._eventsCount++),u}function y(u,n){--u._eventsCount===0?u._events=new a:delete u._events[n]}function c(){this._events=new a,this._eventsCount=0}c.prototype.eventNames=function(){var n=[],r,s;if(this._eventsCount===0)return n;for(s in r=this._events)e.call(r,s)&&n.push(t?s.slice(1):s);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(r)):n},c.prototype.listeners=function(n){var r=t?t+n:n,s=this._events[r];if(!s)return[];if(s.fn)return[s.fn];for(var h=0,f=s.length,d=new Array(f);h<f;h++)d[h]=s[h].fn;return d},c.prototype.listenerCount=function(n){var r=t?t+n:n,s=this._events[r];return s?s.fn?1:s.length:0},c.prototype.emit=function(n,r,s,h,f,d){var m=t?t+n:n;if(!this._events[m])return!1;var o=this._events[m],k=arguments.length,_,l;if(o.fn){switch(o.once&&this.removeListener(n,o.fn,void 0,!0),k){case 1:return o.fn.call(o.context),!0;case 2:return o.fn.call(o.context,r),!0;case 3:return o.fn.call(o.context,r,s),!0;case 4:return o.fn.call(o.context,r,s,h),!0;case 5:return o.fn.call(o.context,r,s,h,f),!0;case 6:return o.fn.call(o.context,r,s,h,f,d),!0}for(l=1,_=new Array(k-1);l<k;l++)_[l-1]=arguments[l];o.fn.apply(o.context,_)}else{var T=o.length,O;for(l=0;l<T;l++)switch(o[l].once&&this.removeListener(n,o[l].fn,void 0,!0),k){case 1:o[l].fn.call(o[l].context);break;case 2:o[l].fn.call(o[l].context,r);break;case 3:o[l].fn.call(o[l].context,r,s);break;case 4:o[l].fn.call(o[l].context,r,s,h);break;default:if(!_)for(O=1,_=new Array(k-1);O<k;O++)_[O-1]=arguments[O];o[l].fn.apply(o[l].context,_)}}return!0},c.prototype.on=function(n,r,s){return b(this,n,r,s,!1)},c.prototype.once=function(n,r,s){return b(this,n,r,s,!0)},c.prototype.removeListener=function(n,r,s,h){var f=t?t+n:n;if(!this._events[f])return this;if(!r)return y(this,f),this;var d=this._events[f];if(d.fn)d.fn===r&&(!h||d.once)&&(!s||d.context===s)&&y(this,f);else{for(var m=0,o=[],k=d.length;m<k;m++)(d[m].fn!==r||h&&!d[m].once||s&&d[m].context!==s)&&o.push(d[m]);o.length?this._events[f]=o.length===1?o[0]:o:y(this,f)}return this},c.prototype.removeAllListeners=function(n){var r;return n?(r=t?t+n:n,this._events[r]&&y(this,r)):(this._events=new a,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=t,c.EventEmitter=c,i.exports=c}(x)),x.exports}var L=A();const N=w(L),g="ideabosque";class P{constructor(e){q(this,"iframe");q(this,"event",new N);q(this,"init",()=>{window.addEventListener("message",this.onMessage)});q(this,"sendMessage",(e,t)=>{const a=JSON.stringify(t),p=`${g}-${e}`;this.win.postMessage({type:p,data:a},"*")});q(this,"on",(e,t)=>(this.event.on(e,t),this.event));q(this,"onMessage",e=>{var p;const t=e.data.type;let a=e.data.data;if((p=t==null?void 0:t.includes)!=null&&p.call(t,g)){const b=t.replace(`${g}-`,"");a&&(a=JSON.parse(a)),this.event.emit(b,a)}});this.iframe=e,this.init()}get win(){return this.iframe.contentWindow}}const S=i=>{const e=i.getAttribute("width")||640,t=i.getAttribute("height")||600;return{width:e,height:t}},$=()=>new Promise((i,e)=>{window.navigator.geolocation.getCurrentPosition(a=>{i(a.coords.toJSON())},async a=>{e(a)})}),I={stringify:i=>Object.keys(i).map(t=>`${t}=${i[t]}`).join("&")};let C="https://shopify-ai-chat.pages.dev";const M=()=>{const i=document.querySelector("head"),e=document.createElement("style");e.setAttribute("data-role",`${g}-style`),e.innerHTML=v,i==null||i.appendChild(e)},z=()=>{const i=`script[data-role='${g}-ai']`;return document.querySelector(i)},F=(i,e)=>{M();const t=S(e),a=document.createElement("iframe"),p=e.getAttribute("iframe-url"),b=e.getAttribute("agent"),y=e.getAttribute("userId"),c=e.getAttribute("question"),u=e.getAttribute("endpoint-id"),n=e.getAttribute("coordination"),r=e.getAttribute("agent-name")||"";p&&(C=p);const s=I.stringify({agent:b,userId:y,question:c,agentName:r,endpointId:u,coordination:n,mode:"preview"});return a.src=`${C}?${s}`,a.className=`${g}-ai-iframe`,a.style.width=t.width+"px",a.style.height=t.height+"px",a.setAttribute("frameborder","0"),a.setAttribute("allow","geolocation"),i.appendChild(a),a},j=i=>{const e=new P(i);e.on("get-position",async()=>{let t=!0,a={};try{a=await $()}catch{t=!1}e.sendMessage("get-position",{...a,success:t})})};(()=>{let i=!1,e=null;const t=z(),a=(t==null?void 0:t.getAttribute("open-type"))||"screen",p=c=>{!c||i||(j(F(c,t)),i=!0)},b=()=>{const c=document.createElement("div");return c.className=`${g}-ai-window-close`,c},y=(c=!0)=>{var o;const u=document.body;e=document.createElement("div");const n=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),h=`${g}-ai-drawer`,f=`${g}-ai-drawer-body`,d=`${g}-ai-drawer-switch`,m=`${g}-ai-drawer-open`;e.className=h,e.setAttribute("popover","manual"),n.className=f,r.className=d,e.appendChild(n),n.appendChild(r),n.appendChild(b()),r.appendChild(s),u.appendChild(e),p(n),c&&((o=e==null?void 0:e.showPopover)==null||o.call(e),e.classList.add(m)),r.addEventListener("click",()=>{e==null||e.classList.toggle(m)})};if(a==="screen"){const c=t==null?void 0:t.getAttribute("selector");c&&(e=document.querySelector(c),p(e))}window.initIdeabosqueAi=(c=!0)=>{a!=="drawer"||i||y(c)},window.removeIdeabosqueAi=()=>{a==="drawer"&&e&&i&&(document.body.removeChild(e),i=!1)}})()});
