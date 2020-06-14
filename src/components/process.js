import React from "react";

import Grid from "@material-ui/core/Grid";

export default function Process(props) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={10} style={{ paddingTop: 30 }}>
        <h3 style={{ textAlign: "left" }}>{props.head}</h3>
        {props.text}
      </Grid>
    </Grid>
  );
}
