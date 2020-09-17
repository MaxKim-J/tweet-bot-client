export const flattenPrevTweetList = (tweetList:any) => tweetList.map((tweet:any) => {
  const { id, uploadedAt, precedent: { name } } = tweet
  return { id, name, uploadedAt: uploadedAt.slice(0, 10) }
})

export const flattenPrecedentDetail = (precedent:any, tweet:any) => {
  const {
    precedent: {
      content, url, type, name,
    },
  } = precedent
  const { tweet: { id, content: tweetContent } } = tweet
  return {
    id, name, type, content, tweetContent, url,
  }
}
