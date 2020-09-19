import React from 'react'
import './_footer.scss'
import config from '../../config'

function Footer() {
  const { FOOTER_ICONS } = config
  return (
    <div className="footer__wrapper">
      <footer>
        <div className="footer-introduce">
          Developed By Max Kim
        </div>
        <div className="footer-detail">
          <p>
            전국의 법 공부하시는 모든 분들 오늘도 고생 많으십니다. 판례봇이 조금이라도 도움이 되었으면 좋겠어요.<br/>
            판례요지봇에 대한 피드백, 건의사항은 하단 메일로 연락주세요!
          </p>
          <div className="footer-icons">
            {FOOTER_ICONS.map((icon) => <a key={icon.id} href={icon.url}>{icon.content}</a>)}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
