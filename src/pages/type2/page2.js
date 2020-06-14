import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Head from "./header-text";
import Footer from "../../components/footer";
import InFew from "./infew";
import Descript from "./description";
import Dates from "./dates";
import System from "./system-pay";
import Teachers from "./teachers";
import Contents from "./contents";
import Forma from "./forma";
import Banners from "./banners";
import Socnet from "../../components/want-to-know";

export default function Component(props) {
  const title = props.title;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={`ВШСДТ: ${title}`} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet={props.faqultet} />
        <Head head={props.head.text} colorText={props.head.colorText} />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20, paddingTop: 0 }}>
            <InFew content={props.short} />
            <Descript text={props.descript.text} image={props.descript.image} />
            <Dates
              date={props.dates}
              avance={props.avance}
              nameOfCredit={props.nameOfCredit}
              summaOfCredit={props.price}
              link={props.linkBilling}
            />
            <Contents content={props.programma} />
            <Teachers
              image={props.teacher.image}
              teacherText={props.teacher.text}
              teacherName={props.teacher.name}
            />
            <System />
            <Forma />
            <Socnet noHead />
            <Banners />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
