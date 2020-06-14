import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ButtonRegister from "./button-registration.js";

function Tile(props) {
  var subtitle = "";
  if (props.subtitle !== "") {
    subtitle = (
      <React.Fragment>
        <p
          style={{
            font: "700 1.2em",
            textAlign: "center",
            margin: 0,
            padding: 8,
            paddingBottom: 2,
            color: "rgb(100,100,100)"
          }}
        >
          {props.subtitle}
        </p>
      </React.Fragment>
    );
  }
  return (
    <Paper
      style={{
        border: "1px solid rgb(200,200,200)",
        padding: 10,
        boxShadow: "none"
      }}
    >
      <h3
        style={{
          fontFamily: "Lora",
          fontSize: "1.6em",
          color: "rgb(100,100,100)",
          textAlign: "center",
          fontWeight: 500,
          margin: 0,
          padding: "12px 0"
        }}
      >
        {props.head}
      </h3>
      <p
        style={{
          font: "400 1em",
          textAlign: "center",
          background: "rgba(240,240,240,1.0)",
          padding: 16,
          margin: 0
        }}
      >
        {props.date}
      </p>
      {subtitle}
      <p
        style={{
          font: "400 1em",
          textAlign: "center",
          padding: 2,
          margin: 0,
          paddingBottom: 10,
          color: "rgb(120,120,120)"
        }}
      >
        {props.text}
      </p>
      {props.button ? (
        <ButtonRegister
          message={props.button}
          bkg="rgb(255,211,91)"
          color="rgb(0,0,0)"
        />
      ) : null}
    </Paper>
  );
}

export default function DateEducation(props) {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={10}>
        <ScrollableAnchor id={props.link}>
          <h2
            style={{
              fontFamily: "Lora",
              fontSize: "1.8em",
              color: "rgb(100,100,100)",
              textAlign: "center",
              fontWeight: 500,
              margin: 8,
              marginTop: 30,
              padding: "12px 0"
            }}
          >
            {props.head}
          </h2>
        </ScrollableAnchor>
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 10 }}>
        <Tile
          head={props.online.head}
          date={props.online.date}
          subtitle={props.online.subtitle}
          text={props.online.text}
          button={props.buttonMessage}
        />
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 10 }}>
        <Tile
          head={props.ofline.head}
          date={props.ofline.date}
          subtitle={props.ofline.subtitle}
          text={props.ofline.text}
          button={props.buttonMessage}
        />
      </Grid>
    </Grid>
  );
}
