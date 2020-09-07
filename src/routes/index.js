import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/web/home'
import LoginPage from '../pages/web/login'
import Profile from '../pages/web/profile/profile'
import RegisterForm from '../pages/web/register'
import DefaultLayout from '../layouts/DefaultLayout'
import PrivateRoute from './PrivateRoute'
import Index from '../pages/admin'
import RouteWrapper from './RouteWrapper'

export default () => (
  <Switch>
    <RouteWrapper path="/" component={HomePage} layout={DefaultLayout} exact />
    <Route path="/admin" component={Index} exact />
    <PrivateRoute path="/admin/profile" component={Profile} exact />
    <RouteWrapper path="/login" component={LoginPage} exact />
    <RouteWrapper path="/register" component={RegisterForm} exact />
  </Switch>
)
