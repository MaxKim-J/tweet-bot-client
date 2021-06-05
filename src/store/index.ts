import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import asyncData from './asyncData'
import common from './common'
import asyncDataSaga from './asyncData/saga'

export const rootReducer = combineReducers({
  asyncData,
  common,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([
    fork(asyncDataSaga),
  ])
}
