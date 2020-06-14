import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

//import TopMenu from "../../components/topmenu.js";

export default function Fullscreen() {
  const data = {
    background:
      "url(/img/mastery-of-writing-text/fullscreen.jpg) left top/cover no-repeat",
    head: {
      content: (
        <span>
          МАСТЕРСТВО СОЗДАНИЯ
          <br />
          ТЕКСТА
          <br />
          <br />
          ИСКУССТВО
          <br />
          САМОВЫРАЖЕНИЯ
        </span>
      ),
      style: {
        background: "rgba(0,0,0,0.85)",
        color: "rgb(255,255,255)"
      }
    },
    image: {
      src: "/img/mastery-of-writing-text/teacher_header.png",
      style: {
        height: "100%"
      }
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ background: data.background }}
    >
      <Grid item xs={10} md={6} style={{ padding: 40, paddingLeft: 50 }}>
        <Paper
          style={{
            textAlign: "center",
            padding: 25,
            paddingBottom: 10,
            ...data.head.style
          }}
        >
          <h1 style={{ fontFamily: "'Cormorant Garamond'", fontWeight: 400 }}>
            {data.head.content}
          </h1>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{ textAlign: "right", paddingRight: 60 }}
      >
        <img src={data.image.src} alt="" style={data.image.style} />
      </Grid>
    </Grid>
  );
}
