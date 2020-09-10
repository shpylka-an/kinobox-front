import React from 'react'
import {
  Create,
  DateInput,
  FileField,
  FileInput,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
} from 'react-admin'

const MoviesCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="slug" />
        <TextInput source="description" />
        <DateInput source="releaseDate" defaultValue={new Date()} />
        <ImageInput source="preview" label="Preview image" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
        <FileInput source="video" label="Video file">
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  )
}

export default MoviesCreate
