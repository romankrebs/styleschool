import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Head from "./header";
import Themes from "./themes";
import Anons from "./anons";
import Programma from "./programma";
import Conditions from "./conditions";
import Price from "./price";
import Forma from "./forma";
import Banners from "./banners";

export default function Management() {
  return (
    <div>
      <Helmet>
        <title>Менеджмент в индустрии моды. Профподготовка</title>
        <meta
          name="keywords"
          content="ВШС: Менеджмент в индустрии моды. Профподготовка"
        />
        <meta name="title" content="Менеджмент в индустрии моды" />
        <meta name="keywords" content="Менеджмент в индустрии моды" />
        <meta name="description" content="Менеджмент в индустрии моды" />
      </Helmet>
      <div style={{ maxWdth: 1000, margin: "0 auto" }}>
        <Top faqultet="Архив" />
        <Grid container>
          <Grid item xs={12} md={12}>
            <Head />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          spacing={4}
          alignItems="flex-start"
          style={{
            maxWidth: 1000,
            margin: "0 auto"
          }}
        >
          <Grid item xs={12} md={4}>
            <Themes />
          </Grid>
          <Grid item xs={12} md={8}>
            <Anons />
          </Grid>
          <Grid item xs={12} md={11}>
            <Programma />
          </Grid>
          <Grid item xs={12} md={11}>
            <Conditions />
            <Price />
          </Grid>
          <Grid item xs={12} md={12}>
            <Forma />
            <Banners />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
