var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var pushstate_js_exports = {};
__export(pushstate_js_exports, {
  default: () => pushstate_js_default
});
module.exports = __toCommonJS(pushstate_js_exports);
var intiailizePushstateEvent = () => {
  const getCurrentUrl = () => {
    var _a;
    return ((_a = window == null ? void 0 : window.location) == null ? void 0 : _a.href) ?? "";
  };
  let currentUrl = getCurrentUrl();
  const observer = new MutationObserver(() => {
    let newUrl = getCurrentUrl();
    if (newUrl !== currentUrl) {
      const previousUrl = currentUrl;
      currentUrl = newUrl;
      const event = new Event("pushstate", {
        previous: previousUrl,
        current: currentUrl
      });
      window.dispatchEvent(event);
      if (typeof window.onpushstate === "function") {
        window.onpushstate(event);
      }
    }
  });
  observer.observe(document, { subtree: true, childList: true });
};
var pushstate_js_default = intiailizePushstateEvent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
