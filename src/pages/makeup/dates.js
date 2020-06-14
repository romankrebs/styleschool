import React from "react";
import { Grid, Paper } from "@material-ui/core";

import H2 from "../../components/head1";

export default function Dates() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={6}>
        <H2 content="Ближайший набор" />
        <Paper
          style={{
            padding: 10
          }}
        >
          <p
            style={{
              fontSize: "1.2em",
              fontWeight: 700,
              color: "rgb(100,100,100)",
              textAlign: "center",
              margin: 0,
              padding: 10
            }}
          >
            Online
          </p>
          <p
            style={{
              fontSize: "1.1em",
              fontWeight: 700,
              color: "rgb(100,100,100)",
              textAlign: "center",
              margin: 0,
              padding: 10
            }}
          >
            1 сентября
          </p>
        </Paper>
      </Grid>
      <Grid item xs={12} md={7}>
        <p
          style={{
            fontSize: "0.9em",
            fontWeight: 400,
            color: "rgb(100,100,100)",
            textAlign: "center",
            margin: 0,
            padding: 10
          }}
        >
          <span
            style={{
              fontSize: "1.4em",
              color: "rgb(98,132,199)",
              fontFamily: "Istok Web",
              fontWeight: 700
            }}
          >
            *
          </span>
          &nbsp;Приведена стоимость обучения без учета перелета и проживания
          в&nbsp;г.&nbsp;Прага&nbsp;(Чехия).
        </p>
        <p
          style={{
            fontSize: "0.9em",
            fontWeight: 400,
            color: "rgb(100,100,100)",
            textAlign: "center",
            margin: 0,
            padding: 10
          }}
        >
          <span
            style={{
              fontSize: "1.4em",
              color: "rgb(98,132,199)",
              fontFamily: "Istok Web",
              fontWeight: 700
            }}
          >
            **
          </span>
          &nbsp;При оплате курса возможна рассрочка.
        </p>
      </Grid>
    </Grid>
  );
}
