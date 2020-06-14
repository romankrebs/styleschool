import React from "react";
import { Grid } from "@material-ui/core";
import Button from "../../components/green-button";

export default function About(params) {
  return (
    <div>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <p style={{ fontSize: "1em", color: "rgb(100,100,100)" }}>
            Здесь Вы найдете расписание встреч и мероприятий для выпускников и
            слушателей ВШС. Доступ к большинству мероприятий бесплатный. Могут
            быть отдельные условия в определенных курсах и проектах.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button link="#in-club">Вступить в клуб</Button>
        </Grid>
      </Grid>
    </div>
  );
}
