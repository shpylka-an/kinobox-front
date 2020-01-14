import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Routes from './routes'
import NavBar from "./components/NavBar";

const theme = createMuiTheme();

const App = () => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <NavBar />
            <Routes />
        </Router>
    </MuiThemeProvider>
);

export default App;
