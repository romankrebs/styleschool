import React from "react";
import Graduates from "./graduates-about";
import Teachers from "./teachers-about";

const AboutEducation = props => {
  return (
    <div>
      <h2
        style={{
          fontFamily: props.font ? props.font.title : "inferit",
          fontSize: "1.8em",
          fontWeight: 500,
          color: "rgb(100,0,0)",
          textAlign: "center"
        }}
      >
        Про обучение
      </h2>
      <Teachers font={props.font} />
      <Graduates font={props.font} />
    </div>
  );
};

export default AboutEducation;
