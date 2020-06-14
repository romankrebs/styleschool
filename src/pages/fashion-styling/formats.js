import React from "react";
import { Grid } from "@material-ui/core";
import List from "../../components/list";
import { styles } from "./styles";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => styles;

function Formats(props) {
  const { classes } = props;

  return (
    <div className={classes.box}>
      <h2 className={classes.h2}>{props.head}</h2>
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        {props.content.map((el, key) => (
          <Grid item xs={12} md={6} key={key}>
            <div className={classes.imgBox}>{el.icon}</div>
            <h3 className={classes.h3format}>{el.title}</h3>
            <List arr={el.list} style={styles.p} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default withStyles(wStyles)(Formats);
