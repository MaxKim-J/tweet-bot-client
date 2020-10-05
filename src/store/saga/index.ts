import asyncDataSaga from "../asyncData/saga";
import { all, fork } from 'redux-saga/effects'

export default function* rootSaga() {
 yield all([
   fork(asyncDataSaga)
 ])
}
