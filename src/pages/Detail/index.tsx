import React, { useEffect } from 'react'
import './_detail.scss'
import {
  RouteComponentProps,
} from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import List from '../../components/list'
import PrecedentDetail from '../../components/detail'
import { fetchPrecedentDetail, fetchPreviousTweets } from '../../store/asyncData'
import { RootState } from '../../store'
import Loading from '../../components/loading'

interface DetailMatchProps {
  id:string
}

function DetailPage({ match }:RouteComponentProps<DetailMatchProps>) {
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    const { id } = match.params
    dispatch(fetchPrecedentDetail(id))
    dispatch(fetchPreviousTweets(10))
  }, [match.params, dispatch])

  const { precedentDetail, prevTweetList, fetchStatus } = useSelector((state:RootState) => ({
    precedentDetail: state.asyncData.precedentDetail,
    prevTweetList: state.asyncData.previousTweets,
    fetchStatus: state.common.fetchStatus,
  }), shallowEqual)

  return (
    <>
      {
        fetchStatus === 'completed'
          ? <div className="detail">
          <PrecedentDetail flattenedDetail={precedentDetail} />
          <List prevTweetList={prevTweetList} />
        </div>
          : <Loading/>
      }
    </>
  )
}

export default DetailPage
