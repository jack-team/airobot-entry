var F=Object.defineProperty;var J=(v,w,x)=>w in v?F(v,w,{enumerable:!0,configurable:!0,writable:!0,value:x}):v[w]=x;var O=(v,w,x)=>J(v,typeof w!="symbol"?w+"":w,x);(function(v){typeof define=="function"&&define.amd?define(v):v()})(function(){"use strict";const v=`.ideabosque-ai-iframe {
  border-radius: 20px;
  background: #fff;
  overflow: hidden;
  border: 0;
  box-shadow: 0 -4px 16px 0 rgba(0, 0, 0, .25)
}

.ideabosque-ai-drawer {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0
}

.ideabosque-ai-drawer-body {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateX(100%);
  transition: all .3s ease-in-out
}

.ideabosque-ai-drawer-body .ideabosque-ai-iframe {
  height: 100% !important;
  border-radius: 0 !important
}

.ideabosque-ai-drawer-switch {
  position: absolute;
  top: 50%;
  background: #3b6351;
  transform: translateY(-50%) translateX(-100%);
  cursor: pointer;
  padding: 16px 6px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    width: 16px;
    height: 16px;
    display: block;
    background-image: url('https://airobot-entry.pages.dev/arrow.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}

.ideabosque-ai-drawer-switch div {
  writing-mode: vertical-rl;
  text-align: center;
  font-size: 12px;
  color: #fff;
  font-weight: 550
}

.ideabosque-ai-drawer-open .ideabosque-ai-drawer-body {
  transform: translateX(0)
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
}`;function w(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var x={exports:{}},q;function L(){return q||(q=1,function(a){var t=Object.prototype.hasOwnProperty,e="~";function s(){}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(e=!1));function p(c,n,o){this.fn=c,this.context=n,this.once=o||!1}function g(c,n,o,i,m){if(typeof o!="function")throw new TypeError("The listener must be a function");var f=new p(o,i||c,m),u=e?e+n:n;return c._events[u]?c._events[u].fn?c._events[u]=[c._events[u],f]:c._events[u].push(f):(c._events[u]=f,c._eventsCount++),c}function h(c,n){--c._eventsCount===0?c._events=new s:delete c._events[n]}function l(){this._events=new s,this._eventsCount=0}l.prototype.eventNames=function(){var n=[],o,i;if(this._eventsCount===0)return n;for(i in o=this._events)t.call(o,i)&&n.push(e?i.slice(1):i);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(o)):n},l.prototype.listeners=function(n){var o=e?e+n:n,i=this._events[o];if(!i)return[];if(i.fn)return[i.fn];for(var m=0,f=i.length,u=new Array(f);m<f;m++)u[m]=i[m].fn;return u},l.prototype.listenerCount=function(n){var o=e?e+n:n,i=this._events[o];return i?i.fn?1:i.length:0},l.prototype.emit=function(n,o,i,m,f,u){var y=e?e+n:n;if(!this._events[y])return!1;var r=this._events[y],k=arguments.length,_,d;if(r.fn){switch(r.once&&this.removeListener(n,r.fn,void 0,!0),k){case 1:return r.fn.call(r.context),!0;case 2:return r.fn.call(r.context,o),!0;case 3:return r.fn.call(r.context,o,i),!0;case 4:return r.fn.call(r.context,o,i,m),!0;case 5:return r.fn.call(r.context,o,i,m,f),!0;case 6:return r.fn.call(r.context,o,i,m,f,u),!0}for(d=1,_=new Array(k-1);d<k;d++)_[d-1]=arguments[d];r.fn.apply(r.context,_)}else{var B=r.length,E;for(d=0;d<B;d++)switch(r[d].once&&this.removeListener(n,r[d].fn,void 0,!0),k){case 1:r[d].fn.call(r[d].context);break;case 2:r[d].fn.call(r[d].context,o);break;case 3:r[d].fn.call(r[d].context,o,i);break;case 4:r[d].fn.call(r[d].context,o,i,m);break;default:if(!_)for(E=1,_=new Array(k-1);E<k;E++)_[E-1]=arguments[E];r[d].fn.apply(r[d].context,_)}}return!0},l.prototype.on=function(n,o,i){return g(this,n,o,i,!1)},l.prototype.once=function(n,o,i){return g(this,n,o,i,!0)},l.prototype.removeListener=function(n,o,i,m){var f=e?e+n:n;if(!this._events[f])return this;if(!o)return h(this,f),this;var u=this._events[f];if(u.fn)u.fn===o&&(!m||u.once)&&(!i||u.context===i)&&h(this,f);else{for(var y=0,r=[],k=u.length;y<k;y++)(u[y].fn!==o||m&&!u[y].once||i&&u[y].context!==i)&&r.push(u[y]);r.length?this._events[f]=r.length===1?r[0]:r:h(this,f)}return this},l.prototype.removeAllListeners=function(n){var o;return n?(o=e?e+n:n,this._events[o]&&h(this,o)):(this._events=new s,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=e,l.EventEmitter=l,a.exports=l}(x)),x.exports}var A=L();const N=w(A),b="ideabosque";class S{constructor(t){O(this,"iframe");O(this,"event",new N);O(this,"init",()=>{window.addEventListener("message",this.onMessage)});O(this,"sendMessage",(t,e)=>{const s=JSON.stringify(e),p=`${b}-${t}`;this.win.postMessage({type:p,data:s},"*")});O(this,"on",(t,e)=>(this.event.on(t,e),this.event));O(this,"onMessage",t=>{var p;const e=t.data.type;let s=t.data.data;if((p=e==null?void 0:e.includes)!=null&&p.call(e,b)){const g=e.replace(`${b}-`,"");s&&(s=JSON.parse(s)),this.event.emit(g,s)}});this.iframe=t,this.init()}get win(){return this.iframe.contentWindow}}const $=a=>{const t=a.getAttribute("width")||640,e=a.getAttribute("height")||600;return{width:t,height:e}},P=()=>new Promise((a,t)=>{window.navigator.geolocation.getCurrentPosition(s=>{a(s.coords.toJSON())},async s=>{t(s)})}),M={stringify:a=>Object.keys(a).map(e=>`${e}=${a[e]}`).join("&")};let C="https://ideabosque-ai-chat.pages.dev";const I=()=>{const a=document.querySelector("head"),t=document.createElement("style");t.setAttribute("data-role",`${b}-style`),t.innerHTML=v,a==null||a.appendChild(t)},T=()=>{const a=`script[data-role='${b}-ai']`;return document.querySelector(a)},j=(a,t)=>{I();const e=$(t),s=document.createElement("iframe"),p=t.getAttribute("iframe-url"),g=t.getAttribute("coordination"),h=t.getAttribute("agent"),l=t.getAttribute("endpoint-id");p&&(C=p);const c=M.stringify({mode:"preview",coordination:g,agent:h,endpointId:l});return s.src=`${C}?${c}`,s.className=`${b}-ai-iframe`,s.style.width=e.width+"px",s.style.height=e.height+"px",s.setAttribute("frameborder","0"),s.setAttribute("allow","geolocation"),a.appendChild(s),s},z=a=>{const t=new S(a);t.on("get-position",async()=>{let e=!0,s={};try{s=await P()}catch{e=!1}t.sendMessage("get-position",{...s,success:e})})};(()=>{let a=!1,t=null;const e=T(),s=(e==null?void 0:e.getAttribute("open-type"))||"screen",p=h=>{!h||a||(z(j(h,e)),a=!0)},g=(h=!0)=>{t=document.createElement("div");const l=document.createElement("div"),c=document.createElement("div"),n=document.createElement("div"),o=`${b}-ai-drawer`,i=`${b}-ai-drawer-body`,m=`${b}-ai-drawer-switch`,f=`${b}-ai-drawer-open`;t.className=o,l.className=i,c.className=m,t.appendChild(l),l.appendChild(c),c.appendChild(n),n.innerHTML="Chat Agent B2B",document.body.appendChild(t),p(l),h&&t.classList.add(f),c.addEventListener("click",()=>{t==null||t.classList.toggle(f)})};if(s==="screen"){const h=e==null?void 0:e.getAttribute("selector");h&&(t=document.querySelector(h),p(t))}window.initIdeabosqueAi=(h=!0)=>{s!=="drawer"||a||g(h)},window.removeIdeabosqueAi=()=>{s==="drawer"&&t&&document.body.removeChild(t)}})()});
