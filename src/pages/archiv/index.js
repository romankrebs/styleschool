import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Concept from "../../components/banner-conceptual";
import Butique from "../../components/banner-business-boutique";
import Visual from "../../components/banner-fashion-visual-merchandising";
import Management from "../../components/banner-management-is-in-fashion";
import ProfiJournalist from "../../components/banner-profi-fashion-journalist";
import Psyhology from "../../components/banner-psychology-style";
import PsychologyOfStyle from "../../components/banner-psychology-of-style";
import Makeup from "../../components/banner-make-up";
import Foto from "../../components/banner-foto-course";
import PressSecretary from "../../components/banner-press-secretary";
import Digital from "../../components/banner-fashion-media-digital";
import ModernFashionStyle from "../../components/banner-modern-moda-style";

const name = "Архив";

const Archive = props => {
  return (
    <div>
      <Helmet>
        <title>{name}</title>
        <meta name="keywords" content={"ВШС: " + name} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet={name} />
        <Grid
          container
          alignItems="flex-start"
          spacing={4}
          style={{ padding: 12 }}
        >
          <Grid item xs={12} md={12}>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Concept />
          </Grid>
          <Grid item xs={12} md={6}>
            <Butique />
          </Grid>
          <Grid item xs={12} md={6}>
            <Visual />
          </Grid>
          <Grid item xs={12} md={6}>
            <Management />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProfiJournalist />
          </Grid>
          <Grid item xs={12} md={6}>
            <Psyhology />
          </Grid>
          <Grid item xs={12} md={6}>
            <Makeup />
          </Grid>
          <Grid item xs={12} md={6}>
            <Foto />
          </Grid>
          <Grid item xs={12} md={6}>
            <PressSecretary />
          </Grid>
          <Grid item xs={12} md={6}>
            <Digital />
          </Grid>
          <Grid item xs={12} md={6}>
            <ModernFashionStyle />
          </Grid>
          <Grid item xs={12} md={6}>
            <PsychologyOfStyle />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Archive;
