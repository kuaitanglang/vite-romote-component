export {};

declare global {
  interface Window {
    module: any;
    exports: object;
    MyComponent: any
  }
}
