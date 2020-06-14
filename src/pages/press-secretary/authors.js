import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";

function Teacher(props) {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={5}>
        <div style={{ textAlign: "center" }}>
          <img
            src={props.image}
            style={{
              borderRadius: "50%",
              height: 160
            }}
            alt=""
          />
        </div>
      </Grid>
      <Grid item xs={12} md={7}>
        <p
          style={{
            fontSize: "1.1em",
            fontWeight: 500,
            color: "rgb(100,100,100)",
            textAlign: "left",
            margin: 0,
            padding: 4
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            fontSize: "1em",
            fontWeight: 400,
            color: "rgb(100,100,100)",
            textAlign: "left",
            margin: 0,
            padding: 4
          }}
        >
          {props.text}
        </p>
      </Grid>
    </Grid>
  );
}

export default function Authors() {
  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={12}>
        <H2 content="Об авторах" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Teacher
          image="/img/presscecretary/teacher2.jpg"
          title="Мария Родина"
          text="Кандидат политических наук, психолог, бизнес-тренер, политтехнолог, Директор фонда «Общественных инициатив»"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Teacher
          image="/img/presscecretary/teacher1.jpg"
          title="Валерий Чередниченко"
          text="Кандидат экономических наук, социолог, бизнес-тренер, политтехнолог Директор Института стратегических исследований и проектов"
        />
      </Grid>
    </Grid>
  );
}
