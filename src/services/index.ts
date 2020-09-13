import axios from 'axios'
import config from '../config'

const { BASE_URL, API_KEY } = config

const httpRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: API_KEY },
})

const getPreviousUploadedTweets = (last:number) => httpRequest.get(`/tweet/previous?last=${last}`)
const getPrecedentById = (id:number) => httpRequest.get(`/precedent?id=${id}`)
const getTweetById = (id:number) => httpRequest.get(`/tweet?id=${id}`)
const getPrecedents = () => httpRequest.get('/precedent')

export default {
  getPreviousUploadedTweets,
  getPrecedentById,
  getTweetById,
  getPrecedents,
}
