import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import CreateUser from './pages/create-user'
import Dashboard from './pages/dashboard'
import CreateCar from './pages/create-car'
import SelectCar from './pages/accept-estimate'
import RejectEstimate from './pages/reject-estimate'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-user" component={CreateUser} />
                <Route path="/create-car" component={CreateCar} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/dashboard/:itemId/select-car" component={SelectCar} />
                <Route path="/dashboard/:itemId/reject" component = {RejectEstimate} />
            </Switch>
        </BrowserRouter>
    )
}