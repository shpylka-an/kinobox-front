import { FETCH_ACTORS_REQUEST, FETCH_ACTORS_SUCCESS } from './action-types'

const initialState = {
  isFetching: false,
  actors: [],
}

export const actors = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTORS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_ACTORS_SUCCESS:
      return {
        ...state,
        actors: action.payload,
      }
    default:
      return state
  }
}
