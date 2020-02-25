import React from 'react'
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TextField
} from 'react-admin'

const MovieList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="releaseDate" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)

export default MovieList
