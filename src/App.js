import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Routes from './routes'
import NavBar from "./components/NavBar";
import { CurrentUserProvider } from './contexts/currentUser';
import CurrentUserChecker from "./components/CurrentUserChecker";

const theme = createMuiTheme();

const App = () => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <CurrentUserProvider>
            <CurrentUserChecker>
              <Router>
                <NavBar />
                <Routes />
              </Router>
            </CurrentUserChecker>
        </CurrentUserProvider>
    </MuiThemeProvider>
);

export default App;
