import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";
import Modern from "../../components/banner-modern-moda-style";
import Imagemaker from "../../components/banner-imagemaker";
import Design from "../../components/banner-interior-prof";

export default function Banners() {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={12}>
        <H2 content="Вас может заинтересовать" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Modern />
      </Grid>
      <Grid item xs={12} md={4}>
        <Imagemaker />
      </Grid>
      <Grid item xs={12} md={4}>
        <Design />
      </Grid>
    </Grid>
  );
}
