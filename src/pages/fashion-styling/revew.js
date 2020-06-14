import React from "react";
import { Grid } from "@material-ui/core";
// import { styles } from "./styles";

function Revew(props) {
  return (
    <div style={{ padding: "2rem 0" }}>
      <Grid container alignItems="stretch" spacing={2}>
        <Grid item xs={12} md={props.left ? 5 : 7}>
          {props.left ? (
            <div
              style={{
                textAlign: "center",
                position: "sticky",
                top: 0
              }}
            >
              <img
                src={props.image}
                style={{ maxWidth: "100%" }}
                alt={props.altImage}
              />
              {props.imageComment ? <div>{props.imageComment}</div> : null}
            </div>
          ) : (
            props.text
          )}
        </Grid>
        <Grid item xs={12} md={props.left ? 7 : 5}>
          {props.left ? (
            props.text
          ) : (
            <div
              style={{
                textAlign: "center",
                position: "sticky",
                top: 0
              }}
            >
              <img
                src={props.image}
                style={{ maxWidth: "100%" }}
                alt={props.altImage}
              />
              {props.imageComment ? <div>{props.imageComment}</div> : null}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Revew;
