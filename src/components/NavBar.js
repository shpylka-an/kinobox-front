import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from "@material-ui/core/Menu";
import { CurrentUserContext } from "../contexts/currentUser";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = ({location}) => {
    const classes = useStyles();
    const [{isLoggedIn}] = useContext(CurrentUserContext)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const NavLink = ({to, title}) => (
        <MenuItem
            component={Link}
            to={to}
            selected={to === location.pathname}
        >
            {title}
        </MenuItem>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <NavLink to='/' title='Home'/>
                {!isLoggedIn && <NavLink to='/login' title='Login'/>}
                {isLoggedIn && (
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
                          <MenuItem onClick={handleClose} component={Link} to='/profile'>Profile</MenuItem>
                          <MenuItem onClick={() => {handleClose(); alert('Logout')}}>Logout</MenuItem>
                      </Menu>
                  </div>
                )}
            </Toolbar>
        </AppBar>
    )
};

export default withRouter(NavBar);
