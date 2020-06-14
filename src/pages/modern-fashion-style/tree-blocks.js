import React from "react";
import { Grid, Paper } from "@material-ui/core";

const styles = {
  head: {
    fontSize: "1.3em",
    fontWeight: 700,
    textAlign: "center",
    margin: 0,
    padding: 12,
    color: "rgb(100,100,100)"
  },
  text: {
    textAlign: "justify",
    fontSize: "1em",
    fontWeight: 400,
    color: "rgb(100,100,100)"
  },
  paper: {
    padding: 12,
    textAlign: "center"
  },
  image: {
    height: 80
  }
};

export const Plashka = props => {
  return (
    <Paper style={styles.paper}>
      <img src={props.image} alt="" style={styles.image} />
      <h3 style={styles.head}>{props.head}</h3>
      <p style={styles.text}>{props.text}</p>
    </Paper>
  );
};

export default function TreeBlocks() {
  return (
    <Grid
      container
      alignItems="flex-start"
      spacing={3}
      style={{ padding: "32px 0" }}
    >
      <Grid item xs={12} md={4}>
        <Plashka
          image="/img/modern-fashion-style/magazine.svg"
          head="Видео-журнал"
          text="Это пространство, где вы можете получить интересную и актуальную информацию от экспертов из мира моды, стиля, искусства и бизнеса. Вам больше не придется изучать просторы интернета и тратить на это уйму времени. Теперь все собрано в одном месте: современное, важное и увлекательное."
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Plashka
          image="/img/modern-fashion-style/employee.svg"
          head="Кто наши специалисты?"
          text={
            <span>
              Ведущие мастер-классов &mdash; это эксперты, профессионалы в своей
              области. Преподаватели Высшей школы стилистики. Практики, которые
              готовы делиться своими секретами.
            </span>
          }
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Plashka
          image="/img/modern-fashion-style/format.svg"
          head="Формат: очно / online"
          text="Каждый месяц вы получаете подборку интересных тем. Мастер-классы проходят в онлайн формате, где вы сможете задать, интересующие вас, вопросы. Это уникальная возможность вести диалог с преподавателем и получать максимум от каждой встречи. Все вебинары доступны в записи."
        />
      </Grid>
    </Grid>
  );
}
