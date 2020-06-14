import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Numerique from "../../components/numerique";

let content = [
  "Введение в политические технологии",
  "Психология лидерства",
  "Принципы политической и экономической культуры, влияющие на формирование имиджа",
  "Практика создания модели имиджа с использованием политтехнологий",
  "Продвижение и закрепление имиджа на основе моделей политтехнологий",
  "Принципы использования политтехнологий в бизнесе или государственном управлении"
];

export default function Theses() {
  return (
    <div>
      <h2
        style={{
          font: '700 1.8em "Roboto"',
          color: "rgb(100,100,100)",
          textAlign: "center",
          margin: 0,
          padding: "48px 0"
        }}
      >
        Основные предметы
      </h2>
      <Grid container justify="center" alignItems="flex-start" spacing={3}>
        <Hidden only={["md", "lg", "xl"]}>
          {content.map((n, i) => (
            <Grid item xs={12} sm={12} md={12}>
              <Numerique
                style={{
                  box: {},
                  text: {
                    fontSize: "1em"
                  },
                  number: {
                    color: "rgb(123,143,87)",
                    height: 32,
                    width: 32,
                    font: '400 0.8em "Roboto"',
                    border: "3px solid rgb(123,143,87)",
                    left: "calc(50% - 16px)"
                  }
                }}
                number={i + 1}
                text={n}
              />
            </Grid>
          ))}
        </Hidden>
        <Hidden only={["xs", "sm"]}>
          {content.map((n, i) => (
            <Grid item xs={12} md={6}>
              <Numerique
                style={{
                  box: {
                    minHeight: 84,
                    padding: 4
                  },
                  text: {
                    fontSize: "1em"
                  },
                  number: {
                    color: "rgb(123,143,87)",
                    height: 32,
                    width: 32,
                    font: '400 0.8em "Roboto"',
                    border: "3px solid rgb(123,143,87)",
                    left: 0
                  }
                }}
                number={i + 1}
                text={n}
              />
            </Grid>
          ))}
        </Hidden>
      </Grid>
    </div>
  );
}
