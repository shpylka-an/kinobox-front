import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const ActorEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
    </SimpleForm>
  </Edit>
)

export default ActorEdit
