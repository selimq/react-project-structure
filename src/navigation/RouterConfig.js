import React from 'react'
import { Switch, Route } from "react-router-dom";
import NotFound from './NotFound'
import pages from '../pages/index'
const RouterConfig = () => {
    return (
        <div>
            <Switch>
                {pages.map((module) => (
                    <Route exact {...module.routeProps} key={module.name} />
                ))}
                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>

        </div>
    )
}

export default RouterConfig
