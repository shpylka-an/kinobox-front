import DefaultLayout from '../../layouts/DefaultLayout'
import Home from './pages/Home'

export default [
  {
    path: '/',
    component: Home,
    layout: DefaultLayout,
    exact: true,
  },
]
