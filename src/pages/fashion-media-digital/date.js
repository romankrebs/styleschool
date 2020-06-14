import React from "react";
import { Grid, Paper } from "@material-ui/core";

// import Button0 from "../../components/button0";
export const datas = {
  online: [],
  ofline: []
};

export default function Date() {
  return (
    <Grid container justify="center" alignItems="center">
      {datas.online[0] ? (
        <Grid item xs={12} md={6}>
          <Paper
            style={{
              padding: 10
            }}
          >
            <h4
              style={{
                fontSize: "1.3em",
                fontWeight: 700,
                color: "rgb(100,100,100)",
                margin: 5
              }}
            >
              Дистанционно
            </h4>
            <p
              style={{
                fontSize: "1.1em",
                fontWeight: 400,
                color: "rgb(80,80,80)",
                background: "rgba(245,245,245)",
                padding: 8,
                textAlign: "center"
              }}
            >
              {datas.online[0]}
            </p>
            <p
              style={{
                fontSize: "1em",
                fontWeight: 400,
                color: "rgb(80,80,80)",
                padding: 8,
                textAlign: "center"
              }}
            >
              <b>
                23 января в 19
                <sup>00</sup>
              </b>{" "}
              &mdash; презентация курса (бесплатная лекция)
            </p>
          </Paper>
        </Grid>
      ) : null}
      {datas.ofline[0] ? (
        <Grid item xs={12} md={6}>
          <Paper
            style={{
              padding: 10
            }}
          >
            <h4
              style={{
                fontSize: "1.3em",
                fontWeight: 700,
                color: "rgb(100,100,100)",
                margin: 5
              }}
            >
              Очно
            </h4>
            <p
              style={{
                fontSize: "1.1em",
                fontWeight: 400,
                color: "rgb(80,80,80)",
                background: "rgba(245,245,245)",
                padding: 8,
                textAlign: "center"
              }}
            >
              {datas.ofline[0]}
            </p>
            {/* <p
                style={{
                  fontSize: "1em",
                  fontWeight: 400,
                  color: "rgb(80,80,80)",
                  padding: 8,
                  textAlign: "center"
                }}
              >
                <b>
                  23 января в 19
                  <sup>00</sup>
                </b>{" "}
                &mdash; презентация курса (бесплатная лекция)
              </p> */}
          </Paper>
        </Grid>
      ) : null}
    </Grid>
  );
}
