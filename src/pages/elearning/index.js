import React from "react";
import { Grid } from "@material-ui/core";
import Top from "../../components/topmenu";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import Process from "./process";
import Technology from "./technology";
import Short from "./short";

export default function Elearning() {
  return (
    <div>
      <Helmet>
        <title>Дистанционное обучение</title>
        <meta name="keywords" content="ВШС: Дистанционное обучение" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} style={{ padding: 40 }}>
            <Short />
            <Technology />
            <Process />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
