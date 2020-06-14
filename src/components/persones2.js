import React from "react";
import { Grid, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";

function Tile(props) {
  return (
    <div style={{ padding: 10 }}>
      <Tooltip
        disableFocusListener
        disableTouchListener
        title={props.descript}
        placement="top"
      >
        <div
          style={{
            height: "auto",
            boxSizing: "border-box",
            borderRadius: 4,
            display: "inline-block"
          }}
        >
          <img
            src={props.image}
            alt=""
            style={{ height: 300, borderRadius: 4 }}
          />
          <p
            style={{
              background: "rgba(0,0,0,0.6)",
              boxSizing: "border-box",
              color: "rgb(255,255,255)",
              // fontFamily: "Roboto",
              fontSize: 12,
              textAlign: "center",
              height: 32,
              margin: 0,
              padding: "6px 0",
              position: "relative",
              bottom: 36,
              borderRadius: "0 0 4px 4px",
              ...props.style
            }}
          >
            {props.name}
          </p>
        </div>
      </Tooltip>
    </div>
  );
}

export default function Persones(props) {
  return (
    <Grid container justify="space-between" alignItems="flex-start" spacing={3}>
      {props.teachers.map((a, i) => (
        <Grid>
          {a.link === "" ? (
            <Tile
              name={a.name}
              descript={a.descript}
              image={a.image}
              key={i}
              style={props.style}
            />
          ) : (
            <Link to={a.link}>
              <Tile
                name={a.name}
                descript={a.descript}
                image={a.image}
                key={i}
                style={props.style}
              />
            </Link>
          )}
        </Grid>
      ))}
    </Grid>
  );
}
