import { Route } from 'react-router-dom'
export default function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.routeProps.path}
            key={route.name}
            render={props => (
                <route.routeProps.component {...props} routes={route.subRoutes} />
            )}
        />
    );
}