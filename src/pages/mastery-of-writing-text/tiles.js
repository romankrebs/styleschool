import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Tiles() {
  var styles = {
    head: {
      fontFamily: "Roboto",
      fontSize: "2em",
      textAlign: "left"
    },
    list: {
      fontSize: "1.1em",
      textAlign: "left"
    },
    block: { padding: 30 }
  };

  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={12} md={6} style={styles.block}>
        <h2 style={styles.head}>Особенности курса:</h2>
        <ul>
          <li style={styles.list}>
            <b>Практико-ориентированный курс.</b>
             Курс короткий, но интенсивный, что предполагает под собой полное
            погружение слушателя в учебный процесс и обязательное выполнение
            практических заданий.
          </li>
          <li style={styles.list}>
            <b>Совместная работа группы.</b>
             Работы каждого студента выносятся на "разбор" и обсуждение группы,
            что поможет выявлять свои ошибки и учиться на чужих.
          </li>
          <li style={styles.list}>
            <b>Гармонизация мыслей.</b>
             Гармонизация структуры мысли, творческого, мыслительного,
            профессионального процесса. Психологическое взаимодействие с самим
            собой.
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} md={6} style={styles.block}>
        <h2 style={styles.head}>С чем курс поможет справиться:</h2>
        <ul>
          <li style={{ fontWeight: 700, ...styles.list }}>
            Страхом "чистого листа"
          </li>
          <li style={{ fontWeight: 700, ...styles.list }}>
            "Синдромом отличника"
          </li>
          <li style={{ fontWeight: 700, ...styles.list }}>
            Неумением начать, развить или закончить текст
          </li>
          <li style={{ fontWeight: 700, ...styles.list }}>
            Чувством, что все вторично или написано куда лучше кем-то другим
          </li>
          <li style={{ fontWeight: 700, ...styles.list }}>
            Ленью и отсутствием мотивации
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} md={6} style={styles.block}>
        <h2 style={styles.head}>По итогам слушатели научатся:</h2>
        <ul>
          <li style={styles.list}>
            Легко и с удовольствием подбирать тему, жанр и название тексту в
            любой ситуации, будь то открытие выставки, создании каталога,
            заполнение сайта, написание заметки в блог и т.п.
          </li>
          <li style={styles.list}>
            Выражать мысли ясно, просто, интересно, смело и по делу.
          </li>
          <li style={styles.list}>
            Не бояться высказываться, пробовать, самовыражаться.
          </li>
          <li style={styles.list}>Стройно и структурно мыслить.</li>
        </ul>
      </Grid>
      <Grid item xs={12} md={6} style={styles.block}>
        <h2 style={styles.head}>
          По мере прохождения курса все слушатели пишут:
        </h2>
        <ul>
          <li style={styles.list}>Самопрезентацию</li>
          <li style={styles.list}>Рецензию/или релиз</li>
          <li style={styles.list}>Заметку в блог/или эссе</li>
          <li style={styles.list}>Статью для СМИ</li>
        </ul>
      </Grid>
    </Grid>
  );
}
