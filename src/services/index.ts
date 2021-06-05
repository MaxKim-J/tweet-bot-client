import axios from 'axios'

export type HttpRequestType<P extends any, R> = (p:P) => Promise<R>
export type HttpRequestParamsType<T> = {
  id?:T,
  last?:T,
}

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: process.env.REACT_APP_API_KEY },
})

const getAllPreviousUploadedTweets = () => httpRequest.get('/tweet/previous')
const getPreviousUploadedTweets = (last:number) => httpRequest.get(`/tweet/previous?last=${last}`)
const getPrecedentById = (id:string) => httpRequest.get(`/precedent?id=${id}`)
const getTweetById = (id:string) => httpRequest.get(`/tweet?id=${id}`)
const getPrecedents = () => httpRequest.get('/precedent')

export default {
  getAllPreviousUploadedTweets,
  getPreviousUploadedTweets,
  getPrecedentById,
  getTweetById,
  getPrecedents,
}
