import React from 'react'
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin'

const MoviesEdit = (props) => {
  return (
    <Edit
      {...props}
      resource="movies"
      basePath="/dashboard/movies"
      id={props.match.params.id}
    >
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="slug" />
        <TextInput source="description" />
        <DateInput source="releaseDate" />
      </SimpleForm>
    </Edit>
  )
}

export default MoviesEdit