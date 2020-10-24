import React from 'react'
import { Switch } from 'react-router-dom'
import routes from './routes'
import PrivateRouteWrapper from './PrivateRouteWrapper'
import RouteWrapper from './RouteWrapper'

export default () => (
  <Switch>
    {routes.map((route, i) => {
      return route.auth ? (
        <PrivateRouteWrapper key={i} {...route} />
      ) : (
        <RouteWrapper key={i} {...route} />
      )
    })}
  </Switch>
)
