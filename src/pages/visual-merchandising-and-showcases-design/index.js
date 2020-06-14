import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Header from "./header";
import { text } from "./header";
import Dates from "./dates";
import Programma from "./programma";
import Position from "./position";
import Teachers from "./teachers";
import Forma from "./forma";
import Banners from "./banners";
import Pay from "./system-pay";
import Advantages from "./advantages";
import { FlyItemDefine } from "../../components/fly";
import { FlyItem } from "../../components/flyItem";

const FlyContext = React.createContext();

export default function Vitrinism() {
  return (
    <div>
      <Helmet>
        <title>Обучение визуальному мерчендайзингу и витринистике</title>
        <meta
          name="keywords"
          content="ВШС: Обучение визуальному мерчендайзингу и витринистике"
        />
        <meta
          name="title"
          content="Обучение визуальному мерчендайзингу и витринистике"
        />
        <meta
          name="keywords"
          content="Обучение визуальному мерчендайзингу и витринистике. Профессиональные курсы. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
        />
        <meta
          name="description"
          content="Обучение визуальному мерчендайзингу и витринистике. Профессиональные курсы. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
        />
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
        <div style={{ maxWdth: 1000, margin: "0 auto" }}>
          <Top faqultet="Визуальный мерчендайзинг" />
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ maxWidth: 1000, margin: "0 auto" }}
          >
            <Grid item xs={12} md={12} style={{ padding: 20 }}>
              <Header />
              <Programma />
              <Grid container justify="center">
                <Grid item xs={12} md={8}>
                  {text}
                </Grid>
              </Grid>
              <Dates />
              <Pay />
              {/* <Position /> */}
              <Teachers />
              <Forma />
              <Banners />
              <Advantages />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </FlyItemDefine>
    </div>
  );
}
