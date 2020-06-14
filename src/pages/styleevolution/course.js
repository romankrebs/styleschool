import React from "react";

export default function Component(props) {
  return (
    <p
      style={{
        textAlign: "center",
        background: "rgba(246,226,159,1)",
        fontFamily: props.font ? props.font : "Futura-Normal",
        fontSize: "1.2em",
        padding: 20
      }}
    >
      Курс предназначен для стилистов, имиджейкеров, визажистов и парикмахеров,
      работающих со стилевыми предпочтениями клиентов, созданием и разработкой
      персонального образа/стиля.
    </p>
  );
}
