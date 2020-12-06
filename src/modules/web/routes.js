import DefaultLayout from '../../layouts/DefaultLayout'
import Home from './pages/Home'
import MovieViewPage from './pages/MovieViewPage'
import MyList from './pages/MyList'

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
  {
    path: '/my-list',
    component: MyList,
    layout: DefaultLayout,
    exact: true,
    auth: true,
  },
]
