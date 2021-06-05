import { AsyncEntity } from '../types'

export type PreviousTweetInfo = {
  id:number
  name:string
  uploadedAt:string
}

export type TweetsStateType = {
  tweets : AsyncEntity<PreviousTweetInfo[] | null>
}
