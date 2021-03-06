import React from "react";
import { Grid } from "@material-ui/core";
import InfoBlock from "./info-block";

export default function Tesisses(props) {
  return (
    <div>
      <Grid container spacing={2}>
        {props.tesises.map((d, i) => (
          <Grid item xs={12} md={4}>
            <InfoBlock text={d} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
