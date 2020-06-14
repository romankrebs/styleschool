import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
// import Head from "../../components/header-for-types";
import Head from "./head";
import Footer from "../../components/footer";
// import InFew from "../../components/infew-for-types";
import Infew from "./infew";
import Infew2 from "./infew2";
// import Tesisses from "./infew-with-image"; // "../../components/tesisses-for-types";
import Descript from "../../components/description-with-image-for-types";
// import Dates from "../../components/dates-for-types";
// import System from "../../components/system-pay";
// import Teachers from "./teachers";
import Contents from "../../components/programma-for-types"; //программа
import Forma from "../../components/forma-for-types";
// import Banners from "../../components/banners-for-types";
import Socnet from "../../components/want-to-know";
// import { FlyItemDefine, FlyTriggerSensor } from "../../components/fly";
// import { FlyItem } from "../../components/flyItem";

// const FlyContext = React.createContext();

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
            <Infew
              content={props.orientations}
              size={props.orientationSize}
              garamond
              small={props.smallOrientations}
              colors
            />
            <Descript text={props.descript.text} image={false} />
            {/* <div style={{ height: "3.2em" }} />
            <Tesisses content={props.info} size={props.infoSize} /> */}
            <Contents
              content={props.programma}
              title={props.programmaName}
              garamond
            />
            {/* <Teachers garamond /> */}
            <Infew2 content={props.info2} />
            <Forma title={props.formaTitle} garamond />
            <Socnet noHead />
            {/* <Banners /> */}
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
