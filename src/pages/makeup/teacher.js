import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Teacher() {
  var style = {
    text: {
      fontSize: "1em",
      fontWeight: 400,
      textAlign: "left",
      color: "rgb(100,100,100)"
    },
    title: {
      fontFamily: "Roboto",
      fontSize: "1.1em",
      fontWeight: 700,
      textAlign: "left",
      color: "rgb(80,80,80)",
      paddingTop: 0,
      marginTop: 0
    }
  };
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={4}>
        <div
          style={{
            textAlign: "center"
          }}
        >
          <a href="https://styleschool.ru/user/profile.php?id=1244">
            <img
              src="/img/makeup/teacher.jpg"
              alt="Яна Ахметова"
              style={{
                height: 200,
                borderRadius: "50%"
              }}
            />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <p style={style.title}>Яна Ахметова (Чехия) – ведущий преподаватель</p>
        <p style={style.text}>
          Профессиональный визажист-стилист с 19-летним опытом работы в области
          моды и красоты. Успешная карьера в Уфе, в Москве, с 2007 &mdash; в
          Праге. В портфолио Яны &mdash; проекты в рамках школы Revlon с
          ведущими мастерами и селебрити.
        </p>
        <p style={style.text}>
          Все ученики Яны получат актуальную и ценную информацию и могут стать
          востребованными специалистами. Вам выбирать &mdash; сделать эти знания
          основой профессии, расширением возможностей или творческим хобби.
        </p>
      </Grid>
    </Grid>
  );
}
