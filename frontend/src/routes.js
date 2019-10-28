import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import Create from './pages/create'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create" component={Create} />
            </Switch>
        </BrowserRouter>
    )
}