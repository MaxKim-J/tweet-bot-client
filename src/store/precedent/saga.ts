import {
  put, takeLatest,
} from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import httpRequest from '../../services'
import { flattenPrecedentDetail } from '../../utils/flattenHelper'
import { precedentActions } from './index'

function* getPrecedentDetail(action:PayloadAction<string>) {
  const id = action.payload
  const { fetchDetailSuccess, fetchDetailFail } = precedentActions
  try {
    const {
      data: tweetDetailData,
      data: { tweet: { precedent: { id: precedentId } } },
    } = yield httpRequest.getTweetById(id)
    const { data: precedentDetailData } = yield httpRequest.getPrecedentById(precedentId)
    const flattenedResult = flattenPrecedentDetail(precedentDetailData, tweetDetailData)
    yield put(fetchDetailSuccess(flattenedResult))
  } catch (e) {
    yield put(fetchDetailFail(e.data.message))
  }
}

export default function* precedentRootSaga() {
  yield takeLatest(precedentActions.fetchDetail.type, getPrecedentDetail)
}
