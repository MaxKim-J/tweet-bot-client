export type AsyncEntity<T>= {
  data:T
  status: 'idle' | 'loading' | 'success' | 'fail'
  error: string | null
}
