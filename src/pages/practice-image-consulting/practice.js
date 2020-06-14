import React from "react";
import Grid from "@material-ui/core/Grid";
import ScrollableAnchor from "react-scrollable-anchor";
import { Link } from "react-router-dom";
import Tile from "../../components/tile";
// import Button0 from "../../components/button0";

function Teacher(props) {
  const styles = {
    image: {
      borderRadius: "50% 50%",
      height: 100,
      width: "auto"
    },
    label: {
      fontFamily: "Roboto",
      fontSize: "1.4em",
      color: "rgb(100,100,100)",
      textAlign: "center"
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ textAlign: "center" }}>
        <Link to={props.link}>
          <img
            src={props.image}
            alt=""
            style={{ ...styles.image, ...props.style }}
          />
        </Link>
      </div>
      <Link to={props.link}>
        <div style={styles.label}>{props.label}</div>
      </Link>
    </div>
  );
}

export default function Practice(props) {
  const styles = {
    head: {
      fontFamily: "Roboto",
      fontSize: "2em",
      color: "rgb(100,100,100)",
      textAlign: "left",
      fontWeight: 700,
      ...props.styleHead
    },
    text: {
      fontSize: "1em",
      color: "rgb(100,100,100)",
      textAlign: "left",
      ...props.styleText
    },
    title: {
      fontSize: "1em",
      color: "rgb(100,100,100)",
      textAlign: "left",
      fontWeight: 700,
      ...props.styleTitle
    }
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <ScrollableAnchor id={props.anchor}>
          <h2 style={styles.head}>{props.head}</h2>
        </ScrollableAnchor>
        <p style={styles.text}>{props.text1}</p>
        <h3 style={styles.title}>Ведущие практики:</h3>
      </Grid>
      <Grid container justify="flex-start" alignItems="center">
        {props.teachers.map((el, i) => (
          <Grid item xs={4} md={2}>
            <Teacher
              image={el.image}
              label={el.name}
              link={el.link}
              style={{}}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={12}>
        <h3 style={styles.title}>Описание:</h3>
        <div style={styles.text}>{props.text2}</div>
        <p style={styles.text}>
          <span style={styles.title}>Время проведения:</span> {props.time}
        </p>
      </Grid>
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={10} md={5}>
          <Tile title="Начало" text={props.start || "—"} />
        </Grid>
        <Grid item xs={10} md={5}>
          <Tile title="Стоимость" text={props.price} />
        </Grid>
      </Grid>
    </Grid>
  );
}
