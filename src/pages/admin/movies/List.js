import React from 'react'
import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from 'react-admin'
import MoviesEdit from './Edit'

const MoviesList = (props) => {
  return (
    <List
      {...props}
      resource="movies"
      basePath="/dashboard/movies"
      edit={<MoviesEdit />}
      hasCreate
      hasEdit
      hasList
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="slug" />
        <DateField source="releaseDate" />

        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}

export default MoviesList
