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
import UploadMovieFiles from '../../../components/UploadMovieFiles'

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

        <UploadMovieFiles />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  )
}

export default MoviesList
