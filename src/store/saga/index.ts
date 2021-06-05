import { all, fork } from 'redux-saga/effects'
import asyncDataSaga from '../asyncData/saga'

export default function* rootSaga() {
  yield all([
    fork(asyncDataSaga),
  ])
}
