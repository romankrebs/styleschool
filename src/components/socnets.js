import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const classes = makeStyles({
  paper: {
    boxShadow: 0,
    "&:hover": {
      boxShadow: "0 1px 2px 2px rgba(100,100,100,0.3)",
      cursor: "pointer"
    }
  },
  phone: {
    "&:link": {
      color: "rgba(21, 101, 192, 1.0)",
      textDecoration: "none"
    },
    "&:visited": {
      color: "rgba(21, 101, 192, 1.0)",
      textDecoration: "none"
    },
    "&:hover": {
      color: "rgba(18, 90, 182, 1.0)",
      textDecoration: "none"
    }
  }
});

// const classes = styles;

function ButtonSN(props) {
  return (
    <Grid container alignItems="center" style={{ padding: 10 }}>
      <Grid item xs={3} md={3}>
        <a href={props.link}>
          <img src={props.image} alt="" style={{ height: 36 }} />
        </a>
      </Grid>
      <Grid item xs={8} md={8}>
        <a href={props.link}>
          <Paper
            className={classes.paper}
            style={{
              background: props.bg,
              padding: 10,
              color: "rgb(255,255,255)",
              fontSize: "12px"
            }}
          >
            {props.text}
          </Paper>
        </a>
      </Grid>
    </Grid>
  );
}

export default function Socnets(props) {
  // const classes = styles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={4}>
        <ButtonSN
          image={props.facebook.image}
          bg={props.facebook.color}
          text={props.facebook.text}
          link={props.facebook.link}
        />
        <ButtonSN
          image={props.telegram.image}
          bg={props.telegram.color}
          text={props.telegram.text}
          link={props.telegram.link}
        />
        <ButtonSN
          image={props.viber.image}
          bg={props.viber.color}
          text={props.viber.text}
          link={props.viber.link}
        />
        <ButtonSN
          image={props.vk.image}
          bg={props.vk.color}
          text={props.vk.text}
          link={props.vk.link}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <h3>{props.head}</h3>
        <Button
          style={{
            background: "rgba(21,101,192,1.0)",
            color: "rgb(255,255,255)",
            padding: 10,
            width: "80%"
          }}
        >
          {props.message}
        </Button>
        <p>
          <a href={props.phone.a.link} className={classes.phone}>
            {props.phone.a.nomer}
          </a>
        </p>
        <p>
          <a href={props.phone.b.link} className={classes.phone}>
            {props.phone.b.nomer}
          </a>
        </p>
      </Grid>
    </Grid>
  );
}
