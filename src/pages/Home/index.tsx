import React from 'react'
import './_home.scss'
import AppIntroduce from '../../components/appIntroduce'
import List from '../../components/list'

// todo 라우터 설정 +
function HomePage() {
  return (
    <div className="home">
        <AppIntroduce />
        <List />
    </div>
  )
}

export default HomePage
