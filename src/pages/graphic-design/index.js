import React from "react";
import Helmet from "react-helmet";
import { Grid } from "@material-ui/core";
import Top from "../../components/topmenu";
import Footer from "../../components/footer";
import Head from "./head";
import Blocks from "./two-blocks";
import Info from "./info";
import Block from "./block";
import { styles } from "./styles";
import { content } from "./content";

function GraphicDesign(props) {
  return (
    <div>
      <Helmet>
        <title>{content.title}</title>
        <meta name="keywords" content={`ВШСДТ: ${content.title}`} />
      </Helmet>
      <div style={styles.page}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Top faqultet={content.faqultet} />
            <Head
              title={content.title}
              heads={content.head.titles}
              descript={content.head.descript}
              lineColor="rgb(255,255,255)"
              fullscreen="rgb(80,90,120)"
              colorBlock="rgba(0,0,0,0.4)"
              buttonLink={content.head.button.link}
              buttonText={content.head.button.text}
            />
            <Blocks
              left={{
                title: content.target.title,
                text: content.target.text
              }}
              right={{
                title: false,
                text: content.targetRight.map((el, k) => (
                  <p style={styles.note} key={k}>
                    {el}
                  </p>
                ))
              }}
            />
            <Block
              title={content.infographics.title}
              content={
                <div>
                  <Info info={content.infographics.info} />
                  {content.infographics.text}
                </div>
              }
            />
            <Block title={content.work.title} content={content.work.text} />
            <Block title={content.result.title} content={content.result.text} />
            <Block
              title={content.education.title}
              content={content.education.text}
            />
            <Block title={false} content={content.education2} />
            <Block
              title={content.internship.title}
              content={content.internship.text}
            />
            <Block
              title={content.employment.title}
              content={content.employment.text}
            />
            <Block
              title={content.conditions.title}
              content={content.conditions.text}
            />
            <Block title={content.forma.title} content={content.forma.text} />
            <Footer />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default GraphicDesign;
