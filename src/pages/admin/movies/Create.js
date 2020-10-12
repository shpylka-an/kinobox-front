import React from 'react'
import {
  Create,
  DateInput,
  FileField,
  FileInput,
  ImageField,
  ImageInput,
  SimpleForm,
  TextInput,
} from 'react-admin'

const MoviesCreate = (props) => {
  return (
    <Create
      {...props}
      resource="movies"
      basePath="/movies"
    >
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="slug" />
        <TextInput source="description" />
        <DateInput source="releaseDate" defaultValue={new Date()} />
      </SimpleForm>
    </Create>
  )
}

export default MoviesCreate
