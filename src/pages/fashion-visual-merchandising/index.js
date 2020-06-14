import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Header from "./header";
import Check from "./checks";
import Short from "./short";
import About from "./about";
import Date from "./dates";
import Teacher from "./teacher";
import Programma from "./programma";
import Line from "../../components/line";
import Descript from "./descript";
import Result from "./result";
import Steps from "../../components/steps";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Fashion визуальный мерчендайзинг </title>
        <meta
          name="keywords"
          content="ВШС: Fashion визуальный мерчендайзинг "
        />
        <meta name="title" content="Fashion визуальный мерчендайзинг" />
        <meta
          name="keywords"
          content="На курсе Fashion визуальный мерчендайзинг вы получите необходимые теоретические знания и практические навыки, актуальные знания о моде и стилистике."
        />
        <meta
          name="description"
          content="На курсе Fashion визуальный мерчендайзинг вы получите необходимые теоретические знания и практические навыки, актуальные знания о моде и стилистике."
        />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Архив" />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12}>
            <Header />
            <Check />
            <Short />
            <About />
            <Date />
            <Teacher />
            <Programma />
            <Line />
            <Descript />
            <Result />
            <div style={{ padding: 20 }}>
              <Steps />
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
