import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePage from '../pages/web/home'
import LoginPage from '../pages/web/login'
import Profile from '../pages/web/profile/profile'
import RegisterForm from '../pages/web/register'
import DefaultLayout from '../layouts/DefaultLayout'
import Index from '../pages/admin'
import RouteWrapper from './RouteWrapper'
import AdminLayout from '../layouts/AdminLayout'
import MoviesList from '../pages/admin/movies/List'
import MoviesCreate from '../pages/admin/movies/Create'
import NotFound from '../pages/web/notFound'

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
      path="/dashboard/movies/create"
      component={MoviesCreate}
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

    <Route path="/404" component={NotFound} />
    <Redirect to="/404" />
  </Switch>
)
