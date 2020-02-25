import React from 'react'
import { Show, SimpleShowLayout, TextField } from 'react-admin'

const ActorShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
    </SimpleShowLayout>
  </Show>
)

export default ActorShow
