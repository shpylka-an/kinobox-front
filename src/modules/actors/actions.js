import { FETCH_ACTORS_REQUEST, FETCH_ACTORS_SUCCESS } from './action-types'

export const fetchActorsRequest = () => ({
  type: FETCH_ACTORS_REQUEST
})

export const fetchActorsSuccess = (actors) => ({
  type: FETCH_ACTORS_SUCCESS,
  payload: actors
})
