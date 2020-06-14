import React from "react";
import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Datas from "./datas";
import Man from "./man";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
// import Table from "./hover";
import Head from "./header";
// import Club from "./club";

export default function Shedule() {
  return (
    <div>
      <Helmet>
        <title>Расписание</title>
        <meta name="keywords" content="ВШС: Расписание" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Расписание курсов" />
        <Grid
          container
          justify="flex-start"
          style={{ maxWidth: "100%", padding: 20, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12}>
            <Head />
          </Grid>
          <Grid item xs={12} md={12}>
            <Man inner={false} index={false} />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
