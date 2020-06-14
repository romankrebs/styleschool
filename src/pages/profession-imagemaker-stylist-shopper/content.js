import React from "react";
import List from "../../components/list";
import Paragraph from "../../components/p-array";
import { Clock, PointInMap, HandShake, Teacher, Present } from "./icons";
import { dates, DateToString } from "../shedule/dates";
import { HorizontalForm } from "../../components/forms";
import { styles } from "./styles";
import Slider from "../../components/slider-images-2";
import Socnets from "../../components/want-to-know";
import { Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProCourses from "../root/cards-courses";
import OpenLectures from "../master-class/open-lectures";

const icons = {
  size: 30,
  color: "rgb(123,143,87)"
};

const pathImages = "/img/profession-imagemaker-stylist-shopper/";

const title =
  "Кто меняет моду сегодня? Разбор профессий стилиста, имиджмейкера и шопера.";

export const content = {
  title: title,
  faqultet: "Школа стиля",
  illustration: {
    image: pathImages + "fomina.png",
    imageComment: (
      <span>
        Татьяна Фомина
        <br />
        Дизайнер одежды, имидж-стилист, куратор{" "}
        <Link to="/second-degree-imagemaker">
          программ подготовки имиджмейкеров, стилистов
        </Link>{" "}
        «Высшей школы стилистики, дизайна и технологий»
      </span>
    ),
    text: (
      <div>
        <h1 style={styles.h1}>{title}</h1>
        <List
          arr={[
            "Интересуетесь модой и стилем?",
            "Хотите чувствовать себя современно и уверенно?",
            "Думаете о самореализации в творческой профессии?",
            "Погрузитесь в мир моды, узнайте больше. Наша встреча поможет увидеть, почувствовать, задать вопросы и посоветоваться"
          ]}
          style={styles.p}
        />
      </div>
    )
  },
  info: [
    {
      title: "Когда",
      text:
        DateToString(dates.masterClasses.changingWorld) +
        " года в 14:00 по МСК",
      icon: <Clock size={icons.size} color={icons.color} />
    },
    {
      title: "Место проведения",
      text: "Москва, ВДНХ, павильон Арт.Техноград, лекционный зал 1 этаж",
      icon: <PointInMap size={icons.size} color={icons.color} />
    },
    {
      title: "Лекторы",
      text: (
        <span>
          Татьяна Фомина
          <br />
          Ольга Гуляева
        </span>
      ),
      icon: <Teacher size={icons.size} color={icons.color} />
    }
  ],
  moderator:
    "Модератором встречи выступит генеральный директор Высшей школы стилистики, дизайна и технологий — Иван Гулиенко.",
  goulyaeva: {
    // image: pathImages + "goulyaeva1.png",
    image: pathImages + "goulyaeva1.jpg",
    imageComment: (
      <span>
        Ольга Гуляева,
        <br />
        карьерный консультант Центра развития карьеры, коуч. 11 лет в HR, свыше
        8000 собеседований, более 300 часов сессий по карьерному
        консультированию.
      </span>
    ),
    text: (
      <p style={{ ...styles.p /* paddingTop: "5em" */ }}>
        Мы знаем, Вы действительно можете сделать карьеру или бизнес в индустрии
        моды. Имидж-технологии — технологии будущего. Они определяют, как на Вас
        смотрят, что о Вас знают, сколько Вы стоите. Мы расскажем Вам, с чего
        начать и как двигаться к успеху
      </p>
    )
  },
  organizators: {
    title: "Организаторы",
    text: (
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={6} md={4} style={{ textAlign: "center" }}>
          <img src="/img/logo.png" alt="ВШСДТ" style={{ height: 60 }} />
          <span
            style={{
              fontFamily: "Alice",
              fontSize: "1.3em",
              color: "rgb(123,143,87)"
            }}
          >
            <br />
            ВШСДТ
          </span>
        </Grid>
        <Grid item xs={6} md={4} style={{ textAlign: "center" }}>
          <img
            src="/img/profession-imagemaker-stylist-shopper/tehnograd.png"
            alt="Техноград"
            style={{
              height: 50,
              opacity: 0.7
            }}
          />
        </Grid>
      </Grid>
    )
  },
  inputFree: "Вход свободный",
  timing: {
    title: "Тайминг мероприятия",
    content: (
      <List
        arr={[
          "14:00 — 14:15 регистрация",
          "14:15 — 15:00 выступление Татьяны Фоминой",
          "15:00 — 15:30 выступление Ольги Гуляевой",
          "15:30 — 16:00 нетворкинг"
        ]}
        style={styles.p}
      />
    )
  },
  present: {
    title: (
      <span>
        <Present size={"1em"} color={icons.color} />
        &ensp; Подарок участникам мероприятия
      </span>
    ),
    text: "Индивидуальная консультация по стилю или шопинг сессия",
    icon: <Present size={icons.size} color={icons.color} />,
    image: pathImages + "present.jpg"
  },
  forma: {
    title: (
      <span>
        Напишите нам, за день до мероприятия мы пришлем Вам напоминание
        <br />
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 400
          }}
        >
          Регистрация на мероприятие не обязательна.
        </span>
      </span>
    ),
    content: <HorizontalForm />
  },
  programma: {
    title: "Кратко о мероприятии и лекции",
    content: (
      // <List
      //   arr={[
      //     "Мы поговорим о модных трендах: на примерах посмотрим, как выглядеть современно",
      //     "Мы поговорим, насколько изменился мир моды",
      //     "Какие нас ждут кардинальные перемены в отношении к моде в мире",
      //     "И конечно, мы рассмотрим аспекты и перспективы профессии имиджмейкера, стилиста, шопера",
      //     "Какой запрос на консультантов в индустрии моды?",
      //     "Почему эта профессия для тех, кто хочет быть независимым специалистом?",
      //     "Эти и многие другие вопросы обсудим в процессе встречи",
      //     "Ответим на Ваши вопросы о том, как стать профессионалом в индустрии"
      //   ]}
      //   style={{
      //     ...styles.p,
      //     borderBottom: "1px solid rgb(200,200,200)",
      //     padding: "1em 0"
      //   }}
      // />
      <div>
        <Paper style={{ padding: "2em" }}>
          <h3 style={styles.h3}>В первой половине встречи</h3>
          <Paragraph
            style={styles.p}
            content={[
              "Мы поговорим о модных трендах. На примерах посмотрим, как выглядеть современно.",
              "Расскажем, насколько изменился мир моды. Какие нас ждут кардинальные перемены в отношении к моде в мире.",
              "И, конечно, мы рассмотрим аспекты и перспективы профессии имиджмейкера, стилиста, шопера:",
              <List
                arr={[
                  "Какой запрос на консультантов в индустрии моды?",
                  "Почему эта профессия для тех, кто хочет быть независимым специалистом?",
                  "Ответим на Ваши вопросы о том, как стать профессионалом в индустрии."
                ]}
                style={styles.p}
              />
            ]}
          />
        </Paper>
        <div style={{ height: "2em" }} />
        <Paper style={{ padding: "2em" }}>
          <h3 style={styles.h3}>Во второй половине встречи</h3>
          <Paragraph
            style={styles.p}
            content={[
              "Вы узнаете о карьерных теориях, которые помогут в построении карьеры или своего дела.",
              "Научитесь ставить цели так, чтобы их достигать.",
              "Познакомитесь с инструментами, которые помогут стать успешнее других.",
              "Узнаете о 5 принципах развития карьеры в fashion-индустрии",
              "А так же:",
              <List
                arr={[
                  "Как преодолеть кризис, когда что-то не получается",
                  "Как самостоятельно создавать себе шансы в карьере"
                ]}
                style={styles.p}
              />
            ]}
          />
        </Paper>
      </div>
    )
  },
  map: {
    title: "Схема проезда",
    content: (
      <div>
        <img
          src={pathImages + "tehnograd-map1.jpg"}
          alt="схема проезда 1"
          style={{
            maxWidth: "100%"
          }}
        />
        <p style={styles.p}>
          Скачать&ensp;
          <a href="/download/tehnograd-map1.pdf">схему проезда</a>
        </p>
        <h3 style={styles.h3}>
          Павильон Арт.Техноград, 1-й этаж, Лекционный зал
        </h3>
        <Slider
          content={[
            pathImages + "tg01.jpg",
            pathImages + "tg02.jpg",
            pathImages + "tg03.jpg"
          ]}
          mobileContent={[
            pathImages + "tg01.jpg",
            pathImages + "tg02.jpg",
            pathImages + "tg03.jpg"
          ]}
        />
      </div>
    )
  },
  questions: {
    title: "Есть вопросы — пишите",
    content: <Socnets noHead />
  },
  events: {
    title: "Вас может заинтересовать",
    content: (
      <div>
        <OpenLectures styleHead={styles.h2} />
        <ProCourses styleHead={styles.h2} />
      </div>
    )
  }
};
