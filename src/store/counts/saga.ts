import {
  put, takeLatest,
} from 'redux-saga/effects'
import httpRequest from '../../services'
import { countsActions } from './index'

function* getCounts() {
  const { fetchCountsFail, fetchCountsSuccess } = countsActions

  try {
    const { data: { counts: precedentCounts } } = yield httpRequest.getPrecedents()
    const { data: { counts: tweetCounts } } = yield httpRequest.getAllPreviousUploadedTweets()
    yield put(fetchCountsSuccess({ precedent: precedentCounts, tweet: tweetCounts }))
  } catch (e) {
    yield put(fetchCountsFail(e.data.message))
  }
}

export default function* appInfoRootSaga() {
  yield takeLatest(countsActions.fetchCounts, getCounts)
}
