import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Component(props) {
  return (
    <Grid container spacing={3} justify="space-evenly">
      <Grid item xs={12} md={12} style={{ padding: 10 }}>
        <h2 style={{ textAlign: "center", color: "rgb(100,100,100)" }}>
          Вас может заинтересовать
        </h2>
      </Grid>
      <Grid item xs={12} md={4}>
        {props.banners.banner1}
      </Grid>
      <Grid item xs={12} md={4}>
        {props.banners.banner2}
      </Grid>
      <Grid item xs={12} md={4}>
        {props.banners.banner3}
      </Grid>
    </Grid>
  );
}
