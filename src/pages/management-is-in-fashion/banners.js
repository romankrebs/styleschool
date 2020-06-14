import React from "react";
import { Grid } from "@material-ui/core";
import Imagemaker from "../../components/banner-imagemaker";
import Vitrinizm from "../../components/banner-visual-merchandising";

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
        <Grid item xs={12} md={6}>
          <Imagemaker />
        </Grid>
        <Grid item xs={12} md={6}>
          <Vitrinizm />
        </Grid>
      </Grid>
    </div>
  );
}
