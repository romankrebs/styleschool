import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from '../../components/head1';
import Tile from "../../components/tile";

export default function Dates () {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <H2
            content="Ближайшие даты"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Tile title="Дистанционно" text="18 июня 2019" />
      </Grid>
    </Grid>
  );

}