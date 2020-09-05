import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/web/home'
import LoginPage from '../pages/web/login'
import Profile from '../pages/web/profile/profile'
import RegisterForm from '../pages/web/register'
import DefaultLayout from '../layouts/DefaultLayout'
import AdminLayout from '../layouts/AdminLayout'
import PrivateRoute from './PrivateRoute'

export default () => (
  <Switch>
    <Route path='/admin/:path?' exact>
      <AdminLayout>
        <Switch>
          <PrivateRoute path="/admin/profile" component={Profile} exact />
        </Switch>
      </AdminLayout>
    </Route>

    <Route>
      <DefaultLayout>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/register" component={RegisterForm} exact />
        </Switch>
      </DefaultLayout>
    </Route>
  </Switch>
)
