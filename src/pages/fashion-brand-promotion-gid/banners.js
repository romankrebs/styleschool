import React from "react";
import Grid from "@material-ui/core/Grid";

import Personal from "../../components/banner-personal-brand";
import StartUp from "../../components/banner-launch-technology-startup";
import International from "../../components/banner-international-communications";

export default function Banners() {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={4}>
        <Personal />
      </Grid>
      <Grid item xs={12} md={4}>
        <StartUp />
      </Grid>
      <Grid item xs={12} md={4}>
        <International />
      </Grid>
    </Grid>
  );
}
