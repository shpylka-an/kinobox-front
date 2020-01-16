import React  from "react";
import { Link, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

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
                <NavLink to='/login' title='Login'/>
            </Toolbar>
        </AppBar>
    )
};

export default withRouter(NavBar);
