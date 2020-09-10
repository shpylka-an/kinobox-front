import React from 'react'
import AdminNavBar from '../components/AdminNavBar'

const AdminLayout = ({children}) => {
  return (
    <>
      <AdminNavBar />
      {children}
    </>
  )
}

export default AdminLayout
