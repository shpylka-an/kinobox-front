import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import Profile from './pages/profile/profile'
import AdminPage from './pages/admin'
import RegisterForm from './pages/register'

export default () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/login" component={LoginPage} exact />
    <Route path="/register" component={RegisterForm} exact />
    <Route path="/profile" component={Profile} exact />
    <Route path="/admin" component={AdminPage} exact />
  </Switch>
)
