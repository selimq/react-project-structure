import { ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import React from 'react'
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import '../../assets/products.css'
import { useRouteMatch, Link, Switch, Route, useParams } from 'react-router-dom';
const ProductsView = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="main">

            <List className="main-list" >
                {["a", "b", "c"].map((route, index) => (
                    <Link to={`${url}/${route}`}>
                        <ListItem button key={route} >
                            <ListItemIcon> <HourglassEmptyIcon /></ListItemIcon>
                            <ListItemText primary={route} />
                        </ListItem>
                    </Link>
                ))}
            </List>

            <Switch>
                <Route exact path={path}>
                    <h3> Main </h3>



                </Route>
                <Route path={`${path}/:topic`} component={Topic} />

            </Switch>

        </div >
    )
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topic } = useParams();

    return (
        <div>
            <h3>{topic}</h3>
        </div>
    );
}
export default ProductsView
