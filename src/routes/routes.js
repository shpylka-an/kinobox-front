import authRoutes from '../modules/auth/routes'
import moviesRoutes from '../modules/movies/routes'
import webRoutes from '../modules/web/routes'
import actorsRoutes from '../modules/actors/routes'
import directorsRoutes from '../modules/directors/routes'
import usersRoutes from '../modules/users/routes'

export default [
  ...authRoutes,
  ...moviesRoutes,
  ...webRoutes,
  ...actorsRoutes,
  ...directorsRoutes,
  ...usersRoutes,
]
