import React from "react";
import { Grid } from "@material-ui/core";

const Text = props => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.6em",
              color: "rgb(100,100,100)"
            }}
          >
            На мастер-классе:
          </h2>
          <p
            style={{
              fontSize: "1em",
              color: "rgb(100,100,100)"
            }}
          >
            {props.content}
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Text;
