import React from "react";
import { Grid } from "@material-ui/core";
import Architecture from "./cards/architecture-costume";
import LV from "./cards/luis-vuitton";
import Toner from "./cards/toner";
import Ikons from "./cards/ikons";
import History from "./cards/press-history";
import Fw20 from "./cards/podium-fw20";
import SeaStyle from "./cards/sea-style";
import Vector from "./cards/style-vector";
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
          <h2 style={styles.head}>ИЮЛЬ 2019</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            link="https://billing.styleschool.ru/event/FZaJQDYA6QWvoQQdE"
            buttonColor="rgb(200,60,255)"
            buttonColorHover="rgb(200,100,255)"
          >
            Подписка на месяц июль
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            link="https://billing.styleschool.ru/event/9fNzhqs4xejHunFGL"
            buttonColor="rgb(200,60,255)"
            buttonColorHover="rgb(200,100,255)"
          >
            Подписка на 6 месяцев
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* <Small setBillingId={props.setBillingId} /> */}
          <LV setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Ikons setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Architecture setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Fw20 setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Vector setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Toner setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <SeaStyle setBillingId={props.setBillingId} />
        </Grid>
        {/* <Grid item xs={12} md={3}>
          <Ulika setBillingId={props.setBillingId} />
        </Grid> */}
        <Grid item xs={12} md={3}>
          <History setBillingId={props.setBillingId} />
        </Grid>
      </Grid>
    </div>
  );
}
