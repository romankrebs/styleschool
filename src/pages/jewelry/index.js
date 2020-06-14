import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Header from "./header";
import Footer from "../../components/footer";
import Socnet from "./socnet";
import Paragraph from "./paragraph";
import Teacher from "./teacher";
import Program from "./programma";
import Dates from "./dates";
// import System from "./system-pay";
import Descript from "./descript";
import { HorizontalForm } from "../../components/forms";

const title = "Украшения к одежде: для кого, для чего, как?";

export default function Jewelry() {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={"ВШСДТ: " + title} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Школа стиля" />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 10 }}>
            <Header title={title} />
            <Paragraph />
            <Descript />
            <Dates />
            <Program />
            <Teacher />
            <Socnet />
            {/* <System /> */}
            <h2 style={{ textAlign: "center" }}>Записаться на собеседование</h2>
            <HorizontalForm />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
