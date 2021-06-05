import React from 'react'
import './_list.scss'
import { Link } from 'react-router-dom'
import { PreviousTweetInfo } from '../../store/tweets/types'

interface PreviousTweetListProps {
  prevTweetList : PreviousTweetInfo[]
}

function List({ prevTweetList }:PreviousTweetListProps) {
  return (
    <div className="list__wrapper">
      <div className="list-title">
        최근 트윗 + 판례 보기
      </div>
      <div className="list">
        <ul>
          {prevTweetList.map((tweet, idx) => <li key={idx}>
                <Link to={`/detail/${tweet.id}`}>
                  {idx + 1}. ({tweet.uploadedAt}) {tweet.name}
                </Link>
              </li>)}
        </ul>
      </div>
    </div>
  )
}

export default List
