import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styles from "../../components/styles-for-types";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => styles;

const Infew = function(props) {
  const { classes } = props;
  var colors = [
    "rgb(255,240,240)",
    "rgb(255,250,240)",
    "rgb(255,255,240)",
    "rgb(250,255,240)",
    "rgb(240,255,240)",
    "rgb(240,255,255)",
    "rgb(240,240,255)",
    "rgb(255,240,255)",
    "rgb(255,255,250)",
    "rgb(240,240,250)"
  ];

  return (
    <div style={{ padding: props.garamond ? "3.2em 0" : "1.6em 0" }}>
      <Grid container justify="space-between" alignItems="stretch" spacing={2}>
        {props.content.map((d, i) => (
          <Grid item xs={12} md={props.size}>
            <a href={d.link}>
              <Paper
                className={
                  props.small ? classes.infoPaperSmall : classes.infoPaper
                }
                style={{
                  background: props.colors ? colors[i] : "transparent"
                }}
              >
                <p className={classes.info}>{d.text}</p>
              </Paper>
            </a>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(wStyles)(Infew);
