import React from "react";
import Grid from "@material-ui/core/Grid";
import H2 from "../../components/head1";
import H3 from "../../components/head3";
import List from "../../components/list";

export default function ForComponent() {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={12} md={12}>
        <H2 content="Для кого создана программа" />
      </Grid>
      <Grid item xs={12} md={4}>
        <H3 content="Владелец квартиры" />
        <List
          arr={[
            "Как самому сделать дизайн-проект и планировку своей квартиры",
            "Как научиться читать чертежи",
            "Как экономить на ремонте и правильно ставить задачи исполнителям",
            "Как реализовать интерьер квартиры своими силами"
          ]}
          style={{
            fontFamily: "Roboto",
            fontSize: "1em",
            color: "rgb(100,100,100)"
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <H3 content="Дизайнер интерьера с нуля" />
        <List
          arr={[
            "Как сделать продающий дизайн-проект",
            "Как создавать хорошие планировки",
            "Как применять знания по колористике в декорировании интерьера",
            "Как работать с современными отделочными материалами"
          ]}
          style={{
            fontFamily: "Roboto",
            fontSize: "1em",
            color: "rgb(100,100,100)"
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <H3 content="Дизайнер интерьера с нуля" />
        <List
          arr={[
            "Как систематизировать знания и навыки",
            "Как эффективно продавать услуги по дизайну интерьера",
            "Как выстраивать взаимоотношения с подрядчиками",
            "Как создавать дизайн-проекты, требующие минимального авторского надзора"
          ]}
          style={{
            fontFamily: "Roboto",
            fontSize: "1em",
            color: "rgb(100,100,100)"
          }}
        />
      </Grid>
    </Grid>
  );
}
