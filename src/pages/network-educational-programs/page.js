import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
// import Head from "../../components/header-for-types";
import Head from "./head";
import Footer from "../../components/footer";
import Infew from "./infew";
import Tesisses from "./infew-with-image"; // "../../components/tesisses-for-types";
import Descript from "../../components/description-with-image-for-types";
// import Teachers from "./teachers";
// import Contents from "../../components/programma-for-types"; //программа
import Contents from "./paragraph";
import Tiles from "./tiles";
import Forma from "../../components/forma-for-types";
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
        <Head
          head={props.head.text}
          // background={props.head.image}
          descript={props.head.descript}
          color={props.head.colorText}
          // colorBox={props.head.colorBlock}
        />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={12} style={{ padding: 20, paddingTop: 0 }}>
            <Infew content={props.orientations} size={props.orientationSize} />
            <div style={{ height: "3.2em" }} />
            {/* <Tesisses content={props.info} size={props.infoSize} />
              <div style={{ height: "3.2em" }} /> */}
            <Descript text={props.descript.text} image={false} />
            <Contents
              text={props.programma}
              head={props.programmaName}
              garamond
            />
            <Tiles tiles={props.partners} head={props.headPartners} />
            {/* <Teachers garamond /> */}
            <Forma title={props.formaTitle} garamond />
            <Socnet noHead />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
