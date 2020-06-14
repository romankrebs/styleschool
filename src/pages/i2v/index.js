import React from "react";
import Helmet from "react-helmet";
import Top from "./top";
import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";
import Footer from "./footer";

export default function Imagemaker() {
  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "0 auto"
      }}
    >
      <Helmet>
        <title>Имиджмейкер. Второе высшее</title>
        <meta
          name="keywords"
          content="Школа стилистов имиджмейкеров: Имиджмейкер. Второе высшее"
        />
      </Helmet>
      <Top />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Footer />
    </div>
  );
}
