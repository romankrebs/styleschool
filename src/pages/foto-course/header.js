import React from "react";
//import Grid from "@material-ui/core/Grid";
//import Paper from "@material-ui/core/Paper";

import Header from "../../components/header-fullscreen";

export default function Component() {
  return (
    <Header
      head1={
        <span>
          Практика модной фотографии<br />Основы мастерства
        </span>
      }
      descript={""}
      background="url(/img/photocourse/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(255,255,255)",
        bkgBlockColor: "rgba(0,0,0,0.6)",
        textColor: "rgb(255,255,255)",
      }}
      formsEducation="{ Очно }"
      bottomLine={<p style={{ padding: 20 }}/>}
    />
  );
}
