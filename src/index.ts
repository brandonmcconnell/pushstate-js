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
    const currentRun = performance.now();
    const timeSinceLastRun = currentRun - lastRun;
    const newUrl = getCurrentUrl();
    if (timeSinceLastRun > debounceDelay || newUrl !== currentUrl) {
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