import AdminLayout from '../../layouts/AdminLayout'
import List from './pages/List'

export default [
  {
    path: '/dashboard/actors',
    component: List,
    layout: AdminLayout,
    exact: true,
    auth: true,
  },
]
