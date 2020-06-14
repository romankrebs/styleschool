import React from "react";
import Cot from "./cot";
import Targets from "./about-prof";
import Result from "./result";
import Practica from "./practica";
import ScrollableAnchor from "react-scrollable-anchor";

const ProgrammaTargets = props => {
  return (
    <div>
      <ScrollableAnchor id={"programma"}>
        <h2
          style={{
            fontFamily: props.font ? props.font.title : "inherit",
            fontSize: "1.8em",
            color: "rgb(80,80,80)",
            textAlign: "center",
            fontWeight: 500,
            margin: 8,
            padding: "12px 0"
          }}
        >
          Программа обучения
        </h2>
      </ScrollableAnchor>
      <Cot
        textButton="Программа: для кого, цели, результат"
        text={
          <div>
            <Targets />
            <Practica />
            <Result />
          </div>
        }
      />
    </div>
  );
};

export default ProgrammaTargets;
