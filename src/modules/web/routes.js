import DefaultLayout from '../../layouts/DefaultLayout'
import Home from './pages/Home'
import MovieViewPage from './pages/MovieViewPage'

export default [
  {
    path: '/',
    component: Home,
    layout: DefaultLayout,
    exact: true,
    auth: true,
  },
  {
    path: '/movies/:id',
    component: MovieViewPage,
    layout: false,
    exact: true,
    auth: true,
  },
]
