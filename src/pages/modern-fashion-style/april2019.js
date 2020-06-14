import React from "react";
import { Grid } from "@material-ui/core";
import Color from "./cards/colors";
import Shoping from "./cards/beauty-shoping100";
import Vintage60 from "./cards/vintazh60";
import StyleMap from "./cards/stylemap";
import Galantery from "./cards/shoes";
import Analize from "./cards/analise-color";
import Man from "./cards/menstyle";
import Vintage70 from "./cards/vintazh70";

export default function April(props) {
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
    <div>
      <Grid
        container
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={12} md={12}>
          <h2 style={styles.head}>АПРЕЛЬ 2019</h2>
        </Grid>
        <Grid item xs={12} md={3}>
          <Color setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Shoping setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Vintage60 setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StyleMap setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Galantery setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Analize setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Man setBillingId={props.setBillingId} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Vintage70 setBillingId={props.setBillingId} />
        </Grid>
      </Grid>
    </div>
  );
}
