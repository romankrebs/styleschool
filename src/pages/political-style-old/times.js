import React from "react";

function S() {
  return (
    <span
      style={{
        color: "rgb(123,143,87)",
        fontSize: "1.4em",
        fontFamily: "Roboto",
        fontWeight: 700
      }}
    >
      {" "}
      |{" "}
    </span>
  );
}

export default function Times() {
  return (
    <div
      style={{
        fontFamily: "Roboto",
        fontSize: "1.4em",
        fontWeight: 700,
        color: "rgb(100,100,100)",
        textAlign: "center",
        paddingTop: 32,
      }}
    >
      3 месяца<S />20 занятия<S />60 академических часов<S />50% теории<S />50% практики
    </div>
  );
}
