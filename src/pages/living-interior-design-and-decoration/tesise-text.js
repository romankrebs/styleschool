import React from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./styles";

var wStyles = theme => styles;

function TesiseText(props) {
  var { classes } = props;

  return (
    <div style={{ paddingTop: "1em", paddingBottom: "1em" }}>
      <h3 className={classes.tesiseHead}>{props.head}</h3>
      {props.texts.map((d, k) => (
        <div className={classes.tesiseText} key={k}>
          {d}
        </div>
      ))}
    </div>
  );
}

export default withStyles(wStyles)(TesiseText);
