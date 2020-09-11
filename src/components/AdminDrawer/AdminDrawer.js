import React from 'react'
import { Link } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'
import menuList from './menuList'

export const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    zIndex: 999,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}))

const AdminDrawer = () => {
  const classes = useStyles()

  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          {menuList.map(({ title, href, icon: Icon }, index) => (
            <ListItem component={Link} to={href} button key={index}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default AdminDrawer
