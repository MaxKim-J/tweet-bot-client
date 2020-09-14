import React, { useEffect, useState } from 'react'
import './_detail.scss'
import List from '../../components/list'
import PrecedentDetail from '../../components/detail'
import httpRequest from '../../services'

interface Params {
  id:string
}

interface Match {
  params: Params;
  isExact: boolean;
  path: string;
  url: string;
}

interface DetailPageProps {
  match:Match
}

function DetailPage({ match }:DetailPageProps) {
  const [tweetDetail, setTweetDetail] = useState()
  const [precedentDetail, setPrecedentDetail] = useState()

  useEffect(() => {
    const getTweetDetail = async (id:string) => {
      const { data } = await httpRequest.getTweetById(id)
      setTweetDetail(data)
    }
    const { id } = match.params
    getTweetDetail(id)
  }, [])

  return (
    <div className="detail">
        <PrecedentDetail/>
        <List/>
    </div>
  )
}

export default DetailPage
