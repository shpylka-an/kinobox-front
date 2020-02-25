import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const ActorCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
      <TextInput source="firstName" />
      <TextInput source="lastName" />
    </SimpleForm>
  </Create>
)

export default ActorCreate
