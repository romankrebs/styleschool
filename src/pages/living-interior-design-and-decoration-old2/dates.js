import React from "react";
import Grid from "@material-ui/core/Grid";

export const datas = {
  online: ["2 февраля 2020"],
  ofline: ["2 февраля 2020"]
};

function Block(props) {
  return (
    <a href={props.link} title={props.linkDescript}>
      <div
        style={{
          border: "1px solid rgba(134,158,94,0.9)",
          padding: 8,
          textAlign: "center",
          maxWidth: "100%",
          margin: "0 auto",
          fontFamily: '"Hevletica", "Roboto"',
          fontSize: "1em",
          color: "rgb(134,158,94)"
        }}
      >
        {props.children}
      </div>
    </a>
  );
}

export default function Dates() {
  var style = {
    text: {
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1.25em",
      color: "rgb(80,80,80)",
      textAlign: "center",
      margin: 0,
      padding: 10
    },
    head: {
      fontFamily: '"Hevletica", "Roboto"',
      fontSize: "1.75em",
      textAlign: "center",
      color: "rgb(134,158,94)",
      margin: 0,
      fontVariant: "all-small-caps",
      padding: 20
    }
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={9}>
        <p style={style.head}>НАЧАЛО ЗАНЯТИЙ {datas.ofline[0]}</p>
        <p style={style.text}>
          За основу обучения взята программа подготовки специалистов &ndash;
          дизайнеров интерьера в США и Канаде.
          <br />
          Программа полностью адаптирована под реалии России.
        </p>
        <p style={style.text}>
          Цель программы &ndash; подготовить специалистов в области
          дизайна&nbsp;интерьера по международным стандартам профессии.
        </p>
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Block
          link="https://billing.styleschool.ru/event/cBngD8FdzAodvhjpm"
          linkDescript="Посмотреть бесплатный вебинар"
        >
          Стандарты профессии
          <br />
          Дизайнер Интерьера
        </Block>
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Block
          link="/download/interior-design-schedule.pdf"
          linkDescript="Скачать программу обучения в формате PDF"
        >
          Система обучения:
          <br />
          навыки и умения
        </Block>
      </Grid>
      <Grid item xs={12} md={4} style={{ padding: 20 }}>
        <Block
          link="/download/admission-requirements.pdf"
          linkDescript="Скачать требования к поступающим в формате PDF"
        >
          Требования
          <br />к поступающим
        </Block>
      </Grid>
    </Grid>
  );
}
