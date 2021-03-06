import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Head from "./header";
import Footer from "../../components/footer";
import Tesisses from "./tesisses";
import InFew from "./infew";
import Descript from "./description";
import Dates from "./dates";
// import Condition from "./conditions";
import System from "./system-pay";
import Teachers from "./teachers";
import Contents from "./contents";
import After from "./after";
import Forms from "./forms-education";
import About from "./about";
import Forma from "./forma";
import Advantage from "./advantages";
import Banners from "./banners";
import Socnet from "../../components/want-to-know";
import LineStar from "../../components/line&star";
import { content } from "./content";
import Block from "./block";

export default function Component(props) {
  const title = "Интерьерный дизайн. Интенсив";

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={`ВШСДТ: ${title}`} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet="Дизайн интерьера" />
        <Head />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <Tesisses />
            <InFew />
            <Descript />
            <Dates />
            {/* <Condition /> */}
            <Forma />
            <LineStar />
            <Block head={content.after.head} content={content.after.content} />
            <Contents />
          </Grid>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <After />
            <Forms />
          </Grid>
        </Grid>
        {/* <About /> */}
        <Teachers />
        <System />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20 }}>
            <Socnet />
            <Banners />
            <Advantage />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
