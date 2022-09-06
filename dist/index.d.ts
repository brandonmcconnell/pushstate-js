declare global {
    interface Window {
        onpushstate: Function;
    }
}
declare const intiailizePushstateEvent: () => void;
export default intiailizePushstateEvent;
