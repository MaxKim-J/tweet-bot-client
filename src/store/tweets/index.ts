import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TweetsStateType } from './types'

const initialState: TweetsStateType = {
  tweets: {
    status: 'idle',
    data: null,
    error: null,
  },
}

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    fetchPreviousTweet: (state, action: PayloadAction<number>) => {
      state.tweets.status = 'loading'
    },
    fetchPreviousTweetSuccess: (state, action: PayloadAction<any[]>) => {
      state.tweets.data = action.payload
      state.tweets.status = 'success'
    },
    fetchPreviousTweetFail: (state, action: PayloadAction<string>) => {
      state.tweets.error = action.payload
      state.tweets.status = 'fail'
    },
  },
})

export const tweetsActions = tweetsSlice.actions
export default tweetsSlice.reducer
