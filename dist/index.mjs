// src/index.ts
var intiailizePushstateEvent = (debounceDelay = 1e3) => {
  const getCurrentUrl = () => {
    var _a;
    return ((_a = window == null ? void 0 : window.location) == null ? void 0 : _a.href) ?? "";
  };
  let lastRun = -1 * (debounceDelay + 1);
  let currentUrl = getCurrentUrl();
  const observer = new MutationObserver(() => {
    let currentRun = performance.now();
    let newUrl = getCurrentUrl();
    if (newUrl !== currentUrl && currentRun - lastRun > debounceDelay) {
      const previousUrl = currentUrl;
      lastRun = currentRun;
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
var src_default = intiailizePushstateEvent;
export {
  src_default as default
};
