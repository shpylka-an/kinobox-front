import Login from './pages/Login'
import Register from './pages/Register'
import DefaultLayout from '../../layouts/DefaultLayout'

export default [
  {
    path: '/login',
    component: Login,
    layout: DefaultLayout,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    layout: DefaultLayout,
    exact: true,
  },
]
