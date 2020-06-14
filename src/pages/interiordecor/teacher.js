import React from "react";
import Grid from "@material-ui/core/Grid";
import Paragraph from "../../components/text-image";

export default function Teacher() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={8}>
        <Paragraph
          image={{
            src: "/img/teachers/rotar_qu.jpg",
            altText: "Автор курса Татьяна Ротарь",
            style: {
              borderRadius: "50% 50%",
              height: "15em",
              width: "auto"
            },
            align: "center"
          }}
          text={{
            content: <span>Дизайнер интерьера, преподаватель #ВШСДТ</span>
          }}
          orient="right"
          head={
            <span>
              Автор курса
              <br />
              Татьяна Ротарь
            </span>
          }
          size={{
            left: 6,
            right: 6
          }}
          link="/tatyana_rotar"
        />
      </Grid>
    </Grid>
  );
}
