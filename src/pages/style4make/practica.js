import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles, colors } from "./styles";

const Practica = () => {
  const classes = useStyles();
  return (
    <div>
      <h2
        className={classes.h2}
        style={{ background: colors.dark, color: colors.light }}
      >
        Практика на курсе
      </h2>
      <Grid container alignItems="center" style={{ background: colors.middle }}>
        <Grid item xs={12} md={5} style={{ lineHeight: 0 }}>
          <img
            src="/img/style-for-makeup/color.jpg"
            alt="тестовые драпировки"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <div className={classes.practica} style={{ color: colors.white }}>
            Определение цветовых характеристик внешности с использованием
            тестовых драпировок
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems="center" style={{ background: colors.indigo }}>
        <Grid item xs={12} md={7}>
          <div
            className={classes.practica}
            style={{ color: colors.lightForText }}
          >
            Создание образа (костюм, прическа, make-up) для каждого из основных
            стилевых направлений
          </div>
        </Grid>
        <Grid item xs={12} md={5} style={{ lineHeight: 0 }}>
          <img
            src="/img/style-for-makeup/image.jpg"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        style={{ background: colors.lightForText }}
      >
        <Grid item xs={12} md={5} style={{ lineHeight: 0 }}>
          <img
            src="/img/style-for-makeup/style.png"
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <div className={classes.practica} style={{ color: colors.dark }}>
            Практика определения стилевого направления человека (в том числе по
            фото) и выбор индивидуального стилевого решения
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Practica;
