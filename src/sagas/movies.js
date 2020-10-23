import { call, put, takeEvery } from 'redux-saga/effects'
import {
  CREATE_MOVIE_REQUEST,
  FETCH_MOVIES_REQUEST,
} from '../actions/types/movies'
import { createNewMovie, fetchAllMovies } from '../api/movies'
import { fetchMoviesSuccess } from '../actions/movies'

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
