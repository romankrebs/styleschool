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
import Condition from "./conditions";
import System from "./system-pay";
import Teachers from "./teachers";
import Contents from "./contents";
import Note from "./note";
import After from "./after";
import Forms from "./forms-education";
import About from "./about";
import Forma from "./forma";
import Advantage from "./advantages";
import Banners from "./banners";
import Socnet from "../../components/want-to-know";
// import LineStar from "../../components/line&star";
// import { FlyItemDefine, FlyTriggerSensor } from "../../components/fly";
// import { FlyItem } from "../../components/flyItem";

// const FlyContext = React.createContext();

export default function Component(props) {
  const title = props.title;

  return (
    <div>
      {/* <FlyItemDefine
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
      > */}
      <Helmet>
        <title>{title}</title>
        <meta name="keywords" content={`ВШСДТ: ${title}`} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet={props.faqultet} />
        <Head
          head={props.head.text}
          background={props.head.image}
          descript={props.head.descript}
          colorText={props.head.colorText}
          colorBox={props.head.colorBlock}
        />
        <Grid container justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={12}
            style={{ padding: 20, paddingTop: "1.6em" }}
          >
            <Tesisses tesises={props.info} />
            <InFew content={props.short} />
            <Descript text={props.descript.text} image={props.descript.image} />
            <Dates
              date={props.dates}
              avance={props.avance}
              nameOfCredit={props.nameOfCredit}
              summaOfCredit={props.price}
              link={props.linkBilling}
            />
            <Condition avance={props.avance} />
            <Forma />
            <Socnet noHead />
            {/* <LineStar /> */}
            <Contents content={props.programma} />
            <Note text={props.note} />
            <After leftAfter={props.leftNote} rightAfter={props.rightNote} />
            <Forms />
            <About about={props.about} />
            <Teachers
              image={props.teacher.image}
              teacherText={props.teacher.text}
              teacherName={props.teacher.name}
            />
            <System />
            {/* <FlyTriggerSensor
                context={FlyContext}
                moveHandler={(target, item) => ({
                  style: {
                    left: target.left + window.innerWidth + 200,
                    top: target.top + target.height
                  }
                })}
                offset={{ top: 160, bottom: 160 }}
                partialVisibility
              > */}
            <Forma />
            {/* </FlyTriggerSensor> */}
            <Banners />
            <Advantage />
          </Grid>
        </Grid>
      </div>
      <Footer />
      {/* </FlyItemDefine> */}
    </div>
  );
}
