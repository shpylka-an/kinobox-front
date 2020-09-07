import React from 'react'
import authProvider from '../../reactAdmin/authProvider'
import dataProvider from '../../reactAdmin/dataProvider'
import history from '../../reactAdmin/history'
import { Admin, Resource } from 'react-admin'
import MoviesList from './movies/List'

const Index = () => {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
      title="My Admin"
    >
      <Resource name="movies" list={MoviesList} />
    </Admin>
  )
}

export default Index