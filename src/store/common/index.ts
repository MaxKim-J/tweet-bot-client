export const FETCH_REQUEST = 'common/FETCH_REQUEST' as const
export const FETCH_SUCCESS = 'common/FETCH_SUCCESS' as const
export const FETCH_FAILURE = 'common/FETCH_FAILURE' as const

export const fetchRequest = () => ({ type: FETCH_REQUEST })
export const fetchSuccess = () => ({ type: FETCH_SUCCESS })
export const fetchFailure = () => ({ type: FETCH_FAILURE })

type fetchAction = ReturnType<typeof fetchRequest>
  | ReturnType<typeof fetchSuccess>
  | ReturnType<typeof fetchFailure>

const initialState = {
  fetchStatus: 'completed',
}

const reducer = (state = initialState, action:fetchAction) => {
  switch (action.type) {
    case 'common/FETCH_REQUEST':
      return { ...state, fetchStatus: 'loading' }
    case 'common/FETCH_SUCCESS':
      return { ...state, fetchStatus: 'completed' }
    case 'common/FETCH_FAILURE':
      return { ...state, fetchStatus: 'completed' }
    default:
      return state
  }
}

export default reducer
