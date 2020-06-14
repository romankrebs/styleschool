import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Steps() {
  var styles = {
    digital: {
      boxSizing: "border-box",
      textAlign: "center",
      font: '500 32px "Roboto"',
      height: 68,
      width: 68,
      border: '1px solid rgb(80,80,80)',
      borderRadius: "50% 50%",
      background: "rgba(133,143,99,0.3)",
      color: "rgb(80,80,80)",
      paddingTop: 14
    },
    text: {
      font: '400 1.1em "Roboto"',
      textAlign: "left",
      paddingRight: 20,
      paddingLeft: 20,
      color: 'rgb(80,80,80)',
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ paddingTop: 30 }}
    >
      <Grid item xs={12} md={4}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={3} md={3} >
            <div style={styles.digital}>1</div>
          </Grid>
          <Grid item xs={9} md={9} style={styles.text}>
            Расскажите о Ваших планах и ожиданиях
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={3} md={3}>
            <div style={styles.digital}>2</div>
          </Grid>
          <Grid item xs={9} md={9} style={styles.text}>
            Мы дадим Вам полноценную информацию по курсам
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={3} md={3}>
            <div style={styles.digital}>3</div>
          </Grid>
          <Grid item xs={9} md={9} style={styles.text}>
            Подберем лучший вариант обучения для Вас
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
