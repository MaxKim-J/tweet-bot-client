import React from 'react'
import './_detail.scss'
import List from '../../components/list'
import PrecedentDetail from '../../components/detail'

function DetailPage() {
  return (
    <div className="detail">
        <PrecedentDetail/>
        <List/>
    </div>
  )
}

export default DetailPage
