import { combineReducers } from '@reduxjs/toolkit'
import auth from '../modules/auth/slice'
import actors from '../modules/actors/slice'
import directors from '../modules/directors/slice'
import movies from '../modules/movies/slice'
import web from '../modules/web/slice'
import users from '../modules/users/slice'

const rootReducer = combineReducers({
  auth,
  actors,
  directors,
  movies,
  web,
  users,
})

export default rootReducer
