import React from "react";
import Helmet from "react-helmet";
import { Grid } from "@material-ui/core";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Base from "../../components/banner-base-image-style";
import Interior from "../../components/banner-interior";
import Text from "../../components/banner-mastery-of-writing-text";
import Self from "../../components/banner-self-stylist";
import StyleEvolution from "../../components/banner-styleevolution";
import Postmodern from "../../components/banner-from-classic-to-postmodern";
import Motivation from "../../components/banner-motivation-of-staff";
import Franchising from "../../components/banner-fashion-franchising";
import Preraphaelites from "../../components/banner-preraphaelites";
import JapaneseFashion from "../../components/banner-japanese-fashion-philosophy";
// import Psychology from "../../components/banner-psychology-of-style";
import Decor from "../../components/banner-interiordecor";
import PersonalBrand from "../../components/banner-personal-brand";

export default function Courses(params) {
  return (
    <div>
      <Helmet>
        <title>Спецкурсы</title>
        <meta name="keywords" content="ВШС: Спецкурсы" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Спецкурсы" />
        <Grid
          container
          alignItems="flex-start"
          spacing={4}
          style={{ padding: 12 }}
        >
          {/* <Grid item xs={12} md={12}>
            
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Base />
          </Grid>
          <Grid item xs={12} md={6}>
            <Postmodern />
          </Grid>
          <Grid item xs={12} md={6}>
            <Decor />
          </Grid>
          <Grid item xs={12} md={6}>
            <Text />
          </Grid>
          <Grid item xs={12} md={6}>
            <Self />
          </Grid>
          <Grid item xs={12} md={6}>
            <Interior />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyleEvolution />
          </Grid>
          <Grid item xs={12} md={6}>
            <Motivation />
          </Grid>
          <Grid item xs={12} md={6}>
            <Franchising />
          </Grid>
          <Grid item xs={12} md={6}>
            <PersonalBrand />
          </Grid>
          <Grid item xs={12} md={6}>
            <Preraphaelites />
          </Grid>
          <Grid item xs={12} md={6}>
            <JapaneseFashion />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
