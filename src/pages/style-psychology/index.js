import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Header from "./header";
import For from "./for-whom";
import About from "./about-program";
import Teacher from "./teacher";
import Dates from "./dates";
import { HorizontalForm } from "../../components/forms";
import Programma from "./programma";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Психология стиля</title>
        <meta name="keywords" content="ВШС: Психология стиля" />
        <meta name="title" content="Психология стиля" />
        <meta
          name="keywords"
          content="Понимание себя и своего стиля. Проработка  запретов, страхов, комплексов. Избавление от  стереотипного  и  шаблонного  видения  клиента и многое другое. Записывайтесь!"
        />
        <meta
          name="description"
          content="Понимание себя и своего стиля. Проработка  запретов, страхов, комплексов. Избавление от  стереотипного  и  шаблонного  видения  клиента и многое другое. Записывайтесь!"
        />
      </Helmet>
      <div style={{ maxWdth: 1000, margin: "0 auto" }}>
        <Top faqultet="Архив" />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Header />
            <For />
            <About />
            <Teacher />
            <Dates />
            <Programma />
            <HorizontalForm />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
