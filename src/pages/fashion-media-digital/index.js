import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Header from "./header";
import About from "./about";
import Article from "./article";
import SystemPay from "./system-pay";
import Date from "./dates";
import Conditions from "./conditions";
import Forma from "./forma";
import Banners from "./banners";
import Line from "../../components/line&star";
import Short from "./short";
import ForWhom from "./for-whom";
import Learne from "../../components/want-to-know";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Fashion-журналистика в цифровую эпоху</title>
        <meta
          name="keywords"
          content="ВШС: Fashion-журналистика в цифровую эпоху"
        />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Архив" />
        <Header />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: "0 20px" }}>
            <Short />
            <ForWhom />
            <Date />
            <Conditions />
            <Forma />
            <Learne noHead />
            <Line
              styleLine={{ marginTop: "1.4em", marginBottom: "1.4em" }}
              bottomSpace={0}
              styleStarBox={{ marginTop: "-1.6em" }}
            />
            <Article />
            <About />
            <SystemPay />
            <Forma />
            <Banners />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
