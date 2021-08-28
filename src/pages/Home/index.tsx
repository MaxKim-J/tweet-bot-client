import React, { useEffect } from 'react'
import './_home.scss'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import AppIntroduce from '../../components/appIntroduce'
import List from '../../components/list'
import { tweetsActions } from '../../store/tweets'
import { countsActions } from '../../store/counts'
import { RootState } from '../../store'
import Loading from '../../components/loading'
import { PreviousTweetInfo } from '../../store/tweets/types'

function HomePage() {
  const dispatch = useDispatch()

  const { uploadedTweetCount, precedentCount, prevTweetList } = useSelector(
    (state: RootState) => ({
      uploadedTweetCount: state.counts.counts.data.tweet,
      precedentCount: state.counts.counts.data.precedent,
      prevTweetList: state.tweets.tweets.data,
    }),
    shallowEqual,
  )

  const { countsStatus, tweetStatus } = useSelector(
    (state: RootState) => ({
      countsStatus: state.counts.counts.status,
      tweetStatus: state.tweets.tweets.status,
    }),
    shallowEqual,
  )

  useEffect(() => {
    if (!prevTweetList?.length) {
      dispatch(tweetsActions.fetchPreviousTweet(10))
    }

    if (!precedentCount && !uploadedTweetCount) {
      dispatch(countsActions.fetchCounts())
    }
  }, [])

  return (
    <>
      {countsStatus === 'success' && tweetStatus === 'success' ? (
        <div className="home">
          <AppIntroduce
            uploadedTweetCount={uploadedTweetCount}
            precedentCount={precedentCount}
          />
          <List prevTweetList={prevTweetList as PreviousTweetInfo[]} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default HomePage
