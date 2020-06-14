import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./card";

export default function Moscow() {
  const garderob = {
    head: "Стиль",
    title: "Весенний гардероб",
    teacher: "Инесса Трубецкова",
    date: "16 марта",
    time: (
      <span>
        10<sup>00</sup> - 17<sup>00</sup> по МСК
      </span>
    ),
    duration: "7 часов",
    text: (
      <span>
        У весны есть такая особенность &ndash; она всегда ожидаема, но нагрянуть
        может неожиданно и застать врасплох. Оставьте зиме все переживания и
        усталость. Настройтесь на позитив и почувствуйте себя женщиной на все
        100%. И с первых же дней марта смените теплый шарф на шелковый платок.
        Ключи для весеннего базового гардероба: настроение, погода и праздники.
        Женственные и многослойные образы весны. Популярные стили на модном
        подиуме. Особенности одежды весеннего периода, актуальные цвета.
        Сочетания цветов в весеннем гардеробе. Весенняя база в гардеробе, хиты
        весны и аксессуары.
      </span>
    ),
    descript: (
      <span>
        Модные тенденции на весну 2019 года
        <br />
        Мастер-класс, очно!
      </span>
    ),
    image: "/img/modern-fashion-style/garderob.jpg"
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "2em",
            fontWeight: 700,
            textAlign: "center",
            color: "rgb(80,80,80)"
          }}
        >
          Ближайшие мероприятия в Москве
        </h2>
      </Grid>

      <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
        <Card
          head={garderob.head}
          title={garderob.title}
          teacher={garderob.teacher}
          descript={garderob.descript}
          date={garderob.date}
          time={garderob.time}
          duration={garderob.duration}
          image={garderob.image}
          text={garderob.text}
          face={false}
        />
      </Grid>
    </Grid>
  );
}
