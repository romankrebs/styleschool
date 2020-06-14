import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Header from "./header";
import Footer from "../../components/footer";
import Socnet from "../../components/want-to-know";
import Paragraph from "./paragraph";
import Slider from "./teacher";
import Text from "./text";
// import Program from "./programma";
// import Dates from "./dates";
import Courses from "./courses";
import { HorizontalForm } from "../../components/forms";

export default function MasterClasses(props) {
  const title = props.title;

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
            <Header title={title} short={props.short} />
            <Paragraph link={props.link} />
            <Text content={props.content} />
            {/* <Dates />
              <Program /> */}
            <Slider />
            <Socnet />
            <Grid container>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <HorizontalForm />
              </Grid>
            </Grid>
            <Courses banners={props.banners} />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
