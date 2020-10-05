import React, { useEffect, useState } from 'react'
import './_detail.scss'
import {
  RouteComponentProps,
} from 'react-router-dom'
import List from '../../components/list'
import PrecedentDetail from '../../components/detail'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {fetchPrecedentDetail, fetchPreviousTweets} from "../../store/asyncData";
import {fetchRequest, fetchSuccess, fetchFailure} from "../../store/common";
import {RootState} from "../../store";

interface DetailMatchProps {
  id:string
}

function DetailPage({ match }:RouteComponentProps<DetailMatchProps>) {
  const dispatch = useDispatch()
  const [isShowContent, setIsShowContent] = useState(false)

  useEffect(() => {
    window.scrollTo(0,0)
    const { id } = match.params
    try {
      dispatch(fetchRequest())
      dispatch(fetchPrecedentDetail(id))
      dispatch(fetchPreviousTweets(10))
      dispatch(fetchSuccess())
    }catch(e) {
      dispatch(fetchFailure())
    }
    setIsShowContent(true)
  }, [match.params])

  const {precedentDetail, prevTweetList} = useSelector((state:RootState) => ({
    precedentDetail:state.asyncData.precedentDetail,
    prevTweetList:state.asyncData.previousTweets
  }), shallowEqual)

  return (
    <>
      {isShowContent && <div className="detail">
        <PrecedentDetail flattenedDetail={precedentDetail} />
        <List prevTweetList={prevTweetList} />
      </div>}
    </>
  )
}

export default DetailPage
