import React from "react";
import Helmet from "react-helmet";
import { Grid } from "@material-ui/core";
import Programma from "./programma";
import About from "./about";
import Speaker from "./speaker";
import Head from "./head";
import Footer from "./footer";
import Top from "./top";
import InfoBlock from "./info-block";
import Slogan from "./slogan";
import ForWhom from "./for-whom";
import What from "./what-is-waiting";
import Forma from "./forma";
import Result from "./resulte";
import Why from "./why";
import Radio from "./word-of-mouth";
import Price from "./price";

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
      <Top />
      <Grid
        container
        justify="center"
        style={{ maxWidth: 1000, margin: "0 auto" }}
      >
        <Grid item xs={12} md={12}>
          <Head />
          <About />
          <InfoBlock />
          <Slogan />
          <ForWhom />
          <What />
          <Speaker />
        </Grid>
        <Grid item xs={12} md={12}>
          <Programma />
          <Result />
          <Why />
          <Radio />
          <Price />
          <Forma />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Marketing;
