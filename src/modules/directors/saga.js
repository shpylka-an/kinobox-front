import { call, put, takeEvery } from 'redux-saga/effects'
import { getDirectors } from './api'
import { fetchDirectorsSuccess } from './actions'
import { FETCH_DIRECTORS_REQUEST } from './action-types'

function* workerFetchDirectors() {
  try {
    const response = yield call(getDirectors)
    yield put(fetchDirectorsSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

export function* watchDirectors() {
  yield takeEvery(FETCH_DIRECTORS_REQUEST, workerFetchDirectors)
}
