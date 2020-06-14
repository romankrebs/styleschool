import React from "react";

function S(props) {
  return <span style={{ color: "rgb(123,143,87)" }}>{props.children}</span>;
}

export default function Short() {
  return (
    <p
      style={{
        fontSize: "1.2em",
        fontWeight: 700,
        color: "rgb(80,80,80)",
        textAlign: "center"
      }}
    >
      2 дня <S>∣</S> 16 академических часов <S>∣</S> 100% технологий для
      повышения продаж
    </p>
  );
}
