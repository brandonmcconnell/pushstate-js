export {};

declare global {
  interface Window {
    onpushstate: Function;
  }
}