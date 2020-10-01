import React, { useEffect, useState } from 'react'
import './_home.scss'
import AppIntroduce from '../../components/appIntroduce'
import List from '../../components/list'
import httpRequest from '../../services'
import { flattenPrevTweetList } from '../../utils/flattenHelper'

function HomePage() {
  const [prevTweetList, setPrevTweetList] = useState([])
  const [precedentCount, setPrecedentCount] = useState(0)
  const [uploadedTweetCount, setUploadedTweetCount] = useState(0)
  const [isShowContent, setIsShowContent] = useState(false)

  useEffect(() => {
    const fetchPrevTweetList = async (last:number) => {
      const {data:{counts:precedentCounts}} = await httpRequest.getPrecedents()
      const {data:{counts}} =  await httpRequest.getAllPreviousUploadedTweets()
      const { data: { tweets } } = await httpRequest.getPreviousUploadedTweets(last)
      setPrevTweetList(flattenPrevTweetList(tweets))
      setPrecedentCount(precedentCounts)
      setUploadedTweetCount(counts)
      setIsShowContent(true)
    }
    fetchPrevTweetList(10)
  }, [])
  return (
    <>
      {isShowContent && <div className="home">
        <AppIntroduce uploadedTweetCount={uploadedTweetCount} precedentCount={precedentCount} />
        <List prevTweetList={prevTweetList} />
      </div>}
    </>
  )
}

export default HomePage
