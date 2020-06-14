import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Concept from "../../components/banner-concepts-of-fashion";
import Polit from "../../components/banner-political-style";
// import Digital from "../../components/banner-fashion-media-digital";
import Crisis from "../../components/banner-crisis-management-fashion-butik";
import Typology from "../../components/banner-typology-of-architectural-forms";
import Aristotwist from "../../components/banner-aristotwist";
import Style4make from "../../components/banner-style4make";
import FranchiseCreate from "../../components/banner-how-to-create-a-franchise";
import FranchiseChoose from "../../components/banner-how-to-choose-a-franchise";
import Practics from "../../components/banner-practice-image-consulting";
import StartUp from "../../components/banner-launch-technology-startup";
import Advertising from "../../components/banner-advertising-as-a-communication";
import FashionBrand from "../../components/banner-fashion-brand-promotion-gid";
import International from "../../components/banner-international-communications";
import Milan from "../../components/banner-internship-in-milan";

const name = "Повышение квалификации";

const Increase = function(props) {
  return (
    <div>
      <Helmet>
        <title>{name}</title>
        <meta name="keywords" content={`ВШСДТ: ${name}`} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: 16 }}>
        <Top faqultet={name} />
        <Grid container alignItems="flex-start" spacing={4}>
          <Grid item xs={12} md={6}>
            <Polit />
          </Grid>
          <Grid item xs={12} md={6}>
            <Concept />
          </Grid>
          <Grid item xs={12} md={6}>
            <Practics />
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <Digital />
          </Grid> */}
          <Grid item xs={12} md={6}>
            <Aristotwist />
          </Grid>
          <Grid item xs={12} md={6}>
            <Crisis />
          </Grid>
          <Grid item xs={12} md={6}>
            <FranchiseChoose />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typology />
          </Grid>
          <Grid item xs={12} md={6}>
            <Style4make />
          </Grid>
          <Grid item xs={12} md={6}>
            <FranchiseCreate />
          </Grid>
          <Grid item xs={12} md={6}>
            <StartUp />
          </Grid>
          <Grid item xs={12} md={6}>
            <Advertising />
          </Grid>
          <Grid item xs={12} md={6}>
            <FashionBrand />
          </Grid>
          <Grid item xs={12} md={6}>
            <International />
          </Grid>
          <Grid item xs={12} md={6}>
            <Milan />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Increase;
