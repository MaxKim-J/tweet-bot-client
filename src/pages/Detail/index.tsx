import React, { useEffect, useState } from 'react'
import './_detail.scss'
import {
  RouteComponentProps,
} from 'react-router-dom'
import List from '../../components/list'
import PrecedentDetail from '../../components/detail'
import httpRequest from '../../services'

interface DetailMatchProps {
  id:string
}

function DetailPage({ match }:RouteComponentProps<DetailMatchProps>) {
  const [tweetDetail, setTweetDetail] = useState()
  const [precedentDetail, setPrecedentDetail] = useState()

  useEffect(() => {
    const fetchDetails = async (tweetId:string) => {
      const {
        data: tweetDetailData,
        data: { tweet: { precedent: { id: precedentId } } },
      } = await httpRequest.getTweetById(tweetId)
      const { data: precedentDetailData } = await httpRequest.getPrecedentById(precedentId)
      setTweetDetail(tweetDetailData)
      setPrecedentDetail(precedentDetailData)
    }
    const { id } = match.params
    fetchDetails(id)
  }, [])

  return (
    <div className="detail">
        <PrecedentDetail/>
        <List/>
    </div>
  )
}

export default DetailPage
