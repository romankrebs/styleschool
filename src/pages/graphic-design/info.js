import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { styles } from "./styles";

function Info(props) {
  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        spacing={2}
        style={{ paddingBottom: "1em" }}
      >
        {props.info.map((el, k) => (
          <Grid item xs={12} md={props.sizeBlock || 4} key={k}>
            <Paper
              style={{
                padding: "1em",
                textAlign: "center",
                background: "rgb(250,250,255)"
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src={props.icon || "/img/green/asterisk.svg"}
                  alt=""
                  style={{
                    height: props.iconSize
                  }}
                />
              </div>
              <p style={{ ...styles.p, textAlign: "center" }}>{el}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Info;
