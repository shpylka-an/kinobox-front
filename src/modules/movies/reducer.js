import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from './action-types'

const initialState = {
  isFetching: false,
  movies: [],
}

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      }
    default:
      return state
  }
}
