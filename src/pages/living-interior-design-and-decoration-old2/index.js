import React from "react";
import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet";
import Header from "./header";
import Top from "../../components/topmenu";
import Dates from "./dates";
import Price from "./price";
import Theachers from "./teachers";
import Descript from "./kurator";
import Footer from "../../components/footer";

export default function() {
  return (
    <div>
      <Helmet>
        <title>Дизайн и декорирование интерьеров</title>
        <meta
          name="keywords"
          content="ВШС: Дизайн и декорирование интерьера. Профподготовка"
        />
        <meta name="title" content="Дизайн и декорирование интерьера" />
        <meta name="keywords" content="Дизайн и декорирование интерьера" />
        <meta name="description" content="Дизайн и декорирование интерьера" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Дизайн интерьера" />
        <Header />
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={12}>
            <Dates />
            <Theachers />
            <Price />
            <Descript />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
