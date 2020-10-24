import watchAdmin from '../modules/admin/saga'
import { watchAuth } from '../modules/auth/saga'

export default [
  ...watchAdmin,
  watchAuth
]
