import React from "react";
import { HorizontalForm } from "../../components/forms";

export default function Forma() {
  return (
    <div>
      <h2
        style={{
          font: "500 1.8em 'Lora'",
          textAlign: "center",
          color: "rgb(80,80,80)",
          margin: 0,
          padding: 32
        }}
      >
        Заявка на обучение
      </h2>
      <HorizontalForm />
    </div>
  );
}
