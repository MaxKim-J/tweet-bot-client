import React from 'react'
import './_appIntroduce.scss'
import { Tweet } from 'react-twitter-widgets'

function AppIntroduce() {
  return (
    <div className="introduce__wrapper">
      <div className="introduce-content">
        <a href="https://glaw.scourt.go.kr/wsjo/intesrch/sjo022.do">법원 종합법률정보</a>의 대법원 공개판례를 트윗하는 봇입니다.
        <br/>현재&nbsp;
        <strong>511개</strong>의 판례를 바탕으로&nbsp;
        <strong>4949개</strong>의 트윗이 업로드되었습니다.
      </div>
      <div className="tweet__wrapper">
        <Tweet tweetId="1305146545327620096" />
      </div>
      <div className="icons__wrapper">
        <a href="https://github.com/MaxKim-J/supreme-court-API">
          <img src="https://img.icons8.com/material-outlined/240/000000/github.png" alt='github'/>
        </a>
        <a href="https://twitter.com/precedent_bot">
          <img src="https://img.icons8.com/color/240/000000/twitter-circled.png" alt='twitter'/>
        </a>
      </div>
    </div>
  )
}

export default AppIntroduce
