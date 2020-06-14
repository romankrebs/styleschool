import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";

function Teacher(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <a href={props.link}>
        <img
          src={props.image}
          alt=""
          style={{ borderRadius: "50%", height: 200 }}
        />
      </a>
      <p
        style={{
          textAlign: "center",
          // fontFamily: "Roboto",
          fontSize: "1.2em",
          color: "rgb(100,100,100)",
          fontWeight: 700
        }}
      >
        <a href={props.link} style={{ color: "rgb(100,100,100)" }}>
          {props.name}
        </a>
      </p>
    </div>
  );
}

export default function Teachers() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <H2 content="Ведущие преподаватели" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Teacher
          image="/img/about/marina-bonetskaya-q.jpg"
          name="Марина Бонецкая"
          link="/marina_bonetskaya"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Teacher
          image="/img/vitrinism/teacher01.jpg"
          name="Руслан Мигранов"
          link="/ruslan_migranov"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Teacher
          image="/img/teachers/hlestova-q.jpg"
          name="Маргарита Хлестова"
          link="/margarita-hlestova"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Teacher
          image="/img/teachers/lamonova-q.jpg"
          name="Елена Ламонова"
          link="/elena-lamonova"
        />
      </Grid>
    </Grid>
  );
}
