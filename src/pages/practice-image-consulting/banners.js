import React from "react";
import Grid from "@material-ui/core/Grid";
import Banner1 from "../../components/banner-fashion-media-digital";
// import Banner2 from "../../components/banner-basics-fashion-industry";
import Banner3 from "../../components/banner-modern-moda-style2";

export default function Banners() {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "2em",
            textAlign: "left",
            color: "rgb(100,100,100)",
            fontWeight: 700
          }}
        >
          Вас может заинтересовать
        </h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <Banner1 />
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <Banner2 />
      </Grid> */}
      <Grid item xs={12} md={6}>
        <Banner3 />
      </Grid>
    </Grid>
  );
}
