// /types/global.d.ts
declare global {
  interface Window {
    scrollTimeout?: number;
  }
}

export {}; // This is necessary to ensure the file is treated as a module.
