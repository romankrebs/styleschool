import React from "react";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";
import { HorizontalForm } from "../../components/forms";

export default function F() {
  return (
    <div>
      <h2 style={styles.h2}>Записаться на собеседование</h2>
      <Grid container justify="center" alignItems="stretch">
        <Grid item xs={12} md={12}>
          <HorizontalForm />
        </Grid>
      </Grid>
    </div>
  );
}
