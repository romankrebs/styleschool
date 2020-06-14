import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Header from "./header";
import Footer from "../../components/footer";
import Short from "./short";
import Practice1 from "./practice1";
import Practice2 from "./practice2";
import { HorizontalForm } from "../../components/forms";
import Banners from "./banners";

export default function Component() {
  return (
    <div>
      <Helmet>
        <title>Практика имидж-консультирования</title>
        <meta name="keywords" content="ВШС: Практика имидж-консультирования" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Практика имиджа" />
        <Header />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ padding: 20 }}
        >
          <Grid item xs={12} md={12}>
            <Short />
            <Practice1 />
            <Practice2 />
            <h2
              style={{
                fontSize: "2em",
                textAlign: "left",
                color: "rgb(100,100,100)"
              }}
            >
              Записаться
            </h2>
            <HorizontalForm />
            <Banners />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
