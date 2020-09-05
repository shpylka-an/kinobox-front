import { call, put, takeEvery, take } from 'redux-saga/effects'
import {
  AUTH_CHECK_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  LOAD_CURRENT_USER_REQUEST,
} from '../actions/types/auth'
import { login, me } from '../api/login'
import {
  authCheckFailure,
  authCheckSuccess,
  loginFailure,
  loginSuccess,
  loadCurrentUserFailure,
  loadCurrentUserSuccess,
  loadCurrentUserRequest,
} from '../actions/auth'

function* workerLogin(action) {
  try {
    const response = yield call(login, action.payload)

    const token = response.data.access_token
    localStorage.setItem('token', token)

    yield put(loginSuccess(response.data.user))
  } catch (error) {
    yield put(loginFailure(error.response.data.message))
  }
}

function* workerLogout() {
  localStorage.removeItem('token')
}

function* workerAuthCheck() {
  if (localStorage.getItem('token')) {
    yield put(authCheckSuccess())
    yield put(loadCurrentUserRequest())
  } else {
    yield put(authCheckFailure())
  }
}

function* workerLoadCurrentUser() {
  try {
    const response = yield call(me)
    yield put(loadCurrentUserSuccess(response.data))
  } catch (error) {
    localStorage.removeItem('token')
    yield put(loadCurrentUserFailure())
  }
}

export function* watchAuth() {
  yield takeEvery(LOGIN_REQUEST, workerLogin)
  yield takeEvery(LOGOUT_REQUEST, workerLogout)
  yield takeEvery(AUTH_CHECK_REQUEST, workerAuthCheck)
  yield takeEvery(LOAD_CURRENT_USER_REQUEST, workerLoadCurrentUser)
}
