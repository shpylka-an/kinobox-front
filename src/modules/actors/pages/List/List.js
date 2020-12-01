import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import MUIDataTable from 'mui-datatables'
import { fetchActors } from '../../slice'

const ActorsList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchActors())
  }, [dispatch])

  const { actors } = useSelector((state) => state.actors)

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
      name: 'firstName',
      label: 'First Name',
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'lastName',
      label: 'Last Name',
      options: {
        filter: false,
        sort: true,
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
              to={`actors/${id}`}
              color="primary"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          )
        }
      }
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
    customToolbar: () => {
      return (
        <Button
          color="primary"
          startIcon={<AddIcon />}
          component={Link}
          to="actors/create"
        >
          Create
        </Button>
      )
    },
  }

  return (
    <MUIDataTable
      title="Actors List"
      data={actors}
      columns={columns}
      options={options}
    />
  )
}

export default ActorsList
