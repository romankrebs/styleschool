import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Imagemaker from "../../components/banner-imagemaker";
import Design from "../../components/banner-interior-prof";
import Consultant from "../../components/banner-profashion";
import Concept from "../../components/banner-conceptual";
import Base from "../../components/banner-base-image-style";
import Politic from "../../components/banner-political-style-strategy";
import Digital from "../../components/banner-fashion-media-digital";
import Vitrinism from "../../components/banner-visual-merchandising";
import Interior from "../../components/banner-interior";
import Psychogy from "../../components/banner-psychology-style";
import Advantage from "./advantages";

export default function Root() {
  return (
    <div>
      <Helmet>
        <title>ВШС: Высшая Школа Стилистики</title>
        <meta name="keywords" content="ВШС: Высшая Школа Стилистики" />
      </Helmet>
      <div style={{ maxWdth: 1000, margin: "0 auto" }}>
        <Top faqultet="socnet" />
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          style={{
            padding: 20
          }}
          spacing={4}
        >
          <Grid item xs={12} md={12}>
            <h1
              style={{
                fontSize: "2em",
                fontFamily: "Roboto",
                fontWeight: 700,
                color: "rgb(80,80,80)",
                margin: 0,
                padding: "32px 0 24px 0"
              }}
            >
              Профессиональное обучение и повышение квалификации в индустрии
              моды и дизайна
            </h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <Imagemaker />
          </Grid>
          <Grid item xs={12} md={6}>
            <Design />
          </Grid>
          <Grid item xs={12} md={6}>
            <Consultant />
          </Grid>
          <Grid item xs={12} md={6}>
            <Concept />
          </Grid>
          <Grid item xs={12} md={6}>
            <Base />
          </Grid>
          <Grid item xs={12} md={6}>
            <Politic />
          </Grid>
          <Grid item xs={12} md={6}>
            <Digital />
          </Grid>
          <Grid item xs={12} md={6}>
            <Interior />
          </Grid>
          <Grid item xs={12} md={6}>
            <Psychogy />
          </Grid>
          <Grid item xs={12} md={6}>
            <Vitrinism />
          </Grid>
          <Grid item xs={12} md={12}>
            <Advantage />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
