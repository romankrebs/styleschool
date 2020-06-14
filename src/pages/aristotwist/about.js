import React from "react";
import Grid from "@material-ui/core/Grid";

export default function About() {
  return (
    <div>
      <h2 style={{
        textAlign: "center",
        fontFamily: "Cormorant Garamond",
        fontSize: 36,
        fontWeight: 400,
        color: "rgb(100,100,100)",
      }}>
        Об авторе
      </h2>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item xs={12} md={4}>
          <div style={{
            textAlign: "center",
          }}>
            <img
              src="/img/aristotwist/teacher.jpg"
              alt=""
              style={{
                borderRadius: "50%",
                height: 240,
                margin: "0 auto",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div style={{ padding: "0 30px 0 10px" }}>
            <p style={{
              fontFamily: "Lora",
              fontSize: "1.2em",
              textAlign: "left",
              color: "rgb(100,100,100)",
              padding: 0,
              margin: 0,
            }}>Ксения Ферзь</p>
            <p style={{
              fontFamily: "Roboto",
              fontSize: "1em",
              textAlign: "left",
              color: "rgb(100,100,100)"
            }}>
              Инструктор по имиджу и этикету, специалист в вопросах светского и делового позиционирования, автор проекта <a href="https://www.aristotwist.ru/" style={{ color: "rgb(160,0,0)" }}>aristotwist.ru</a>
            </p>
            <p style={{
              fontFamily: "Lora",
              fontSize: "0.8em",
              fontStyle: "italic",
              color: "rgb(100,100,100)"
            }}>
              &laquo;Я не учу, как стать женщиной-богиней или эффективным менеджером. Я предлагаю методы для тех, кто готов стать первым классом в своей категории. Потому что все невольно хотят себе 1st class.&raquo;
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}