import { AsyncEntity } from '../types'

export type AppInfoStatusType = {
  counts: AsyncEntity<{precedent:number, tweet:number}>,
}
