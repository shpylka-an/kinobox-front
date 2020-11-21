import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from './action-types'

const initialState = {
  isFetching: false,
  movies: [],
  movie: null,
  count: 0,
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
        movies: action.payload.items,
        count: action.payload.count,
      }
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
      }
    default:
      return state
  }
}
