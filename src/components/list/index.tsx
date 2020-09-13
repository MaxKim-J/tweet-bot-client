import React from 'react'
import './_list.scss'

function List() {
  return (
    <div className="list__wrapper">
      <div className="list-title">
        최근 트윗 + 판례 보기
      </div>
      <div className="list">
        <ul>
          <li>민사)대법원 2020. 5. 21. 선고 2018다287522 전원합의체 판결</li>
          <li>민사)대법원 2020. 5. 21. 선고 2018다287522 전원합의체 판결</li>
          <li>민사)대법원 2020. 5. 21. 선고 2018다287522 전원합의체 판결</li>
        </ul>
      </div>
    </div>
  )
}

export default List
