import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Header from "./header";
import About from "./about";
import Teacher from "./teacher";
import Dates from "./date-education";
import Course from "./course";
import Contents from "./contents";
import { HorizontalForm } from "../../components/forms";
import { FlyItemDefine /* FlyTriggerSensor */ } from "../../components/fly";
import { FlyItem } from "../../components/flyItem";

const FlyContext = React.createContext();

const fontText = "Futura-Normal",
  fontTitle = "Futura-Normal";

export default function Conceptual() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <FlyItemDefine
        context={FlyContext}
        defaultMoveHandler={(target, item) => ({
          style: {
            left: window.innerWidth - item.width - 40,
            top:
              window.innerWidth < 600
                ? window.pageYOffset + window.innerHeight - item.height - 40
                : window.pageYOffset + window.innerHeight - item.height - 10
          }
        })}
        FlyItem={FlyItem}
      >
        <Helmet>
          <title>Эволюция стилей ХХ века</title>
          <meta name="keywords" content="ВШС: Эволюция стилей ХХ века" />
        </Helmet>
        <Top />
        <Header font={fontText} fontHead={fontTitle} />
        <Grid container>
          <Grid item xs={12} md={12} style={{ padding: 30 }}>
            <About font={fontText} />
            <Teacher font={fontText} fontHead={fontTitle} />
            <Dates font={fontText} fontTitle={fontTitle} />
            <Course font={fontText} />
            <Contents font={fontText} fontTitle={fontTitle} />
            <HorizontalForm />
          </Grid>
        </Grid>
        <Footer />
      </FlyItemDefine>
    </div>
  );
}
