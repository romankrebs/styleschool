import React from "react";
import { Grid, Paper } from "@material-ui/core";

import H2 from "../../components/head1";
// import Button0 from "../../components/button0";

function Tile(props) {
  return (
    <Paper
      style={{
        padding: 20
      }}
    >
      <p
        style={{
          fontSize: "1.1em",
          textAlign: "center",
          color: "rgb(100,100,100)",
          padding: 5,
          margin: 0
        }}
      >
        {props.title}
      </p>
      <p
        style={{
          fontSize: "1em",
          textAlign: "center",
          color: "rgb(100,100,100)",
          padding: 0,
          margin: 0
        }}
      >
        {props.data}
      </p>
    </Paper>
  );
}

export default function Dates() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ padding: 20 }}
    >
      <Grid xs={12} md={12}>
        <H2 content="Ближайшие даты" />
      </Grid>
      <Grid item xs={12} md={5} style={{ padding: 20 }}>
        <Tile title="Тренинг" data={<b>14 - 15 июля</b>} />
      </Grid>
      <Grid item xs={12} md={5} style={{ padding: 20 }}>
        <Tile title="Online" data="Доступ после оплаты" />
      </Grid>
    </Grid>
  );
}
