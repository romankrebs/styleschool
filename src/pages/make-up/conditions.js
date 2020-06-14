import React from "react";

export default function Condition() {
  return(
    <div style={{
      border: "3px dashed rgb(220,220,220)",
      padding: 12,
    }}>
      <p style={{
        font: "400 1em 'Roboto'",
        color: "rgb(80,80,80)",
        textAlign: "justify",
        padding: 0,
        paddingBottom: 18,
        margin: 0,
      }}><b>Важно:</b> этот курс разработан для практикующих визажистов, которые заинтересованы в повышении квалификации и получении университетского диплома о профессиональной подготовке.</p>
      <p style={{
        font: "400 1em 'Roboto'",
        color: "rgb(80,80,80)",
        textAlign: "justify",
        padding: 0,
        margin: 0,
      }}>
      Для тех, кто только планирует связать себя с профессией визажиста, изучение данного курса должно быть дополнено практическим обучением в рекомендованных образовательных учреждениях.</p>
    </div>
  );
}