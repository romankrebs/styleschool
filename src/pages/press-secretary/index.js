import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import TitleForm from "../../components/title-form";
import { HorizontalForm } from "../../components/forms";
import Header from "./header";
import Short from "./short";
import Student from "./student";
import Programma from "./programma";
import Teachers from "./authors";
import Price from "./dates-price";
import Learn from "../../components/learn-more";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Пресс секретарь</title>
        <meta name="keywords" content="ВШС: Пресс секретарь" />
        <meta name="title" content="Авторский курс 'Пресс-секретарь'" />
        <meta
          name="keywords"
          content="Авторский курсе Мария Родина 'Пресс-секретарь'"
        />
        <meta
          name="description"
          content="Авторский курс, в первую очередь для студентов и выпускников вузов (журналистика, PR), с целью подготовки к работе со СМИ, от организации деловых мероприятий до подготовки руководителя к интервью"
        />
      </Helmet>
      <div style={{ maxWdth: 1000, margin: "0 auto" }}>
        <Top faqultet="Архив" />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Header />
            <Short />
            <Student />
            <Programma />
            <Teachers />
            <Price />
            <Learn />
            <TitleForm />
            <HorizontalForm />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
