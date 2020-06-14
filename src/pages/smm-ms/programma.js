import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Paper } from "@material-ui/core";
import List from "../../components/list";
import Expand from "../../components/expanded";
import { styles } from "./styles";

export default function Contents(props) {
  return (
    <div>
      <ScrollableAnchor id="programma">
        <h2 style={styles.h2}>Содержание курса</h2>
      </ScrollableAnchor>
      <div style={{ padding: 16, textAlign: "left" }}>
        {props.list ? (
          <Paper
            style={{
              background: "rgba(250, 250, 250, 1)",
              padding: "1em"
            }}
          >
            <List
              arr={props.content}
              style={{
                color: "rgb(100,100,100)",
                paddingBottom: "0.5em"
              }}
            />
          </Paper>
        ) : (
          props.content.map((el, i) => (
            <Expand
              summary={{
                text: el.title,
                style: {
                  color: "rgb(100,100,100)",
                  fontWeight: 600,
                  background: "rgb(245,245,245)"
                }
              }}
              details={{
                text: el.list,
                style: {
                  color: "rgb(100,100,100)",
                  fontWeight: 400
                }
              }}
              key={i}
              expand={true}
            />
          ))
        )}
        {props.total ? <p>{props.total}</p> : null}
      </div>
    </div>
  );
}
