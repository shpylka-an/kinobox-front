import React from 'react'
import { Datagrid, List, TextField } from 'react-admin'

const MoviesList = (props) => {
  return (
    <List
      {...props}
      resource="movies"
      basePath="/dashboard/movies"
      hasShow
      hasCreate
      hasEdit
      hasList
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
      </Datagrid>
    </List>
  )
}

export default MoviesList
