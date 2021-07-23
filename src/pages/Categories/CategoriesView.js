import { Paper, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useMatch, Link, Routes, Route } from "react-router-dom";
import categories from "./categories";
import Image from "material-ui-image";
import { TEST } from "../../navigation/CONSTANTS";
const CategoriesView = (props) => {
  return (
    <Grid container justify="center" className="p-10">
      {categories.map((value) => (
        <Grid key={value.id} item className="p-10">
          <Link
            to={TEST}
            onClick={() => {
              console.log(value.photoUrl);
            }}
            className="text-center"
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
              <p className="text-2xl">{value.name}</p>
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoriesView;
