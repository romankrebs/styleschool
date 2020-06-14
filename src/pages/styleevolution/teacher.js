import React from "react";
import Grid from "@material-ui/core/Grid";
import Paragraph from "../../components/text-image";

export default function Teacher(props) {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={8}>
        <Paragraph
          image={{
            src: "/img/styleevolution/teacher-300.jpg",
            altText: "Автор курса Инесса Трубецкова",
            style: {
              borderRadius: "50% 50%",
              height: "15em",
              width: "auto",
              position: "sticky",
              top: 1
            },
            align: "center"
          }}
          text={{
            content: (
              <React.Fragment>
                <p
                  style={{
                    fontFamily: props.font ? props.font : "Futura-Normal"
                  }}
                >
                  Имиджмейкер с 20-летним стажем и автор 10 книг о стиле, цвете,
                  гардеробе и дресс-кодах, а так же учебников
                  «Человек.Образ.Стиль» и «100% цвета», &laquo;Библия стиля.
                  Дресс-код успешной женщины&raquo;, &laquo;Библия стиля.
                  Дресс-код успешного мужчины&raquo;, инструментов и пособий для
                  специалистов. Организатор Ассоциации для стилистов Personal
                  Shopping и 5 Конференций для специалистов.
                </p>
                <p
                  style={{
                    fontFamily: props.font ? props.font : "Futura Normal"
                  }}
                >
                  Автор и преподаватель курсов, мастер-классов и
                  бизнес-программ, таких как «Гардероб на 365 дней», «Сезонный
                  гардероб», «Колористика – искусство сочетать», «Личный стиль»,
                  «Personal shopping – хобби или профессия», Курс «Карта
                  образов», «Дресс-код для мужчин и женщин», «Коэффициент
                  консервативности».
                </p>
              </React.Fragment>
            )
          }}
          orient="right"
          head={
            <span
              style={{ fontFamily: props.fontHead ? props.fontHead : null }}
            >
              Автор курса
              <br />
              Инесса Трубецкова
            </span>
          }
          size={{
            left: 6,
            right: 6
          }}
          link=""
          fontHead={props.fontHead}
          vAlign="stretch"
        />
      </Grid>
    </Grid>
  );
}
