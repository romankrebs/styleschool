import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Teacher() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid
        item
        xs={12}
        md={6}
        style={{
          padding: 20,
          paddingTop: 0,
          textAlign: "center"
        }}
      >
        <img
          src="/img/motivation-of-staff/teacher.jpg"
          alt="Екатерина Елисеева"
          style={{ maxWidth: 350 }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <p
          style={{
            textAlign: "left",
            color: "rgb(100,100,100)",
            fontStyle: "italic",
            lineHeight: "1.5em"
          }}
        >
          <span
            style={{
              fontSize: "2em",
              color: "rgb(80,80,80)",
              fontWeight: 700
            }}
          >
            &laquo;
          </span>
          &ensp;Часто мотивация составляется по принципу &bdquo;как выплатить
          сумму N, ведь если ее не выплатить, сотрудник уйдет&ldquo;. Этот
          принцип основан на страхе потери сотрудника и столкновения с подбором
          нового. <br />
          Мы же с вами будем учиться выстраивать мотивацию по принципу
          &bdquo;Как заплатить сотруднику за его реальные достижения, которые
          принесли прибыль и смогли помочь достичь целей бизнеса&ldquo;&ensp;
          <span
            style={{
              fontSize: "2em",
              color: "rgb(80,80,80)",
              fontWeight: 700,
              lineHeight: "0.5em"
            }}
          >
            &raquo;
          </span>
        </p>
        <p
          style={{
            textAlign: "right",
            fontStyle: "italic",
            color: "rgb(120,120,120)",
            fontFamily: "Lora"
          }}
        >
          Екатерина Елисеева
        </p>
      </Grid>
    </Grid>
  );
}
