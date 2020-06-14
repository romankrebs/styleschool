import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./style";
import Expanded from "../../components/expanded";

export default function Contents(props) {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={1}>
      <Grid item xs={12} md={12}>
        <h2 style={styles.h2}>Программа курса</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        {props.content.map((d, i) => (
          <Expanded
            summary={{
              text: i + 1 + ". " + d.head,
              style: styles.expandHead
            }}
            details={{
              text: <div style={{ padding: "1em 0" }}>{d.text}</div>,
              style: styles.expandText
            }}
            expand
          />
        ))}
      </Grid>
    </Grid>
  );
}
