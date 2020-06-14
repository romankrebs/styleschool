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
import Conditions from "./conditions";
import LineStar from "../../components/line&star";
import Price from "./system-pay";
import { HorizontalForm } from "../../components/forms";

const title = "Декорирование интерьера. Интенсив";

export default function Imagemaker() {
  const style = {
    h2: {
      fontFamily: "Roboto",
      fontSize: "1.8em",
      fontWeight: 700,
      color: "rgb(100,100,100)"
    }
  };

  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={"ВШСДТ: " + title} />
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
            <Header />
            <Paragraph />
            <Dates />
            <Conditions />
            <h2 style={style.h2}>Записаться на собеседование</h2>
            <HorizontalForm />
            <Socnet styleHead={{ fontWeight: 700 }} />
            <LineStar />
            <Program />
            <Slider />
            <Price />
            <Grid container>
              <Grid item xs={12} md={12} style={{ padding: 10 }} />
              <Grid item xs={12} md={12} style={{ padding: 10 }}>
                <h2 style={style.h2}>Записаться на собеседование</h2>
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
