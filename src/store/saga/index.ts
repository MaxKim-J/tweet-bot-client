import asyncDataSaga from "../asyncData/saga";
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga() {
 console.log('사가 시작')
 yield all([
   fork(asyncDataSaga)
 ])
}
