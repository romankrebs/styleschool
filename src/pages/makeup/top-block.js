import React from "react";
import { Grid, Paper } from "@material-ui/core";

function Tile(props) {
  return (
    <Paper
      style={{
        padding: 10
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: 0,
          margin: 0
        }}
      >
        <img
          src="/img/makeup/check.svg"
          alt=""
          style={{
            height: 24,
            margin: 0
          }}
        />
      </div>
      <p
        style={{
          fontSize: "1.1em",
          color: "rgb(100,100,100)",
          textAlign: "center",
          padding: 5,
          margin: 0
        }}
      >
        {props.children}
      </p>
    </Paper>
  );
}

function Red() {
  return (
    <span style={{ color: "rgb(255,0,0)" }}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
  );
}

export default function TopBlock() {
  return (
    <Grid
      container
      justify="center"
      alignItems="stretch"
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={12}>
        <h1
          style={{
            fontFamily: "Roboto",
            fontSize: "2em",
            fontWeight: 700,
            textAlign: "center",
            color: "rgb(80,80,80)"
          }}
        >
          Базовый профессиональный курс по make-up
        </h1>
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 8 }}>
        <Tile>Какой MakeUp предложить современной женщине</Tile>
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 8 }}>
        <Tile>Какой MakeUp лучше всего использовать для себя</Tile>
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 8 }}>
        <Tile>Как стать успешным визажистом в России и Европе</Tile>
      </Grid>
      <Grid item xs={12} md={12}>
        <p
          style={{
            fontSize: "1.2em",
            fontWeight: 700,
            textAlign: "center",
            color: "rgb(80,80,80)"
          }}
        >
          3 месяца
          <Red />
          24 занятия
          <Red />
          72 академических часa
          <Red />
          30% теории
          <Red />
          70% практики
        </p>
      </Grid>
    </Grid>
  );
}
