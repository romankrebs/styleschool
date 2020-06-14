import React from "react";
import { useStyle } from "./styles";
import List from "../../components/list";

const Result = () => {
  const classes = useStyle();

  return (
    <div className={classes.darkBlock}>
      Ваши результаты:
      <List
        arr={[
          "построите сильный личный бренд и бренд вашего бизнеса",
          "начнете отлично ориентироваться в digital-сфере",
          "узнаете, какие инструменты продвижения подходят именно вам",
          "обеспечите себе ежедневный прирост релевантной аудитории",
          "сможете продавать свою экспертизу и свои услуги через социальные сети",
          "научитесь создавать уникальный, интересный контент"
        ]}
      />
    </div>
  );
};

export default Result;
