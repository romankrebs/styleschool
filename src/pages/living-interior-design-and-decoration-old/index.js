import React from "react";
import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer";
import Header from "./header";
import Top from "../../components/topmenu";
import Dates from "./dates";
import ForWhom from "./for";
import Why from "./why";
import Theachers from "./teachers";
import Programma from "./programma";
import Descript from "./descript";
import Forma from "../../components/forma";
import Banners from "./banners";

export default function() {
  return (
    <div>
      <Helmet>
        <title>Дизайн и декорирование интерьера. Профподготовка </title>
        <meta
          name="keywords"
          content="ВШС: Дизайн и декорирование интерьера. Профподготовка "
        />
        <meta name="title" content="Дизайн и декорирование интерьера" />
        <meta name="keywords" content="Дизайн и декорирование интерьера" />
        <meta name="description" content="Дизайн и декорирование интерьера" />
      </Helmet>
      <Top />
      <Header />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={12} style={{ padding: 20 }}>
          <Dates />
          <ForWhom />
          <Why />
          <Theachers />
          <Programma />
          <Descript />
          <Forma />
          <Banners />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
