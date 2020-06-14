import React from "react";
import { Paper, Grid, Hidden } from "@material-ui/core";
import { useStyle, colors, styles } from "./styles";
import List from "../../components/list";

const ForWhom = () => {
  const classes = useStyle();

  return (
    <div>
      <Grid container alignItems="stretch" style={{ paddingBottom: 24 }}>
        <Hidden mdUp>
          <Grid item xs={12}>
            <img
              src="/img/marketing-for-stylists/ill1.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </Grid>
        </Hidden>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: 24,
            background: colors.light
          }}
        >
          <p className={classes.pLarg} style={{ color: colors.middle1 }}>
            Курс создан специально для профессионалов beauty-индустрии:
          </p>
          <List
            arr={[
              "стилисты",
              "парикмахеры",
              "визажисты",
              "мастера маникюра",
              "мастера-бровисты",
              "косметологи",
              "массажисты",
              "управляющие и владельцы салонов красоты"
            ]}
            style={{ ...styles.pLarg, color: colors.middle1 }}
          />
        </Grid>
        <Hidden smDown>
          <Grid
            item
            md={6}
            style={{
              background:
                "url(/img/marketing-for-stylists/ill1.jpg) top 50% left 70% / cover no-repeat"
            }}
          />
        </Hidden>
      </Grid>
      <Grid item>
        <p className={classes.slogan} style={{ padding: 24 }}>
          Узнайте об основах интернет-маркетинга и начните продвигать свои
          услуги через личный бренд!
        </p>
      </Grid>
      <a href="#register">
        <Paper className={classes.button} style={{ maxWidth: 300 }}>
          Зарегистрироваться
        </Paper>
      </a>
    </div>
  );
};

export default ForWhom;
