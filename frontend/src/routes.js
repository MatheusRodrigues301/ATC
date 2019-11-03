import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import CreateUser from './pages/create-user'

const isLogged = () => {
    let user = localStorage.getItem("user");
    return user !== null;
}

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-user" component={CreateUser} />
            </Switch>
        </BrowserRouter>
    )
}