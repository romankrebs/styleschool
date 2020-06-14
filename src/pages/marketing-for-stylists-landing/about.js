import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import ScrollableAnchor from "react-scrollable-anchor";
import { colors, styles, useStyle, fontNames } from "./styles";
import List from "../../components/list";

const About = () => {
  const classes = useStyle();

  return (
    <div>
      <ScrollableAnchor id="aboutCourse">
        <h2 className={classes.h2} style={{ color: colors.middle2 }}>
          Для чего создан этот курс?
        </h2>
      </ScrollableAnchor>
      <Grid container alignItems="stretch">
        <Hidden smDown>
          <Grid item md={4} style={{ background: colors.middle1 }}>
            <div
              className={classes.query}
              style={{ fontFamily: fontNames.grotesk }}
            >
              ?
            </div>
          </Grid>
        </Hidden>
        <Grid
          item
          xs={12}
          md={8}
          style={{ background: colors.lightTrans, padding: 24 }}
        >
          <p className={classes.pLarg} style={{ color: colors.middle1 }}>
            Многие из вас сталкивались с подобными вопросами:
          </p>
          <List
            arr={[
              "хочу продвигаться в Instagram, но не знаю, с чего начать",
              "запускаю рекламную кампанию, но результатов нет",
              "не понимаю, о чем писать и рассказывать",
              "фотографии получаются скучными и безжизненными",
              "а нужен ли мне личный бренд? Как он работает?"
            ]}
            olStyle={{ listStyleType: "'- '" }}
            style={{ ...styles.pLarg, color: colors.middle1 }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
