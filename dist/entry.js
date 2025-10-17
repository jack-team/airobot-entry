var J=Object.defineProperty;var D=(b,v,x)=>v in b?J(b,v,{enumerable:!0,configurable:!0,writable:!0,value:x}):b[v]=x;var E=(b,v,x)=>D(b,typeof v!="symbol"?v+"":v,x);(function(b){typeof define=="function"&&define.amd?define(b):b()})(function(){"use strict";const b=`.ideabosque-ai-drawer {
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
  background-color: transparent !important;
  font-family: IBM Plex Sans;
}

.ideabosque-ai-iframe {
  border-radius: 20px;
  overflow: hidden;
  border: 0;
  position: relative;
  z-index: 1;
}

.ideabosque-ai-drawer-body {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  transform: translateX(-100%);
  background: #faf7f0;
  box-shadow: 0px 4px 12px 0px #00000014;
}

.ideabosque-ai-drawer-body .ideabosque-ai-iframe {
  height: 100% !important;
  border-radius: 0 !important
}

.ideabosque-ai-drawer-body {
  transition: all .3s ease-in-out
}

.ideabosque-ai-drawer-switch {
  transition: all .3s ease
}

.ideabosque-ai-drawer-switch {
  position: fixed;
  bottom: 104px;
  left: 0;
  height: 56px;
  background: #fff;
  border-radius: 28px;
  padding: 0 4px;
  border: 2px solid #F3F4F6;
  box-shadow: 0px 4px 12px 0px #00000014;
  cursor: pointer;
  transform: translateX(24px);
  opacity: 1;
  z-index: 0;
  display: flex;
  align-items: center;
}

.ideabosque-ai-drawer-switch::after {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  background-image: url(https://shopify-airobot-entry.pages.dev/send.svg?v=1.0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.ideabosque-ai-window-close {
  width: 32px;
  height: 32px;
  z-index: 2;
  position: absolute;
  right: 16px;
  top: 16px;
  background-image: url(https://shopify-airobot-entry.pages.dev/close.svg?v=1.0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer
}

.ideabosque-ai-drawer-switch>.ideabosque-ai-drawer-switch-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url(https://shopify-airobot-entry.pages.dev/avatar.svg?v=1.0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: block !important;
}

.ideabosque-ai-drawer-switch>.ideabosque-ai-drawer-switch-content {
  margin: 0 12px;
  flex: 1;
}

.ideabosque-ai-drawer-switch-title {
  font-size: 12px;
  color: #2E2E3A;
  font-weight: 700;
}

.ideabosque-ai-drawer-switch-desc {
  font-size: 16px;
  color: #2E2E3A;
  font-weight: 400;
}

.ideabosque-ai-drawer-open .ideabosque-ai-drawer-body {
  transform: translateX(0);
}

.ideabosque-ai-drawer-open .ideabosque-ai-drawer-switch {
  visibility: hidden;
  transform: translateX(-100%);
  opacity: 0;
}

@media(max-width:640px) {
  .ideabosque-ai-iframe {
    width: 100vw !important;
  }
}

@media(max-width:980px) {

}`;function v(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var x={exports:{}},C;function L(){return C||(C=1,function(s){var e=Object.prototype.hasOwnProperty,t="~";function c(){}Object.create&&(c.prototype=Object.create(null),new c().__proto__||(t=!1));function h(a,n,r){this.fn=a,this.context=n,this.once=r||!1}function w(a,n,r,o,m){if(typeof r!="function")throw new TypeError("The listener must be a function");var p=new h(r,o||a,m),l=t?t+n:n;return a._events[l]?a._events[l].fn?a._events[l]=[a._events[l],p]:a._events[l].push(p):(a._events[l]=p,a._eventsCount++),a}function u(a,n){--a._eventsCount===0?a._events=new c:delete a._events[n]}function d(){this._events=new c,this._eventsCount=0}d.prototype.eventNames=function(){var n=[],r,o;if(this._eventsCount===0)return n;for(o in r=this._events)e.call(r,o)&&n.push(t?o.slice(1):o);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(r)):n},d.prototype.listeners=function(n){var r=t?t+n:n,o=this._events[r];if(!o)return[];if(o.fn)return[o.fn];for(var m=0,p=o.length,l=new Array(p);m<p;m++)l[m]=o[m].fn;return l},d.prototype.listenerCount=function(n){var r=t?t+n:n,o=this._events[r];return o?o.fn?1:o.length:0},d.prototype.emit=function(n,r,o,m,p,l){var y=t?t+n:n;if(!this._events[y])return!1;var i=this._events[y],k=arguments.length,q,f;if(i.fn){switch(i.once&&this.removeListener(n,i.fn,void 0,!0),k){case 1:return i.fn.call(i.context),!0;case 2:return i.fn.call(i.context,r),!0;case 3:return i.fn.call(i.context,r,o),!0;case 4:return i.fn.call(i.context,r,o,m),!0;case 5:return i.fn.call(i.context,r,o,m,p),!0;case 6:return i.fn.call(i.context,r,o,m,p,l),!0}for(f=1,q=new Array(k-1);f<k;f++)q[f-1]=arguments[f];i.fn.apply(i.context,q)}else{var X=i.length,_;for(f=0;f<X;f++)switch(i[f].once&&this.removeListener(n,i[f].fn,void 0,!0),k){case 1:i[f].fn.call(i[f].context);break;case 2:i[f].fn.call(i[f].context,r);break;case 3:i[f].fn.call(i[f].context,r,o);break;case 4:i[f].fn.call(i[f].context,r,o,m);break;default:if(!q)for(_=1,q=new Array(k-1);_<k;_++)q[_-1]=arguments[_];i[f].fn.apply(i[f].context,q)}}return!0},d.prototype.on=function(n,r,o){return w(this,n,r,o,!1)},d.prototype.once=function(n,r,o){return w(this,n,r,o,!0)},d.prototype.removeListener=function(n,r,o,m){var p=t?t+n:n;if(!this._events[p])return this;if(!r)return u(this,p),this;var l=this._events[p];if(l.fn)l.fn===r&&(!m||l.once)&&(!o||l.context===o)&&u(this,p);else{for(var y=0,i=[],k=l.length;y<k;y++)(l[y].fn!==r||m&&!l[y].once||o&&l[y].context!==o)&&i.push(l[y]);i.length?this._events[p]=i.length===1?i[0]:i:u(this,p)}return this},d.prototype.removeAllListeners=function(n){var r;return n?(r=t?t+n:n,this._events[r]&&u(this,r)):(this._events=new c,this._eventsCount=0),this},d.prototype.off=d.prototype.removeListener,d.prototype.addListener=d.prototype.on,d.prefixed=t,d.EventEmitter=d,s.exports=d}(x)),x.exports}var A=L();const $=v(A),g="ideabosque";class N{constructor(e){E(this,"iframe");E(this,"event",new $);E(this,"init",()=>{window.addEventListener("message",this.onMessage)});E(this,"sendMessage",(e,t)=>{const c=JSON.stringify(t),h=`${g}-${e}`;this.win.postMessage({type:h,data:c},"*")});E(this,"on",(e,t)=>(this.event.on(e,t),this.event));E(this,"onMessage",e=>{var h;const t=e.data.type;let c=e.data.data;if((h=t==null?void 0:t.includes)!=null&&h.call(t,g)){const w=t.replace(`${g}-`,"");c&&(c=JSON.parse(c)),this.event.emit(w,c)}});this.iframe=e,this.init()}get win(){return this.iframe.contentWindow}}const S=s=>{const e=s.getAttribute("width")||640,t=s.getAttribute("height")||600;return{width:e,height:t}},P=()=>new Promise((s,e)=>{window.navigator.geolocation.getCurrentPosition(c=>{s(c.coords.toJSON())},async c=>{e(c)})}),z={stringify:s=>Object.keys(s).map(t=>`${t}=${s[t]}`).join("&")};let O="https://shopify-ai-chat.pages.dev";const M="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap",I=()=>new Promise(s=>{const e=document.querySelector("head"),t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.href=M,t.onload=()=>s(void 0),e==null||e.appendChild(t)}),B=()=>{const s=document.querySelector("head"),e=document.createElement("style");e.setAttribute("data-role",`${g}-style`),e.innerHTML=b,s==null||s.appendChild(e)},F=()=>{const s=`script[data-role='${g}-ai']`;return document.querySelector(s)},j=(s,e)=>{B();const t=S(e),c=document.createElement("iframe"),h=e.getAttribute("iframe-url"),w=e.getAttribute("agent"),u=e.getAttribute("userId"),d=e.getAttribute("question"),a=e.getAttribute("endpoint-id"),n=e.getAttribute("coordination"),r=e.getAttribute("agent-name")||"";h&&(O=h);const o=z.stringify({agent:w,userId:u,question:d,agentName:r,endpointId:a,coordination:n,mode:"preview"});return c.src=`${O}?${o}`,c.className=`${g}-ai-iframe`,c.style.width=t.width+"px",c.style.height=t.height+"px",c.setAttribute("frameborder","0"),c.setAttribute("allow","geolocation"),s.appendChild(c),c},T=s=>{const e=new N(s);e.on("get-position",async()=>{let t=!0,c={};try{c=await P()}catch{t=!1}e.sendMessage("get-position",{...c,success:t})})};(()=>{let s=!1,e=null;const t=F(),c=()=>{const u=document.createElement("div"),d=document.createElement("div");return u.className=`${g}-ai-window-close`,u.appendChild(d),u},h=()=>{const u=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),n=`${g}-ai-drawer-switch`;return d.className=`${g}-ai-drawer-switch-icon`,a.className=`${g}-ai-drawer-switch-content`,u.className=n,u.appendChild(d),u.appendChild(a),a.innerHTML=`
      <div class="${g}-ai-drawer-switch-title">B2B Chat Agent</div>
      <div class="${g}-ai-drawer-switch-desc">Get Net 30 at checkout</div>
    `,u},w=async(u=!0)=>{var l;const d=document.body;e=document.createElement("div");const a=document.createElement("div"),n=c(),r=h(),o=`${g}-ai-drawer`,m=`${g}-ai-drawer-body`,p=`${g}-ai-drawer-open`;e.className=o,e.setAttribute("popover","manual"),a.className=m,e.appendChild(a),e.appendChild(r),a.appendChild(n),d.appendChild(e),T(j(a,t)),u&&((l=e==null?void 0:e.showPopover)==null||l.call(e),e.classList.add(p)),r.addEventListener("click",()=>{e==null||e.classList.toggle(p)}),n.addEventListener("click",()=>{e==null||e.classList.toggle(p)})};window.initIdeabosqueAi=async(u=!0)=>{s||(await I(),w(u),s=!0)},window.removeIdeabosqueAi=()=>{e&&s&&(document.body.removeChild(e),s=!1)}})()});
