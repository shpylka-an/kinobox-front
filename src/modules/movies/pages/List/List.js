import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import { fetchMovies } from '../../slice'

const MoviesList = () => {
  const dispatch = useDispatch()
  const { movies, count } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchMovies({}))
  }, [dispatch])

  const changePage = (page, sortOrder) => {
    dispatch(fetchMovies({ queryParams: { page: page + 1 } }))
  }

  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'title',
      label: 'Title',
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'description',
      label: 'Sescription',
      options: {
        filter: false,
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
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const id = tableMeta.rowData[0]
          return (
            <Button
              component={Link}
              to={`movies/${id}`}
              color="primary"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          )
        },
      },
    },
    {
      name: 'Delete',
      options: {
        filter: false,
        sort: false,
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
    download: false,
    print: false,
    serverSide: true,
    count,
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
    onTableChange: (action, tableState) => {
      switch (action) {
        case 'changePage':
          changePage(tableState.page, tableState.sortOrder)
          break
        default:
          console.log('action not handled.')
      }
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
