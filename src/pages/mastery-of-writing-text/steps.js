import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Steps() {
  var styles = {
    digital: {
      boxSizing: "border-box",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: "48px",
      fontWeight: 500,
      height: 88,
      width: 88,
      borderRadius: "50% 50%",
      background: "rgba(160,160,160,1)",
      color: "rgb(255,255,255)",
      paddingTop: 16
    },
    text: {
      fontSize: "1.1em",
      fontWeight: 400,
      textAlign: "left",
      paddingRight: 20,
      paddingLeft: 20
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
          <Grid item xs={3} md={3}>
            <div style={styles.digital}>1</div>
          </Grid>
          <Grid item xs={9} md={9} style={styles.text}>
            Свяжитесь с нами, расскажите о целях и ожиданиях
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={3} md={3}>
            <div style={styles.digital}>2</div>
          </Grid>
          <Grid item xs={9} md={9} style={styles.text}>
            Мы дадим Вам полноценную информацию по курсу
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={3} md={3}>
            <div style={styles.digital}>3</div>
          </Grid>
          <Grid item xs={9} md={9} style={styles.text}>
            Вместе выберем лучший вариант обучения для Вас
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
