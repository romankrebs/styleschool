import React from "react";
import { fontNames, useStyle } from "./styles";

const InfoBlock = () => {
  const classes = useStyle();

  return (
    <div
      className={classes.infoBlock}
      style={{ fontFamily: fontNames.classic }}
    >
      Личный бренд — это ассоциация с вашим именем или с названием вашей
      компании. Это знак качества, позитивные эмоции и готовность вас
      рекомендовать. Личный бренд состоит из репутации и охвата: что о вас
      говорят и как часто. Благодаря сильному личному бренду вы сможете
      продавать больше и дороже, чем ваши конкуренты.
    </div>
  );
};

export default InfoBlock;
