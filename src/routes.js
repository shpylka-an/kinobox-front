import React from 'react'
import { Switch } from 'react-router-dom'
import HomePage from './pages/web/home'
import LoginPage from './pages/web/login'
import Profile from './pages/web/profile/profile'
import RegisterForm from './pages/web/register'
import Route from './routes/Route'

export default () => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/login" component={LoginPage} exact />
    <Route path="/register" component={RegisterForm} exact />
    <Route path="/profile" component={Profile} exact />
  </Switch>
)
