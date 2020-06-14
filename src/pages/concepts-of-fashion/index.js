import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Header from "./header";
import Footer from "../../components/footer";
import Socnet from "../../components/want-to-know";
import Paragraph from "./paragraph";
import Teacher from "./teacher";
import Program from "./programma";
import Dates from "./dates";
import Courses from "./courses";
import Text from "./text";
import Price from "./system-pay";
import Duration from "./duration";
import { HorizontalForm } from "../../components/forms";
import { content } from "./content";

function Page(props) {
  return (
    <div className="App">
      <Helmet>
        <title>{content.head}</title>
        <meta name="keywords" content={"ВШСДТ: " + content.head} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Теория моды" />
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 10 }}>
            <Header head={content.head} />
            <Paragraph text={content.about} />
            <Duration value={content.duration} />
            {/* <Dates /> */}
            <Program content={content.programma} />
            <Text text={content.target} total={content.total} />
            <Teacher content={content.author} />
            <Price />
            <Grid container>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                {/* <h2>Записаться на собеседование</h2> */}
                <Socnet />
              </Grid>
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <HorizontalForm />
              </Grid>
            </Grid>
            <Courses banners={content.courses} />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
