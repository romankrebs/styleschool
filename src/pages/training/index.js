import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Head from "./header";
import Imagemaker from "../../components/banner-imagemaker";
import Design from "../../components/banner-interior-prof";
// import Journalism from "../../components/banner-profi-fashion-journalist";
import Vitrinism from "../../components/banner-visual-merchandising";
import Fashion from "../../components/banner-profashion";
import FashionStyling from "../../components/banner-fashion-styling";

export default function Training() {
  return (
    <div>
      <Helmet>
        <title>Профподготовка</title>
        <meta name="keywords" content="ВШС: Профподготовка" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Профподготовка" />
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          spacing={4}
          style={{ padding: 12 }}
        >
          <Grid item xs={12} md={12}>
            <Head />
          </Grid>
          <Grid item xs={12} md={6}>
            <Imagemaker />
          </Grid>
          <Grid item xs={12} md={6}>
            <Design />
          </Grid>
          <Grid item xs={12} md={6}>
            <FashionStyling />
          </Grid>
          <Grid item xs={12} md={6}>
            <Vitrinism />
          </Grid>
          <Grid item xs={12} md={6}>
            <Fashion />
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Journalism />
          </Grid> */}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
