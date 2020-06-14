import React from "react";
import { Grid } from "@material-ui/core";
import Paragraph from "../../components/p-array";

export default function Component() {
  return (
    <div>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <Paragraph
            content={[
              <span>
                Ведущая модуля &ndash; Екатерина Елисеева. Основатель и директор
                консалтинговой компании Practical Fashion Solution. Практикующий
                тренер и business coach.
              </span>,
              <span>
                Цель обучения: сформировать правильный подход к мотивации
                персонала и исключить самые распространенные ошибки в таких
                ситуациях.
              </span>,
              <b>
                Мотивация торгового персонала &ndash; это реальный инструмент
                управления продажами
              </b>
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <img
              src="/img/motivation-of-staff/ill01.jpg"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
