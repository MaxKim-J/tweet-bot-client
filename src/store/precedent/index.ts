import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PrecedentStateType, PrecedentDetailType } from './types'

const initialState:PrecedentStateType = {
  detail: {
    status: 'idle',
    data: null,
    error: null,
  },
}

export const precedentSlice = createSlice({
  name: 'precedent',
  initialState,
  reducers: {
    fetchDetail: (state, action:PayloadAction<string>) => { state.detail.status = 'loading' },
    fetchDetailSuccess: (state, action:PayloadAction<PrecedentDetailType>) => {
      state.detail.data = action.payload
      state.detail.status = 'success'
    },
    fetchDetailFail: (state, action:PayloadAction<string>) => {
      state.detail.error = action.payload
      state.detail.status = 'fail'
    },
  },
})

export const precedentActions = precedentSlice.actions
export default precedentSlice.reducer
