import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

export default function Programma() {
  var styles = {
    head: {
      fontFamily: "Roboto",
      fontSize: "2em",
      color: "rgb(80,80,80)",
      textAlign: "center",
      fontWeight: 700
    },
    subtitle: {
      fontSize: "1.2em",
      color: "rgb(100,100,100)",
      textAlign: "center",
      fontWeight: 700
    },
    summary: {
      fontSize: "1.2em",
      color: "rgb(100,100,100)",
      textAlign: "left",
      fontWeight: 700,
      background: "rgba(240,240,240,1)",
      textIndent: "50px hanging"
    },
    details: {
      fontSize: "1.2em",
      color: "rgb(100,100,100)",
      textAlign: "left",
      fontWeight: 400,
      background: "rgba(248,248,248,1)"
    },
    marker: {
      fontSize: "1.1em",
      color: "rgb(123,143,87)"
    }
  };

  var content = {
    head: "Содержание курса",
    subtitle:
      "все слушатели получают презентацию, список литературы и другие полезные приложения",
    a: {
      summary: (
        <span>
          <span style={styles.marker}>1. </span>
          Вебинар: О курсе.
        </span>
      ),
      details: (
        <ul>
          <li>Зачем он нам?</li>
          <li>В чем трудности при создании текста?</li>
          <li>Как их избежать?</li>
          <li>Что получим в итоге?</li>
          <li>Миссия и цель текста.</li>
          <li>Как выбрать тему текста и её раскрыть.</li>
          <li>Как придумать название.</li>
          <li>5 шагов создания любого текста.</li>
          <li>5 шагов создания любого текста.</li>
          <li>Основная структура любого текста.</li>
          <li>
            Домашнее задание: Самопрезентация – описание себя, своих
            профессиональных, творческих целей, видение своего дела и себя в
            нем.
          </li>
          <li>Спустя пять лет, год, месяц.</li>
        </ul>
      )
    },
    b: {
      summary: (
        <span>
          <span style={styles.marker}>2. </span>
          Практическое занятие &ndash; разбор первого домашнего задания.
        </span>
      ),
      details: ""
    },
    c: {
      summary: (
        <span>
          <span style={styles.marker}>3. </span>
          Вебинар: Жанры.
        </span>
      ),
      details: (
        <ul>
          <li>Жанры &ndash; какими они бывают?</li>
          <li>Для чего нужен каждый из них ?</li>
          <li>В чем отличие и задачи жанров?</li>
          <li>Виды статей.</li>
          <li>Структура эссе, статьи, релиза, рецензии.</li>
          <li>Домашнее задание: заметка в блог или эссе.</li>
          <li>Тема по выбору слушателя.</li>
        </ul>
      )
    },
    d: {
      summary: (
        <span>
          <span style={styles.marker}>4. </span>
          Практическое занятие &ndash; разбор второго домашнего задания.
        </span>
      ),
      details: ""
    },
    e: {
      summary: (
        <span>
          <span style={styles.marker}>5. </span>
          Вебинар: Полезные «фишки» при создании текста.
        </span>
      ),
      details: (
        <ul>
          <li>Емкость текста, наполнение и полезные приемы.</li>
          <li>Три способа создания любого текста «на коленке».</li>
          <li>Домашнее задание: рецензия или релиз.</li>
        </ul>
      )
    },
    f: {
      summary: (
        <span>
          <span style={styles.marker}>6. </span>
          Практическое занятие &ndash; разбор третьего домашнего задания.
        </span>
      ),
      details: ""
    },
    g: {
      summary: (
        <span>
          <span style={styles.marker}>7. </span>
          Вебинар: Как читателя превратить в клиента.
        </span>
      ),
      details: (
        <ul>
          <li>Выбор востребованного формата и актуального направления.</li>
          <li>Домашнее задание &ndash; статья в СМИ.</li>
        </ul>
      )
    },
    h: {
      summary: (
        <span>
          <span style={styles.marker}>8. </span>
          Практическое занятие &ndash; разбор четвертого домашнего задания.
        </span>
      ),
      details: ""
    },
    i: {
      summary: (
        <span>
          <span style={styles.marker}>9. </span>
          Вебинар: Полезные инструменты при работе с текстом.
        </span>
      ),
      details: (
        <ul>
          <li>
            Примеры успешных работ известных людей современности и прошлого.
          </li>
          <li>Ответы на вопросы, подведение итогов.</li>
          <li>
            Домашнее задание: доработка уже существующих текстов, написание
            дополнительных текстов в любом жанре (по желанию).
          </li>
        </ul>
      )
    },
    j: {
      summary: (
        <span>
          <span style={styles.marker}>10. </span>
          Практическое занятие: разбор оставшихся работ, консультирование,
          ответы на вопросы.
        </span>
      ),
      details: ""
    }
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={10}>
        <h2 style={styles.head}>{content.head}</h2>
        <p style={styles.subtitle}>{content.subtitle}</p>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            style={styles.summary}
          >
            {content.a.summary}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={styles.details}>
            {content.a.details}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={false}>
          <ExpansionPanelSummary style={styles.summary}>
            {content.b.summary}
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            style={styles.summary}
          >
            {content.c.summary}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={styles.details}>
            {content.c.details}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={false}>
          <ExpansionPanelSummary style={styles.summary}>
            {content.d.summary}
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            style={styles.summary}
          >
            {content.e.summary}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={styles.details}>
            {content.e.details}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={false}>
          <ExpansionPanelSummary style={styles.summary}>
            {content.f.summary}
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            style={styles.summary}
          >
            {content.g.summary}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={styles.details}>
            {content.g.details}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={false}>
          <ExpansionPanelSummary style={styles.summary}>
            {content.h.summary}
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            style={styles.summary}
          >
            {content.i.summary}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={styles.details}>
            {content.i.details}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={false}>
          <ExpansionPanelSummary style={styles.summary}>
            {content.j.summary}
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
}
