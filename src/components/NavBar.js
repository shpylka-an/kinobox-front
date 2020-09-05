import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import { useSelector, useDispatch } from 'react-redux'
import { logoutRequest } from '../actions/auth'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#fff',
  },
}))

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
          component={Link}
          to={'/'}
          variant="h6"
          className={classes.title}
        >
          Kinobox
        </Typography>
        <NavLink to="/" title="Home" />
        {!isLoggedIn && <NavLink to="/login" title="Login" />}
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
              <MenuItem
                onClick={handleClose}
                component={Link}
                to="/admin/profile"
              >
                Profile
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
