import React from 'react'
import { Admin, Resource } from 'react-admin'
import crudProvider from '@fusionworks/ra-data-nest-crud'
import authProvider from './authProvider'
import { httpClient } from './httpClient'

import actorProps from './actor'
import movieProps from './movie'

const dataProvider = crudProvider('http://localhost:8000/api', httpClient)
const AdminPage = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource {...actorProps} />
    <Resource {...movieProps} />
    <Resource name="genres" />
  </Admin>
)

export default AdminPage
