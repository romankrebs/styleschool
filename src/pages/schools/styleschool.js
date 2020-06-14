import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Profashion from "../../components/banner-profashion";
import ImageStyle from "../../components/banner-base-image-style";
import Style4make from "../../components/banner-style4make";
import Self from "../../components/banner-self-stylist";
import Aristotwist from "../../components/banner-aristotwist";
import Practica from "../../components/banner-practice-image-consulting";
import Evolution from "../../components/banner-styleevolution";
import Imagemaker from "../../components/banner-imagemaker";
// import Psychology from "../../components/banner-psychology-of-style";
import PersonalBrand from "../../components/banner-personal-brand";
import Milan from "../../components/banner-internship-in-milan";
import H from "./head";

const name = "Школа стиля";

const School = props => {
  return (
    <div>
      <Helmet>
        <title>{name}</title>
        <meta name="keywords" content={`ВШСДТ: ${name}`} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: 16 }}>
        <Top faqultet={name} />
        <Grid container alignItems="flex-start" spacing={4}>
          {/* <Grid item xs={12} md={12}>
            <h2
              style={{
                font: '700 2em "Roboto"',
                textAlign: "left",
                margin: 0,
                padding: "30px 0 50px 0"
              }}
            >
              {name}
            </h2>
          </Grid> */}
          <Grid item xs={12} md={12}>
            <H>Дипломные курсы</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <Imagemaker />
          </Grid>
          <Grid item xs={12} md={6}>
            <Profashion />
          </Grid>
          <Grid item xs={12} md={12}>
            <H>Повышение квалификации</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <Practica />
          </Grid>
          <Grid item xs={12} md={6}>
            <Milan />
          </Grid>
          <Grid item xs={12} md={6}>
            <Aristotwist />
          </Grid>
          <Grid item xs={12} md={6}>
            <Style4make />
          </Grid>
          <Grid item xs={12} md={12}>
            <H>Краткосрочные курсы</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <PersonalBrand />
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageStyle />
          </Grid>
          <Grid item xs={12} md={6}>
            <Self />
          </Grid>
          <Grid item xs={12} md={6}>
            <Evolution />
          </Grid>
        </Grid>
      </div>
      <div style={{ height: 24 }} />
      <Footer />
    </div>
  );
};

export default School;
