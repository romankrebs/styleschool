import React from "react";
import { HorizontalForm } from "../../components/forms";

export default function F() {
  return (
    <div>
      <h2
        style={{
          fontFamily: "Roboto",
          fontSize: "2em",
          fontWeight: 700,
          textAlign: "center",
          color: "rgb(100,100,100)",
          padding: "50px 0 20px 0",
          margin: 0
        }}
      >
        Оставьте заявку или задайте вопрос
      </h2>
      <HorizontalForm />
    </div>
  );
}
