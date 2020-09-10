import React from 'react'
import PrivateRoute from './PrivateRoute'

const PrivateRouteWrapper = ({ component: Component, layout: Layout }, ...rest) => {
  return (
    <PrivateRoute
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

export default PrivateRouteWrapper
