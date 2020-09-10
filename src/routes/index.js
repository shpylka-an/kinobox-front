import React from 'react'
import { Switch } from 'react-router-dom'
import HomePage from '../pages/web/home'
import LoginPage from '../pages/web/login'
import Profile from '../pages/web/profile/profile'
import RegisterForm from '../pages/web/register'
import DefaultLayout from '../layouts/DefaultLayout'
import Index from '../pages/admin'
import RouteWrapper from './RouteWrapper'
import AdminLayout from '../layouts/AdminLayout'
import MoviesList from '../pages/admin/movies/List'

export default () => (
  <Switch>
    <RouteWrapper path="/" component={HomePage} layout={DefaultLayout} exact />
    <RouteWrapper
      path="/dashboard"
      component={Index}
      layout={AdminLayout}
      exact
    />
    <RouteWrapper
      path="/profile"
      component={Profile}
      layout={DefaultLayout}
      exact
    />
    <RouteWrapper
      path="/dashboard/movies"
      component={MoviesList}
      layout={AdminLayout}
      exact
    />
    <RouteWrapper
      path="/login"
      component={LoginPage}
      layout={DefaultLayout}
      exact
    />
    <RouteWrapper
      path="/register"
      component={RegisterForm}
      layout={DefaultLayout}
      exact
    />
  </Switch>
)
