import React from "react";
import Grid from "@material-ui/core/Grid";
import { HorizontalForm } from "../../components/forms";
import styles from "./style";

export default function Callback(props) {
  return (
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={12}>
        <h2 style={styles.h2}>Записаться на собеседование</h2>
        <HorizontalForm />
      </Grid>
    </Grid>
  );
}
