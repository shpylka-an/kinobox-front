import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import { useStyles } from './styles'
import { logout } from '../../modules/auth/slice'
import { searchMovies, setSearch } from '../../modules/movies/slice'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'

const NavBar = ({ location }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const { isLoggedIn, currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const open = Boolean(anchorEl)

  const searchHandler = (e) => {
    dispatch(setSearch(e.target.value))
    dispatch(searchMovies({ queryParams: { search: e.target.value } }))
  }

  useEffect(() => {
    return () => {
      dispatch(setSearch(null))
    }
    // eslint-disable-next-line
  }, [])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
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
        {isLoggedIn && (
          <>
            <NavLink to="/" title="Home" />
            <NavLink to="/my-list" title="My List" />
          </>
        )}
        <div className={classes.grow} />
        {!isLoggedIn && (
          <>
            <NavLink to="/register" title="Sign up" />
            <NavLink to="/login" title="Sign in" />
          </>
        )}
        {isLoggedIn && (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={searchHandler}
            />
          </div>
        )}
        {currentUser && (
          <div>
            <IconButton color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton onClick={handleMenu} color="inherit">
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
