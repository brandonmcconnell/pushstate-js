// index.ts
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
      window.dispatchEvent(new Event("pushstate", {
        previous: previousUrl,
        current: currentUrl
      }));
    }
  });
  observer.observe(document, { subtree: true, childList: true });
};
var pushstate_js_default = intiailizePushstateEvent;
export {
  pushstate_js_default as default
};
