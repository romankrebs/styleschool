import React from "react";
import Grid from "@material-ui/core/Grid";
import Paragraph from "../../components/text-image";

export default function Teacher() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={8}>
        <Paragraph
          image={{
            src: "/img/conceptualfashion/teacher.jpg",
            altText: "Автор курса Наталья Горских",
            style: {
              borderRadius: "50% 50%",
              height: "15em",
              width: "auto"
            },
            align: "center"
          }}
          text={{
            content: (
              <span>
                К. фил. н., эксперт, преподаватель курса &laquo;Основные
                стратегии современной модной индустрии&raquo; в составе
                программы &laquo;Имиджмейкер. Второе высшее&raquo;, цикла лекций
                по искусству и художественному образу.
              </span>
            )
          }}
          orient="right"
          head={
            <span>
              Автор курса
              <br />
              Наталья Горских
            </span>
          }
          size={{
            left: 6,
            right: 6
          }}
          link="/natalya_gorskyh"
        />
      </Grid>
    </Grid>
  );
}
