import React from "react";
import Grid from "@material-ui/core/Grid";
import Paragraph from "../../components/text-image";
import { styles } from "./styles";

export default function Teacher(props) {
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} md={12}>
        <h2 style={styles.h2}>Автор курса</h2>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container alignItems="stretch">
          <Grid item xs={12} md={7}>
            <h3 style={styles.h3}>{props.content.title}</h3>
            {props.content.text}
          </Grid>
          <Grid item xs={12} md={5} style={{ textAlign: "center" }}>
            <img
              src={props.content.image}
              alt={props.content.title}
              style={{
                borderRadius: "50% 50%",
                height: "15em",
                width: "auto"
              }}
            />
          </Grid>
        </Grid>
        {/* <Paragraph
          image={{
            src: props.content.image, 
            altText: props.content.title,
            style: {
              borderRadius: "50% 50%",
              height: "15em",
              width: "auto"
            },
            align: "center"
          }}
          text={{
            content: props.content.text
          }}
          orient="right"
          head={props.content.title}
          size={{
            left: 6,
            right: 6
          }}
          link={props.content.link}
          styleHead={styles.h2}
        /> */}
      </Grid>
    </Grid>
  );
}
