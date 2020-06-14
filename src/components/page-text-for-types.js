import React from "react";
import Grid from "@material-ui/core/Grid";
import Helmet from "react-helmet";
import Top from "./topmenu";
import Head from "./header-text-for-types";
import Footer from "./footer";
import InFew from "./infew-for-types";
import Descript from "./description-with-image-for-types";
import Dates from "./dates-for-types";
import System from "./system-pay";
import Teachers from "./teachers";
import Contents from "./programma-for-types";
import Forma from "./forma-for-types";
import Banners from "./banners-for-types";
import Socnet from "./want-to-know";
import { FlyItemDefine, FlyTriggerSensor } from "./fly";
import { FlyItem } from "./flyItem";

const FlyContext = React.createContext();

export default function Component(props) {
  const title = props.title;

  return (
    <div>
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
          <title>{title}</title>
          <meta name="keywords" content={`ВШСДТ: ${title}`} />
        </Helmet>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Top faqultet={props.faqultet} />
          <Head head={props.head.text} colorText={props.head.colorText} />
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={12} style={{ padding: 20, paddingTop: 0 }}>
              <InFew content={props.short} />
              <Descript
                text={props.descript.text}
                image={props.descript.image}
              />
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
              {/* <LineStar /> */}
              <FlyTriggerSensor
                context={FlyContext}
                moveHandler={(target, item) => ({
                  style: {
                    left: target.left + window.innerWidth + 200,
                    top: target.top + target.height
                  }
                })}
                offset={{ top: 160, bottom: 160 }}
                partialVisibility
              >
                <Forma />
                <Socnet noHead />
              </FlyTriggerSensor>
              <Banners />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </FlyItemDefine>
    </div>
  );
}
