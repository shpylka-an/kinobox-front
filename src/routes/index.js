import React from 'react'
import { Switch } from 'react-router-dom'
import routes from './routes'
import PrivateRouteWrapper from './PrivateRouteWrapper'
import RouteWrapper from './RouteWrapper'
import PrivateRoute from './PrivateRoute'
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default () => {
  const { isLoading } = useSelector((state) => state.auth)

  return isLoading ? (
    <div className="loader__container">
      <CircularProgress />
    </div>
  ) : (
    <Switch>
      {routes.map((route, i) => {
        if (route.auth) {
          if (route.layout) {
            return <PrivateRouteWrapper key={i} {...route} />
          } else {
            return <PrivateRoute key={i} {...route} />
          }
        } else {
          return <RouteWrapper key={i} {...route} />
        }
      })}
    </Switch>
  )
}
