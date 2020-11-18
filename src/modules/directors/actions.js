import {
  FETCH_DIRECTORS_REQUEST,
  FETCH_DIRECTORS_SUCCESS,
} from './action-types'

export const fetchDirectorsRequest = () => ({
  type: FETCH_DIRECTORS_REQUEST,
})

export const fetchDirectorsSuccess = (actors) => ({
  type: FETCH_DIRECTORS_SUCCESS,
  payload: actors,
})
