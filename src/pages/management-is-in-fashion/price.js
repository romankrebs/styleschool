import React from "react";
import { Slide } from "react-reveal";
import { Grid, Paper } from "@material-ui/core";

let styles = {
  h2: {
    font: "500 1.8em 'Lora'",
    textAlign: "center",
    color: "rgb(80,80,80)",
    margin: 0,
    padding: 32
  },
  h3: {
    font: "500 1.6em",
    textAlign: "center",
    color: "rgb(80,80,80)",
    margin: 0,
    padding: "32px 0 12px 0"
  },
  gray: {
    width: "100%",
    background: "rgb(240,240,240)",
    margin: 0,
    padding: "24px 0"
  },
  grayText: {
    font: "400 2em",
    color: "rgb(80,80,80)",
    textAlign: "center",
    margin: 0,
    padding: 0
  },
  pay: {
    font: "400 1em",
    color: "rgb(80,80,80)",
    textAlign: "center"
  }
};

export default function Price() {
  return (
    <div>
      <h2 style={styles.h2}>Стоимость обучения</h2>
      <Grid container alignItems="flex-start" spacing={4}>
        <Grid item xs={12} md={6}>
          <Slide left>
            <Paper>
              <h3 style={styles.h3}>Очно</h3>
              <div style={styles.gray}>
                <p style={styles.grayText}>250 000 &#8381;</p>
              </div>
              <p style={styles.pay}>
                <b>&#8381;</b> 4 платежа
              </p>
            </Paper>
          </Slide>
        </Grid>
        <Grid item xs={12} md={6}>
          <Slide right>
            <Paper>
              <h3 style={styles.h3}>Дистанционно</h3>
              <div style={styles.gray}>
                <p style={styles.grayText}>180 000 &#8381;</p>
              </div>
              <p style={styles.pay}>
                <b>&#8381;</b> 4 платежа
              </p>
            </Paper>
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
}
