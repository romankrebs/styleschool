import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";

export default function Teacher() {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={7}>
        <H2 content="Преподаватель" />
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container justify="center" alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <div style={{ textAlign: "right" }}>
              <img
                src="/img/butique/teacher.jpg"
                style={{
                  width: "auto",
                  height: 260,
                  borderRadius: "50%"
                }}
                alt=""
              />
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <h3
              style={{
                fontSize: "1.2em",
                fontWeight: 700,
                textAlign: "left",
                color: "rgb(100,100,100)",
                padding: "0 20px 5px",
                margin: 0
              }}
            >
              Марина Бонецкая
            </h3>
            <p
              style={{
                fontSize: "0.9em",
                fontWeight: 400,
                color: "rgb(100,100,100)",
                padding: "5px 20px",
                margin: 0
              }}
            >
              Художник-дизайнер, доцент, автор курсов по созданию корпоративного
              и персонального имиджа и стиля, член Международной Организации
              "Союз дизайнеров".
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
