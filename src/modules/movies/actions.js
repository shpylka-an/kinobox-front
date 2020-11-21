import {
  CREATE_MOVIE_REQUEST,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
} from './action-types'

export const fetchMoviesRequest = (queryParams) => ({
  type: FETCH_MOVIES_REQUEST,
  payload: queryParams,
})

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
})

export const fetchMovieRequest = (id) => ({
  type: FETCH_MOVIE_REQUEST,
  payload: id
})

export const fetchMovieSuccess = (movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movie,
})

export const createMovieRequest = (data) => ({
  type: CREATE_MOVIE_REQUEST,
  payload: data,
})
