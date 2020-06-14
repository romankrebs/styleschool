import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Header from "./header";
import About from "./about";
import Teacher from "./teacher";
import Dates from "./date-education";
import Course from "./course";
import Columns from "./columns";
import Contents from "./contents";
import Bonus from "./bonus";
import { HorizontalForm } from "../../components/forms";
import YouTube from "react-youtube";

export default function Conceptual() {
  function _onReady(event) {
    event.target.pauseVideo();
  }
  return (
    <div>
      <Helmet>
        <title>Концептуальное искусство и концептуальная мода</title>
        <meta
          name="keywords"
          content="ВШС: Концептуальное искусство и концептуальная мода"
        />
        <meta
          name="title"
          content="Концептуальное искусство и концептуальная мода.Концепции в современной практике.Online курс."
        />
        <meta
          name="keywords"
          content="Концептуальное искусство и концептуальная мода.Концепции в современной практике.Online курс.Дистанционно. Высшая школа стилистики.Авторский курс Наталья Александровна Горских"
        />
        <meta
          name="description"
          content="Концептуальное искусство и концептуальная мода.Концепции в современной практике.Online курс."
        />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Архив" />
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            style={{ maxWidth: 1000, margin: "0 auto" }}
          >
            <Header />
            <About />
          </Grid>
          <Grid item xs={12} md={12}>
            <YouTube
              videoId={"2dgznvMeyAg"}
              onReady={_onReady}
              opts={{ height: "390", width: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            style={{ maxWidth: 1000, margin: "0 auto" }}
          >
            <Teacher />
            <Dates />
            <Course />
            <Columns />
            <Contents />
            <Bonus />
            <HorizontalForm />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
