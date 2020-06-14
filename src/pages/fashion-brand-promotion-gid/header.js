import React from "react";
// import Header from "../../components/header-fullscreen";
import Header from "../../components/fullscreen";

export default function Head() {
  return (
    <Header
      head="Руководство по продвижению модного бренда на глобальном рынке"
      descript={false}
      background="url(/img/fashion-brand-promotion-gid/fullscreen.jpg)"
      colorText="white"
      colorBkg="rgba(39,40,57,0.65)"
      formsEducation="Очно | Online"
      styleHead={{ fontSize: "1.8em" }}
    />
  );
}
