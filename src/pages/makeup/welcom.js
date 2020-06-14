import React from "react";
import Grid from "@material-ui/core/Grid";

// import Button0 from "../../components/button0";

export default function Welcom() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12} style={{ padding: 24 }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ background: "rgba(98,132,199,1)" }}
        >
          <Grid item xs={12} md={10} style={{ padding: 20 }}>
            <p
              style={{
                fontSize: "1.1em",
                textAlign: "center",
                color: "rgb(255,255,255)"
              }}
            >
              Приглашаем вас посмотреть открытый урок, где вы сможете
              познакомиться с Яной Ахметовой, узнаете о распространенных ошибках
              в макияже и как их можно исправить
            </p>
            <div
              style={{
                height: 0,
                width: "80%",
                borderTop: "1px solid rgb(255,255,255)",
                margin: "0 auto"
              }}
            />
            <p
              style={{
                fontSize: "1em",
                textAlign: "center",
                color: "rgb(255,255,255)"
              }}
            >
              Основная цель макияжа – сделать женщину более привлекательной.
              Иногда получается обратный результат. Неправильный макияж способен
              добавить зрительно лишних лет или подчеркнуть недостатки, которые
              мы так хотели скрыть. На открытом он-лайн уроке вместе с Яной
              Ахметовой, визажистом и преподавателем Высшей школы стилистики,
              поговорим о красивом грамотном макияже. Совершенствуйтесь,
              чувствуйте себя уверенно и привлекательно, дарите окружающим
              красоту!
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
