# pushstate.js

**pushstate.js** adds a native way to listen for changes in the address bar, similar to how a `pushstate` event might work (if one existed). It works via an initializer function that sets up a MutationObserver, which fires an `Event` with the properties `previous` and `current` whenever the observer detects changes to the document's `subtree` or `childList` and the URL in the address bar (`window.location.href`) has also changed.

## Installation

```bash
npm i pushstate-js
```

## Usage

```js
import intiailizePushstateEvent from 'pushstate-js';
intiailizePushstateEvent();

window.addEventListener('pushstate', ({ current, previous }) => {
  // do whatever you want with `current` and `previous`
});
```

It's that simple. Enjoy!

I'm happy to respond to and/or resolve any suggestions or bug reports, so feel free to [open an issue](https://github.com/brandonmcconnell/pushstate.js/issues/new/choose).
