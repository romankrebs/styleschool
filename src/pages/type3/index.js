import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Header from "./header";
import Footer from "../../components/footer";
import Socnet from "../../components/want-to-know";
import Paragraph from "./paragraph";
import Slider from "./slider-teutch";
import Program from "./programma";
import Dates from "./dates";
import Courses from "./courses";
import { HorizontalForm } from "../../components/forms";
import { FlyItemDefine } from "../../components/fly";
import { FlyItem } from "../../components/flyItem";

const FlyContext = React.createContext();

export default function Imagemaker() {
  return (
    <div className="App">
      <FlyItemDefine
        context={FlyContext}
        defaultMoveHandler={(target, item) => ({
          // x: 250,
          // y: window.pageYOffset + window.innerHeight / 2 - item.height / 2
          style: {
            left: window.innerWidth - item.width - 40,
            top: window.pageYOffset + window.innerHeight - item.height - 10
          }
        })}
        FlyItem={FlyItem}
      >
        <Helmet>
          <title>Базовый курс по созданию имиджа и стиля</title>
          <meta
            name="keywords"
            content="ВШС: Базовый курс по созданию имиджа и стиля"
          />
          <meta
            name="title"
            content="Курсы стилистов-имиджмейкеров в Москве. От 9900 в месяц"
          />
          <meta
            name="keywords"
            content="Курсы имиджмейкеров-стилистов в Москве за 3 месяца. Очно и дистанционно. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
          />
          <meta
            name="description"
            content="Курсы имиджмейкеров-стилистов в Москве за 3 месяца. Очно и дистанционно. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
          />
        </Helmet>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Top faqultet="Курсы имиджа" />
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ maxWidth: 1000, margin: "0 auto" }}
          >
            <Grid item xs={12} md={12} style={{ padding: 10 }}>
              <Header />
              <Paragraph />
              {/* <Buttons /> */}
              {/* <Button /> */}
              {/* <Blocks /> */}
              <Dates />
              <Program />
              <Slider />
              <Grid container>
                <Grid item xs={12} md={12} style={{ padding: 10 }}>
                  <Socnet />
                  {/* <h2>Заявка на обучение</h2> */}
                </Grid>
                <Grid item xs={12} md={12} style={{ padding: 10 }}>
                  <HorizontalForm />
                </Grid>
              </Grid>
              <Courses />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </FlyItemDefine>
    </div>
  );
}
