import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import Routes from './routes'
import NavBar from "./components/NavBar";

const App = () => (
    <Router>
        <NavBar />
        <Routes />
    </Router>
);

export default App;
