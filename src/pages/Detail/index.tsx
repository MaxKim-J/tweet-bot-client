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

  const flattenPrecedentDetail = (precedent:any, tweet:any) => {
    const {
      precedent: {
        content, url, type, name,
      },
    } = precedent
    const { tweet: { id, content: tweetContent } } = tweet
    return {
      id, name, type, content, tweetContent, url,
    }
  }

  useEffect(() => {
    const fetchDetails = async (tweetId:string) => {
      const {
        data: tweetDetailData,
        data: { tweet: { precedent: { id: precedentId } } },
      } = await httpRequest.getTweetById(tweetId)
      const { data: precedentDetailData } = await httpRequest.getPrecedentById(precedentId)

      const flattenedResult = flattenPrecedentDetail(precedentDetailData, tweetDetailData)
      setflattenedDetail(flattenedResult)
    }
    const { id } = match.params
    fetchDetails(id)
  }, [])

  return (
    <div className="detail">
      <PrecedentDetail flattenedDetail={flattenedDetail} />
      <List/>
    </div>
  )
}

export default DetailPage
