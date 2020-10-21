import React from 'react'
import { Resource } from 'react-admin'

const Resources = () => (
  <>
    <Resource name="movies" hasEdit={true} intent="registration" />
    {/*<Resource name="movies" hasEdit={true} intent="registration" />*/}
  </>
)

export default Resources
