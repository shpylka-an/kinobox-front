import authRoutes from '../modules/auth/routes'
import moviesRoutes from '../modules/movies/routes'
import webRoutes from '../modules/web/routes'

export default [
  ...authRoutes,
  ...moviesRoutes,
  ...webRoutes,
]
