import { call, put, takeEvery } from 'redux-saga/effects'
import { createNewMovie, fetchAllMovies, getMovie, uploadMovie } from './api'
import { fetchMoviesSuccess, fetchMovieSuccess } from './actions'
import {
  CREATE_MOVIE_REQUEST,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIES_REQUEST,
} from './action-types'

function* workerFetchMovies(action) {
  try {
    const response = yield call(fetchAllMovies, action.payload)
    console.log(response)
    yield put(fetchMoviesSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

function* workerFetchMovie(action) {
  try {
    const response = yield call(getMovie, action.payload)
    yield put(fetchMovieSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

function* workerCreateMovie(action) {
  const { attributes, relationships, files } = action.payload
  try {
    const response = yield call(createNewMovie, { attributes, relationships })
    yield call(uploadMovie, response.data.id, files)
  } catch (error) {
    console.log(error)
  }
}

export function* watchMovies() {
  yield takeEvery(FETCH_MOVIES_REQUEST, workerFetchMovies)
  yield takeEvery(FETCH_MOVIE_REQUEST, workerFetchMovie)
  yield takeEvery(CREATE_MOVIE_REQUEST, workerCreateMovie)
}
