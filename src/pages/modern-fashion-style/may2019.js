import React from "react";
import { Grid } from "@material-ui/core";
import Jewel from "./cards/fashion-jewels";
import Vintage80 from "./cards/vintazh80";
import Travel from "./cards/travel";
import Evolution from "./cards/evolution";
import Men from "./cards/stylish-man";
import Shoping from "./cards/beauty-shoping";
import Eco from "./cards/eco";
import Photo from "./cards/fashion-photo";
import Startup from "./cards/startup";
import Communication from "./cards/busines-communication";
import Ip from "./cards/marketing-ip";
import Presentation from "./cards/presentation";
import Button from "../../components/green-button";

export default function May(props) {
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
        spacing={3}
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={12} md={12}>
          <h2 style={styles.head}>МАЙ 2019 (очно и онлайн)</h2>
          <p style={styles.subhead}>Стильное лето</p>
          <p style={styles.subhead}>
            Наши эксперты расскажут, как за месяц подготовиться в лету и
            выглядеть потрясающе
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button link="https://billing.styleschool.ru/event/ni8Cnw8HviScxZHoN/simple">
            Купить подписку на май
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button link="https://billing.styleschool.ru/event/9fNzhqs4xejHunFGL">
            Подписка на 6 месяцев
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <Jewel setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Vintage80 setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Travel setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Evolution setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Men setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Shoping setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Eco setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Photo setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Startup setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Communication setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Ip setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Presentation setBillingId={props.setBillingId} />
        </Grid>
      </Grid>
    </div>
  );
}
