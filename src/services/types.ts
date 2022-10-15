export interface SwapiResponse<T> {
  count: number;
  next: Nullable<string>;
  previous: Nullable<string>;
  results: T;
}

export interface SignalPayload {
  signal?: AbortSignal;
}

export enum ApiRoutes {
  "PLANETS" = "/planets",
}
