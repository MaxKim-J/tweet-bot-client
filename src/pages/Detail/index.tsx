import React, { useEffect, useState } from 'react'
import './_detail.scss'
import {
  RouteComponentProps,
} from 'react-router-dom'
import List from '../../components/list'
import PrecedentDetail from '../../components/detail'
import httpRequest from '../../services'
import { flattenPrecedentDetail, flattenPrevTweetList } from '../../utils/flattenHelper'

interface DetailMatchProps {
  id:string
}

function DetailPage({ match }:RouteComponentProps<DetailMatchProps>) {
  const [isShowContent, setIsShowContent] = useState(false)
  const [prevTweetList, setPrevTweetList] = useState([])
  const [
    flattenedDetail,
    setflattenedDetail,
  ] = useState({
    id: 0,
    name: '',
    content: '',
    url: '',
    type: '',
    tweetContent: '',
  })

  useEffect(() => {
    const fetchPrevTweetList = async (last:number) => {
      const { data: { tweets } } = await httpRequest.getPreviousUploadedTweets(last)
      setPrevTweetList(flattenPrevTweetList(tweets))
    }
    fetchPrevTweetList(10)
  }, [])

  useEffect(() => {
    const fetchDetails = async (tweetId:string) => {
      const {
        data: tweetDetailData,
        data: { tweet: { precedent: { id: precedentId } } },
      } = await httpRequest.getTweetById(tweetId)
      const { data: precedentDetailData } = await httpRequest.getPrecedentById(precedentId)

      const flattenedResult = flattenPrecedentDetail(precedentDetailData, tweetDetailData)
      setflattenedDetail(flattenedResult)
      setIsShowContent(true)
    }
    const { id } = match.params
    fetchDetails(id)
  }, [])

  return (
    <>
      {isShowContent && <div className="detail">
        <PrecedentDetail flattenedDetail={flattenedDetail} />
        <List prevTweetList={prevTweetList} />
      </div>}
      </>

  )
}

export default DetailPage
