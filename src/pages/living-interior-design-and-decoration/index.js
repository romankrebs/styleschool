import React from "react";
import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet";
import Header from "./header";
import Top from "../../components/topmenu";
import Dates from "../../components/dates-tile";
// import Price from "./price";
import Theachers from "./teachers";
// import Descript from "./kurator";
import Footer from "../../components/footer";
import Banners from "./banners";
import InfoBlocks from "./infoblocks";
import Circles from "./circles";
import WillDo from "./course-will-do";
import We from "./we";
import Forma1 from "./forma1";
import Line from "../../components/line&star";
import Programma from "./programma";
import SystemPay from "./system-pay";
import { dates, DateToString } from "../shedule/dates";

export default function(props) {
  return (
    <div>
      <Helmet>
        <title>Дизайн и декорирование интерьеров</title>
        <meta
          name="keywords"
          content="ВШС: Дизайн и декорирование интерьера. Профподготовка"
        />
        <meta name="title" content="Дизайн и декорирование интерьера" />
        <meta name="keywords" content="Дизайн и декорирование интерьера" />
        <meta name="description" content="Дизайн и декорирование интерьера" />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Дизайн интерьера" />
        <Header />
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={12}>
            <InfoBlocks />
            <Circles />
            <Dates
              dataOnline={DateToString(dates.designInterior.online)}
              dataOfline={DateToString(dates.designInterior.ofline)}
              linkOnline={false}
              linkOfline={false}
            />
            <WillDo />
            <We />
            <Forma1 />
            <Line />
            <Theachers />
            <Programma />
            <SystemPay />
            <Forma1 phones />
            <Banners />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
