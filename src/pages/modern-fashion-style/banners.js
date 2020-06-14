import React from "react";
import Grid from "@material-ui/core/Grid";
import Imagemaker from "../../components/banner-imagemaker";
import Interior from "../../components/banner-interior-prof";
import Journalist from "../../components/banner-profi-fashion-journalist";

export default function Banners() {
  return (
    <Grid container justify="center" alignItems="center" spacing={4}>
      <Grid item xs={12} md={4}>
        <Imagemaker />
      </Grid>
      <Grid item xs={12} md={4}>
        <Interior />
      </Grid>
      <Grid item xs={12} md={4}>
        <Journalist />
      </Grid>
    </Grid>
  );
}
