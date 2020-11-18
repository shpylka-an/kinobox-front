import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_ACTORS_REQUEST } from './action-types'
import { fetchActorsSuccess } from './actions'
import actorsApi from './api'

function* workerFetchMovies() {
  try {
    const response = yield call(actorsApi.fetchAllActors)
    yield put(fetchActorsSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

export function* watchActors() {
  yield takeEvery(FETCH_ACTORS_REQUEST, workerFetchMovies)
}
