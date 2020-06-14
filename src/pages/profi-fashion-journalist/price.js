import React from "react";
import { Grid, Paper } from "@material-ui/core";

let style = {
  head: {
    fontFamily: "Roboto",
    fontSize: "2em",
    fontWeight: 700,
    textAlign: "center",
    color: "rgb(100,100,100)",
    padding: "30px 0 10px 0",
    margin: 0
  },
  title: {
    // fontFamily: "Lora",
    fontSize: "1.8em",
    fontWeight: 600,
    textAlign: "center",
    color: "rgb(100,100,100)",
    padding: "10px 0 10px 0",
    margin: 0
  },
  month: {
    // fontFamily: "Roboto",
    fontSize: "1.7em",
    fontWeight: 500,
    textAlign: "center",
    color: "rgb(80,80,80)",
    padding: 4,
    margin: 0
  },
  cours: {
    // fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    textAlign: "center",
    color: "rgb(100,100,100)",
    padding: "12px 0",
    margin: 0
  },
  text: {
    // fontFamily: "Roboto",
    fontSize: "1.2em",
    fontWeight: 400,
    textAlign: "left",
    color: "rgb(100,100,100)",
    margin: 0,
    padding: 0
  }
};

export default function Price() {
  return (
    <div style={{ padding: "40px 0" }}>
      <Grid
        container
        justify="center"
        style={{
          background: "url(/img/profi-fashion-journalist/pattern.jpg) repeat",
          paddingBottom: 40
        }}
      >
        <Grid item xs={12} md={12}>
          <h2 style={style.head}>Стоимость</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ background: "transparent" }}>
            <h3 style={style.title}>On-line</h3>
            <div
              style={{
                background: "rgba(0,0,0,0.1)",
                width: "100%",
                padding: "12px 0"
              }}
            >
              <p style={style.month}>9 900 ₽</p>
              <p style={style.month}>в месяц</p>
            </div>
            <p style={style.cours}>89 000 ₽ за весь курс</p>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <p style={style.text}>
            <img src="/img/green/asterisk.svg" alt="" style={{ height: 24 }} />
            Стоимость за весь курс приведена с учетом организационного сбора.
            Скидки не предоставляются, запись в группу только после подписания
            Договора на обучение.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
