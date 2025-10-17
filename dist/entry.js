var B=Object.defineProperty;var J=(b,w,x)=>w in b?B(b,w,{enumerable:!0,configurable:!0,writable:!0,value:x}):b[w]=x;var q=(b,w,x)=>J(b,typeof w!="symbol"?w+"":w,x);(function(b){typeof define=="function"&&define.amd?define(b):b()})(function(){"use strict";const b=`.ideabosque-ai-iframe {
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
  top: 50%;
  right: 0;
  background: #3b6351;
  transform: translateY(-50%) translateX(100%);
  background: 56px;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  border: 2px solid #F3F4F6;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 4px;
}

.ideabosque-ai-drawer-switch::after {
  content: "";
  width: 12px;
  height: 12px;
  display: block;
  background-image: url(https://airobot-entry.pages.dev/arrow.png?v=1.0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transform: rotate(180deg);
  transition: all .2s linear
}

.ideabosque-ai-drawer-switch div {
  width: 100%;
  height: 100%;
  background: #FBF7F0;
  border-radius: 50%;
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
}`;function w(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var x={exports:{}},E;function C(){return E||(E=1,function(s){var e=Object.prototype.hasOwnProperty,t="~";function a(){}Object.create&&(a.prototype=Object.create(null),new a().__proto__||(t=!1));function p(c,n,r){this.fn=c,this.context=n,this.once=r||!1}function g(c,n,r,o,m){if(typeof r!="function")throw new TypeError("The listener must be a function");var f=new p(r,o||c,m),u=t?t+n:n;return c._events[u]?c._events[u].fn?c._events[u]=[c._events[u],f]:c._events[u].push(f):(c._events[u]=f,c._eventsCount++),c}function h(c,n){--c._eventsCount===0?c._events=new a:delete c._events[n]}function d(){this._events=new a,this._eventsCount=0}d.prototype.eventNames=function(){var n=[],r,o;if(this._eventsCount===0)return n;for(o in r=this._events)e.call(r,o)&&n.push(t?o.slice(1):o);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(r)):n},d.prototype.listeners=function(n){var r=t?t+n:n,o=this._events[r];if(!o)return[];if(o.fn)return[o.fn];for(var m=0,f=o.length,u=new Array(f);m<f;m++)u[m]=o[m].fn;return u},d.prototype.listenerCount=function(n){var r=t?t+n:n,o=this._events[r];return o?o.fn?1:o.length:0},d.prototype.emit=function(n,r,o,m,f,u){var y=t?t+n:n;if(!this._events[y])return!1;var i=this._events[y],k=arguments.length,_,l;if(i.fn){switch(i.once&&this.removeListener(n,i.fn,void 0,!0),k){case 1:return i.fn.call(i.context),!0;case 2:return i.fn.call(i.context,r),!0;case 3:return i.fn.call(i.context,r,o),!0;case 4:return i.fn.call(i.context,r,o,m),!0;case 5:return i.fn.call(i.context,r,o,m,f),!0;case 6:return i.fn.call(i.context,r,o,m,f,u),!0}for(l=1,_=new Array(k-1);l<k;l++)_[l-1]=arguments[l];i.fn.apply(i.context,_)}else{var T=i.length,O;for(l=0;l<T;l++)switch(i[l].once&&this.removeListener(n,i[l].fn,void 0,!0),k){case 1:i[l].fn.call(i[l].context);break;case 2:i[l].fn.call(i[l].context,r);break;case 3:i[l].fn.call(i[l].context,r,o);break;case 4:i[l].fn.call(i[l].context,r,o,m);break;default:if(!_)for(O=1,_=new Array(k-1);O<k;O++)_[O-1]=arguments[O];i[l].fn.apply(i[l].context,_)}}return!0},d.prototype.on=function(n,r,o){return g(this,n,r,o,!1)},d.prototype.once=function(n,r,o){return g(this,n,r,o,!0)},d.prototype.removeListener=function(n,r,o,m){var f=t?t+n:n;if(!this._events[f])return this;if(!r)return h(this,f),this;var u=this._events[f];if(u.fn)u.fn===r&&(!m||u.once)&&(!o||u.context===o)&&h(this,f);else{for(var y=0,i=[],k=u.length;y<k;y++)(u[y].fn!==r||m&&!u[y].once||o&&u[y].context!==o)&&i.push(u[y]);i.length?this._events[f]=i.length===1?i[0]:i:h(this,f)}return this},d.prototype.removeAllListeners=function(n){var r;return n?(r=t?t+n:n,this._events[r]&&h(this,r)):(this._events=new a,this._eventsCount=0),this},d.prototype.off=d.prototype.removeListener,d.prototype.addListener=d.prototype.on,d.prefixed=t,d.EventEmitter=d,s.exports=d}(x)),x.exports}var L=C();const N=w(L),v="ideabosque";class P{constructor(e){q(this,"iframe");q(this,"event",new N);q(this,"init",()=>{window.addEventListener("message",this.onMessage)});q(this,"sendMessage",(e,t)=>{const a=JSON.stringify(t),p=`${v}-${e}`;this.win.postMessage({type:p,data:a},"*")});q(this,"on",(e,t)=>(this.event.on(e,t),this.event));q(this,"onMessage",e=>{var p;const t=e.data.type;let a=e.data.data;if((p=t==null?void 0:t.includes)!=null&&p.call(t,v)){const g=t.replace(`${v}-`,"");a&&(a=JSON.parse(a)),this.event.emit(g,a)}});this.iframe=e,this.init()}get win(){return this.iframe.contentWindow}}const S=s=>{const e=s.getAttribute("width")||640,t=s.getAttribute("height")||600;return{width:e,height:t}},$=()=>new Promise((s,e)=>{window.navigator.geolocation.getCurrentPosition(a=>{s(a.coords.toJSON())},async a=>{e(a)})}),F={stringify:s=>Object.keys(s).map(t=>`${t}=${s[t]}`).join("&")};let A="https://shopify-ai-chat.pages.dev";const I=()=>{const s=document.querySelector("head"),e=document.createElement("style");e.setAttribute("data-role",`${v}-style`),e.innerHTML=b,s==null||s.appendChild(e)},M=()=>{const s=`script[data-role='${v}-ai']`;return document.querySelector(s)},j=(s,e)=>{I();const t=S(e),a=document.createElement("iframe"),p=e.getAttribute("iframe-url"),g=e.getAttribute("agent"),h=e.getAttribute("userId"),d=e.getAttribute("question"),c=e.getAttribute("endpoint-id"),n=e.getAttribute("coordination"),r=e.getAttribute("agent-name")||"";p&&(A=p);const o=F.stringify({agent:g,userId:h,question:d,agentName:r,endpointId:c,coordination:n,mode:"preview"});return a.src=`${A}?${o}`,a.className=`${v}-ai-iframe`,a.style.width=t.width+"px",a.style.height=t.height+"px",a.setAttribute("frameborder","0"),a.setAttribute("allow","geolocation"),s.appendChild(a),a},z=s=>{const e=new P(s);e.on("get-position",async()=>{let t=!0,a={};try{a=await $()}catch{t=!1}e.sendMessage("get-position",{...a,success:t})})};(()=>{let s=!1,e=null;const t=M(),a=(t==null?void 0:t.getAttribute("open-type"))||"screen",p=h=>{!h||s||(z(j(h,t)),s=!0)},g=(h=!0)=>{var u;e=document.createElement("div");const d=document.createElement("div"),c=document.createElement("div"),n=document.createElement("div"),r=`${v}-ai-drawer`,o=`${v}-ai-drawer-body`,m=`${v}-ai-drawer-switch`,f=`${v}-ai-drawer-open`;e.className=r,e.setAttribute("popover","manual"),d.className=o,c.className=m,e.appendChild(d),d.appendChild(c),c.appendChild(n),document.body.appendChild(e),p(d),h&&((u=e==null?void 0:e.showPopover)==null||u.call(e),e.classList.add(f)),c.addEventListener("click",()=>{e==null||e.classList.toggle(f)})};if(a==="screen"){const h=t==null?void 0:t.getAttribute("selector");h&&(e=document.querySelector(h),p(e))}window.initIdeabosqueAi=(h=!0)=>{a!=="drawer"||s||g(h)},window.removeIdeabosqueAi=()=>{a==="drawer"&&e&&s&&(document.body.removeChild(e),s=!1)}})()});
