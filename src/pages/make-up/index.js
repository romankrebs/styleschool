import React from "react";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Head from "./header";
import Items from "./items";
import About from "./about";
import Programma from "./programma";
import Conditions from "./conditions";
import Price from "./price";
import Forma from "./forma";
import Banners from "./banners";
import Teachers from "./teachers";
import Tesis from "./tesise";
import Descript from "./descript";

export default function MakeUp() {
  return (
    <div>
      <Helmet>
        <title>Профессиональный make-up. Профподготовка</title>
        <meta
          name="keywords"
          content="ВШС: Профессиональный  make-up. Профподготовка"
        />
        <meta
          name="title"
          content="Профессиональный  make-up: стилистика и технологии"
        />
        <meta
          name="keywords"
          content="Профессиональный  make-up: стилистика и технологии"
        />
        <meta
          name="description"
          content="Профессиональный  make-up: стилистика и технологии"
        />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Курсы make-up" />
        <Grid container>
          <Grid item xs={12} md={12}>
            <Head />
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Items />
          </Grid>
          <Grid item xs={12} md={8}>
            <About />
          </Grid>
          <Grid item xs={12} md={12}>
            <Conditions />
            <Price />
            <Teachers />
            <Programma />
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          style={{ background: "rgb(245,240,235)" }}
        >
          <Grid
            item
            xs={12}
            md={12}
            style={{ maxWidth: 1000, margin: "0 auto" }}
          >
            <Tesis />
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
          <Grid item xs={12} md={12}>
            <Descript />
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
