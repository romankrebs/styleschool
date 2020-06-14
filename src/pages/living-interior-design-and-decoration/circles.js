import React from "react";
import { Grid } from "@material-ui/core";
import Circle from "../../components/info-circle";

function InfoCircle(props) {
  return (
    <div style={{ paddingTop: "2em" }}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={4} md={2}>
          <Circle>
            Очно
            <br />
            или
            <br />
            онлайн
          </Circle>
        </Grid>
        <Grid item xs={4} md={2}>
          <Circle space>9 месяцев обучения</Circle>
        </Grid>
        <Grid item xs={4} md={2}>
          <Circle>Между&shy;народный стандарт</Circle>
        </Grid>
        <Grid item xs={4} md={2}>
          <Circle>Рассрочка без переплаты</Circle>
        </Grid>
        <Grid item xs={4} md={2}>
          <Circle space>Налоговый вычет</Circle>
        </Grid>
      </Grid>
    </div>
  );
}

export default InfoCircle;
