import { put, takeEvery, select } from 'redux-saga/effects'
import httpRequest from "../../../services"
import {flattenPrecedentDetail, flattenPrevTweetList} from '../../../utils/flattenHelper'
import {fetchPreviousTweets, fetchPrecedentDetail} from "../index";


function* fetchAppData() {
  const tweetCount = yield select(state => state.asyncData.previousTweetCount)
  if(!tweetCount) {
    const {data:{counts:precedentCounts}} = yield httpRequest.getPrecedents()
    yield put({type:'asyncData/UPDATE_PRECEDENT_COUNT', payload:precedentCounts})
    const {data:{counts}} =  yield httpRequest.getAllPreviousUploadedTweets()
    yield put({type:'asyncData/UPDATE_PREVIOUS_TWEET_COUNT', payload:counts})
  }
}

function* fetchPrecedentDetailAsync(action:ReturnType<typeof fetchPrecedentDetail>) {
  const id = action.payload
  const {
    data: tweetDetailData,
    data: { tweet: { precedent: { id: precedentId } } },
  } = yield httpRequest.getTweetById(id)
  const { data: precedentDetailData } = yield httpRequest.getPrecedentById(precedentId)
  const flattenedResult = flattenPrecedentDetail(precedentDetailData, tweetDetailData)
  yield put({type:"asyncData/UPDATE_PRECEDENT_DETAIL", payload:flattenedResult})
}

function* fetchPreviousTweetsAsync(action:ReturnType<typeof fetchPreviousTweets>) {
  const {length:prevTweetLength} = yield select(state => state.asyncData.previousTweets)
  if(!prevTweetLength) {
    const last = action.payload
    const { data: { tweets } } = yield httpRequest.getPreviousUploadedTweets(last)
    yield put({type:"asyncData/UPDATE_PREVIOUS_TWEETS", payload:flattenPrevTweetList(tweets)})
  }
}

export default function* asyncDataSaga() {
  yield takeEvery("asyncData/FETCH_PREVIOUS_TWEETS", fetchPreviousTweetsAsync)
  yield takeEvery("asyncData/FETCH_PRECEDENT_DETAIL", fetchPrecedentDetailAsync)
  yield takeEvery("asyncData/FETCH_APP_INFO", fetchAppData)
}
