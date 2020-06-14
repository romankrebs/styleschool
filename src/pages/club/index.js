import React from "react";
import { Grid } from "@material-ui/core";
import Top from "../../components/topmenu";
import Head from "./header";
import Footer from "../../components/footer";
import Helmet from "react-helmet";
import About from "./about";
import Events from "./event-list";
import Forma from "./forma";
import { FlyItemDefine } from "../../components/fly";
import { FlyItem } from "../../components/flyItem";

const FlyContext = React.createContext();

export default function Club() {
  return (
    <div>
      <Helmet>
        <title>Клуб выпускников</title>
        <meta name="keywords" content="ВШС: Клуб выпускников" />
      </Helmet>
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
        <Top />
        <Head />
        <Grid
          container
          style={{ maxWidth: 1000, margin: "0 auto" }}
          alignItems="flex-start"
          justify="center"
          spacing={3}
        >
          <Grid item xs={12} md={12}>
            <About />
            <Events />
            <Forma />
          </Grid>
        </Grid>
        <Footer />
      </FlyItemDefine>
    </div>
  );
}
