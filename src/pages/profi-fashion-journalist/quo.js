import React from "react";
import { Grid } from "@material-ui/core";
import Paragraph from "../../components/p-array";

export default function Quo() {
  return (
    <div style={{ paddingTop: 30, marginTop: 40 }}>
      <Grid container justify="center">
        <Grid item xs={12} md={9}>
          <Grid
            container
            alignItems="stretch"
            justify="center"
            spacing={4}
            style={{ background: "rgb(245,245,245)" }}
          >
            <Grid item xs={12} md={3}>
              <p
                style={{
                  // fontFamily: "Roboto",
                  fontSize: "6.3em",
                  fontWeight: 700,
                  color: "rgb(80,80,80)",
                  margin: 0,
                  padding: 14
                }}
              >
                &raquo;
              </p>
            </Grid>
            <Grid item xs={12} md={9}>
              <Paragraph
                j
                content={[
                  "Работая с идеей, визуальной образностью и языком текста, Вы должны быть одновременно аналитиком и творцом, должны владеть современными жанрами и знать их истоки, найти свой индивидуальный стиль и языковые приемы, позволяющие добиться необходимых коммуникационных целей: сформировать или не упустить свою целевую аудиторию и уметь оказать на нее воздействие."
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
