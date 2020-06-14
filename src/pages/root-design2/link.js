import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    fontWeight: 600,
    fontFamily: "Roboto",
    color: "rgb(17,76,18)",
    transition: "1s color",
    "&:hover": {
      color: "rgb(229,183,101)"
    }
  }
});

const Links = function(props) {
  const classes = useStyles();

  return (
    <a href={props.link} target="_blank">
      <span className={classes.link}>{props.text}</span>
    </a>
  );
};

export default Links;
