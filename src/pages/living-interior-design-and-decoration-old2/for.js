import React from "react";
import Grid from "@material-ui/core/Grid";

export default function ForComponent() {
  var style = {
    fontFamily: '"Hevletica", "Roboto"',
    fontSize: "1em",
    color: "rgb(80,80,80)",
    textAlign: "center"
  };

  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={12} md={12} />
    </Grid>
  );
}
