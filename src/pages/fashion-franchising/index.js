import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Header from "./header";
import Footer from "../../components/footer";
import Socnet from "../../components/want-to-know";
import Paragraph from "./paragraph";
import Slider from "./teacher";
import Program from "./programma";
import Dates from "./dates";
import { HorizontalForm } from "../../components/forms";

const title = "Fashion франчайзинг – основы успешного бизнеса";

export default function Page() {
  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={"ВШСДТ: " + title} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Школа управления" />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 10 }}>
            <Header title={title} />
            <Paragraph />
            <Dates />
            <Program />
            <Slider />
            <Socnet />
            <Grid container>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <h2 style={{ textAlign: "center" }}>
                  Записаться на собеседование
                </h2>
              </Grid>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <HorizontalForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
