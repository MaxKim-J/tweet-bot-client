import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppInfoStatusType } from './types'

const initialState: AppInfoStatusType = {
  counts: {
    status: 'idle',
    data: {
      precedent: 0,
      tweet: 0,
    },
    error: null,
  },
}

export const countsSlice = createSlice({
  name: 'counts',
  initialState,
  reducers: {
    fetchCounts: (state) => {
      state.counts.status = 'loading'
    },
    fetchCountsSuccess: (
      state,
      action: PayloadAction<{ tweet: number; precedent: number }>,
    ) => {
      state.counts.data = action.payload
      state.counts.status = 'success'
    },
    fetchCountsFail: (state, action: PayloadAction<string>) => {
      state.counts.error = action.payload
      state.counts.status = 'fail'
    },
  },
})

export const countsActions = countsSlice.actions
export default countsSlice.reducer
