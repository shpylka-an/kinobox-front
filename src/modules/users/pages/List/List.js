import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../slice'
import MUIDataTable from 'mui-datatables'

const UsersList = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.users)

  console.log(users)

  useEffect(() => {
    dispatch(fetchUsers({}))
  }, [dispatch])

  const changePage = (page) => {
    dispatch(fetchUsers({ queryParams: { page: page + 1 } }))
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
      name: 'username',
      label: 'Username',
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: 'email',
      label: 'Email',
      options: {
        filter: false,
        sort: true,
      },
    },
  ]

  const options = {
    download: false,
    print: false,
    serverSide: true,
    count: users?.meta.totalItems,
    onTableChange: (action, tableState) => {
      if (action === 'changePage') {
        changePage(tableState.page, tableState.order)
      }
    },
  }

  if (!users) {
    return 'Loading...'
  }

  return (
    <MUIDataTable
      title="Users List"
      data={users.items}
      columns={columns}
      options={options}
    />
  )
}

export default UsersList
