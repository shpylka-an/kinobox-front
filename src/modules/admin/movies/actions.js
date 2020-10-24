import {
  CREATE_MOVIE_REQUEST,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from './action-types'

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
})

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
})

export const createMovieRequest = (data) => ({
  type: CREATE_MOVIE_REQUEST,
  payload: data,
})
