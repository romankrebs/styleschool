import React from "react";
import { contents } from "./content";
import Pattern from "../../patterns/course/index";
import Cards from "./cards";
/*
import Helmet from "react-helmet";
import { Grid } from "@material-ui/core";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import { styles } from "../future-of-fashion/styles";
import Illustration from "../future-of-fashion/illustration";
import Teacher from "../future-of-fashion/teacher";
import Block from "../future-of-fashion/block";
import Info from "./info";

import Papers from "./papers";
*/

function Page(props) {
  return (
    <div>
      <Pattern
        content={contents}
        faqultet="Школа искусств"
        imageHead={contents.imageHead}
        additionally={<Cards />}
      />
      {/* <Helmet>
        <title>{content.title}</title>
        <meta name="keywords" content={`ВШСДТ: ${content.title}`} />
      </Helmet>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Top faqultet={content.faqultet} />
        <Grid container>
          <Grid item xs={12} md={12}>
            <Illustration
              imageComment={content.illustration.imageComment}
              image={content.illustration.image}
              text={content.illustration.text}
              styleImage={{ maxWidth: "100%" }}
            />
            <Info content={content.info} />
            <Papers
              content={content.formates}
              string={content.string}
              height="21rem"
            />
            <Teacher
              title={content.teacher.title}
              text={content.teacher.text}
              image={content.teacher.image}
              link={content.teacher.link}
            />
            <div style={{ height: "2em" }} />
            <Block
              title={content.forma.title}
              content={content.forma.content}
            />
            <Block
              title={content.programma.title}
              content={content.programma.content}
            />
            <Cards />
          </Grid>
          <Grid item xs={12} md={12}>
            <Block
              title={content.questions.title}
              content={content.questions.content}
            />
            <Block
              title={content.events.title}
              content={content.events.content}
            />
          </Grid>
        </Grid>
        <Footer />
      </div> */}
    </div>
  );
}

export default Page;
