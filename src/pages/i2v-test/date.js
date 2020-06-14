import React from "react";
import { Paper } from "@material-ui/core";

const Dates = props => {
  return (
    <div style={{ padding: "12px 0" }}>
      <Paper
        style={{
          padding: 12,
          backgroundColor: props.bkg ? props.bkg : "transparent"
        }}
      >
        <div
          style={{
            fontFamily: props.font ? props.font.title : "inherit",
            fontSize: props.font ? props.font.size : "1em",
            fontWeight: 700,
            textAlign: "center",
            margin: 0,
            padding: 0,
            color: props.titleColor ? props.titleColor : "rgb(100,100,100)",
            ...props.titleStyle
          }}
        >
          <span
            style={{
              color: "rgb(160,60,60)"
            }}
          >
            {props.date}
          </span>
          {props.title}
        </div>
        <div
          style={{
            fontFamily: props.font ? props.font.text : "inherit",
            fontSize: props.font ? props.font.size : "1em",
            fontWeight: 400,
            textAlign: "left",
            margin: 0,
            padding: 0,
            color: props.textColor ? props.textColor : "rgb(100,100,100)",
            ...props.textStyle
          }}
        >
          <span
            style={{
              fontWeight: 700
            }}
          >
            {props.subtitle}
          </span>
          &ensp;
          {props.text}
        </div>
        <div
          style={{
            fontFamily: props.font ? props.font.text : "inherit",
            fontSize: props.font ? props.font.size : "1em",
            fontWeight: 400,
            textAlign: "center",
            margin: 0,
            padding: 0,
            color: "rgb(140,100,100)",
            ...props.saleStyle
          }}
        >
          {props.sale}
        </div>
      </Paper>
    </div>
  );
};

export default Dates;
