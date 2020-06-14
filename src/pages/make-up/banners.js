import React from "react";
import { Grid } from "@material-ui/core";
import Imagemaker from "../../components/banner-imagemaker";
import Fashion from "../../components/banner-modern-moda-style2";
import Interior from "../../components/banner-interior-prof";

export default function Banners() {
  return (
    <div>
      <h2
        style={{
          font: "500 1.8em 'Lora'",
          textAlign: "center",
          color: "rgb(80,80,80)",
          margin: 0,
          padding: 32
        }}
      >
        Вас может заинтересовать
      </h2>
      <Grid container alignItems="flex-start" spacing={4}>
        <Grid item xs={12} md={4}>
          <Fashion />
        </Grid>
        <Grid item xs={12} md={4}>
          <Imagemaker />
        </Grid>
        <Grid item xs={12} md={4}>
          <Interior />
        </Grid>
      </Grid>
    </div>
  );
}
