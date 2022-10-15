/// <reference types="vite/client" />

type Nullable<T> = T | null;

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
