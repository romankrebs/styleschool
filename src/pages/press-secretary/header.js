import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Header() {
  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          background:
            "url(/img/presscecretary/fullscreen.jpg) right/cover no-repeat, rgb(96,175,130)"
        }}
      >
        <Grid item xs={12} md={6}>
          <div
            style={{
              padding: "30px 30px 50px",
              textAlign: "center"
            }}
          >
            <h1
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "3em",
                fontWeight: 700,
                color: "rgb(255,255,255)",
                textAlign: "center",
                marginBottom: 0,
                paddingBottom: 5
              }}
            >
              ПРЕСС
              <br />
              СЕКРЕТАРЬ
            </h1>
            <p
              style={{
                fontSize: "1em",
                fontWeight: 400,
                color: "rgb(255,255,255)",
                textAlign: "center",
                margin: 0,
                padding: 4
              }}
            >
              Авторский курс Марии Родиной
            </p>
            <p
              style={{
                fontSize: "0.9em",
                fontWeight: 400,
                color: "rgb(255,255,255)",
                textAlign: "center",
                margin: 0,
                padding: 4
              }}
            >
              {"{ Очно | Online }"}
            </p>
            <p
              style={{
                fontSize: "1.1em",
                fontWeight: 500,
                color: "rgb(255,255,255)",
                textAlign: "center",
                margin: 0,
                padding: 4
              }}
            >
              50% практика, 50% теория
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} />
      </Grid>
    </div>
  );
}
