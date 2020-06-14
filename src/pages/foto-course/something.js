import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Something() {
  var style = {
    fontSize: "1em",
    fontWeight: 700,
    color: "rgb(100,100,100)",
    textAlign: "center"
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <p style={style}>
          2 теоретические лекции по 3 часа ∣ 3 занятия в фотостудии по 3 часа
        </p>
      </Grid>
      <Grid item xs={12} md={12} style={{ background: "rgba(210,230,255,1)" }}>
        <p style={style}>для начинающих стилистов и имиджмейкеров.</p>
      </Grid>
    </Grid>
  );
}
