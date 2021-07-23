import { Paper, Grid } from "@material-ui/core";
import React from "react";
import { useMatch, Link, Routes, Route, useLocation } from "react-router-dom";
import products from "./products";
import Product from "./components/Product";
import Image from "material-ui-image";
import ScaleText from "react-scale-text";

const ProductsView = () => {
  let location = useLocation();
  return (
    <div>
      <Grid container className="justify-center p-8">
        {products.map((value) => (
          <Grid key={value.id} item className="p-8">
            <Link to={`${location.pathname}/${value.name}`}>
              <Paper elevation={20}>
                <Image
                  style={{
                    width: 220,
                    height: 300,
                    backgroundSize: "contain",
                  }}
                  src={value.photoUrl}
                  alt={value.name}
                />
                <div
                  style={{
                    width: 220,
                    height: 65,
                  }}
                >
                  <p className="text-xl text-center">{value.name}</p>
                </div>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsView;
