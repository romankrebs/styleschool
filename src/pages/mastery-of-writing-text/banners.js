import React from "react";
import Grid from "@material-ui/core/Grid";

import Design from "../../components/banner-interior-prof";
import Imagemaker from "../../components/banner-imagemaker";
import Base from "../../components/banner-base-image-style";

export default function Banners() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={4} style={{ padding: 8 }}>
        <Imagemaker />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 8 }}>
        <Design />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 8 }}>
        <Base />
      </Grid>
    </Grid>
  );
}
