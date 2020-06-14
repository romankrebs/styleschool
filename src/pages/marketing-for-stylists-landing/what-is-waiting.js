import React from "react";
import { useStyle, colors, styles } from "./styles";
import List from "../../components/list";

const What = () => {
  const classes = useStyle();

  return (
    <div
      style={{
        background: colors.dark,
        padding: 36,
        color: colors.white,
        borderLeft: "48px solid " + colors.middle3,
        marginTop: 48
      }}
    >
      <p className={classes.pLarg}>Что вас ждёт:</p>
      <List
        arr={[
          "онлайн-обучение под руководством практикующего интернет-маркетолога",
          "ХХ видео-уроков, продолжительность одного урока — 1 час",
          "домашние задания. Мы проверяем каждое задание и даём рекомендации",
          "ХХ полезных материалов: ссылки, чек-листы, инструменты",
          "новые навыки и готовая стратегия продвижения личного бренда",
          "диплом государственного образца"
        ]}
        num="square"
        style={styles.pLarg}
      />
      <div style={{ height: 32 }} />
      <a href="#price">
        <div
          className={classes.buttonGreen}
          style={{ borderRadius: 6, maxWidth: 160, margin: "0 auto" }}
        >
          Узнать стоимость
        </div>
      </a>
    </div>
  );
};

export default What;
