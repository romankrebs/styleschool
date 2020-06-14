import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./styles-for-types";

export default function About(props) {
  return (
    <div style={{ paddingTop: "1.6em" }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ backgroundColor: "rgba(100,100,100,1.0)" }}
      >
        <Grid item xs={12} md={12}>
          <div
            style={{
              color: "rgb(250,250,250)",
              padding: "2em",
              fontSize: "1em",
              textAlign: "center"
            }}
          >
            {props.about}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
