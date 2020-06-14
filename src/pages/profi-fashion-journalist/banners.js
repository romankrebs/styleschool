import React from "react";
import { Grid } from "@material-ui/core";
import Imagemaker from "../../components/banner-imagemaker";
import Journalism from "../../components/banner-fashion-journalism";
import Self from "../../components/banner-self-stylist";

export default function Banners() {
  return (
    <Grid container alignItems="flex-start" spacing={2}>
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "2em",
            fontWeight: 700,
            textAlign: "center",
            color: "rgb(100,100,100)",
            padding: "100px 0 20px 0",
            margin: 0
          }}
        >
          Вас может заинтересовать
        </h2>
      </Grid>
      <Grid item xs={12} md={4}>
        <Imagemaker />
      </Grid>
      <Grid item xs={12} md={4}>
        <Self />
      </Grid>
      <Grid item xs={12} md={4}>
        <Journalism />
      </Grid>
    </Grid>
  );
}
