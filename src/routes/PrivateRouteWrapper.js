import React from 'react'
import PrivateRoute from './PrivateRoute'

const PrivateRouteWrapper = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Layout>
      <PrivateRoute component={Component} {...rest} />
    </Layout>
  )
}

export default PrivateRouteWrapper
