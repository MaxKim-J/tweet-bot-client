declare global {
  interface Match<T> {
    params: T;
    isExact: boolean;
    path: string;
    url: string;
  }
}
