const intiailizePushstateEvent = () => {
  const getCurrentUrl = () => window?.location?.href ?? '';
  let currentUrl = getCurrentUrl();
  const observer = new MutationObserver(() => {
    let newUrl = getCurrentUrl();
    if (newUrl !== currentUrl) {
      const previousUrl = currentUrl;
      currentUrl = newUrl;
      window.dispatchEvent(new Event('pushstate', {
        previous: previousUrl,
        current: currentUrl,
      } as EventInit));
    }
  });
  observer.observe(document, { subtree: true, childList: true });
};

export default intiailizePushstateEvent;