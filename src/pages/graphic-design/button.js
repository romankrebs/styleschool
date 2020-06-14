import React from "react";
import { withStyles } from "@material-ui/styles";

const wStyles = theme => ({
  button: {
    background: "rgba(123,143,87,1)",
    color: "rgb(255,255,255)",
    transition: "1s background, 1s color",
    borderRadius: 4,
    margin: "0 auto",
    padding: "0.8rem",
    fontSize: "1rem",
    fontFamily: "Roboto",
    textAlign: "center",
    fontWeight: 400,
    maxWidth: 200,
    "&:hover": {
      background: "rgba(123,163,87,1)",
      color: "rgb(255,255,200)"
    }
  }
});

function Button(props) {
  const { classes } = props;
  return (
    <a href={props.link}>
      <div className={classes.button}>{props.text}</div>
    </a>
  );
}

export default withStyles(wStyles)(Button);
