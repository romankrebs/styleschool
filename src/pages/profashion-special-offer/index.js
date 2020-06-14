import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Head from "./header";
import Footer from "../../components/footer";
import About from "./about";
import Programma from "./programma";
import Line from "../../components/line";
import Dates from "./dates";
import Teachers from "./teachers";
import Public from "./publication";
import TitleForm from "../../components/title-form";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";
import Socnets from "../../components/want-to-know";
import Blocks from "./short-blocks";
import Price from "./price";

export default function Profashion() {
  return (
    <div>
      <Helmet>
        <title>Fashion-консультант</title>
        <meta name="keywords" content="ВШС: Fashion-консультант" />
        <meta name="title" content="Fashion-консультант" />
        <meta
          name="keywords"
          content="Fashion-консультант. Курс, обучение, очно, Online Высшая школа стилистики Профессиональное обучение"
        />
        <meta
          name="description"
          content="Курс Fashion-консультант. Москва, Высшая школа стилистики. Профессиональное обучение"
        />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Курсы стилистов" />
        <Head />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <About />
            <Programma />
            <Line />
            <Dates />
            <Socnets link="profashion" />
            <Teachers />
            <Price />
            <Public />
            <TitleForm style={{ fontWeight: 500, color: "rgb(80,80,80)" }} />
            <HorizontalForm />
            <Banners />
            <Blocks />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
