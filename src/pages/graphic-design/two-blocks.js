import React from "react";
import { Grid } from "@material-ui/core";
import { styles } from "./styles";

function Blocks(props) {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
          {props.left.title ? (
            <h2 style={styles.h2}>{props.left.title}</h2>
          ) : null}
          {props.left.text}
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
          {props.right.title ? (
            <h2 style={styles.h2}>{props.right.title}</h2>
          ) : null}
          {props.right.text}
        </Grid>
      </Grid>
    </div>
  );
}

export default Blocks;
