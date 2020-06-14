import React from "react";

import Grid from "@material-ui/core/Grid";

import ButtonRegister from "./button-registration.js";

export default function Message(props) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <p style={{ fontWeight: 700, textAlign: "center" }}>{props.date}</p>
        <p style={{ textAlign: "center" }}>{props.head}</p>
        {props.message}
        <ButtonRegister message="ЗАРЕГИСТРИРОВАТЬСЯ" />
      </Grid>
    </Grid>
  );
}
