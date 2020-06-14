import React from "react";
import { Paper } from "@material-ui/core";

const Tile = props => {
  const style = {
    title: {
      fontSize: "1.3em",
      textAlign: "center",
      fontWeight: 700,
      color: "rgb(100,100,100)"
    },
    text: {
      fontSize: "1em",
      textAlign: "center",
      fontWeight: 400,
      color: "rgb(100,100,100)"
    },
    date: {
      fontSize: "1em",
      textAlign: "center",
      fontWeight: 400,
      color: "rgb(80,80,80)",
      background: "rgb(245,245,245)"
    },
    button: {
      background: "rgb(123,143,87)",
      color: "rgb(255,255,255)",
      padding: 4,
      fontSize: "1em",
      borderRadius: 4,
      width: "fit-content",
      margin: "0 auto"
    }
  };
  return (
    <div>
      <Paper style={{ padding: 12 }}>
        <h2 style={style.title}>{props.title}</h2>
        <p style={style.date}>{props.date}</p>
        {props.content.map((el, i) => (
          <p style={style.text}>{el}</p>
        ))}
        <a href={props.link}>
          <div style={style.button}>Записаться</div>
        </a>
      </Paper>
    </div>
  );
};

export default Tile;
