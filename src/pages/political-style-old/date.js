import React from "react";
import { Grid, Paper } from "@material-ui/core";

const Marker = props => {
  return (
    <Paper style={{ padding: 12 }}>
      <div
        style={{
          padding: 24,
          color: "rgb(80,80,80)",
          background: "rgba(133,143,99,0.3)",
          font: '700 2em "Lora"',
          textAlign: "center",
          marginBottom: 24
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          padding: 12,
          background: "rgba(245,245,245)",
          color: "rgb(80,80,80)",
          font: '700 1.3em "Roboto"',
          textAlign: "center"
        }}
      >
        {props.date}
      </div>
    </Paper>
  );
};

export default function Date() {
  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "1.8em",
            textAlign: "center",
            fcolor: "rgb(100,100,100)"
          }}
        >
          Ближайшие даты
        </h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <Marker title="Дистанционно" date="19 февраля 2019" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Marker title="Очно" date="19 февраля 2019" />
      </Grid>
    </Grid>
  );
}
