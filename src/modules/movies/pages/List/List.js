import React, { useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'
import { fetchMovies, removeMovie } from '../../slice'
import Chip from '@material-ui/core/Chip'
import Switch from '@material-ui/core/Switch'

const MoviesList = () => {
  const dispatch = useDispatch()
  const { movies } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchMovies({}))
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(removeMovie({ id }))
  }

  const handleSwitchIsPublished = (id, prevValue) => {
    console.log({id, prevValue})
  }

  const changePage = (page) => {
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
      label: 'Description',
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
      name: 'isPublished',
      label: 'Is Published',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          const id = tableMeta.rowData[0]
          return (
            <Switch
              checked={value}
              color="primary"
              onChange={(e) => handleSwitchIsPublished(id, value)}
            />
          )
        },
      },
    },
    {
      name: 'directors',
      label: 'Director',
      options: {
        customBodyRender: (directors) => {
          return directors.map((director) => (
            <Chip
              label={`${director.firstName} ${director.lastName}`}
              key={director.id}
            />
          ))
        },
      },
    },
    {
      name: 'Edit',
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
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
        customBodyRender: (value, tableMeta) => {
          const id = tableMeta.rowData[0]
          return (
            <Button
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(id)}
            >
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
    count: movies?.meta.totalItems,
    confirmFilters: true,
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
      if (action === 'changePage') {
        changePage(tableState.page, tableState.sortOrder)
      }
    },
  }

  if (!movies) {
    return 'Loading'
  }

  return (
    <MUIDataTable
      title="Movies List"
      data={movies.items}
      columns={columns}
      options={options}
    />
  )
}

export default MoviesList
