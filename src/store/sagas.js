import { watchAuth } from '../modules/auth/saga'
import { watchActors } from '../modules/actors/saga'
import { watchMovies } from '../modules/movies/saga'
import { watchDirectors } from '../modules/directors/saga'

export default [
  watchAuth,
  watchActors,
  watchMovies,
  watchDirectors
]
