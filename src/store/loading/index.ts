import { createSlice } from '@reduxjs/toolkit'

type LoadingStateType = {
  loading: boolean;
}

const initialState: LoadingStateType = {
  loading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state) => { state.loading = true },
    endLoading: (state) => { state.loading = false },
  },
})

export const { startLoading, endLoading } = loadingSlice.actions

export default loadingSlice.reducer
