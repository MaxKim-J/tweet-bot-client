import React, { useEffect, useState } from 'react'
import './_home.scss'
import AppIntroduce from '../../components/appIntroduce'
import List from '../../components/list'
import {shallowEqual, useDispatch} from 'react-redux'
import {fetchAppInfo, fetchPreviousTweets} from "../../store/asyncData";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

function HomePage() {
  const dispatch = useDispatch()
  const [isShowContent, setIsShowContent] = useState(false)

  useEffect(() => {
    dispatch(fetchAppInfo())
    dispatch(fetchPreviousTweets(10))
    setIsShowContent(true)
  }, [])

  const {uploadedTweetCount, precedentCount, prevTweetList} = useSelector((state:RootState) => ({
    uploadedTweetCount:state.asyncData.previousTweetCount,
    precedentCount:state.asyncData.precedentCount,
    prevTweetList:state.asyncData.previousTweets
  }), shallowEqual)

  return (
    <>
      {isShowContent && <div className="home">
        <AppIntroduce uploadedTweetCount={uploadedTweetCount} precedentCount={precedentCount} />
        <List prevTweetList={prevTweetList} />
      </div>}
    </>
  )
}

export default HomePage
