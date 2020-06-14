import React from "react";

import Header from "../../components/header-fullscreen";

export default function Head() {
  return (
    <Header
      head1={<span>Клуб выпускников</span>}
      headStyle={{ textShadow: "1px 1px 5px rgba(0,0,0,0.8)" }}
      descript={
        <p
          style={{
            textAlign: "center",
            padding: 5,
            margin: 0,
            textShadow: "1px 1px 5px rgba(0,0,0,1)"
          }}
        >
          Общение и мероприятия. Практика тренингов. Карьера и продвижение.
        </p>
      }
      background="url(/img/club/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(180,180,180,0.5)",
        textColor: "rgb(255,255,255)"
      }}
      formsEducation="{ очно | on-line }"
      styleFormsEducation={{ textShadow: "1px 1px 5px rgba(0,0,0,1)" }}
      bottomLine={<div style={{ height: 48 }} />}
    />
  );
}
