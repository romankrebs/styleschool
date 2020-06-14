import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Head from "./header";
import Footer from "../../components/footer";
import Theses from "./theses";
import Line from "../../components/line";
import Descript from "./descript";
import Times from "./times";
import Teachers from "./teachers";
import Date from "./date";
import Illustration from "./illustration";
import Programma from "./programma";
import Banners from "./banners";
import Steps from "./steps";
import { HorizontalForm } from "../../components/forms";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Политический имидж. Инструменты политтехнологий</title>
        <meta
          name="keywords"
          content="ВШС: Формирование имиджа. Инструменты политтехнологий"
        />
        <meta
          name="title"
          content="Интенсивный курс по специфике применения полит технологий для бизнеса и гос служащих"
        />
        <meta
          name="keywords"
          content="Интенсивный курс по специфике применения полит технологий для бизнеса и гос служащих"
        />
        <meta
          name="description"
          content="Интенсивный курс по специфике применения полит технологий для бизнеса и гос служащих"
        />
      </Helmet>
      <Top />
      <Head />
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ maxWidth: 1000, margin: "0 auto" }}
        spacing={4}
      >
        <Grid item xs={12} md={12}>
          <Theses />
          <Times />
          <Descript />
          <Line />
          <Date />
          <Steps />
          <div style={{ padding: 48 }}>
            <h2
              style={{
                fontFamily: "Roboto",
                fontSize: "1.8em",
                textAlign: "center",
                color: "rgb(100,100,100)"
              }}
            >
              Оставьте заявку или задайте вопрос
            </h2>
            <HorizontalForm />
          </div>
        </Grid>
      </Grid>
      <Illustration />
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ padding: 20 }}
      >
        <Grid item xs={12} md={12}>
          <Programma />
          <Teachers />
          <Banners />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
