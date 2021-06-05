import React, { useCallback, useEffect, useState } from 'react'
import precedentTypeFilter from '../../utils/precedentTypeFilter'
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
    id, url, type, content, tweetContent, name,
  },
}:PrecedentDetailProps) {
  const [isAllPrecedentShow, setIsAllPrecedentShow] = useState(false)
  const [tweetContentOrderNum, setTweetContentOrderNum] = useState(0)
  const [parsedPrecedent, setParsedPrecedent] = useState<string[]>([])
  const [typeInfo, setTypeInfo] = useState({
    typeName: '',
    typeColor: '',
  })

  const handleBtnClick = () => {
    setIsAllPrecedentShow(!isAllPrecedentShow)
  }

  const parseContent = useCallback((article:string):string[] => {
    const parsedResults = article.split('<br>')
    parsedResults.forEach((result, idx) => {
      if (result === tweetContent) {
        setTweetContentOrderNum(idx)
      }
    })
    return parsedResults
  }, [tweetContent])

  useEffect(() => {
    const parsedResults = parseContent(content)
    setParsedPrecedent(parsedResults)
    if (isAllPrecedentShow) { setIsAllPrecedentShow(false) }
  }, [parseContent, content])

  useEffect(() => {
    setTypeInfo(precedentTypeFilter(type))
  }, [type])

  const { typeName, typeColor } = typeInfo
  return (
      <div className="tweet-detail">
        <div className="tweet-detail__header">
          <div className="tweet-detail__id">No.{id}</div>
          <div
            className="tweet-detail__type"
            style={{ background: typeColor }}
          >
            {typeName}
          </div>
        </div>
        <div className="tweet-detail__name">{name}</div>
        <div className="tweet-detail__content">
          {tweetContent}
        </div>
        <div className="tweet-detail__section">
          <a href={`https://glaw.scourt.go.kr/wsjo/panre/sjo100.do?contId=${url}`}>
            ▶︎ 법령정보 사이트에서 판례 내용 전체 보기(클릭)
          </a>
          <div
            className="tweet-detail__btn"
            onClick={() => handleBtnClick()}>
            {isAllPrecedentShow
              ? '▼ 판례요지 접기' : '▶︎ 판례요지 전체 보기(펼치기)'
            }
          </div>
          {isAllPrecedentShow
          && <div className="tweet-detail__precedent">
            {parsedPrecedent.map((paragraph, idx) => <div
              className={
                idx === tweetContentOrderNum
                  ? 'tweet-detail__paragraph--selected'
                  : 'tweet-detail__paragraph'
              }
              key={idx}>
              {paragraph}
            </div>)
            }
          </div>
          }
        </div>
      </div>

  )
}

export default PrecedentDetail
