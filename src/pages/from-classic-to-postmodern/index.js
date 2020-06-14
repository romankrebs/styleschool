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
import Courses from "./courses";
import Text from "./text";
import Price from "./system-pay";
import { HorizontalForm } from "../../components/forms";

const title = "Художественный образ: от классики к метамодерну";

export default function Imagemaker() {
  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={"ВШСДТ: " + title} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Школа искусств | Художественный образ" />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 10 }}>
            <Header />
            <Paragraph />
            <Dates />
            <Program />
            <Slider />
            <Text />
            <Price />
            <Grid container>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <Socnet />
              </Grid>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <HorizontalForm />
              </Grid>
            </Grid>
            <Courses />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}