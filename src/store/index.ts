import { combineReducers } from 'redux'
import asyncData from './asyncData'
import common from './common'

const rootReducer = combineReducers({
  asyncData,
  common,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
