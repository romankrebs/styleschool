import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";
import Slide from "./slider";

export const text = (
  <p
    style={{
      // fontFamily: "Roboto",
      fontSize: "1.2em",
      color: "rgb(100,100,100)"
    }}
  >
    Профессиональное обучение в индустрии моды:
    <ul>
      <li>Теория</li>
      <li>Практика</li>
      <li>Диплом</li>
    </ul>
  </p>
);

export default function name(params) {
  var content = {
    head: "Визуальный мерчендайзинг и витринистика"
  };

  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={7}>
        <H2 content={content.head} style={{ fontSize: "2.2em" }} />
      </Grid>
      <Grid item xs={12} md={5} style={{ padding: 20 }}>
        <Slide />
      </Grid>
    </Grid>
  );
}
