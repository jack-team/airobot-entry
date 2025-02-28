(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(t){if(t.ep)return;t.ep=!0;const i=l(t);fetch(t.href,i)}})();const f="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.125%2013.6682C24.125%2018.6388%2019.5919%2022.6682%2014%2022.6682C12.758%2022.6682%209.5%2025.4807%209.5%2025.4807L7.8125%2020.7927C5.41734%2019.1467%203.875%2016.5675%203.875%2013.6682C3.875%208.69765%208.40812%204.66821%2014%204.66821C19.5919%204.66821%2024.125%208.69765%2024.125%2013.6682Z'%20stroke='%23033049'%20stroke-width='2.25'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.4375%2014.2307V10.8557M19.0625%2014.2307V10.8557'%20stroke='%23033049'%20stroke-width='2.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6.6875%202.98071L8.375%205.79321'%20stroke='%23033049'%20stroke-width='1.125'/%3e%3ccircle%20cx='6.6875'%20cy='2.98071'%20r='1.6875'%20fill='%23033049'/%3e%3c/svg%3e",m=`@keyframes loading-dark{0%{background-color:rgba(0,0,0,.8)}
100%{background-color:rgba(0,0,0,.1)}
}@keyframes loading-light{0%{background-color:rgba(255,255,255,.8)}
100%{background-color:rgba(255,255,255,.1)}
}.idea-bosque-entry{position:fixed;z-index:999;right:60px;bottom:60px}
.idea-bosque-btn{width:48px;height:48px;opacity:1;border-radius:50%;background:#fff;cursor:pointer;user-select:none;visibility:visible;transition:all .35s ease;box-shadow:0px -4px 16px 0px rgba(0,0,0,0.25)}
.idea-bosque-btn:active{background:#f0f0f0}
.idea-bosque-btn img{width:60%;height:60%;position:absolute;left:50%;top:50%;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0)}
.idea-bosque-modal{visibility:hidden;opacity:0;transform:translateX(100%);position:fixed;z-index:999;top:32px;right:32px;width:400px;height:calc(100vh - 64px);transition:all .35s ease}
.idea-bosque-modal iframe{width:100%;height:100%;background:#fff;overflow:hidden;border-radius:12px;box-shadow:0px -4px 16px 0px rgba(0,0,0,0.25)}
.idea-bosque-iframe-loading{position:absolute;left:50%;top:50%;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0)}
.idea-bosque-iframe-loading span{width:12px;height:12px;display:inline-block;background-color:#111;border-radius:50%;animation:loading .4s infinite alternate;animation:loading-dark .4s infinite alternate}
.idea-bosque-iframe-loading span:nth-child(2){animation-delay:.15s !important;margin:0 12px}
.idea-bosque-iframe-loading span:nth-child(3){animation-delay:.3s !important}
.idea-bosque-modal-open .idea-bosque-modal{visibility:visible;opacity:1;transform:translateX(0)}
.idea-bosque-modal-open .idea-bosque-btn{visibility:hidden;opacity:0}
.idea-bosque-modal-close{display:block;position:absolute;right:16px;top:24px;width:32px;height:32px;cursor:pointer}
.idea-bosque-modal-close::before,.idea-bosque-modal-close::after{content:'';position:absolute;top:50%;left:50%;width:80%;height:2px;background-color:#666;transform-origin:center}
.idea-bosque-modal-close::before{transform:translate(-50%,-50%) rotate(45deg)}
.idea-bosque-modal-close::after{transform:translate(-50%,-50%) rotate(-45deg)}
.idea-bosque-modal-close:hover::before,.idea-bosque-modal-close:hover::after{background-color:#000}`;window.initChatBot=(n=>{const r="idea-bosque-modal-open";function l(){const e=n.createElement("style");return e.innerHTML=m,e}function d(){const e=n.createElement("div"),o=n.createElement("img");return o.src=f,e.appendChild(o),e.classList.add("idea-bosque-btn"),e}const t=e=>{e.classList.toggle(r)};function i(){const e=n.createElement("div");return e.innerHTML="<span></span><span></span><span></span>",e.classList.add("idea-bosque-iframe-loading"),e}function s(){const e=n.createElement("iframe");return e.src="https://airobot.pages.dev?skip-auth=true",e.setAttribute("frameBorder","0"),e}function u(){const e=n.createElement("div"),o=i(),a=s();return e.appendChild(o),e.appendChild(a),e.classList.add("idea-bosque-modal"),a.onload=()=>e.removeChild(o),e}function b(){const e=n.createElement("div");return e.classList.add("idea-bosque-modal-close"),e}function c(e){if(!c.created){c.created=!0;const o=u(),a=b();a.onclick=()=>t(e),o.appendChild(a),e.appendChild(o)}requestAnimationFrame(()=>t(e))}return()=>{const e=n.body,o=n.createElement("div");o.classList.add("idea-bosque-entry");const a=l();o.appendChild(a);const p=d();o.appendChild(p),p.onclick=()=>c(o),e.appendChild(o)}})(document);
