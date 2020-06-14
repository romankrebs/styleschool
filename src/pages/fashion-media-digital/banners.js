import React from "react";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";
import Imagemaker from "../../components/banner-imagemaker";
import Fash from "../../components/banner-fashion-styling";
import Journalism from "../../components/banner-profi-fashion-journalist";

export default function Banners() {
  return (
    <div style={{ paddingBottom: "1.4em" }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={2}
        // style={{ padding: 20 }}
      >
        <Grid item xs={12} md={12}>
          <h2 style={styles.h2}>Вас может заинтересовать</h2>
        </Grid>
        <Grid item xs={12} md={4}>
          <Imagemaker />
        </Grid>
        <Grid item xs={12} md={4}>
          <Journalism />
        </Grid>
        <Grid item xs={12} md={4}>
          <Fash />
        </Grid>
      </Grid>
    </div>
  );
}
