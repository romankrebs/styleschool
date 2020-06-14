import React from "react";
import { styles } from "./styles";

function Block(props) {
  return (
    <div>
      {props.title ? <h2 style={styles.h2}>{props.title}</h2> : null}
      {props.content}
    </div>
  );
}

export default Block;
