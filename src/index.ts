declare global {
  interface Window {
    onpushstate: Function;
  }
}

const initializePushstateEvent = () => {
  const getCurrentUrl = () => window?.location?.href ?? '';
  let currentUrl = getCurrentUrl();
  const observer = new MutationObserver(() => {
    const newUrl = getCurrentUrl();
    if (newUrl !== currentUrl) {
      const previousUrl = currentUrl;
      currentUrl = newUrl;
      const event = new Event('pushstate', {
        previous: previousUrl,
        current: currentUrl,
      } as EventInit);
      window.dispatchEvent(event);
      if (typeof window.onpushstate === 'function') {
        window.onpushstate(event);
      }
    }
  });
  observer.observe(document, { subtree: true, childList: true });
};

export default initializePushstateEvent;