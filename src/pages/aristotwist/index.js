import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Head from "./header";
import Interes from "./interes";
import Programma from "./programma";
import Author from "./about";
import Dates from "./dates";
import Line from "../../components/line";
import { HorizontalForm } from "../../components/forms";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Этикет</title>
        <meta name="keywords" content="ВШС: Этикет" />
        <meta
          name="title"
          content="Мастерство создания текста. Искусство самовыражения 'Этикет'"
        />
        <meta
          name="keywords"
          content="Авторский курсе Этикет, Ксения Ферзь, Москва, Высшая школа стилистики"
        />
        <meta
          name="description"
          content="На курсе 'Этикет' Вы научитесь этикету и имиджу."
        />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Этикет" />
        <Head />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <Interes />
            <Programma />
            <Author />
            {/* <Dates /> */}
            <Line />
            <HorizontalForm />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
