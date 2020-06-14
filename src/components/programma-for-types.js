import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./styles-for-types";
import Expanded from "./expanded";
import ScrollableAnchor from "react-scrollable-anchor";

export default function Contents(props) {
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={1}>
      <Grid item xs={12} md={12}>
        <h2 style={props.garamond ? styles.h2garamond : styles.h2}>
          {props.title ? props.title : "Программа курса"}
        </h2>
      </Grid>
      <Grid item xs={12} md={12}>
        {props.content.map((d, i) => (
          <React.Fragment>
            {d.link ? (
              <ScrollableAnchor id={d.link}>
                <div />
              </ScrollableAnchor>
            ) : null}
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
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
}
