import React from 'react'
import { Switch, Route } from "react-router-dom";
import NotFound from './NotFound'
import pages from '../pages/index'
import Home from '../pages/Home'

const RouterConfig = () => {

    return (
        <div>
            <Switch>
                <Route exact path='/' key={Home.name} component={Home} />
                {pages.map((module) => (
                    <Route {...module.routeProps} key={module.name} />
                ))}
                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>
        </div>
    )
}

export default RouterConfig
