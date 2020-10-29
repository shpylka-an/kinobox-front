import { call, put, takeEvery } from 'redux-saga/effects'
import { createNewMovie, fetchAllMovies, uploadMovie } from './api'
import { fetchMoviesSuccess } from './actions'
import { CREATE_MOVIE_REQUEST, FETCH_MOVIES_REQUEST } from './action-types'

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
  const { data, files } = action.payload
  try {
    const response = yield call(createNewMovie, data)
    yield call(uploadMovie, response.data.id, files)
  } catch (error) {
    console.log(error)
  }
}

export function* watchMovies() {
  yield takeEvery(FETCH_MOVIES_REQUEST, workerFetchMovies)
  yield takeEvery(CREATE_MOVIE_REQUEST, workerCreateMovie)
}
