import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Header from "./header";
import Footer from "../../components/footer";
import Something from "./something";
import About from "./about";
import Teacher from "./teacher";
import Programma from "./programma";
import Line from "../../components/line";
import Dates from "./dates";
import { HorizontalForm } from "../../components/forms";
import Steps from "../../components/steps";
import Banners from "./banners";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Практика модной фотографии. Основы мастерства</title>
        <meta
          name="keywords"
          content="ВШС: Практика модной фотографии. Основы мастерства"
        />
        <meta
          name="title"
          content="Практика модной фотографии. Основы мастерства."
        />
        <meta
          name="keywords"
          content="Практика модной фотографии. Основы мастерства. Авторский курс по фотографии 
          Эмилии Жиловой, фотография, обучение особенностям процесса создания фотоконтента. Высшая школа стилистики"
        />
        <meta
          name="description"
          content="Курс 'Практика модной фотографии. Основы мастерства', авторский курс по 
          фотографии Эмилии Жиловой обеспечивает полное понимание процесса создания фотоконтента. Пройдя базовый формат, вы сможете самостоятельно организовать фотопроект с нуля; собрать квалифицированную команду; осознанно фотографировать результаты вашей работы; говорить на одном языке с фотографом и доносить вашу идею/концепцию / задумку, используя профессиональные знания; самостоятельно проводить базовые фотосессии; правильно сформировать собственное продающее портфолио под выбранную целевую 
          аудиторию."
        />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet={"Архив" /* "Фото стилистика" */} />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Header />
          </Grid>
          <Grid item xs={12} md={12}>
            <Something />
          </Grid>
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <About />
            <Teacher />
            <Programma />
            <Line />
            <Dates />
            <Steps />
            <HorizontalForm />
            <Banners />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
