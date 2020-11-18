import {
  FETCH_DIRECTORS_REQUEST,
  FETCH_DIRECTORS_SUCCESS,
} from './action-types'

const initialState = {
  isFetching: false,
  directors: true,
}

export const directors = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DIRECTORS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_DIRECTORS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        directors: action.payload,
      }
    default:
      return state
  }
}
