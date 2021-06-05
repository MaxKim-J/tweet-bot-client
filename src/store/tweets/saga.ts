import {
  put, takeLatest,
} from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import httpRequest from '../../services'
import { flattenPrevTweetList } from '../../utils/flattenHelper'
import { tweetsActions } from './index'

function* getPreviousTweets(action:PayloadAction<number>) {
  const last = action.payload
  const { fetchPreviousTweetSuccess, fetchPreviousTweetFail } = tweetsActions

  try {
    const { data: { tweets } } = yield httpRequest.getPreviousUploadedTweets(last)
    yield put(fetchPreviousTweetSuccess(flattenPrevTweetList(tweets)))
  } catch (e) {
    yield put(fetchPreviousTweetFail(e.data.message))
  }
}

export default function* tweetsRootSaga() {
  yield takeLatest(tweetsActions.fetchPreviousTweet.type, getPreviousTweets)
}
