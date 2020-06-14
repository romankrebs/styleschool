import React from "react";
// import { Grid } from "@material-ui/core";
import Helmet from "react-helmet";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Head from "./head-image";
// import DescriptTop from "./block-center";
import Block from "./block";
// import InfoBlock from "./info-block";
import Formats from "./formats";
import Info from "./info";
import Dates from "./datas";
import Programma from "./programma";
import { HorizontalForm } from "../../components/forms";
import Socnet from "../../components/want-to-know";
import Pay from "./pay";
import { contents } from "./contents";
import { styles } from "./styles";
import Papers from "./table";

const Fashion = props => {
  return (
    <div>
      <Helmet>
        <title>{contents.head.head}</title>
        <meta name="keywords" content={"ВШСДТ: " + contents.head.head} />
      </Helmet>
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto"
        }}
      >
        <Top faqultet={contents.head.head} />
        <Head
          titleHead={contents.head.titleHead}
          head={contents.head.head}
          descript={contents.head.descript}
          quote={contents.head.quote}
          // duration={contents.head.duration}
          author={contents.head.author}
          image="/img/fashion-styling/ill-02.jpg"
          imageComment={contents.head.imageComment}
        />
        {/* <DescriptTop
          title={contents.descriptionTop.title}
          text={contents.descriptionTop.text}
        />
        <Block
          title={contents.aboutTraining.title}
          text={contents.aboutTraining.text}
        /> */}
        <Block
          title={contents.learningOutcomes.title}
          text={
            <Info
              // icon={contents.learningOutcomes.icon}
              text={contents.learningOutcomes.text}
              size={4}
              small
            />
          }
        />
        <div style={{ paddingTop: "3.2rem" }}>
          <Info
            // icon="/img/green/check-bold.svg"
            text={contents.info2}
            size={3}
            small={4}
            styleBkg="rgb(223,243,187)"
          />
        </div>
        <Dates
          // link={{
          //   online: contents.linksReserved.online,
          //   ofline: contents.linksReserved.ofline
          // }}
          head="Ближайшие наборы на курс"
        />
        <Papers
          head={contents.variants.head}
          content={contents.variants.content}
          size={4}
        />
        {/* <div style={{ height: "3.2rem" }}/> */}
        <Formats
          head={contents.formats.head}
          content={contents.formats.content}
        />
        <Papers head="Преподаватели" content={contents.teachers} size={6} />
        <Papers head={false} content={contents.teachers2} size={4} />
        <Programma />
        <Block title={contents.review.head} text={contents.review.text} />
        <Pay />
        <h2 style={styles.h2}>
          Получите квалифицированную консультацию специалиста учебного отдела
        </h2>
        <HorizontalForm target="send_form_fashion_styling_complete" />
        <Socnet target="fashion_styling_complete" noHead />
        <div style={styles.space} />
      </div>
      <Footer />
    </div>
  );
};

export default Fashion;
