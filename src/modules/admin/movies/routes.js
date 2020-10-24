import List from './pages/List'
import Create from './pages/Create'
import Edit from './pages/Edit'
import AdminLayout from '../../../layouts/AdminLayout'

export default [
  {
    path: '/dashboard/movies',
    component: List,
    layout: AdminLayout,
    exact: true,
  },
  {
    path: '/dashboard/movies/create',
    component: Create,
    layout: AdminLayout,
    exact: true,
  },
  {
    path: '/dashboard/movies/:id',
    component: Edit,
    layout: AdminLayout,
    exact: true,
  },
]
