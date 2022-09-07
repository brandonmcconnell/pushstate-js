declare global {
    interface Window {
        onpushstate: Function;
    }
}
declare const initializePushstateEvent: () => void;
export default initializePushstateEvent;
