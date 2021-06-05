import { AsyncEntity } from '../types'

export type PrecedentDetailType = {
  id: number,
  name: string,
  type: string,
  content: string,
  tweetContent: string,
  url: string,
}

export type PrecedentStateType = {
  detail: AsyncEntity<PrecedentDetailType|null>;
}
