import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Bonus() {
  return (
    <Grid container justify="center" style={{ padding: 20 }}>
      <Grid
        item
        xs={12}
        md={10}
        style={{
          fontSize: "1.2em",
          color: "rgb(100,100,100)",
          padding: 24,
          border: "1px solid",
          borderColor: "rgba(80,80,80,0.25)",
          textAlign: "center"
        }}
      >
        <h2
          style={{ fontFamily: "Roboto", fontSize: "2em", textAlign: "center" }}
        >
          Факультатив
        </h2>
        <p>Тема "Философия японской моды: творцы, идеи, образы"</p>
        <p>
          Факультатив &mdash; <b>4</b> лекции, <b>16</b> академ. часов
        </p>
      </Grid>
    </Grid>
  );
}
