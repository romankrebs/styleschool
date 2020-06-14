import React from "react";

import Grid from "@material-ui/core/Grid";

export default function Programma(props) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={10} style={{ textAlign: "left" }}>
        <h2>{props.head}</h2>
        <p>{props.text}</p>
        {props.list}
      </Grid>
    </Grid>
  );
}
