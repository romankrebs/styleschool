import React from "react";
import { Grid } from "@material-ui/core";
import Secret from "./cards/3-secret";
import Paris from "./cards/paris-holliwood";
import Brushes from "./cards/brushes";
import Sexuality from "./cards/sexuality";
import School from "./cards/school-design";
import History from "./cards/history-journal";
import Colorite from "./cards/colorite";
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
          <h2 style={styles.head}>ИЮНЬ 2019</h2>
          <p style={styles.subhead}>
            Подписка на июнь по выгодной стоимости. Спешите познакомиться с
            нашими экспертами и узнать интересную информацию.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button link="https://billing.styleschool.ru/event/JSSBTKqpshyiqFMbo/contract-rule/dAx4cWNRGtPXGapH6">
            Подписка на месяц. Акция!
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button link="https://billing.styleschool.ru/event/9fNzhqs4xejHunFGL">
            Подписка на 6 месяцев. Выгодно!
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* <Small setBillingId={props.setBillingId} /> */}
          <Secret setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Paris setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Brushes setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Sexuality setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <School setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <History setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Colorite setBillingId={props.setBillingId} />
        </Grid>
      </Grid>
    </div>
  );
}
