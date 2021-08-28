import React, { useEffect } from 'react'
import './_detail.scss'
import {
  RouteComponentProps,
} from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import List from '../../components/list'
import PrecedentDetail from '../../components/detail'
import { tweetsActions } from '../../store/tweets'
import { precedentActions } from '../../store/precedent'
import { PrecedentDetailType } from '../../store/precedent/types'
import { PreviousTweetInfo } from '../../store/tweets/types'

import { RootState } from '../../store'
import Loading from '../../components/loading'

interface DetailMatchProps {
  id:string
}

function DetailPage({ match }:RouteComponentProps<DetailMatchProps>) {
  const dispatch = useDispatch()

  const { precedentDetail, prevTweetList } = useSelector((state:RootState) => ({
    precedentDetail: state.precedent.detail.data,
    prevTweetList: state.tweets.tweets.data,
  }), shallowEqual)

  const { precedentStatus, prevTweetStatus } = useSelector((state:RootState) => ({
    precedentStatus: state.precedent.detail.status,
    prevTweetStatus: state.tweets.tweets.status,
  }), shallowEqual)

  useEffect(() => {
    window.scrollTo(0, 0)
    const { id } = match.params
    dispatch(precedentActions.fetchDetail(id))

    if (!prevTweetList?.length) {
      dispatch(tweetsActions.fetchPreviousTweet(10))
    }
  }, [match.params])

  const isMatchedPrecedent = match.params.id === `${precedentDetail?.id}`

  return (
    <>
      {
        precedentStatus === 'success' && prevTweetStatus === 'success' && isMatchedPrecedent
          ? <div className="detail">
          <PrecedentDetail flattenedDetail={precedentDetail as PrecedentDetailType} />
          <List prevTweetList={prevTweetList as PreviousTweetInfo[]} />
        </div>
          : <Loading/>
      }
    </>
  )
}

export default DetailPage
