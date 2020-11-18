import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AdminNavBar from '../common/AdminNavBar'
import AdminDrawer from '../common/AdminDrawer'
import { drawerWidth } from '../common/AdminDrawer/AdminDrawer'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginLeft: `${drawerWidth}px`,
  },
  toolbar: theme.mixins.toolbar,
}))

const AdminLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div>
      <AdminNavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
      <AdminDrawer />
    </div>
  )
}

export default AdminLayout
