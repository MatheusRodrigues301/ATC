import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import CreateUser from './pages/create-user'
import Dashboard from './pages/dashboard'
import CreateCar from './pages/create-car'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-user" component={CreateUser} />
                <Route path="/create-car" component={CreateCar} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}