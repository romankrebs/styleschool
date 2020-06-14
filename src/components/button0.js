import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function Dummy(props) {
  var text = "Записаться";
  if (props.text !== undefined) {
    text = props.text;
  }
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={6} style={{ padding: 10 }}>
        <Paper
          style={{
            border: "1px solid rgb(200,0,0)",
            color: "rgb(200,0,0)",
            textAlign: "center",
            padding: 5,
            fontFamily: "Roboto",
            fontSize: "1.5em"
          }}
        >
          Кнопка "{text}"
        </Paper>
      </Grid>
    </Grid>
  );
}
