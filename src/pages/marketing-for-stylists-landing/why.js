import React from "react";
import { useStyle, colors } from "./styles";

const Why = () => {
  const classes = useStyle();

  return (
    <div>
      <h2 className={classes.h2} style={{ color: colors.dark }}>
        Почему нужно записаться на курс:
      </h2>
      <div
        style={{
          background: colors.middle1,
          borderRight: "12px solid " + colors.middle3,
          fontSize: "1.5em",
          textAlign: "right",
          padding: 24,
          paddingRight: 48,
          color: colors.white
        }}
      >
        <h3
          className={classes.h3}
          style={{ textAlign: "right", fontWeight: 700 }}
        >
          Наш спикер — профессионал-практик с экспертизой 360
        </h3>
        Александра Бодрова ежедневно работает с контентом в социальных сетях и
        занимается настройкой рекламных кампаний. Вас ждет теория, рассказанная
        понятным языком, лайфхаки и фишки, которые помогут сэкономить время и
        бюджет.
      </div>
      <div
        style={{
          background: colors.middle2,
          borderLeft: "12px solid " + colors.middle3,
          textAlign: "left",
          fontSize: "1.5em",
          padding: 24,
          paddingLeft: 48,
          color: colors.white
        }}
      >
        <h3
          className={classes.h3}
          style={{ textAlign: "left", fontWeight: 700 }}
        >
          Системный взгляд
        </h3>
        Вы узнаете о полном цикле работ с социальными сетями: «от» и «до». Вы
        сможете работать со своими аккаунтами самостоятельно, либо будете
        говорить на одном языке со своим smm-щиком.
      </div>
      <div
        style={{
          background: colors.dark,
          borderRight: "12px solid " + colors.middle3,
          textAlign: "right",
          fontSize: "1.5em",
          padding: 24,
          paddingRight: 48,
          color: colors.light
        }}
      >
        <h3
          className={classes.h3}
          style={{ textAlign: "right", fontWeight: 700 }}
        >
          Официальный документ по окончании
        </h3>
        В конце обучения вы получаете диплом государственного образца о том, что
        вы прошли курсы повышения квалификации.
      </div>
      <div style={{ height: 32 }} />
      <a href="#register">
        <div
          className={classes.button}
          style={{
            borderRadius: 6,
            maxWidth: 120,
            margin: "0 auto"
          }}
        >
          Записаться
        </div>
      </a>
    </div>
  );
};

export default Why;
