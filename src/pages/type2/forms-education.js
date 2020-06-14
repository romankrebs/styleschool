import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./style";

export default function Forms(props) {
  return (
    <div style={{ paddingTop: "1.6em" }}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={12}>
          <div>
            <div
              style={{
                padding: 0,
                paddingLeft: 20,
                paddingBottom: "1.3em",
                border: 0,
                borderLeft: "1em solid rgb(240,240,240)"
              }}
            >
              <h3 style={styles.h3}>Дистанционно</h3>
              <p style={styles.p}>
                {props.online ? (
                  props.online
                ) : (
                  <span>
                    Курс состоит из видео уроков и интерактивных он-лайн занятий
                    (вебинаров). Изучаете курс в любое время и там, где есть
                    ноутбук и доступ в интернет. На вебинарах с преподавателем
                    разбираете домашние задания и актуальные вопросы по курсу.
                    Занятия доступны в записи.
                  </span>
                )}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div
            style={{
              padding: 0,
              paddingRight: 20,
              paddingBottom: "1.3em",
              border: 0,
              borderRight: "1em solid rgb(240,240,240)"
            }}
          >
            <h3 style={{ ...styles.h3, textAlign: "right" }}>Очно</h3>
            <p
              style={{
                ...styles.p,
                textAlign: "right"
              }}
            >
              {props.ofline ? (
                props.ofline
              ) : (
                <span>
                  Лекционные и практические занятия проходят в аудиториях ВШС.
                  Доступно обучение в дневных и вечерних группах или группах
                  выходного дня. Пропущенные занятия можно посетить с другой
                  группой, или просмотреть аналогичные занятия в онлайн группах.
                </span>
              )}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
