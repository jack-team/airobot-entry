(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._airobot_container_13n3p_1{height:0;width:0;padding:0;border:0;margin:0;display:none}._airobot_container_13n3p_1._open_13n3p_9{display:block}._airobot_container_13n3p_1 *{-webkit-box-sizing:border-box;box-sizing:border-box}._drawer_13n3p_15{position:absolute}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
var s = Object.defineProperty;
var a = (n, t, e) => t in n ? s(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var o = (n, t, e) => a(n, typeof t != "symbol" ? t + "" : t, e);
const i = (n, t) => {
  const e = document.createElement(n);
  return t.appendChild(e), e;
}, c = "_airobot_container_13n3p_1", d = "_open_13n3p_9", r = {
  airobot_container: c,
  open: d
};
class h {
  constructor(t) {
    o(this, "options");
    o(this, "$root", document.body);
    o(this, "$container", null);
    o(this, "$drawer", null);
    o(this, "createContainer", () => {
      const t = this.$container = i("div", this.$root);
      t.setAttribute("popover", "manual"), t.classList.add(r.airobot_container);
    });
    // 创建抽屉
    o(this, "createDrawer", () => {
      this.$drawer = i("div", this.$container), this.$drawer.classList.add(""), this.options;
    });
    // 初始化
    o(this, "init", () => {
      this.createContainer(), this.createDrawer();
    });
    o(this, "open", () => {
      this.$container && (this.$container.classList.add(r.open), this.$container.showPopover());
    });
    // 销毁
    o(this, "destroy", () => {
    });
    this.options = t, this.init();
  }
}
export {
  h as AirobotSdk,
  h as default
};
//# sourceMappingURL=ai-chatbot-sdk.js.map
