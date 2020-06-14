import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function ProffEdu(props) {
  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      style={{ paddingBottom: 40 }}
    >
      <Grid item xs={12} md={12}>
        <ScrollableAnchor id={props.link}>
          <h2
            style={{
              fontFamily: "Lora",
              fontSize: "1.8em",
              color: "rgb(100,100,100)",
              textAlign: "center",
              fontWeight: 500,
              margin: 8,
              padding: "12px 0",
              ...props.styleHead
            }}
          >
            {props.head}
          </h2>
        </ScrollableAnchor>
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 20 }}>
        {props.text}
        <Grid container>
          <Grid item xs={5} md={4}>
            <img src={props.partners.image} alt="" style={{ height: 32 }} />
          </Grid>
          <Grid
            item
            xs={7}
            md={8}
            style={{
              textAlign: "left",
              paddingBottom: 30,
              font: "400 0.9em",
              color: "rgb(100,100,100)"
            }}
          >
            {props.partners.name}
          </Grid>
        </Grid>
        <Paper
          style={{
            background: "rgba(245,223,223,1.0)",
            padding: 8,
            font: "400 0.9em",
            color: "rgb(100,100,100)"
          }}
        >
          {props.message}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: 15 }}>
        <img src={props.diplom} style={{ width: "100%" }} alt="Диплом" />
      </Grid>
    </Grid>
  );
}
