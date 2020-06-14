import React from "react";
import { Grid } from "@material-ui/core";
import Author from "./cards/author";
import Produssing from "./cards/produse";
import Verkbund from "./cards/verkbund";
import Antique from "./cards/antique";
import White from "./cards/white-shirt";
import Access from "./cards/accessuaries";
import Chanel from "./cards/chanel";
import Garmony from "./cards/garmony";

export default function Video(props) {
  let styles = {
    head: {
      font: '700 2em "Roboto"',
      textAlign: "center",
      padding: 8,
      margin: 0,
      marginTop: 80,
      color: "rgb(100,100,100)"
    }
  };

  return (
    <div style={{ paddingBottom: 40 }}>
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={12} md={12}>
          <h2 style={styles.head}>Все лекции и мастер-классы в записи</h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <Author setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Produssing setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Verkbund setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Antique setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <White setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Access setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Chanel setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Garmony setBillingId={props.setBillingId} />
        </Grid>
      </Grid>
    </div>
  );
}
