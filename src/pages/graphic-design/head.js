import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Button from "./button";
import { styles } from "./styles";

export default function Head(props) {
  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          background: props.fullscreen,
          margin: 0
        }}
      >
        <Grid
          item
          xs={10}
          md={8}
          style={{
            paddingTop: 40
          }}
        >
          <Paper
            style={{
              background: props.colorBlock,
              padding: "2em"
            }}
          >
            <h1 style={styles.h1}>{props.title}</h1>
            {props.heads.map((head, key) => (
              <h2 style={styles.h2head} key={key}>
                {head}
              </h2>
            ))}
            <div
              style={{
                height: 1,
                width: "50%",
                margin: "1rem 25%",
                backgroundColor: props.lineColor,
                textAlign: "center"
              }}
            />
            {props.descript}
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} style={{ padding: "1rem" }}>
          <Button text={props.buttonText} link={props.buttonLink} />
        </Grid>
      </Grid>
    </div>
  );
}
