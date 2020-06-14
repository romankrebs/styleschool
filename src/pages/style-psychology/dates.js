import React from "react";
import { Grid } from "@material-ui/core";

import H2 from "../../components/head1";

function Tile(props) {
  return (
    <div style={{ margin: "0 auto" }}>
      <div style={{ textAlign: "center" }}>
        <img src={props.image} alt="" style={{ height: 36 }} />
        {/* <Icon style={{ fontSize: "2em", color: "rgb(169,68,66)" }}>{props.symbol}</Icon> */}
      </div>
      <p
        style={{
          padding: 4,
          margin: 0,
          textAlign: "center"
        }}
      >
        <span
          style={{
            fontFamily: "Roboto",
            fontSize: "1.2em",
            fontWeight: 400,
            color: "rgb(90,90,90)",
            borderBottom: "2px solid rgb(80,80,80)"
          }}
        >
          {props.text}
        </span>
      </p>
      <p
        style={{
          fontFamily: "Roboto",
          fontSize: "1em",
          fontWeight: 400,
          color: "rgb(90,90,90)",
          margin: 0,
          padding: 4,
          textAlign: "center"
        }}
      >
        {props.datas}
      </p>
    </div>
  );
}

export default function Dates(params) {
  return (
    <Grid
      container
      justify="center"
      alignItems="stretch"
      style={{
        padding: 20,
        background: "url(/img/psychology/pattern.jpg) top left repeat"
      }}
    >
      <Grid item xs={12} md={12} style={{ padding: 20 }}>
        <H2 content="Ближайший набор" />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Tile
          image="/img/green/calendar-clock.svg"
          symbol=""
          text="БЛИЖАЙШАЯ ДАТА:"
          datas="20 октября 2018"
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Tile
          image="/img/green/clock.svg"
          symbol=""
          text="ДЛИТЕЛЬНОСТЬ:"
          datas="32 академ. часа"
        />
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Tile
          image="/img/green/cash-100.svg"
          symbol=""
          text="СТОИМОСТЬ:"
          datas="32 тыс. руб. за весь курс"
        />
      </Grid>
    </Grid>
  );
}
