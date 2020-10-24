import { call, put, takeEvery } from 'redux-saga/effects'
import { login, me, register } from './api'
import {
  AUTH_CHECK_REQUEST,
  LOAD_CURRENT_USER_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
} from './action-types'
import {
  authCheckFailure,
  authCheckSuccess,
  loadCurrentUserFailure,
  loadCurrentUserRequest,
  loadCurrentUserSuccess,
  loginFailure,
  loginSuccess,
  registerFailure,
  registerSuccess,
} from './actions'

function* workerLogin(action) {
  try {
    const response = yield call(login, action.payload)
    const { access_token: accessToken, user } = response.data

    localStorage.setItem('token', accessToken)
    yield put(loginSuccess(user))
  } catch (error) {
    yield put(loginFailure(error.response.data.message))
  }
}

function workerLogout() {
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

function* workerRegister(action) {
  try {
    const response = yield call(register, action.payload)
    const { access_token: accessToken, user } = response.data

    localStorage.setItem('token', accessToken)
    yield put(registerSuccess(user))
  } catch (error) {
    yield put(registerFailure())
  }
}

export function* watchAuth() {
  yield takeEvery(LOGIN_REQUEST, workerLogin)
  yield takeEvery(LOGOUT_REQUEST, workerLogout)
  yield takeEvery(AUTH_CHECK_REQUEST, workerAuthCheck)
  yield takeEvery(LOAD_CURRENT_USER_REQUEST, workerLoadCurrentUser)
  yield takeEvery(REGISTER_REQUEST, workerRegister)
}
