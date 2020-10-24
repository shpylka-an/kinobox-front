import adminReducers from '../modules/admin/reducer'
import { auth } from '../modules/auth/reducer'

export default {
  ...adminReducers,
  auth
}
