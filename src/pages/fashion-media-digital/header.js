import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../../components/header-fullscreen";
import { datas } from "./date";

export default function Component() {
  return (
    <Header
      head1={
        <span>
          Fashion-журналистика
          <br />в цифровую эпоху
        </span>
      }
      descript={
        <p style={{ textAlign: "center" }}>
          Идея, текст, их визуализация, PR и продвижение... авторский курс
          практикум по стилистике и специфике создания актуальных материалов для
          индустрии моды
        </p>
      }
      background="url(/img/fashion-digital/fullscreen.jpg) center center/cover no-repeat"
      styles={{
        lineColor: "rgb(100,100,100)",
        bkgBlockColor: "rgba(255,255,255,0.8)",
        textColor: "rgb(50,50,50)"
      }}
      formsEducation=""
      bottomLine={<div style={{ height: "4em" }} />}
    />
  );
}
