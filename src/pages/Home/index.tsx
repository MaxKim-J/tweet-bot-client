import React, { useEffect, useState } from 'react'
import './_home.scss'
import AppIntroduce from '../../components/appIntroduce'
import List from '../../components/list'
import {shallowEqual, useDispatch} from 'react-redux'
import {fetchAppInfo, fetchPreviousTweets} from "../../store/asyncData";
import {fetchRequest, fetchSuccess, fetchFailure} from "../../store/common";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      dispatch(fetchRequest())
      dispatch(fetchPreviousTweets(10))
      dispatch(fetchAppInfo())
      dispatch(fetchSuccess())
    } catch(e) {
      dispatch(fetchFailure())
    }
  }, [])

  const {uploadedTweetCount, precedentCount, prevTweetList, fetchStatus} = useSelector((state:RootState) => ({
    uploadedTweetCount:state.asyncData.previousTweetCount,
    precedentCount:state.asyncData.precedentCount,
    prevTweetList:state.asyncData.previousTweets,
    fetchStatus:state.common.fetchStatus
  }), shallowEqual)

  return (
    <>
      {fetchStatus === 'completed' && <div className="home">
        <AppIntroduce uploadedTweetCount={uploadedTweetCount} precedentCount={precedentCount} />
        <List prevTweetList={prevTweetList} />
      </div>}
    </>
  )
}

export default HomePage
