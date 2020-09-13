import React from 'react'
import './_home.scss'
import AppIntroduce from '../../components/appIntroduce'

// todo 라우터 설정 +
function HomePage() {
  return (
    <div className="home">
        <AppIntroduce />
    </div>
  )
}

export default HomePage
