import React from "react";
import { Grid, Paper } from "@material-ui/core";

const styles = {
  h2: {
    font: "600 1.8em 'Futura-Normal'",
    color: "rgb(100,100,100)",
    textAlign: "center",
    paddingTop: 24
  },
  h3: {
    font: "600 1.1em 'Futura-Normal'",
    color: "rgb(160,100,100)",
    textAlign: "center",
    margin: 0,
    padding: 4,
    marginTop: -48
  },
  h3Eng: {
    font: "600 1.1em 'Futura-Normal'",
    color: "rgb(130,130,130)",
    textAlign: "center",
    margin: 0,
    padding: 4
  },
  moth: {
    font: "900 1.3em 'Futura-Normal'",
    color: "rgb(200,200,200)",
    textAlign: "center"
    // transform: "rotate(270deg)",
  },
  mothBox: {
    transform: "translate(-48%, 160%) rotate(270deg)",
    maxWidth: 500
  },
  level: {
    font: "600 1.1em 'Futura-Normal'",
    color: "rgb(80,80,80)",
    textAlign: "center",
    margin: 0,
    padding: 4
  },
  tile: {
    padding: 12,
    paddingBottom: 8
  },
  descript: {
    font: "500 1em 'Futura-Normal'",
    color: "rgb(130,130,130)",
    textAlign: "center",
    margin: 0,
    padding: 4
  },
  text: {
    font: "400 1em 'Futura-Normal'",
    color: "rgb(100,100,100)",
    textAlign: "left"
  }
};

const Tile = props => {
  return (
    <Paper style={{ ...styles.tile, background: props.bkg }}>
      <div style={styles.mothBox}>
        <h3 style={styles.moth}>{props.moths}</h3>
      </div>
      <div>
        <h3 style={styles.h3}>{props.head}</h3>
        <h3 style={styles.h3Eng}>{props.headEngl}</h3>
        <p style={styles.level}>{props.level}</p>
        <p style={styles.descript}>({props.descript})</p>
        <p style={styles.text}>{props.text}</p>
      </div>
    </Paper>
  );
};

const Programma = props => {
  return (
    <div>
      <h2 style={styles.h2}>СИСТЕМА ОБУЧЕНИЯ. ПРОГРАММА ПОДГОТОВКИ</h2>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        justify="center"
        style={{ padding: 12 }}
      >
        <Grid item xs={12} md={6}>
          <Tile
            head="ОСНОВЫ ИМИДЖЕЛОГИИ"
            headEngl="STYLE BASIC"
            descript="120 академ.часов"
            text={
              <React.Fragment>
                Все для правильного старта карьеры и творчества в индустрии.
                <br />
                <b>В процессе обучения:</b> система подбора одежды, аксессуаров,
                образа от колористики до стилей и гардероба. Актуальные правила
                покупки стильных и модных вещей.
              </React.Fragment>
            }
            level="Уровень 1"
            moths="1, 2, 3 месяц"
            bkg="rgba(255,0,0,.05)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Tile
            head="ИМИДЖ-КОНСАЛТИНГ"
            headEngl="PERSONAL STYLING"
            descript="120 академ.часов"
            text={
              <React.Fragment>
                <b>Специализация:</b> имидж-стилист, имидж-консультант, шопер.
                <br />
                <b>В процессе обучения:</b> алгоритмы и инструменты
                консультирования клиентов по моде и стилю, шопинг сопровождение.
                Мужская и женская стилистика.
              </React.Fragment>
            }
            level="Уровень 2"
            moths="4, 5, 6 месяц"
            bkg="rgba(255,0,0,.075)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Tile
            head="СТИЛИСТИКА МОДЫ"
            headEngl="FASHION STYLING"
            descript="180 академ.часов"
            text={
              <React.Fragment>
                <b>Специализация:</b> стилист фотосессий, стилист модных
                проектов
                <br />
                <b>В процессе обучения:</b> стилизация событий в индустрии моды
                (фотосессии, показы, ТВ), проекты для fashion retail. Развитие
                креативности
              </React.Fragment>
            }
            level="Уровень 3"
            moths="7-10 месяцы"
            bkg="rgba(255,0,0,.1)"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Tile
            head="ЛИЧНЫЙ БРЕНД"
            headEngl="PERSONAL BRANDING"
            descript="60 академ.часов"
            text={
              <React.Fragment>
                <b>Специализация:</b> личный бренд
                <br />
                <b>В процессе обучения:</b> по результатам обучения &mdash;
                финальная упаковка как специалиста, Вашего профессионального
                стиля, услуг, портфолио, продвижения
              </React.Fragment>
            }
            level="Уровень 4"
            moths="11 месяц"
            bkg="rgba(255,0,0,.15)"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Programma;
