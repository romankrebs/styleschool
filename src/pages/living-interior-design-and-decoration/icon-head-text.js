import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

var wStyles = theme => styles;

function IconHeadText(props) {
  var { classes } = props;

  return (
    <div style={{ paddingTop: "1.6rem" }}>
      <div calssName={classes.icon}>{props.icon}</div>
      <h3 className={classes.h3}>{props.head}</h3>
      <p className={classes.iconText}>{props.text}</p>
    </div>
  );
}

export default withStyles(wStyles)(IconHeadText);
