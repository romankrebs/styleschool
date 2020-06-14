import React from "react";
import { useStyle } from "./styles";

const Slogan = () => {
  const classes = useStyle();

  return (
    <div className={classes.slogan}>
      Вы отлично разбираетесь в красоте, моде и стиле?
      <br />
      Настало время освоить digital-инструменты для продвижения своей
      экспертизы.
    </div>
  );
};

export default Slogan;
