import React from "react";
import Helmet from "react-helmet";
import { Grid, Hidden } from "@material-ui/core";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Programma from "./programma";
import About from "./about";
import Digitals from "./digitals";
import Speaker from "./speaker";
import Head from "./head";

const Marketing = () => {
  return (
    <div>
      <Helmet>
        <title>
          Маркетинг для стилистов и имиджмейкеров: создание личного бренда в
          социальных сетях
        </title>
        <meta
          name="keywords"
          content="Маркетинг для стилистов и имиджмейкеров: создание личного бренда в социальных сетях"
        />
      </Helmet>
      <div style={{ maxWdth: 1000, margin: "0 auto" }}>
        <Top />
        <Grid
          container
          justify="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12}>
            <Head />
            <About />
          </Grid>
          <Hidden smDown>
            <Grid md={2} />
          </Hidden>
          <Grid item xs={12} md={10}>
            <Digitals />
          </Grid>
          <Grid item xs={12} md={12}>
            <Programma />
          </Grid>
          <Grid item xs={12} md={12}>
            <Speaker />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Marketing;
