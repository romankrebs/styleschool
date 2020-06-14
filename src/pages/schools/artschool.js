import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
// import Concept from "../../components/banner-concepts-of-fashion";
import Postmodern from "../../components/banner-from-classic-to-postmodern";
import Photo from "../../components/banner-foto-course";
import Text from "../../components/banner-mastery-of-writing-text";
// import FashinJournalist from "../../components/banner-profi-fashion-journalist";
import H from "./head";
import Preraphaelites from "../../components/banner-preraphaelites";

const name = "Школа искусств";

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
            <H>Краткосрочные курсы</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <Postmodern />
          </Grid>
          <Grid item xs={12} md={6}>
            <Photo />
          </Grid>
          <Grid item xs={12} md={6}>
            <Text />
          </Grid>
          <Grid item xs={12} md={6}>
            <Preraphaelites />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default School;
