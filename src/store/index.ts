import { all, fork } from 'redux-saga/effects'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'redux'
import common from './loading'
import tweets from './tweets'
import precedent from './precedent'
import counts from './counts'
import precedentSaga from './precedent/saga'
import countsSaga from './counts/saga'
import tweetsSaga from './tweets/saga'

const sagaMiddleware = createSagaMiddleware()

export function* rootSaga() {
  yield all([
    fork(precedentSaga),
    fork(tweetsSaga),
    fork(countsSaga),
    fork(tweetsSaga),
  ])
}

const reducer = combineReducers({
  common,
  precedent,
  counts,
  tweets,
})

const createStore = () => {
  const store = configureStore({
    reducer,
    devTools: true,
    middleware: [sagaMiddleware],
  })
  sagaMiddleware.run(rootSaga)
  return store
}

export type RootState = ReturnType<typeof reducer>
export default createStore
