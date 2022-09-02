const intiailizePushstateEvent = () => {
  const getCurrentUrl = () => window?.location?.href ?? '';
  let currentUrl = getCurrentUrl();
  const observer = new MutationObserver(() => {
    let newUrl = getCurrentUrl();
    if (newUrl !== currentUrl) {
      const previousUrl = currentUrl;
      currentUrl = newUrl;
      window.dispatchEvent(new CustomEvent('pushstate', {
        detail: {
          previous: previousUrl,
          current: currentUrl,
        }
      }));
    }
  });
  observer.observe(document, { subtree: true, childList: true });
};

export default intiailizePushstateEvent;