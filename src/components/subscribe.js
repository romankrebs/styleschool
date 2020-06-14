import React from "react";

import Grid from "@material-ui/core/Grid";
import { VerticalForm } from './forms';

export default function Feedback(props) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={5}>
        {props.text}
      </Grid>
      <Grid item xs={12} md={5}>
        <VerticalForm />
      </Grid>
    </Grid>
  );
}
