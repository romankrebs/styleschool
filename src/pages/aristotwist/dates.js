import React from "react";
import { Grid, Paper } from "@material-ui/core";

export default function Dates() {
  var styles = {
    head: {
      fontFamily: "Cormorant Garamond",
      fontSize: 36,
      fontWeight: 400,
      textAlign: "center",
      color: "rgb(100,100,100)"
    },
    date: {
      background: "rgba(240,240,240,1)",
      fontFamily: "Roboto",
      fontSize: "1em",
      color: "rgb(100,100,100)",
      textAlign: "center"
    },
    text: {
      fontFamily: "Roboto",
      fontSize: "1em",
      color: "rgb(100,100,100)",
      textAlign: "center",
      margin: 0
    },
    textSpan: {
      fontFamily: "Roboto",
      fontSize: "0.5em",
      fontWeight: 500,
      color: "rgb(120,120,120)",
      margin: 0
    },
    box: {
      padding: 10
    },
    title: {
      fontFamily: "Lora",
      fontSize: "1.2em",
      color: "rgb(100,100,100)",
      textAlign: "center",
      margin: 0,
      padding: 0
    },
    red: {
      fontFamily: "Roboto",
      fontSize: "1.8em",
      color: "rgb(160,0,0)",
      textAlign: "center",
      fontWeight: 700,
      margin: 0,
      padding: 0,
      paddingTop: 10
    }
  };

  return (
    <div>
      <h2 style={styles.head}>Ближайший набор</h2>
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        <Grid item xs={12} md={6} style={{ padding: 10 }}>
          <Paper style={styles.box}>
            <p style={styles.title}>Online</p>
            <p style={styles.date}>12 февраля 2019</p>
            <p style={styles.text}>
              Курс: 2 месяца, 8 занятий, 16 академ часов
            </p>
            {/* <Button text="Узнать подробнее" /> */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: 10 }}>
          <Paper style={styles.box}>
            <p style={styles.red}>
              12 <sup>000</sup>₽ &ensp;
              <span style={styles.textSpan}>ОДНА ЧАСТЬ</span>
            </p>
            <p style={styles.red}>
              22 <sup>000</sup>₽ &ensp;
              <span style={styles.textSpan}>ВЕСЬ КУРС</span>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={3} md={1}>
              <img
                src="/img/info-red.svg"
                alt="информация"
                style={{ marginBottom: -4, height: 48 }}
              />
            </Grid>
            <Grid item xs={9} md={8} style={{ textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "1.2em",
                  fontWeight: 400,
                  color: "rgb(100,100,100)"
                }}
              >
                Выпускники прошедшие весь курс получат Удостоверение о повышении
                квалификации гос. университета
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
