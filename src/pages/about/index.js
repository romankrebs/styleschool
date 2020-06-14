import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Header from "./header";
import Targets from "./targets";
import Facultets from "./facultets";
import Teachers from "./teachers";
import Graduates from "./graduates";
import Geo from "./geo";
import Forma from "./forma";
import Libs from "./libraries";
import Articles from "./articles";

export default function About(params) {
  return (
    <div>
      <Helmet>
        <title>О Школе / Высшая Школа Стилистики</title>
        <meta
          name="keywords"
          content="ВШС: О Школе / Высшая Школа Стилистики"
        />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="О школе" />
        <Header />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 0 }}>
            <Targets />
            <Facultets />
            <Teachers />
            <Graduates />
            <Geo />
            <Forma />
            <Libs />
            <Articles />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
