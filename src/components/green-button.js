import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

// const useStyles = makeStyles({
//   button: {
//     background: "rgb(123,143,87)",
//     padding: 12,
//     borderRadius: 6,
//     color: "rgba(255,255,255,0.8)",
//     textAlign: "center",
//     transition: "background 1s, color 1s",
//     "&:hover": {
//       background: "rgb(143,163,107)",
//       color: "rgba(255,255,255,1)"
//     }
//   }
// });

export default function Button(props) {
  const useStyles = makeStyles({
    button: {
      background: props.buttonColor ? props.buttonColor : "rgb(123,143,87)",
      padding: 12,
      borderRadius: 6,
      color: "rgba(255,255,255,0.8)",
      textAlign: "center",
      transition: "background 1s, color 1s",
      "&:hover": {
        background: props.buttonColorHover
          ? props.buttonColorHover
          : "rgb(143,163,107)",
        color: "rgba(255,255,255,1)"
      }
    }
  });

  const classes = useStyles();
  return (
    <div>
      {props.to ? (
        <Link to={props.to}>
          <div className={classes.button}>{props.children}</div>
        </Link>
      ) : (
        <a href={props.link}>
          <div className={classes.button}>{props.children}</div>
        </a>
      )}
    </div>
  );
}
