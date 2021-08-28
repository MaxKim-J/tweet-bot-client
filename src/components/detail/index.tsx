import React, { useMemo, useState } from 'react'
import precedentTypeFilter from '../../utils/precedentTypeFilter'
import './_detail.scss'
import { PrecedentDetailType } from '../../store/precedent/types'

type PrecedentDetailProps = {
  flattenedDetail:PrecedentDetailType
}

function PrecedentDetail({
    flattenedDetail: {
        id, url, type, content, tweetContent, name,
    },
}:PrecedentDetailProps) {
    const [isAllPrecedentShow, setIsAllPrecedentShow] = useState(false)
    const [tweetContentOrderNum, setTweetContentOrderNum] = useState(0)

    const parsedPrecedent = useMemo(() => {
        const parsedResults = content.split('<br>')
        parsedResults.forEach((result, idx) => {
            if (result === tweetContent) {
                setTweetContentOrderNum(idx)
            }
        })
        return parsedResults
    }, [content, tweetContent])

    const typeInfo = useMemo(() => precedentTypeFilter(type), [type])

    const handleBtnClick = () => {
        setIsAllPrecedentShow((isShow) => !isShow)
    }

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
