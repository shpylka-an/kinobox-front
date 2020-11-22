import { combineReducers } from '@reduxjs/toolkit'
import auth from '../modules/auth/slice'
import actors from '../modules/actors/slice'
import directors from '../modules/directors/slice'
import movies from '../modules/movies/slice'

const rootReducer = combineReducers({
  auth,
  actors,
  directors,
  movies,
})

export default rootReducer
