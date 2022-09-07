// src/index.ts
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
export {
  src_default as default
};
