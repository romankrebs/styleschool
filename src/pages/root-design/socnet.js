import React from "react";
import Vk from "../../components/button-vk";
import Facebook from "../../components/button-facebook";
import Instagram from "../../components/button-instagram";
import Youtube from "../../components/button-youtube";

const Socnet = function(props) {
  return (
    <span style={{ marginBottom: -4 }}>
      <Vk />
      <Facebook />
      <Instagram />
      &ensp;
      <Youtube />
    </span>
  );
};

export default Socnet;
