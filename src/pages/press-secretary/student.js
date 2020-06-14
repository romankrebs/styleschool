import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";

export default function Student() {
  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={12}>
        <H2 content="Для кого этот курс" />
      </Grid>
      <Grid item xs={12} md={3}>
        <div>
          <img
            src="/img/presscecretary/student.svg"
            alt=""
            style={{
              height: 200
            }}
          />
        </div>
      </Grid>
      <Grid item xs={12} md={7}>
        <p
          style={{
            fontSize: "1em",
            padding: 8,
            margin: 0,
            color: "rgb(100,100,100)"
          }}
        >
          В первую очередь курс предназначен для студентов и выпускников вузов
          (журналистика, PR), и ставит целью их пратическую подготовку и
          наработку навыков по взаимодействию со СМИ и рекламными агентствами,
          формированию имиджа руководителя и кампании, подготовка пресс-релизов,
          буклетов, статей, речей и многому другому, с возможностью последующей
          стажировки и трудоустройства.
        </p>
      </Grid>
    </Grid>
  );
}
