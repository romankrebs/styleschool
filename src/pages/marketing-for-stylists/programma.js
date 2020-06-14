import React from "react";
// import { Grid } from "@material-ui/core";
import Expand from "../../components/expanded";
import List from "../../components/list";
import { colors, styles } from "./styles";

const content = [
  {
    summary: "Позиционирование бренда (личности) в социальных медиа",
    details: (
      <List
        arr={[
          "Для чего нужен личный бренд в социальных медиа. Осознанный и неосознанный образ.",
          "Анализ рынка и аудит ниши.",
          "Работа с целевой аудиторией.",
          "Определение конкурентных преимуществ."
        ]}
      />
    )
  },
  {
    summary: "Работа с контентом в digital-пространстве",
    details: (
      <List
        arr={[
          "Визуальный и текстовый контент.",
          "Разбор самых популярных социальных сетей: где и на чем делать акцент (Facebook, Instagram, VK, Pinterest, YouTube).",
          "Создание контент-плана.",
          "Учимся работать с обратной связью. Отработка негатива.",
          "Подборка приложений для работы (планировщики, фотостоки, приложения для обработки фото и видео)."
        ]}
      />
    )
  },
  {
    summary: "Настройка рекламы",
    details: (
      <List
        arr={[
          "Подготовка к продвижению.",
          "Инструменты продвижения в Instagram: алгоритм Instagram, SFS и IFS, массфолловинг и масслайкинг.",
          "«Прямые эфиры» и взаимодействие с аудиторией.",
          "Продвижение в Facebook и VK: методы работы с «живой лентой».",
          "Работа с блогерами и лидерами мнений.",
          "Продвижение с помощью конкурсов, марафонов и прочих активностей.",
          "Таргетированная реклама: пошаговая инструкция."
        ]}
      />
    )
  }
];

const Programma = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ ...styles.h2, color: colors.dark }}>Программа:</h2>
      {content.map((el, i) => (
        <Expand
          summary={{
            text: el.summary,
            style: styles.titleProgramma
          }}
          details={{
            text: el.details,
            style: styles.listProgramma
          }}
          expand={false}
          key={i}
        />
      ))}
    </div>
  );
};

export default Programma;
