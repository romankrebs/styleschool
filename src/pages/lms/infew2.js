import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styles from "../../components/styles-for-types";

var lStyles = {
  title: {
    fontWeight: 700,
    fontSize: "1em",
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: "1em",
    background: "rgba(250,250,250,1)"
  }
};

function Infew(props) {
  return (
    <div>
      <Grid container alignItems="stretch" spacing={2}>
        <Grid item xs={12} md={12}>
          <h2 style={styles.h2garamond}>{props.content.head}</h2>
        </Grid>
        {props.content.blocks.map((el, key) => (
          <Grid item xs={12} md={6}>
            <Paper>
              <h3 style={lStyles.title}>{el.title}</h3>
              <div style={{ padding: "1em" }}>{el.text}</div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Infew;
