import React from "react";
import Grid from "@material-ui/core/Grid";

export default function After(props) {
  return (
    <div style={{ paddingTop: "1.6em" }}>
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              boxSizing: "border-box",
              padding: 20,
              color: "rgb(80,80,80)",
              border: "5px dotted rgb(200,200,200)",
              height: "100%"
            }}
          >
            {props.leftAfter}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              boxSizing: "border-box",
              padding: 20,
              height: "100%",
              border: "5px dotted rgb(200,200,200)"
            }}
          >
            {props.rightAfter}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
