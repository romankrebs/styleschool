import React from "react";
import { Grid } from "@material-ui/core";

const style = {
  h1: {
    fontSize: "1.4em",
    fontFamily: "Lora",
    fontWeight: 500,
    textAlign: "center",
    color: "rgb(123,143,87)",
    margin: 0,
    padding: 4,
    paddingTop: 12
  },
  h2: {
    fontSize: "1em",
    fontFamily: "Lora",
    fontWeight: 500,
    textAlign: "center",
    color: "rgb(100,100,100)",
    margin: 0,
    padding: 4
  },
  descript: {
    fontSize: "1em",
    fontFamily: "Roboto",
    fontWeight: 400,
    textAlign: "center",
    color: "rgb(180,180,180)",
    margin: 0,
    padding: 4,
    paddingBottom: 48
  }
};

const Top = props => {
  return (
    <div style={{ position: "static" }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ background: "rgba(255,255,255,0.7)", paddingBottom: 24 }}
      >
        <Grid item xs={12} md={12}>
          <h1 style={style.h1}>ФАКУЛЬТЕТ СТИЛИСТОВ ИМИДЖМЕЙКЕРОВ #ВШСДТ</h1>
          <p style={style.descript}>
            Профессиональное обучение в области моды и дизайна от экспертов и
            практиков
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Top;
