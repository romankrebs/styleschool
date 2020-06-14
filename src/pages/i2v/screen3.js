import React from "react";
import { Grid, Paper } from "@material-ui/core";
import List from "../../components/list";
import Forma from "./forma";

const styles = {
  icon: {
    height: 36,
    opacity: 0.6
  },
  h2: {
    font: "600 1.8em 'Futura-Normal'",
    color: "rgb(100,100,100)",
    textAlign: "center",
    margin: 0,
    padding: 12
  },
  h3: {
    font: "600 1.2em 'Futura-Normal'",
    color: "rgb(160,100,100)",
    textAlign: "center"
  },
  h3Black: {
    font: "600 1.2em 'Futura-Normal'",
    color: "rgb(200,200,200)",
    textAlign: "center"
  },
  tile: {
    padding: 6,
    textAlign: "center"
  },
  list: {
    color: "rgb(160,100,100)",
    padding: 6,
    fontWeight: 400,
    fontSize: "1em"
  },
  listBlack: {
    color: "rgb(180,180,180)",
    padding: 6,
    fontWeight: 400,
    fontSize: "1em"
  },
  black: {
    background: "rgb(0,0,0)",
    color: "rgb(180,180,180)",
    padding: 12,
    textAlign: "center"
  }
};

const Tile = props => {
  return (
    <Paper
      style={{
        background: props.bkgColor ? props.bkgColor : "transparent",
        padding: 12,
        textAlign: "center"
      }}
    >
      <h3
        style={{
          font: "600 1.2em 'Futura-Normal'",
          color: props.textColor ? props.textColor : "rgb(160,100,100)",
          textAlign: "center",
          padding: 6,
          margin: 0
        }}
      >
        {props.head}
      </h3>
      <List
        style={{
          color: props.textColor ? props.textColor : "rgb(160,100,100)",
          padding: 2,
          fontWeight: 400,
          fontSize: "1em"
        }}
        arr={props.content}
        num="none"
      />
    </Paper>
  );
};

const Afert = props => {
  return (
    <div>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={12}>
          <h2 style={styles.h2}>Специальное предложение</h2>
        </Grid>
        <Grid item xs={12} md={9}>
          <Tile
            head="Действие:"
            content={[
              "внесите сегодня аванс 2000 руб.",
              "получите презентацию курса, пройдите собеседование",
              "убедитесь в преподавателях, просмотрите первые 4 лекции"
            ]}
            bkgColor="rgba(255,128,0,0.13)"
            textColor="rgb(160,0,0)"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Tile
            head="Гарантии:"
            content={[
              "100% гарантия возврата, если решите, что обучение не для Вас",
              "специальная цена на обучение в течение 72 часов (скидки до 20%)",
              "бронирование места и скидки, если решите учиться позже"
            ]}
            bkgColor="rgba(11,99,46,0.125)"
            textColor="rgb(0,0,160)"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Tile
            head="Бонус:"
            content={[
              "понравится – получите месячную подписку на проект Современная мода и стиль",
              "консультации по имиджу и стилю или шопинг от лучших выпускников ВШСДТ",
              "возможность реализовать мечту и обрести правильный путь в моде"
            ]}
            bkgColor="rgba(152,0,0,0.1)"
            textColor="rgb(80,0,0)"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Forma />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          style={{ textAlign: "center", paddingTop: 32 }}
        >
          <a href="javascript:print();">
            <img src="/img/printer.svg" alt="Распечатать" style={styles.icon} />
          </a>
          &emsp;
          <a href="/download/imagemaker_presentation.pdf">
            <img
              src="/img/download.svg"
              alt="Скачать PDF презентацию"
              style={styles.icon}
            />
          </a>
          {/* &emsp;
          <img
            src="/img/star.svg"
            alt="Добавить в избранное"
            style={styles.icon}
          /> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Afert;
