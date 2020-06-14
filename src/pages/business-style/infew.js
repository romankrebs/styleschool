import React from "react";
import { styles } from "./styles";

function S(props) {
  return <span style={{ color: "rgb(255,125,0)" }}> | </span>;
}

export default function InFew(props) {
  return (
    <h3 style={{ ...styles.h3, textAlign: "center" }}>
      8 занятий
      <S />
      24 акад. ч.
      <S />
      online
    </h3>
  );
}
