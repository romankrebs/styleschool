import React from "react";
import { Grid } from "@material-ui/core";
import Button from "../../components/green-button";

export default function June(props) {
  let styles = {
    head: {
      font: '700 2em "Roboto"',
      textAlign: "center",
      padding: 8,
      margin: 0,
      marginTop: 80,
      color: "rgb(100,100,100)"
    },
    subhead: {
      font: '500 1.2em "Roboto"',
      textAlign: "center",
      padding: 8,
      margin: 0,
      color: "rgb(100,100,100)"
    }
  };

  return (
    <div>
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={12} md={12}>
          <h2 style={styles.head}>СЕНТЯБРЬ 2019</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            link="https://billing.styleschool.ru/event/"
            buttonColor="rgb(224,141,55)"
            buttonColorHover="rgb(234,151,65)"
          >
            Подписка на месяц июль
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            link="https://billing.styleschool.ru/event/9fNzhqs4xejHunFGL"
            buttonColor="rgb(224,141,55)"
            buttonColorHover="rgb(234,151,65)"
          >
            Подписка на 6 месяцев
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
