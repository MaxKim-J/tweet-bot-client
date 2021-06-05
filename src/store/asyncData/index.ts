import { TweetListType, precedentDetailType } from '../../utils/flattenHelper'

const FETCH_PREVIOUS_TWEETS = 'asyncData/FETCH_PREVIOUS_TWEETS' as const
const FETCH_PRECEDENT_DETAIL = 'asyncData/FETCH_PRECEDENT_DETAIL' as const
const FETCH_APP_INFO = 'asyncData/FETCH_APP_INFO' as const

const UPDATE_PRECEDENT_COUNT = 'asyncData/UPDATE_PRECEDENT_COUNT' as const
const UPDATE_PREVIOUS_TWEET_COUNT = 'asyncData/UPDATE_PREVIOUS_TWEET_COUNT' as const
const UPDATE_PREVIOUS_TWEETS = 'asyncData/UPDATE_PREVIOUS_TWEETS' as const
const UPDATE_PRECEDENT_DETAIL = 'asyncData/UPDATE_PRECEDENT_DETAIL' as const

export const fetchPreviousTweets = (last: number) => ({
  type: FETCH_PREVIOUS_TWEETS,
  payload: last,
})

export const fetchPrecedentDetail = (id: string) => ({
  type: FETCH_PRECEDENT_DETAIL,
  payload: id,
})

export const fetchAppInfo = () => ({ type: FETCH_APP_INFO })

export const updatePrecedentCount = (counts: number) => ({
  type: UPDATE_PRECEDENT_COUNT,
  payload: counts,
})

export const updatePreviousTweetCount = (counts: number) => ({
  type: UPDATE_PREVIOUS_TWEET_COUNT,
  payload: counts,
})

export const updatePreviousTweets = (tweets: TweetListType) => ({
  type: UPDATE_PREVIOUS_TWEETS,
  payload: tweets,
})

export const updatePrecedentDetail = (tweet: precedentDetailType) => ({
  type: UPDATE_PRECEDENT_DETAIL,
  payload: tweet,
})

// 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입
type asyncDataAction =
  | ReturnType<typeof updatePrecedentCount>
  | ReturnType<typeof updatePreviousTweetCount>
  | ReturnType<typeof updatePreviousTweets>
  | ReturnType<typeof updatePrecedentDetail>
  | ReturnType<typeof fetchPrecedentDetail>
  | ReturnType<typeof fetchAppInfo>
  | ReturnType<typeof fetchPreviousTweets>;

const initialState = {
  precedentCount: 0,
  previousTweetCount: 0,
  precedentDetail: {
    id: 0,
    name: '',
    type: '',
    content: '',
    tweetContent: '',
    url: '',
  },
  previousTweets: [],
}

const reducer = (state = initialState, action: asyncDataAction) => {
  switch (action.type) {
    case 'asyncData/UPDATE_PRECEDENT_COUNT':
      return { ...state, precedentCount: action.payload }
    case 'asyncData/UPDATE_PREVIOUS_TWEET_COUNT':
      return { ...state, previousTweetCount: action.payload }
    case 'asyncData/UPDATE_PREVIOUS_TWEETS':
      return { ...state, previousTweets: action.payload }
    case 'asyncData/UPDATE_PRECEDENT_DETAIL':
      return { ...state, precedentDetail: action.payload }
    default:
      return state
  }
}

export default reducer
