import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import { Typography } from '@material-ui/core'
import { logoutRequest } from '../../modules/auth/actions'
import { useStyles } from './styles'

const AdminNavBar = () => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()

  const open = Boolean(anchorEl)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logoutRequest())
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          className={classes.title}
          component={Link}
          to={'/'}
          variant="h6"
        >
          Kinobox dashboard
        </Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/">
              Go to site
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default AdminNavBar
