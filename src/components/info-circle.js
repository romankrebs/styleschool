import React from "react";
import { withStyles } from "@material-ui/styles";

var styles = theme => ({
  circle: {
    border: "1px solid rgb(240,240,240)",
    borderRadius: "50%",
    textAlign: "center",
    padding: "1em",
    height: 80,
    width: 80,
    boxShadow: "1px 2px 5px rgba(100,100,100,.2)"
  },
  text: {
    fontFamily: "Roboto",
    fontSize: ".95em",
    color: "rgb(123,143,87)",
    fontWeight: 500,
    textAlign: "center"
  }
});

function Circle(props) {
  var { classes } = props;

  return (
    <div className={classes.circle}>
      {props.space ? <div style={{ height: ".5em" }} /> : null}
      <p className={classes.text}>{props.children}</p>
    </div>
  );
}

export default withStyles(styles)(Circle);
