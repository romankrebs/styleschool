import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Header from "./header";
import About from "./about";
import Price from "./price";
import Programma from "./programma";
import Teacher from "./teacher";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Модный ассортимент</title>
        <meta name="keywords" content="ВШС: Модный ассортимент" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Школа моды" />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Header />
            <About />
            <Price />
            <Programma />
            <Teacher />
            <HorizontalForm />
            <Banners />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
