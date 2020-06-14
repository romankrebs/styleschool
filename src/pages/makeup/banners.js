import React from "react";
import Grid from "@material-ui/core/Grid";

import Career from "../../components/banner-career-imagemaker-stylist";
import Modern from "../../components/banner-modern-moda-style2";
import ImgMaker from "../../components/banner-imagemaker";

export default function Banners() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={2}
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={4}>
        <Modern />
      </Grid>
      <Grid item xs={12} md={4}>
        <ImgMaker />
      </Grid>
      <Grid item xs={12} md={4}>
        <Career />
      </Grid>
    </Grid>
  );
}
