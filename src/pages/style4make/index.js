import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Head from "./head";
import About from "./about";
import For from "./for-whom";
import Programma from "./programma";
import Practica from "./practica";
import Format from "./format";

const Style4Make = () => {
  return (
    <div>
      <Helmet>
        <title>Стилистика для визажистов</title>
        <meta name="keywords" content="ВШС: Стилистика для визажистов" />
      </Helmet>
      <div style={{ maxWdth: 1000, margin: "0 auto" }}>
        <Top faqultet="Бьюти стилистика" />
        <Grid container>
          <Grid item xs={12} md={12}>
            <Head />
            <About />
            <For />
            <Programma />
            <Practica />
            <Format />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Style4Make;
