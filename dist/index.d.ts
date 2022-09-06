declare global {
    interface Window {
        onpushstate: Function;
    }
}
declare const intiailizePushstateEvent: (debounceDelay?: number) => void;
export default intiailizePushstateEvent;
