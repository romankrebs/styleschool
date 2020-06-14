import React from "react";

import InfoBlock from "../../components/infoblock";

export default function InfoBlockComponent() {
  const content = {
    head: "Наýчитесь",
    a: {
      block: "Культуре письменной и устной речи",
      image: "/img/check.svg"
    },
    b: {
      block: "Управлять своей мыслью и словом",
      image: "/img/check.svg"
    },
    c: {
      block: "Развивать искусство самовыражения",
      image: "/img/check.svg"
    },
    background: "rgba(255,255,255,1.0)",
    style: { fontSize: "1.1em", padding: 20 },
    headStyle: {
      fontFamily: "Roboto",
      fontSize: "2.0em",
      padding: 0,
      margin: 0,
      textAlign: "center"
    }
  };
  return (
    <InfoBlock
      head={content.head}
      a={{
        block: content.a.block,
        text: content.a.text,
        image: content.a.image
      }}
      b={{
        block: content.b.block,
        text: content.b.text,
        image: content.b.image
      }}
      c={{
        block: content.c.block,
        text: content.c.text,
        image: content.c.image
      }}
      style={content.style}
      headStyle={content.headStyle}
      bg={content.background}
    />
  );
}
