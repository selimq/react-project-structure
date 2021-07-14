import React from 'react'
import { Switch, Route } from "react-router-dom";
import routes from './routes'
const RouterConfigPage1 = () => {
    return (
        <div>
            <Switch>
                {routes.map((module) => (
                    < Route  {...module.routeProps} key={module.name} exact />
                ))}

            </Switch>

        </div>
    )
}

export default RouterConfigPage1
