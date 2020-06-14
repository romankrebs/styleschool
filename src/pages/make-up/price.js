import React from "react";
import { Slide } from "react-reveal";
import { Grid, Paper } from "@material-ui/core";

let styles = {
  h3: {
    font: "500 2em 'Lora'",
    textAlign: "center",
    color: "rgb(80,80,80)",
    margin: 0,
    padding: "28px 0 12px 0"
  },
  gray: {
    width: "100%",
    background: "rgb(240,240,240)",
    margin: 0,
    padding: "24px 0"
  },
  grayText: {
    font: "400 1.4em 'Roboto'",
    color: "rgb(80,80,80)",
    textAlign: "center",
    margin: 0,
    padding: 0
  },
  pay: {
    font: "400 1em 'Roboto'",
    color: "rgb(80,80,80)",
    textAlign: "center",
    paddingBottom: 12,
    paddingTop: 0
  }
};

export default function Price() {
  return (
    <div style={{ paddingTop: 40 }}>
      <Grid container alignItems="flex-start" justify="center" spacing={4}>
        <Grid item xs={12} md={6}>
          <Slide top>
            <Paper>
              <h3 style={styles.h3}>Стоимость</h3>
              <div style={styles.gray}>
                <p style={styles.grayText}>
                  9 <sup style={{ fontSize: "0.7em" }}>900</sup> &#8381;{" "}
                  <span style={{ fontSize: "0.8em" }}>в месяц</span>
                </p>
              </div>
              <p style={styles.pay}>
                69 <sup style={{ fontSize: "0.7em" }}>000</sup> <b>&#8381;</b>{" "}
                за весь курс
              </p>
            </Paper>
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
}
