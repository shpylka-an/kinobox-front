import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";

export default () => (
    <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/dashboard' component={Dashboard} exact />
    </Switch>
)
