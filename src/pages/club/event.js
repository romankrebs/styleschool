import React from "react";
import { Grid } from "@material-ui/core";
import Line from "../../components/line";

const styles = {
  head: {
    fontSzie: "1.3em",
    textTransform: "uppercase",
    color: "rgb(100,100,100)",
    textAlign: "left"
  },
  text: {
    fontSize: "1em",
    color: "rgb(100,100,100)",
    textAlign: "justify"
  },
  image: {
    position: "sticky",
    top: 1,
    borderRadius: "50%",
    height: 230,
    margin: "0 20px"
  }
};

export default function Event(props) {
  return (
    <div>
      <Grid container alignItems="stretch" justify="center">
        <Grid item xs={12} md={6}>
          <h4 style={styles.head}>{props.date}</h4>
          <h4 style={styles.head}>{props.head}</h4>
          <div style={styles.text}>{props.text}</div>
        </Grid>
        <Grid item xs={12} md={3} style={{ textAlign: "center" }}>
          <img src={props.image} alt={props.name} style={styles.image} />
        </Grid>
        <Grid item xs={12} md={10}>
          <Line />
        </Grid>
      </Grid>
    </div>
  );
}
