import React from "react";
import Paper from "@material-ui/core/Paper";

export default function Tile(props) {
  const styles = {
    title: {
      // fontFamily: "Roboto",
      fontSize: "1.1em",
      color: "rgb(100,100,100)",
      textAlign: "center",
      fontWeight: 600,
      margin: 0,
      padding: 10
    },
    marker: {
      // fontFamily: "Roboto",
      fontSize: "1.4em",
      color: "rgb(100,100,100)",
      textAlign: "center",
      backgroundColor: "rgba(240,240,240,1)",
      padding: 5
    }
  };
  return (
    <Paper style={{ padding: 10 }}>
      <p style={styles.title}>{props.title}</p>
      <div style={styles.marker}>{props.text}</div>
    </Paper>
  );
}
