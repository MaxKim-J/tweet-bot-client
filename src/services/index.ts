import axios from 'axios'

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: process.env.REACT_APP_API_KEY },
})

console.log(process.env)

const getPreviousUploadedTweets = (last:number) => httpRequest.get(`/tweet/previous?last=${last}`)
const getPrecedentById = (id:string) => httpRequest.get(`/precedent?id=${id}`)
const getTweetById = (id:string) => httpRequest.get(`/tweet?id=${id}`)
const getPrecedents = () => httpRequest.get('/precedent')

export default {
  getPreviousUploadedTweets,
  getPrecedentById,
  getTweetById,
  getPrecedents,
}
