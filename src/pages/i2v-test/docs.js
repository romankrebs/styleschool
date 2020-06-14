import React from "react";
import Cot from "./cot";

const Docs = props => {
  return (
    <Cot
      textButton="Документы по окончании"
      text={<div>Текст документов</div>}
      colorButton="linear-gradient(to bottom, rgb(107,153,143) 0%, rgb(87,143,123) 20%, rgb(87,143,123) 80%, rgb(82,138,118) 100%)"
    />
  );
};

export default Docs;
