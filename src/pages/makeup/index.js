import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Head from "./header";
import Welcom from "./welcom";
import TopBlock from "./top-block";
import Line from "../../components/line";
import Teacher from "./teacher";
import Garanty from "./garanty";
import Dates from "./dates";
import Programma from "./programma";
import About from "./about";
import Steps from "../../components/steps";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Базовый профессиональный курс по make-up</title>
        <meta
          name="keywords"
          content="ВШС: Базовый профессиональный курс по make-up"
        />
        <meta
          name="title"
          content="Базовый профессиональный курс по make-up. Курсы online и очно"
        />
        <meta
          name="keywords"
          content="Базовый профессиональный курс по make-up. Курсы online и очно"
        />
        <meta
          name="description"
          content="Базовый профессиональный курс по make-up. Курсы online и очно"
        />
      </Helmet>
      <div style={{ maxWdth: 1000, margin: "0 auto" }}>
        <Top faqultet="Архив" />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Head />
            <Welcom />
            <TopBlock />
            <Teacher />
            <Line />
            <Garanty />
            <Dates />
            <Programma />
            <About />
            <div style={{ padding: "0px 20px 30px" }}>
              <Steps color="rgb(98,132,199)" />
            </div>
            <HorizontalForm />
            <Banners />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
