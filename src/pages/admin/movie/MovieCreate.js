import React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput
} from 'react-admin'

const MovieCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" resettable />
      <TextInput source="description" multiline rows={4} resettable />
      <DateInput source="releaseDate" />
      <ReferenceArrayInput
        source="genres_ids"
        reference="genres"
        label="Genres"
      >
        <SelectArrayInput optionText="title" />
      </ReferenceArrayInput>
      <ReferenceArrayInput
        source="actors_ids"
        reference="actors"
        label="Actors"
      >
        <SelectArrayInput
          optionText={actor => `${actor.firstName} ${actor.lastName}`}
        />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
)

export default MovieCreate
