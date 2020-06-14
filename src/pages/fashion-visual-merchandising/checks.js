import React from "react";
import { Grid, Paper } from "@material-ui/core";

function Tile(props) {
  return (
    <Paper
      style={{
        padding: 16
      }}
    >
      <div
        style={{
          textAlign: "center"
        }}
      >
        <img
          src="/img/green/check.svg"
          alt=""
          style={{
            height: 20
          }}
        />
      </div>
      <p
        style={{
          fontSize: "1.1em",
          fontWeight: 700,
          color: "rgb(80,80,80)",
          textAlign: "center",
          padding: 8,
          margin: 0
        }}
      >
        {props.text}
      </p>
    </Paper>
  );
}

export default function Check() {
  var style = {
    padding: 20
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={4} style={style}>
        <Tile text="Опыт внедрения ВМ в российской рознице" />
      </Grid>
      <Grid item xs={12} md={4} style={style}>
        <Tile text="Коротко и по делу, пошаговые инструкции" />
      </Grid>
      <Grid item xs={12} md={4} style={style}>
        <Tile text="Снижение издержек, конверсии в продажах" />
      </Grid>
    </Grid>
  );
}
