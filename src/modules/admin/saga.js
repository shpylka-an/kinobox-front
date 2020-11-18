import { watchMovies } from './movies/saga'
import { watchActors } from './actors/saga'

export default [
  watchMovies,
  watchActors
]
