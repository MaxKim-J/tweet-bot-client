import React from 'react'
import './_detail.scss'

interface precedentDetail {
  id:number,
  name:string,
  type:string,
  content:string,
  tweetContent:string,
  url:string
}

interface PrecedentDetailProps{
  flattenedDetail:precedentDetail
}

function PrecedentDetail({
  flattenedDetail: {
    id, url, type, content, tweetContent,
  },
}:PrecedentDetailProps) {
  return (
    <div className="detail__wrapper">
      <div>{id}</div>
      <div>{url}</div>
      <div>{type}</div>
      <div>{content}</div>
      <div>{tweetContent}</div>
    </div>
  )
}

export default PrecedentDetail
