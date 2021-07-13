import React from 'react'
import { Switch, Route } from "react-router-dom";
import { ROOT, PAGE1 } from './CONSTANTS'
import Home from '../pages/Home'
import Page1 from '../pages/Page1'
import NotFound from './NotFound'

const RouterConfig = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROOT} component={Home} />
                <Route exact path={PAGE1} component={Page1} />

                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>

        </div>
    )
}

export default RouterConfig
