import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useStyles, colors } from "./styles";

const Quadro = props => {
  // const classes = useStyles();
  return (
    <Paper
      style={{
        padding: 20,
        background: props.bkg ? props.bkg : "transparent"
      }}
    >
      <h3
        style={{
          fontWeight: 700,
          fontSize: "1.5em",
          textAlign: "center",
          margin: 0,
          padding: 24,
          color: props.colorHead ? props.colorHead : colors.indigo
        }}
      >
        {props.head}
      </h3>
      <p
        style={{
          fontWeight: 400,
          fontSize: "1em",
          textAlign: "center",
          margin: 0,
          padding: 4,
          color: props.colorText ? props.colorText : colors.indigo
        }}
      >
        {props.text}
      </p>
      <p
        style={{
          fontWeight: 400,
          fontSize: "1em",
          textAlign: "center",
          textDecoration: "line-through red",
          margin: 0,
          padding: 4,
          color: props.colorPrice ? props.colorPrice : colors.indigo
        }}
      >
        {props.priceOld}
      </p>
      <p
        style={{
          fontWeight: 700,
          fontSize: "1em",
          textAlign: "center",
          margin: 0,
          padding: 4,
          color: props.colorPrice ? props.colorPrice : colors.indigo
        }}
      >
        {props.priceNew}
      </p>
      {props.dop ? (
        <p
          style={{
            fontWeight: 400,
            fontSize: "1em",
            textAlign: "center",
            margin: 0,
            padding: 4,
            color: props.colorText ? props.colorText : colors.indigo
          }}
        >
          {props.dop}
        </p>
      ) : null}
      {props.priceOld2 ? (
        <p
          style={{
            fontWeight: 400,
            fontSize: "1em",
            textAlign: "center",
            textDecoration: "line-through red",
            margin: 0,
            padding: 4,
            color: props.colorPrice ? props.colorPrice : colors.indigo
          }}
        >
          {props.priceOld2}
        </p>
      ) : null}
      {props.priceNew2 ? (
        <p
          style={{
            fontWeight: 700,
            fontSize: "1em",
            textAlign: "center",
            margin: 0,
            padding: 4,
            color: props.colorPrice ? props.colorPrice : colors.indigo
          }}
        >
          {props.priceNew2}
        </p>
      ) : null}
    </Paper>
  );
};

const Format = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 className={classes.h2}>Формат обучения</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Quadro
            head="ИНТЕНСИВ"
            text={
              <span>
                2 дня с 11 до 18
                <br />
                18 часов
                <br />
                Теория и практические задания в школе
              </span>
            }
            priceOld="18000"
            priceNew="15000"
            dop="Дополнительно (отдельная оплата ) практика в ТЦ или шоуруме + 1 занятие 3-4 часа"
            priceOld2="5000"
            priceNew2="3900"
            bkg={colors.indigo}
            colorHead={colors.lightForText}
            colorPrice={colors.white}
            colorText={colors.lightForText}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Quadro
            head="ОЧНЫЙ ФОРМАТ"
            text={<span>8 занятий(1 месяц) по 2 часа +1 практика(ТЦ)</span>}
            priceOld="22000"
            priceNew="18000"
            bkg={colors.middle}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Quadro
            head="ДИСТАНЦИОННЫЙ"
            text="8 занятий по 2 часа+ 2 практ вебинара"
            priceOld="15000"
            priceNew="9900"
            bkg={colors.light}
            colorHead={colors.indigo}
            colorPrice={colors.dark}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Format;
