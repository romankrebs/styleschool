import React from "react";
import { colors, fontNames } from "./styles";

const WordOfMouth = () => {
  return (
    <div>
      <div style={{ height: 54 }} />
      <div
        style={{
          fontFamily: fontNames.classic,
          fontStyle: "italic",
          textAlign: "center",
          color: colors.middle3,
          fontSize: "2em",
          lineHeight: "2em"
        }}
      >
        Сарафанное радио — это локальная история с «потолком». Пора двигаться
        дальше: заявить о себе в социальных сетях, обеспечивая себе несколько
        сотен «живых» подписчиков в неделю и непрерывный клиентский поток.
      </div>
      <div style={{ height: 48 }} />
      <div
        style={{
          fontFamily: fontNames.classic,
          fontStyle: "italic",
          textAlign: "center",
          color: colors.middle1,
          fontSize: "2em",
          lineHeight: "2em",
          fontWeight: 700
        }}
      >
        Ждем вас на курсе Александры Бодровой:
        <br />
        Маркетинг для стилистов и имиджмейкеров: создание личного бренда в
        социальных сетях
      </div>
      <div style={{ height: 54 }} />
    </div>
  );
};

export default WordOfMouth;
