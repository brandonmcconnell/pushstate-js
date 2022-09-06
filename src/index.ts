declare global {
  interface Window {
    onpushstate: Function;
  }
}

const intiailizePushstateEvent = (debounceDelay = 1000) => {
  const getCurrentUrl = () => window?.location?.href ?? '';
  let lastRun = -1 * (debounceDelay + 1);
  let currentUrl = getCurrentUrl();
  const observer = new MutationObserver(() => {
    let currentRun = performance.now();
    let newUrl = getCurrentUrl();
    if (newUrl !== currentUrl && currentRun - lastRun > debounceDelay) {
      const previousUrl = currentUrl;
      lastRun = currentRun;
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

export default intiailizePushstateEvent;