import authRoutes from '../modules/auth/routes'
import adminRoutes from '../modules/admin/routes'
import webRoutes from '../modules/web/routes'

export default [
  ...authRoutes,
  ...adminRoutes,
  ...webRoutes,
]
