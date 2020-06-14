import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Political from "../../components/banner-political-style-strategy";
import Crisis from "../../components/banner-crisis-management-fashion-butik";
import Motivation from "../../components/banner-motivation-of-staff";
import Franchising from "../../components/banner-fashion-franchising";
import FranchiseCreate from "../../components/banner-how-to-create-a-franchise";
import FranchiseChoose from "../../components/banner-how-to-choose-a-franchise";
import StartUp from "../../components/banner-launch-technology-startup";
import FashionBrand from "../../components/banner-fashion-brand-promotion-gid";
import International from "../../components/banner-international-communications";
import H from "./head";

const School = props => {
  return (
    <div>
      <Helmet>
        <title>Школа управления</title>
        <meta name="keywords" content="ВШСДТ: Школа управления" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: 16 }}>
        <Top faqultet="Школа управления" />
        <Grid container alignItems="flex-start" spacing={4}>
          <Grid item xs={12} md={12}>
            <H>Повышение квалификации</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <FashionBrand />
          </Grid>
          <Grid item xs={12} md={6}>
            <International />
          </Grid>
          <Grid item xs={12} md={6}>
            <StartUp />
          </Grid>
          <Grid item xs={12} md={6}>
            <Political />
          </Grid>
          <Grid item xs={12} md={6}>
            <Crisis />
          </Grid>
          <Grid item xs={12} md={6}>
            <FranchiseCreate />
          </Grid>
          <Grid item xs={12} md={6}>
            <FranchiseChoose />
          </Grid>
          <Grid item xs={12} md={12}>
            <H>Краткосрочные курсы</H>
          </Grid>
          <Grid item xs={12} md={6}>
            <Motivation />
          </Grid>
          <Grid item xs={12} md={6}>
            <Franchising />
          </Grid>
        </Grid>
      </div>
      <div style={{ height: 24 }} />
      <Footer />
    </div>
  );
};

export default School;
