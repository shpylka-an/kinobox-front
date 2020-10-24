import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import { fetchMoviesRequest } from '../../actions'

const MoviesList = () => {
  const dispatch = useDispatch()
  const { movies } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchMoviesRequest())
  }, [dispatch])

  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'title',
      label: 'Title',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'description',
      label: 'Sescription',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'releaseDate',
      label: 'Release date',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Edit',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button color="primary" startIcon={<EditIcon />}>
              Edit
            </Button>
          )
        },
      },
    },
    {
      name: 'Delete',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button color="secondary" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          )
        },
      },
    },
  ]

  const options = {
    filterType: 'dropdown',
    customToolbar: () => {
      return (
        <Button
          color="primary"
          startIcon={<AddIcon />}
          component={Link}
          to="movies/create"
        >
          Create
        </Button>
      )
    },
  }

  return (
    <MUIDataTable
      title="Movies List"
      data={movies}
      columns={columns}
      options={options}
    />
  )
}

export default MoviesList
