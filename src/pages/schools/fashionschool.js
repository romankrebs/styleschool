import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Visual from "../../components/banner-visual-merchandising";
import History from "../../components/banner-fashion-history";
// import Media from "../../components/banner-fashion-media-digital";
import Concept from "../../components/banner-concepts-of-fashion";
import H from "./head";
// import FashinJournalist from "../../components/banner-profi-fashion-journalist";
import Butique from "../../components/banner-business-boutique";
import FashionStyling from "../../components/banner-fashion-styling";
import Advertising from "../../components/banner-advertising-as-a-communication";

const name = "Школа моды";

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
            <Visual />
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <FashinJournalist />
          </Grid> */}
          <Grid item xs={12} md={6}>
            <FashionStyling />
          </Grid>
          <Grid item xs={12} md={12}>
            <H>Повышение квалификации</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <Concept />
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Media />
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Advertising />
          </Grid>
          <Grid item xs={12} md={12}>
            <H>Краткосрочные курсы</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <History />
          </Grid>
          <Grid item xs={12} md={6}>
            <Butique />
          </Grid>
        </Grid>
      </div>
      <div style={{ height: 24 }} />
      <Footer />
    </div>
  );
};

export default School;
