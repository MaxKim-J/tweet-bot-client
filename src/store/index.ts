import { combineReducers } from 'redux';
import asyncData from './asyncData';

const rootReducer = combineReducers({
  asyncData
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
