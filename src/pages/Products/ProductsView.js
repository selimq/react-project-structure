import {
    ListItem, ListItemIcon, ListItemText, List, Paper, Grid
} from '@material-ui/core';
import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import '../../assets/products.css'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import products from './products'
import Product from './components/Product'
const ProductsView = () => {
    let { path, url } = useRouteMatch();



    return (
        <div className="main">

            <List className="main-list"  >
                {[{ route: "A Category", index: 0 },
                { route: "A Category", index: 1 },
                { route: "A Category", index: 2 }].map((route) => (
                    <Link to={`${url}/${route}`} className="link" key={route.index}>
                        <ListItem button key={route.route} >
                            <ListItemIcon> <KeyboardArrowRightIcon color="secondary" /></ListItemIcon>
                            <ListItemText className="link-text" primary={route.route} />
                        </ListItem>
                    </Link>
                ))}
            </List>

            <Switch>
                <Route exact path={path}>
                    <Grid container >
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={7}>
                                {products.map((value) => (
                                    <Grid key={value.id} item>
                                        <Link to={`${url}/${value.id}`} onClick={() => {
                                            console.log(value.photoUrl)
                                        }}>
                                            <Paper elevation={10} className="main-paper" >
                                                <img src={value.photoUrl} alt={value.name} className="my-img" />
                                                <h3>{value.name}</h3>
                                            </Paper>
                                        </Link>

                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>




                </Route>
                <Route path={`${path}/:id`} component={Product} />

            </Switch>

        </div >
    )
}


export default ProductsView
