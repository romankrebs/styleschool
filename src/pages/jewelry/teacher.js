import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Teacher() {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={6}>
        <h2
          style={{
            fontSize: "1.6em",
            color: "rgb(100,100,100)",
            textAlign: "center",
            fontWeight: 700
          }}
        >
          Автор курса Марина Бонецкая
        </h2>
        <p
          style={{
            textAlign: "left",
            color: "rgb(100,100,100)",
            lineHeight: "1.5em",
            fontSize: "1em"
          }}
        >
          Художник-дизайнер, доцент, автор курсов по созданию корпоративного и
          персонального имиджа и стиля, член Международной Организации «Союз
          дизайнеров».
        </p>
      </Grid>
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
          src="/img/about/marina-bonetskaya-q.jpg"
          alt="Лиана Бахова"
          style={{ maxWidth: 200, borderRadius: "50%" }}
        />
      </Grid>
    </Grid>
  );
}
