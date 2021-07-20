import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Hidden,
  Paper,
  Grid,
} from "@material-ui/core";
import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import products from "./products";
import Product from "./components/Product";
import Image from "material-ui-image";

const ProductsView = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="flex flex-row">
      <Hidden smDown>
        <div className="bg-gray-600 px-5 mr-20">
          {" "}
          <List className="py-5">
            {[
              { route: "A Category", index: 0 },
              { route: "A Category", index: 1 },
              { route: "A Category", index: 2 },
            ].map((route) => (
              <Link
                to={`${url}/${route.route}`}
                className="text-white "
                key={route.index}
              >
                <ListItem button key={route.route}>
                  <ListItemIcon>
                    {" "}
                    <KeyboardArrowRightIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText className="link-text" primary={route.route} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Hidden>

      <Switch>
        <Route exact path={path}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={7}>
                {products.map((value) => (
                  <Grid key={value.id} item>
                    <Link
                      to={`${url}/${value.id}`}
                      onClick={() => {
                        console.log(value.photoUrl);
                      }}
                    >
                      <Paper elevation={10}>
                        <Image
                          style={{
                            width: 220,
                            height: 300,
                            backgroundSize: "contain",
                          }}
                          src={value.photoUrl}
                          alt={value.name}
                        />
                        <p className="text-xl">{value.name}</p>
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
    </div>
  );
};

export default ProductsView;
