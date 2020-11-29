import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Form from './pages/Form'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Form}/>
        </BrowserRouter>
    )
}

export default Routes