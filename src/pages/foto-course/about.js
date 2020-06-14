import React from "react";
import { Grid, Paper } from "@material-ui/core";

import List from "../../components/list";
import H2 from "../../components/head1";

export default function About() {
  var content = {
      head: "Что дает курс:",
      title:
        "Курс обеспечивает полное понимание процесса создания фотоконтента.",
      text: "Пройдя базовый формат, вы сможете самостоятельно:",
      list: [
        "организовать фотопроект с нуля;",
        "собрать квалифицированную команду;",
        "осознанно фотографировать результаты вашей работы;",
        <span>
          &laquo;говорить на одном языке&raquo; с фотографом и доносить вашу
          идею/концепцию/задумку, используя профессиональные знания;
        </span>,
        "самостоятельно проводить базовые фотосессии;",
        "правильно сформировать собственное продающее портфолио под выбранную целевую аудиторию."
      ],
      paperTitle: "Группа до",
      paperText: "человек",
      paperNumber: "8"
    },
    styles = {
      text: {
        fontSize: "1em",
        color: "rgb(100,100,100)",
        padding: 5,
        margin: 0
      },
      title: {
        fontSize: "1.1em",
        color: "rgb(110,110,110)",
        padding: 5,
        margin: 0,
        fontWeight: 700
      },
      number: {
        fontFamily: "Roboto",
        fontSize: "3em",
        color: "rgb(80,80,80)",
        padding: 5,
        margin: 0
      }
    };

  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <H2 content={content.head} style={{ textAlign: "left" }} />
        <p style={styles.title}>{content.title}</p>
      </Grid>
      <Grid item xs={12} md={8} style={{ paddingRight: 30 }}>
        <p style={styles.text}>{content.text}</p>
        <List arr={content.list} style={styles.text} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: 30 }}>
          <p style={{ textAlign: "center", ...styles.text }}>
            {content.paperTitle}
          </p>
          <p style={{ textAlign: "center", ...styles.number }}>
            {content.paperNumber}
          </p>
          <p style={{ textAlign: "center", ...styles.text }}>
            {content.paperText}
          </p>
        </Paper>
      </Grid>
    </Grid>
  );
}
