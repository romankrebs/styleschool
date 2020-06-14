import React from "react";
import { HorizontalForm } from "../../components/forms";

export default function Component() {
  return (
    <div>
      <div
        style={{
          fontFamily: "Roboto",
          fontSize: "1.8em",
          textAlign: "center",
          color: "rgb(100,100,100)"
        }}
      >
        Оставьте заявку или задайте вопрос
      </div>
      <HorizontalForm />
    </div>
  );
}
