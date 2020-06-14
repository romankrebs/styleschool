import React from "react";
import List from "../../components/list";
import Paragraph from "../../components/p-array";
import { Clock, PointInMap, HandShake, Teacher, Present } from "./icons";
import { dates, DateToString } from "../shedule/dates";
import { HorizontalForm } from "../../components/forms";
import { styles } from "./styles";
// import Slider from "../../components/slider-images-2";
import Socnets from "../../components/want-to-know";
import { Grid, Paper } from "@material-ui/core";
// import { Link } from "react-router-dom";
import ProCourses from "../root/cards-courses";
// import OpenLectures from "../master-class/open-lectures";

const icons = {
  size: 30,
  color: "rgb(123,143,87)"
};

const pathImages = "/img/make05032020/";

const title = "Тренды в макияже 2020";

export const content = {
  title: title,
  faqultet: "Школа стиля",
  illustration: {
    image: pathImages + "makeup.jpg",
    imageComment: "",
    text: (
      <div>
        <h1 style={{ ...styles.h1, paddingBottom: "1em" }}>{title}</h1>
        <div style={{ textAlign: "center", paddingBottom: "2em" }}>
          <button
            type="button"
            class="tc-background-default"
            data-tc-event="5e5e367a31ef66b92dda4f6d"
            data-tc-token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSJ9.eyJwIjoiNWRmZTJiNjM3MWZlZmI2MWNkY2U1MWEzIn0.PbqNyoJClC5TMaIahG9T0HQBCKDHmB1BIM4mzjCpQu4"
          >
            <span style={{ fontSize: "1rem" }}>Купить билет</span>
          </button>
        </div>
        <Paragraph
          content={[
            "Говорим о трендах в макияже:",
            <List
              arr={[
                "Стрелки цветные",
                "Шимерный вариант макияжа",
                "Нюд",
                "Смоки",
                "Новинки в косметических продуктах",
                "Выполнение макияжа в трендовом варианте"
              ]}
              style={styles.p}
            />
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
        DateToString(dates.masterClasses.trandsInMakeup) +
        " года в 19:00 по МСК",
      icon: <Clock size={icons.size} color={icons.color} />
    },
    {
      title: "Место проведения",
      text: "Москва, Москва, ВШСДТ, лекционный зал 1",
      icon: <PointInMap size={icons.size} color={icons.color} />
    },
    {
      title: "Лектор",
      text: "Екатерина Медведева",
      icon: <Teacher size={icons.size} color={icons.color} />
    }
  ],
  moderator: "Лектор",
  goulyaeva: {
    // image: pathImages + "goulyaeva1.png",
    image: pathImages + "ekaterina-medvedeva.jpg",
    imageComment: "Екатерина Медведева",
    text: (
      <Paragraph
        style={styles.p}
        content={[
          "Звездный визажист",
          "Победитель конкурса визажистов Slava Zaitzav Awards 2019",
          "Обладатель премии Alusso Event Awards 2020 в номинации лучший звездный стилист/визажист",
          "Спикер «Московское долголетия»",
          "Радиоведущая рубрики «Секреты красоты с Катариной Медведевой»",
          "Приглашенный преподаватель мастер-классов на базе школы BeautyDrugs",
          "Автор статей для популярных глянцевых журналов и интернет-порталов",
          "Визажист Fashion TV",
          "Визажист для съемок ведущих глянцевых журналов, клипов и кино, гример фильма Духлесс"
        ]}
      />
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
          <div style={styles.h3Big}>Екатерина Медведева</div>
        </Grid>
      </Grid>
    )
  },
  inputFree: (
    <span>
      Доступ студентам и выпускникам ВШСДТ — 0₽
      <br />
      Билет на лекцию — 500₽
    </span>
  ),
  present: {
    title: (
      <span>
        <Present size={"1em"} color={icons.color} />
        &ensp; Подарок участникам мероприятия
      </span>
    ),
    text: false,
    icon: <Present size={icons.size} color={icons.color} />
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
      <Paragraph
        content={[
          <b>Для кого мастер-класс</b>,
          "Для всех желающих, не зависимо от уровня подготовки и профессиональной направленности.",
          <b>На мастер-классе:</b>,
          "Екатерина покажет, как правильно сделать макияж и какими лайфхаками пользуются визажисты во время съемок для глянцевых журналов, поделиться информацией о последних новинках и продуктах, с которыми работает и почему. Вы получите раздаточный материал (фейс-чарт),на котором, для Вашего удобства Вы сможете написать все те продукты, которые были использованы в работе."
        ]}
        style={styles.p}
      />
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
        {/* <OpenLectures styleHead={styles.h2} /> */}
        <ProCourses styleHead={styles.h2} />
      </div>
    )
  }
};
