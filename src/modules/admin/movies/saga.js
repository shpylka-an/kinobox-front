import { call, put, takeEvery } from 'redux-saga/effects'
import { createNewMovie, fetchAllMovies } from './api'
import { fetchMoviesSuccess } from './actions'
import {
  CREATE_MOVIE_REQUEST,
  FETCH_MOVIES_REQUEST,
} from './action-types'

function* workerFetchMovies() {
  try {
    const response = yield call(fetchAllMovies)
    console.log(response)
    yield put(fetchMoviesSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

function* workerCreateMovie(action) {
  try {
    const response = yield call(createNewMovie, action.payload)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export function* watchMovies() {
  yield takeEvery(FETCH_MOVIES_REQUEST, workerFetchMovies)
  yield takeEvery(CREATE_MOVIE_REQUEST, workerCreateMovie)
}
