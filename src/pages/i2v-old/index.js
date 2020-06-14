import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { Header } from "./header";
import Footer from "../../components/footer";
// import InfoBlock1 from "./infoblock";
// import InfoBlock2 from "./infoblock2";
import DateEducationComponent from "./date-education";
import Socnets from "./socnets";
import Format from "./format";
import ProffEdu from "./proff-education";
import Space from "./space";
import AboutProfComponent from "./about-prof";
import Practica from "./practica";
// import Feedback from "./subscribe";
import Conditions from "./conditions";
import Tesises from "./tesises";
import Programma from "./programma";
import BlocksComponent from "./blocks";
import Banners from "./banners";
import TopMenu from "../../components/topmenu";
import Seduction from "./seduction";
import Result from "./result";
import Title from "./title-page";
import TitleForm from "./title-form";
import SystemPay from "./system-pay";
import { HorizontalForm } from "../../components/forms";
import { FlyItemDefine, FlyTriggerSensor } from "../../components/fly";
import { FlyItem } from "../../components/flyItem";

const FlyContext = React.createContext();

export default function Imagemaker() {
  return (
    <div>
      <TopMenu />
      <FlyItemDefine
        context={FlyContext}
        defaultMoveHandler={(target, item) => ({
          style: {
            left:
              window.innerWidth -
              item.width -
              (window.innerWidth < 600 ? 100 : 40),
            top:
              window.pageYOffset +
              window.innerHeight -
              item.height -
              (window.innerWidth < 600 ? 100 : 40)
          }
        })}
        FlyItem={FlyItem}
      >
        <Helmet>
          <title>Курсы имиджмейкеров как Второе высшее</title>
          <meta
            name="keywords"
            content="ВШС: Курсы имиджмейкеров как Второе высшее"
          />
          <meta
            name="title"
            content="Обучение стилистов-имиджмейкеров в Москве. Второе высшее"
          />
          <meta
            name="keywords"
            content="Обучение имиджмейкеров-стилистов в Москве за 10 месяцев. Очно и дистанционно. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
          />
          <meta
            name="description"
            content="Обучение имиджмейкеров-стилистов в Москве за 10 месяцев. Очно и дистанционно. Диплом гос. университета. Получите право ведения профессиональной деятельности!"
          />
        </Helmet>
        <Grid
          container
          justify="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
          spacing={3}
        >
          <Grid item xs={12} md={12}>
            <Header />
            <Title />
            <Tesises />
            <ProffEdu />
            <Conditions />
            <TitleForm />
            <HorizontalForm />
            <Format />
            <DateEducationComponent />
            <FlyTriggerSensor
              context={FlyContext}
              moveHandler={(target, item) => ({
                style: {
                  left:
                    window.innerWidth > 1000
                      ? target.left + 500 - item.width / 2 - 20
                      : target.left +
                        window.innerWidth / 2 -
                        item.width / 2 -
                        20,
                  top: target.top + target.height - 50
                },
                props: {
                  text: (
                    <div
                      style={{
                        color: "rgb(255,255,255)",
                        background: "rgb(134,158,94)",
                        minWidth: 240,
                        borderRadius: 4,
                        padding: "8px 12px",
                        textAlign: "cenetr",
                        font: "400 1em",
                        boxSizing: "border-box"
                      }}
                    >
                      Заказать обратный звонок
                    </div>
                  )
                }
              })}
              offset={{ top: 160, bottom: 160 }}
              partialVisibility
            >
              <Socnets />
            </FlyTriggerSensor>
            <Seduction />
            <Hidden implementation="css" smDown>
              <div style={{ height: 80 }} />
            </Hidden>
            <AboutProfComponent />
            <Practica />
            <Programma />
            <Result />
          </Grid>
        </Grid>
        <Space />
        <Grid
          container
          justify="center"
          style={{ maxWidth: 1000, margin: "0 auto" }}
        >
          <Grid item xs={12} md={12} style={{ padding: 20, margin: 0 }}>
            <SystemPay />
            <Banners />
            <BlocksComponent />
          </Grid>
        </Grid>
        <Footer />
      </FlyItemDefine>
    </div>
  );
}
