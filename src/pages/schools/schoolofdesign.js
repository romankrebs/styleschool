import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Design from "../../components/banner-interior";
import Pro from "../../components/banner-interior-prof";
import Decor from "../../components/banner-interiordecor";
import Typology from "../../components/banner-typology-of-architectural-forms";
import H from "./head";
import MilanDesignWeek from "../../components/banner-milan-design-week";

const name = "Школа дизайна";

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
          <Grid item xs={12} md={12}>
            <H>Дипломные курсы</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <Pro />
          </Grid>
          <Grid item xs={12} md={12}>
            <H>Повышение квалификации</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typology />
          </Grid>
          <Grid item xs={12} md={12}>
            <H>Краткосрочные курсы</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <Design />
          </Grid>
          <Grid item xs={12} md={6}>
            <Decor />
          </Grid>
          <Grid item xs={12} md={6}>
            <MilanDesignWeek />
          </Grid>
        </Grid>
      </div>
      <div style={{ height: 24 }} />
      <Footer />
    </div>
  );
};

export default School;
