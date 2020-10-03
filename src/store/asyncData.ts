const UPDATE_PRECEDENT_COUNT = 'asyncData/UPDATE_PRECEDENT_COUNT' as const;
const UPDATE_PREVIOUS_TWEET_COUNT = 'asyncData/UPDATE_PREVIOUS_TWEET_COUNT' as const;
const UPDATE_PREVIOUS_TWEETS = 'asyncData/UPDATE_PREVIOUS_TWEETS' as const;
const UPDATE_TWEET_DETAIL = `asyncData/UPDATE_TWEET_DETAIL` as const;
const DATA = {
  REQUEST: 'DATA_REQUEST',
  SUCCESS: 'DATA_SUCCESS',
  FAILURE: 'DATA_FAILURE'
} as const;

//! 이 any가 약식이긴 한데,, 이거 비동기할때 리터럴 다 만들어줘야되나? 귀찮은데,,
const updatePrecedentCount = (counts:number) => ({type:UPDATE_PRECEDENT_COUNT, payload:counts})
const updatePreviousTweetCount = (counts:number) => ({type:UPDATE_PREVIOUS_TWEET_COUNT, payload:counts})
const updatePreviousTweets = (tweets:any[]) => ({type:UPDATE_PREVIOUS_TWEETS, payload:tweets})
const fetchTweetDetail = (tweet:any) => ({type:UPDATE_TWEET_DETAIL, payload:tweet})

// 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입
type asyncDataAction = ReturnType<typeof updatePrecedentCount>
  | ReturnType<typeof updatePreviousTweetCount>
  | ReturnType<typeof updatePreviousTweets>
  | ReturnType<typeof fetchTweetDetail>

const initialState = {
  precedentCount:0,
  previousTweetCount:0,
  currentTweetDetail:{},
  previousTweets:[],
}

const reducer = (state=initialState, action:asyncDataAction) => {
  switch(action.type) {
    case "asyncData/UPDATE_PRECEDENT_COUNT":
      return {...state, precedentCount: action.payload}
    case "asyncData/UPDATE_PREVIOUS_TWEET_COUNT":
      return {...state, previousTweetCount: action.payload}
    case "asyncData/UPDATE_PREVIOUS_TWEETS":
      return {...state, previousTweets: action.payload}
    case "asyncData/UPDATE_TWEET_DETAIL":
      return {...state, currentTweetDetail: action.payload}
    default:
      return
  }
}

export default reducer
