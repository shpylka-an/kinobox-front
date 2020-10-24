import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'

import { logoutRequest } from '../../modules/auth/actions'
import { useStyles } from './styles'

const NavBar = ({ location }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const { isLoggedIn, currentUser } = useSelector((state) => state.auth)
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

  const NavLink = ({ to, title }) => (
    <MenuItem component={Link} to={to} selected={to === location.pathname}>
      {title}
    </MenuItem>
  )

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          className={classes.title}
          component={Link}
          to={'/'}
          variant="h6"
        >
          Kinobox
        </Typography>
        {!isLoggedIn && (
          <>
            <NavLink to="/register" title="Sign up" />
            <NavLink to="/login" title="Sign in" />
          </>
        )}
        {currentUser && (
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
              <MenuItem onClick={handleClose} component={Link} to="/profile">
                Profile
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/dashboard/movies"
              >
                Dashboard
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(NavBar)
