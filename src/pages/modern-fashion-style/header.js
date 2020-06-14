import React from "react";
import { Grid, Paper } from "@material-ui/core";

import Header from "../../components/header-fullscreen";

export default function Head() {
  return (
    <Header
      head1={
        //<span>Мастер-классы экспертов и практиков, консультации стилистов</span>
        <span>СОВРЕМЕННАЯ МОДА И СТИЛЬ</span>
      }
      headStyle={{ margin: 0, paddingBottom: 12, paddingTop: 18 }}
      sizeCentralBlock={8}
      descript={
        <span>
          <br />
          ПЕРВЫЙ В РОССИИ ВИДЕО-ЖУРНАЛ ОТ ЭКСПЕРТОВ ИНДУСТРИИ
        </span>
      }
      background="url(/img/modern-fashion-style/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(0,0,0,0.5)",
        textColor: "rgb(255,255,255)",
        style: { marginTop: 60, padding: 12 },
        fullscreen: {
          boxShadow: "inset 2000px 0 rgba(0,0,0,0.2)"
          // maxWidth: 1000,
          // margin: "0 auto"
        },
        descript: { paddingTop: 0 },
        fullBox: { paddingTop: 0, maxWidth: 1000, margin: "0 auto" }
      }}
      formsEducation=""
      styleFormsEducation={{ height: 12, padding: 0, margin: 0 }}
      bottomLine={
        <Grid
          container
          justify="center"
          alignItems="flex-start"
          spacing={3}
          style={{ paddingTop: 64, paddingBottom: 32 }}
        >
          <Grid item xs={12} md={4} style={{ paddingBottom: 48 }}>
            <p
              style={{
                color: "rgb(255,255,255)",
                textAlign: "center",
                padding: 0,
                fontSize: "1.4em",
                fontWeight: 700,
                textShadow: "1px 1px 5px rgba(0,0,0,.7)",
                margin: 0,
                transform: "rotate(-6deg)"
              }}
            >
              Подписка на июль по выгодной стоимости!{" "}
              <span style={{ textDecoration: "line-through" }}>5990 руб.</span>{" "}
              <span
                style={{
                  fontWeight: 900,
                  color: "rgb(123,143,87)",
                  textShadow: "none"
                }}
              >
                1990
                <span style={{ fontFamily: "Roboto", fontWeight: 400 }}>
                  &#8381;
                </span>
              </span>
              <br />+ подарок &mdash; весь июнь
            </p>
          </Grid>
          <Grid item xs={12} md={4} style={{ paddingTop: 48 }}>
            <a href="https://billing.styleschool.ru/event/FZaJQDYA6QWvoQQdE/contract-rule/dAx4cWNRGtPXGapH6">
              <Paper
                style={{
                  padding: 16,
                  color: "rgb(255,255,255)",
                  background: "rgb(123,143,87)",
                  textAlign: "center",
                  maxWidth: 180,
                  margin: "0 auto",
                  fontSize: "1.2em"
                }}
              >
                Оформить подписку
              </Paper>
            </a>
          </Grid>
        </Grid>
      }
    />
  );
}
