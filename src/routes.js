import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import Profile from "./pages/profile/profile";

export default () => (
    <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/login' component={LoginPage} exact />
        <Route path='/profile' component={Profile} exact />
    </Switch>
)
