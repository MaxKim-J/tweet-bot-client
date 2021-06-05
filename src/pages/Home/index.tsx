import React, { useEffect } from 'react'
import './_home.scss'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import AppIntroduce from '../../components/appIntroduce'
import List from '../../components/list'
import { fetchAppInfo, fetchPreviousTweets } from '../../store/asyncData'
import { RootState } from '../../store'
import Loading from '../../components/loading'

function HomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPreviousTweets(10))
    dispatch(fetchAppInfo())
  }, [dispatch])

  const {
    uploadedTweetCount, precedentCount, prevTweetList, fetchStatus,
  } = useSelector((state:RootState) => ({
    uploadedTweetCount: state.asyncData.previousTweetCount,
    precedentCount: state.asyncData.precedentCount,
    prevTweetList: state.asyncData.previousTweets,
    fetchStatus: state.common.fetchStatus,
  }), shallowEqual)

  return (
    <>
      {
        fetchStatus === 'completed'
          ? <div className="home">
              <AppIntroduce
                uploadedTweetCount={uploadedTweetCount}
                precedentCount={precedentCount}
              />
              <List prevTweetList={prevTweetList} />
          </div>
          : <Loading/>
      }
    </>
  )
}

export default HomePage
