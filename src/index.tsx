import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux"
import rootReducer from "./store"
import rootSaga from "./store/saga"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
