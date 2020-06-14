import React from "react";
import Grid from "@material-ui/core/Grid";

import H2 from "../../components/head1";

export default function Garanty() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ padding: 20 }}
    >
      <Grid item xs={12} md={12}>
        <H2 content="Обучение до результата с гарантией!" />
        <p
          style={{
            fontSize: "1em",
            color: "rgb(100,100,100)",
            margin: 0,
            padding: "5px 20px"
          }}
        >
          Мы ведем Вас до результата, но с условием: Ваша постоянная работа над
          материалом во время обучения и выполнение минимум 1 задания в неделю.
          Основной целью обучения является приобретение навыков макияжа, потому
          Вы получаете материалы и задания именно по технике макияжа. Мы
          проверяем выполнение заданий и комментируем их достоинства и
          недостатки, тем самым обеспечивая реальный результат.
        </p>
      </Grid>
    </Grid>
  );
}
