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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var initializePushstateEvent = () => {
  const getCurrentUrl = () => {
    var _a;
    return ((_a = window == null ? void 0 : window.location) == null ? void 0 : _a.href) ?? "";
  };
  let currentUrl = getCurrentUrl();
  const observer = new MutationObserver(() => {
    const newUrl = getCurrentUrl();
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
var src_default = initializePushstateEvent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
