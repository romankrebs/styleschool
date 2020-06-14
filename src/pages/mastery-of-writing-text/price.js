import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function Price() {
  var styles = {
    digital: {
      fontSize: "2.2em",
      fontWeight: 700,
      textAlign: "center",
      color: "rgba(255,128,0,0.7)",
      padding: 10,
      paddingTop: 30,
      margin: 0
    },
    text: {
      fontSize: "1.6em",
      fontWeight: 400,
      textAlign: "center",
      color: "rgba(100,100,100,1)",
      padding: 20,
      margin: 0
    }
  };
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "2em",
            textAlign: "center"
          }}
        >
          Стоимость
        </h2>
        <p
          style={{
            fontSize: "1.1em",
            textAlign: "center"
          }}
        >
          вы можете выбрать удобный для себя формат и условия прохождения курса
        </p>
        <Grid container justify="center" alignItems="flex-start">
          <Grid item xs={12} md={4} style={{ padding: 10 }}>
            <Paper>
              <p
                style={{
                  ...styles.digital
                }}
              >
                6 <sup style={{ fontSize: "0.8em" }}>000</sup>₽
              </p>
              <p
                style={{
                  ...styles.text
                }}
              >
                ВИДЕО КУРС БЕЗ СЕРТИФИКАТА
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} style={{ padding: 10 }}>
            <Paper>
              <p
                style={{
                  ...styles.digital,
                  color: "rgba(255,128,0,0.85)"
                }}
              >
                12 <sup style={{ fontSize: "0.8em" }}>000</sup>₽
              </p>
              <p
                style={{
                  ...styles.text,
                  fontSize: "1.1em"
                }}
              >
                УЧАСТИЕ НА ВЕБИНАРАХ, КОНСУЛЬТАЦИИ ПО ВЫПОЛНЕНИЮ ДЗ В ПРОЦЕССЕ
                ОБУЧЕНИЯ, С СЕРТИФИКАТОМ
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} style={{ padding: 10 }}>
            <Paper>
              <p
                style={{
                  ...styles.digital,
                  color: "rgba(255,128,0,1)"
                }}
              >
                30 <sup style={{ fontSize: "0.8em" }}>000</sup>₽
              </p>
              <p
                style={{
                  ...styles.text,
                  fontSize: "1.1em"
                }}
              >
                ИНДИВИДУАЛЬНОЕ ОБУЧЕНИЕ - ОБУЧЕНИЕ НА КУРСЕ + ИНДИВИДУАЛЬНЫЕ
                КОНСУЛЬТАЦИИ ПРЕПОДАВАТЕЛЯ
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
