import React from "react";
import { Grid, Hidden, useMediaQuery } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { Header } from "./header";
import Footer from "../../components/footer";
import DateEducationComponent from "./date-education";
import Socnets from "./socnets";
import Format from "./format";
import ProffEdu from "./proff-education";
import Targets from "./programma-targets";
import Conditions from "./conditions";
import Tesises from "./tesises";
import Programma from "./programma";
import BlocksComponent from "./blocks";
import Banners from "./banners";
import TopMenu from "../../components/topmenu-conf";
import Title from "./title-page";
import TitleForm from "./title-form";
import Galery from "./galery";
import Personal from "./personal-area";
import Docs from "./docs";
import System from "./system";
import AboutEducation from "./about-education";
import { HorizontalForm } from "../../components/forms";

const font = {
  size: "1.2em",
  text: "Futura-Normal",
  title: "Cormorant Garamond"
};

export default function Imagemaker() {
  const resolution = useMediaQuery("(max-width:1000px");

  return (
    <div>
      <TopMenu />
      <Helmet>
        <title>Курсы имиджмейкеров как Второе высшее</title>
        <meta
          name="keywords"
          content="ВШС: Курсы имиджмейкеров как Второе высшее"
        />
        <meta
          name="title"
          content="Обучение стилистов-имиджмейкеров в Москве. Второе высшее"
        />
        <meta
          name="keywords"
          content="Обучение имиджмейкеров-стилистов в Москве за 10 месяцев. Очно и дистанционно. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
        />
        <meta
          name="description"
          content="Обучение имиджмейкеров-стилистов в Москве за 10 месяцев. Очно и дистанционно. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
        />
      </Helmet>
      <Grid
        container
        justify="center"
        style={{ maxWidth: 1000, margin: "0 auto" }}
        // spacing={3}
      >
        <Grid item xs={12} md={12}>
          <Header font={font} />
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: 12 }}>
          <Title font={font} />
          <System font={font} />
          <ProffEdu font={font} />
          <Conditions font={font} />
          <TitleForm font={font} />
          <HorizontalForm />
          <Format font={font} />
          <DateEducationComponent font={font} />
          <Socnets />
          <AboutEducation font={font} />
          <Hidden implementation="css" smDown>
            <div style={{ height: 80 }} />
          </Hidden>
          <Targets font={font} />
          <Programma font={font} />
          <Docs font={font} />
          <Galery font={font} />
          <Personal font={font} />
          <Banners />
          <BlocksComponent />
          <Tesises />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
