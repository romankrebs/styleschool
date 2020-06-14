import React from "react";
import Grid from "@material-ui/core/Grid";

import Design from "../../components/banner-interior";
import MasterClasses from "../../components/banner-modern-moda-style2";
import Decor from "../../components/banner-interiordecor";
import H2 from "../../components/head1";

export default function Banners(props) {
  return (
    <div style={{ paddingBottom: "1em" }}>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={12}>
          <H2 content="Вас может заинтересовать" />
        </Grid>
        <Grid item xs={12} md={4}>
          <MasterClasses />
        </Grid>
        <Grid item xs={12} md={4}>
          <Design />
        </Grid>
        <Grid item xs={12} md={4}>
          <Decor />
        </Grid>
      </Grid>
    </div>
  );
}
