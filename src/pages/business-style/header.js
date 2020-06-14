import React from "react";
import Header from "../../components/fullscreen";

export default function Head(props) {
  return (
    <Header
      head="Деловой стиль как коммуникация"
      descript={
        <span>
          <br />
          Есть негласные правила и внутренние установки…
        </span>
      }
      background="url(/img/business-style/fullscreen.jpg)"
      colorText="white"
      colorBkg="rgba(80,80,100,0.8)"
      formsEducation={false}
    />
  );
}
