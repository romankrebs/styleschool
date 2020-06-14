import React from "react";
import { Grid, Icon } from "@material-ui/core";

import H2 from "../../components/head1";
import H3 from "../../components/head2";
import List from "../../components/list";

export default function AboutProg() {
  var style = {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    textAlign: "left",
    color: "rgb(80,80,80)",
  };
  return(
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <H2 content="Что программа дает?" />
      </Grid>
      <Grid item xs={12} md={12}>
        <Grid container justify="flex-end" alignItems="center"
          style={{ background: "url(/img/psychology/bg1.jpg) center left/cover no-repeat" }}
        >
          <Grid item xs={12} md={6} style={{ padding: 20, background: "linear-gradient(to right, transparent 0%, rgba(254,250,215,0.7) 10%, rgba(254,250,215,0.7) 100%)" }}>
            <H3 content="Для себя лично:" />
            <List arr={[
              "понимание себя и своего стиля",
              "проработка  запретов, страхов, комплексов",
              "гармонизация  самооценки и восприятия своего реального-Я",
              "баланс  своего внутреннего имиджа и «внешней картинки»"
            ]} style={style} />
          </Grid>
        </Grid>
        <Grid container justify="flex-start" alignItems="center"
          style={{ background: "url(/img/psychology/bg2.jpg) center right/cover no-repeat" }}
        >
          <Grid item xs={12} md={6} style={{ padding: 20, background: "rgba(250,247,228,0.7)" }}>
            <H3 content="Для работы с клиентом:" />
            <List arr={[
              "избавление от стереотипного и шаблонного видения клиента",
              "умение выстраивать эффективную коммуникацию с клиентом",
              "расширенное понимание запроса клиента, определение его зоны комфорта",
              "выстраивание долгосрочной работы с клиентом",
            ]} style={style} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} md={1}>
        <Icon style={{ color: "rgb(200,200,200)", fontSize: "3.4em" }}>help-outline</Icon>
      </Grid>
      <Grid item xs={11} md={9} style={{ padding: 20 }}>
        <p style={style}>
        Первая ступень, с которой многие начинают знакомство со стилистикой, это цветотипы, сочетания цветов, рациональный гардероб. А что дальше, есть ли вторая ступень, и что на ней?! Как найти именно себя в рамках всей этой информации? Как понимать себя и откликаться на свои истинные потребности, слышать сигналы нашей внутренней жизни?</p>
      </Grid>
    </Grid>
  );
}