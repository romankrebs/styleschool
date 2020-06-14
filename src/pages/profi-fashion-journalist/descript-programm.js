import React from "react";
import { Grid } from "@material-ui/core";

let style = {
  text: {
    // fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: 400,
    textAlign: "justify",
    color: "rgb(100,100,100)"
  },
  color: {
    fontStyle: "italic",
    color: "rgb(160,80,160)"
  },
  dotted: {
    width: "100%",
    border: 0,
    borderTop: "4px dotted rgb(220,220,220)",
    height: 0
  }
};

export default function Descript() {
  return (
    <div>
      <Grid container alignItems="flex-start" spacing={4}>
        <Grid item xs={12} md={6}>
          <p style={style.text}>
            Если{" "}
            <span style={style.color}>
              Вы уже являетесь практикующим журналистом и планируете повысить
              квалификацию
            </span>
            , Вы получите структурированные знания и обновляющиеся инструменты
            быстроменяющейся индустрии, а также подтвердите свою компетенцию
            дипломом с правом профессиональной деятельности в области модной
            журналистики.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <p style={style.text}>
            Если{" "}
            <span style={style.color}>
              Вы готовы начать карьеру в модной индустрии без начального
              практического опыта
            </span>
            , знайте, в данной программе собраны те образные и технологические
            инструменты и знания, которыми Вы обязаны владеть, если хотите
            называть себя в будущем профессионалом.
          </p>
        </Grid>
        <Grid item xs={12} md={12}>
          <div style={style.dotted} />
        </Grid>
      </Grid>
    </div>
  );
}
